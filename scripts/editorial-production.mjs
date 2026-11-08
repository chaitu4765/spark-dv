import {chromium,expect} from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromium.launch({channel:'chromium'}),errors=[],results=[];
const base='http://127.0.0.1:4173';
for(const [route,reduced] of [['/',false],['/science',false],['/science',true]]){
 const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:reduced?'reduce':'no-preference'});const page=await context.newPage();let scenes=[];page.on('request',r=>{if(/scene-canvas.*\.js/.test(r.url()))scenes.push(r.url());});page.on('pageerror',e=>errors.push(e.message));await page.goto(base+route,{waitUntil:'networkidle'});
 if(route==='/'){await expect(page.getByTestId('landing-reveal')).toHaveCount(0,{timeout:8000});if(scenes.length)throw Error('Homepage loaded Three.js');}
 else if(reduced){await expect(page.locator('.scene-static img')).toBeVisible();if(scenes.length)throw Error('Reduced motion loaded Three.js');}
 else {await expect(page.locator('[data-renderer="webgl"]')).toBeVisible();if(scenes.length!==1)throw Error('Expected one lazy 3D chunk');await page.getByRole('navigation',{name:'Main navigation'}).getByRole('link',{name:'For Parents',exact:true}).click();await expect(page.locator('[data-scene="parents"][data-renderer="webgl"]')).toBeVisible();await expect(page.locator('canvas')).toHaveCount(1);}
 results.push({route,reduced,sceneChunks:scenes.length});await context.close();
}
const review=await browser.newPage();await review.goto('http://localhost:5173/audit/editorial-comparison.html');await review.locator('#page').selectOption('parents');await review.locator('#viewport').selectOption('mobile');await expect(review.locator('#implementation')).toHaveAttribute('src','screenshots/editorial-parents-mobile.png');await expect(review.locator('#reference')).toHaveJSProperty('complete',true);results.push({comparisonGallery:true});
await fs.writeFile('audit/editorial-production.json',JSON.stringify({results,errors},null,2));console.log({results,errors});await browser.close();if(errors.length)process.exitCode=1;
