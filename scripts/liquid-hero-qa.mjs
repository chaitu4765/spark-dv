import {chromium,expect} from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromium.launch({channel:'chromium'}),errors=[],results=[];
const page=await browser.newPage({viewport:{width:1440,height:1000}});
page.on('pageerror',e=>errors.push(e.message));
async function home(p=page){
  await p.goto('http://localhost:5173/',{waitUntil:'networkidle'});
  await p.waitForTimeout(500);
  if(await p.getByTestId('landing-reveal').isVisible())await p.getByRole('button',{name:'Enter SPARK-DV'}).click();
  await expect(p.getByTestId('landing-reveal')).toHaveCount(0,{timeout:6000});
}
try {
  await home();
  await expect(page.getByRole('heading',{level:1})).toHaveText('Small details.Brighter futures.');
  const lines=page.locator('.liquid-text');
  await expect(lines.locator('canvas')).toHaveCount(2);
  for(const line of await lines.all())await expect(line).toHaveAttribute('data-liquid-state','ready');
  await page.screenshot({path:'audit/screenshots/liquid-hero-desktop.png'});
  const line=lines.last(),r=await line.boundingBox();
  const still=await line.screenshot();
  await page.mouse.move(r.x+r.width*.26,r.y+r.height*.55);
  await page.mouse.move(r.x+r.width*.59,r.y+r.height*.25,{steps:35});
  await page.waitForTimeout(120);
  const active=await line.screenshot();
  if(still.equals(active))throw Error('Liquid pixels did not change on pointer movement');
  await page.screenshot({path:'audit/screenshots/liquid-hero-active.png'});
  await page.mouse.move(720,800);await page.waitForTimeout(3700);
  const settled=await line.screenshot();await page.waitForTimeout(500);
  if(!settled.equals(await line.screenshot()))throw Error('Liquid animation did not settle');
  results.push('Both headline lines render; pointer interaction changes ink and returns to a stable frame');

  // Real GPU context loss must reveal the DOM headline, then recover the shader.
  await line.locator('canvas').evaluate(c=>{window.liquidLostContext=c.getContext('webgl2').getExtension('WEBGL_lose_context');window.liquidLostContext.loseContext();});
  await expect(line).toHaveAttribute('data-liquid-state','fallback');
  await expect(line.locator('.liquid-text-fallback')).toHaveCSS('opacity','1');
  await page.evaluate(()=>window.liquidLostContext.restoreContext());
  await expect(line).toHaveAttribute('data-liquid-state','ready');
  results.push('WebGL context loss exposes readable text and context restoration recovers the effect');

  for(const width of [1024,768,390,320]){
    await page.setViewportSize({width,height:844});await page.waitForTimeout(500);
    if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Overflow at '+width);
    for(const l of await lines.all())await expect(l).toHaveAttribute('data-liquid-state','ready');
    await page.screenshot({path:`audit/screenshots/liquid-hero-${width}.png`});
  }
  await page.setViewportSize({width:390,height:844});await page.waitForTimeout(400);
  await page.screenshot({path:'audit/screenshots/liquid-hero-mobile.png'});
  const mobile=await browser.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
  const touch=await mobile.newPage();touch.on('pageerror',e=>errors.push(e.message));await home(touch);
  const cdp=await mobile.newCDPSession(touch),tr=await touch.locator('.liquid-text').last().boundingBox();
  await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:190,y:tr.y+tr.height*.6}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:190,y:tr.y-70}]});
  await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});
  await touch.waitForTimeout(700);
  if(await touch.evaluate(()=>scrollY)<30)throw Error('Touch scrolling blocked by headline');
  await mobile.close();results.push('Layouts fit 320–1440px; native touch scrolling through the headline works');

  await page.emulateMedia({reducedMotion:'reduce'});
  await expect(lines.locator('canvas')).toHaveCount(0);
  for(const l of await lines.all())await expect(l.locator('.liquid-text-fallback')).toHaveCSS('opacity','1');
  await page.emulateMedia({reducedMotion:'no-preference'});
  for(const l of await lines.all())await expect(l).toHaveAttribute('data-liquid-state','ready');
  results.push('Changing reduced-motion preferences uses static text and restores animation when re-enabled');

  const unsupported=await browser.newContext({viewport:{width:390,height:844}});
  await unsupported.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){if(type==='webgl2')return null;return original.call(this,type,...args);};});
  const fallback=await unsupported.newPage();fallback.on('pageerror',e=>errors.push(e.message));await home(fallback);
  await expect(fallback.locator('.liquid-text canvas')).toHaveCount(0);
  for(const l of await fallback.locator('.liquid-text').all())await expect(l.locator('.liquid-text-fallback')).toHaveCSS('opacity','1');
  await fallback.screenshot({path:'audit/screenshots/liquid-hero-fallback.png'});await unsupported.close();
  results.push('Browsers without WebGL2 show the complete headline');
  await page.goto('http://localhost:5173/science',{waitUntil:'networkidle'});await expect(page.locator('.liquid-text')).toHaveCount(0);
  results.push('Effect is exclusive to the homepage');
  console.log({results,errors});
  await fs.writeFile('audit/liquid-hero-qa.json',JSON.stringify({results,errors},null,2));
  if(errors.length)process.exitCode=1;
} finally {await browser.close();}
