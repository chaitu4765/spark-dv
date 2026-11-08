import {chromium,expect} from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromium.launch({channel:'chromium'});
const page=await browser.newPage({viewport:{width:1440,height:1100},deviceScaleFactor:1});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
await fs.mkdir('public/assets/scenes',{recursive:true});
for(const [path,kind] of [['science','science'],['dentists','dentists'],['parents','parents'],['school-program','school'],['about','about']]){
 await page.goto('http://localhost:5173/'+path,{waitUntil:'networkidle'});
 await expect(page.locator('[data-renderer="webgl"]')).toBeVisible({timeout:30000});
 await page.locator('.scene-chapters button').nth(2).click();
 await page.waitForTimeout(1500);
 await page.locator('.scene-canvas canvas').screenshot({path:`public/assets/scenes/${kind}.png`});
 await page.screenshot({path:`audit/screenshots/editorial-${kind}-desktop.png`});
 console.log({path,canvas:await page.locator('.scene-canvas canvas').count(),errors});
}
await browser.close();
