import {chromium} from '@playwright/test';import fs from 'node:fs/promises';
const b=await chromium.launch({channel:'chromium'});const p=await b.newPage({viewport:{width:1440,height:1000}});
await p.goto('https://non-linear.studio/work/cleer');await p.waitForTimeout(3500);
const imgs=await p.locator('img').evaluateAll(es=>es.map(e=>e.outerHTML));await fs.writeFile('audit/cleer-image-elements.json',JSON.stringify(imgs,null,2));
for(let i=0;i<18;i++){await p.mouse.wheel(0,700);await p.waitForTimeout(700);if([2,5,9,13].includes(i))await p.screenshot({path:`audit/screenshots/cleer-scroll-${i}.png`});}
await p.screenshot({path:'audit/screenshots/cleer-loaded-full.png',fullPage:true});
await fs.writeFile('audit/cleer-interactions.json',JSON.stringify(await p.evaluate(()=>({scroll:scrollY,height:document.body.scrollHeight,images:[...document.images].map(i=>({html:i.outerHTML,width:i.naturalWidth})),animations:document.getAnimations().map(a=>({state:a.playState}))})),null,2));await b.close();
