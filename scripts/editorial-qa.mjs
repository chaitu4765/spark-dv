import {chromium,expect} from '@playwright/test';
import fs from 'node:fs/promises';
import crypto from 'node:crypto';
const base=process.env.QA_BASE || 'http://localhost:5173';
const b=await chromium.launch({channel:'chromium'});
const context=await b.newContext({viewport:{width:1440,height:1100}});
await context.addInitScript(()=>{
 window.__sceneDraws=0;
 for(const proto of [WebGLRenderingContext.prototype,WebGL2RenderingContext.prototype])for(const key of ['drawArrays','drawElements']){
  const original=proto[key];proto[key]=function(...args){window.__sceneDraws++;return original.apply(this,args);};
 }
});
const p=await context.newPage(),errors=[],results=[];p.on('pageerror',e=>errors.push(e.message));
const hash=async()=>crypto.createHash('sha256').update(await p.locator('.scene-canvas canvas').screenshot()).digest('hex');
const routes=[['science','science'],['dentists','dentists'],['parents','parents'],['school-program','school'],['about','about']];
for(const [path,kind] of routes){
 await p.goto(base+'/'+path,{waitUntil:'networkidle'});
 await expect(p.locator('[data-renderer="webgl"]')).toBeVisible();
 await expect(p.locator('h1')).toHaveCount(1);
 await p.locator('.scene-chapters button').nth(0).click();await p.waitForTimeout(1700);const initial=await hash();
 await p.locator('.scene-chapters button').nth(2).click();await p.waitForTimeout(1700);const assembled=await hash();
 if(initial===assembled)throw Error(path+' assembly did not change pixels');
 await p.screenshot({path:`audit/screenshots/editorial-${kind}-desktop.png`});
 await p.getByRole('button',{name:'Rotate scene right'}).focus();await p.keyboard.press('Enter');await p.waitForTimeout(1000);
 if(await hash()===assembled)throw Error(path+' keyboard rotation did not change pixels');
 await p.getByRole('button',{name:'Reset scene'}).click();await p.waitForTimeout(1700);
 const box=await p.locator('.scene-canvas').boundingBox();await p.mouse.move(box.x+box.width*.45,box.y+box.height*.5);await p.mouse.down();await p.mouse.move(box.x+box.width*.7,box.y+box.height*.5,{steps:12});await p.mouse.up();await p.mouse.move(20,110);await p.waitForTimeout(1700);
 const start=await p.evaluate(()=>window.__sceneDraws);await p.waitForTimeout(600);const idle=await p.evaluate(()=>window.__sceneDraws);
 if(idle!==start)throw Error(path+' renders continuously at idle '+(idle-start));
 await p.evaluate(()=>scrollTo(0,document.body.scrollHeight));await p.waitForTimeout(800);const off=await p.evaluate(()=>window.__sceneDraws);await p.waitForTimeout(500);
 if(off!==await p.evaluate(()=>window.__sceneDraws))throw Error(path+' renders offscreen');
 if(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error(path+' horizontal overflow');
 results.push({path,assembly:true,keyboard:true,drag:true,idleDraws:idle-start,offscreenPaused:true});console.log(path+' desktop passed');
}
await p.goto(base+'/dentists');await p.getByText('NSF Toothpaste Usage',{exact:true}).click();await expect(p.getByText('Step 1: Baseline Assessment',{exact:false})).toBeVisible();
await p.goto(base+'/about');await expect(p.locator('.source-article img[alt*="Ajay"]')).toHaveCount(1);
await p.goto(base+'/school-program');if(!await p.locator('.source-article img').count())throw Error('Original school photography missing');
// Scroll changes the selected chapter in automatic mode.
await p.goto(base+'/science');await p.waitForTimeout(900);await p.evaluate(()=>scrollTo(0,0));await p.getByRole('button',{name:'Reset scene'}).click();await p.evaluate(()=>scrollTo(0,680));await p.waitForTimeout(1200);await expect(p.locator('.scene-chapters button').nth(2)).toHaveAttribute('aria-pressed','true');
await p.locator('.scene-canvas canvas').evaluate(c=>c.dispatchEvent(new Event('webglcontextlost')));await expect(p.locator('[data-renderer="static"]')).toBeVisible();await expect(p.locator('.scene-canvas')).toHaveCount(0);results.push({contextLossFallback:true,originalPhotos:true,protocolAccordion:true,scrollSync:true});
// Actual mobile touch input, in addition to narrow viewport screenshots.
const mobile=await b.newContext({viewport:{width:390,height:844},isMobile:true,hasTouch:true,deviceScaleFactor:1});const m=await mobile.newPage();m.on('pageerror',e=>errors.push(e.message));
for(const [path,kind] of routes){
 await m.goto(base+'/'+path,{waitUntil:'networkidle'});await expect(m.locator('[data-renderer="webgl"]')).toBeVisible();await m.locator('.editorial-visual').scrollIntoViewIfNeeded();await m.waitForTimeout(1000);
 await m.locator('.editorial-experience').screenshot({path:`audit/screenshots/editorial-${kind}-mobile.png`});
 if(await m.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error(path+' mobile overflow');
 const rect=await m.locator('.scene-canvas').boundingBox(),cdp=await mobile.newCDPSession(m);const before=await m.locator('.scene-canvas canvas').screenshot();
 const x=rect.x+rect.width*.35,y=Math.max(rect.y+rect.height*.4,140);
 await cdp.send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x,y}]});
 for(let i=1;i<=8;i++)await cdp.send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:x+i*10,y}]});
 await cdp.send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await m.waitForTimeout(800);const after=await m.locator('.scene-canvas canvas').screenshot();
 if(before.equals(after))throw Error(path+' touch drag did not change scene');await cdp.detach();
 results.push({path,mobile:true,touch:true});console.log(path+' mobile passed');
}
await mobile.close();
const reduced=await b.newContext({reducedMotion:'reduce',viewport:{width:390,height:844}});const r=await reduced.newPage();let heavyRequests=[];r.on('request',q=>{if(/scene-canvas|react-three|three\.module/.test(q.url()))heavyRequests.push(q.url());});
for(const [path,kind] of routes){await r.goto(base+'/'+path);await expect(r.locator('.scene-static img')).toBeVisible();await expect(r.locator('.scene-canvas')).toHaveCount(0);await r.locator('.scene-chapters button').nth(1).click();await expect(r.locator('.scene-chapters button').nth(1)).toHaveAttribute('aria-pressed','true');}
if(heavyRequests.length)throw Error('Reduced motion downloaded WebGL runtime');
await r.locator('.editorial-experience').screenshot({path:'audit/screenshots/editorial-reduced-motion.png'});await reduced.close();
const noGL=await b.newContext();await noGL.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){return /webgl/.test(type)?null:original.call(this,type,...args);};});const f=await noGL.newPage();await f.goto(base+'/science');await expect(f.locator('[data-renderer="static"]')).toBeVisible();await expect(f.locator('.scene-canvas')).toHaveCount(0);await expect(f.locator('.scene-static img')).toBeVisible();await noGL.close();
results.push({reducedMotion:true,reducedMotionHeavyRequests:heavyRequests.length,noWebGLFallback:true});
await fs.writeFile('audit/editorial-qa.json',JSON.stringify({results,errors},null,2));console.log({results,errors});await b.close();if(errors.length)process.exitCode=1;
