import { chromium } from '@playwright/test';
import fs from 'node:fs/promises';
await fs.mkdir('audit/screenshots',{recursive:true});
const browser=await chromium.launch({channel:'chromium'});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
for(const [name,url] of [['cleer','https://non-linear.studio/work/cleer'],['original','https://sparkdv.com'],['before','http://127.0.0.1:5173']]){
 await page.goto(url,{waitUntil:'networkidle',timeout:60000}).catch(()=>{});
 await page.waitForTimeout(1800);
 await page.screenshot({path:`audit/screenshots/${name}-desktop.png`});
 const states=[];
 for(let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=850){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(300);states.push(await page.evaluate(()=>({y:scrollY,animations:document.getAnimations().map(a=>({name:a.animationName,state:a.playState})),header:document.querySelector('header')?.getBoundingClientRect().toJSON()})));}
 await page.screenshot({path:`audit/screenshots/${name}-full.png`,fullPage:true});
 const data=await page.evaluate(()=>({text:document.body.innerText,images:[...document.images].map(i=>({src:i.currentSrc,alt:i.alt,width:i.naturalWidth,height:i.naturalHeight})),videos:[...document.querySelectorAll('video')].map(v=>({src:v.currentSrc,poster:v.poster})),links:[...document.querySelectorAll('a')].map(a=>({text:a.innerText,href:a.href})),buttons:[...document.querySelectorAll('button')].map(b=>b.innerText)}));
 await fs.writeFile(`audit/${name}-browser.json`,JSON.stringify({...data,states},null,2));
 await page.setViewportSize({width:390,height:844});await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(500);await page.screenshot({path:`audit/screenshots/${name}-mobile.png`,fullPage:true});await page.setViewportSize({width:1440,height:1000});
 console.log(name,data.images.length,data.videos);
}
await browser.close();
