import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromium.launch({channel:'chromium'});
const page=await browser.newPage({viewport:{width:1440,height:1000}});
const notes=[];
await page.goto('https://press.stripe.com/',{waitUntil:'domcontentloaded'});
await page.waitForTimeout(3500);
async function record(label){
 await page.screenshot({path:`audit/screenshots/stripe-${label}.png`});
 notes.push({label,...await page.evaluate(()=>({url:location.href,scroll:scrollY,canvas:[...document.querySelectorAll('canvas')].map(e=>({class:e.className,width:e.width,height:e.height})),transforms:[...document.querySelectorAll('body *')].map(e=>({tag:e.tagName,class:e.className,transform:getComputedStyle(e).transform,perspective:getComputedStyle(e).perspective,position:getComputedStyle(e).position})).filter(e=>e.transform!=='none'||e.perspective!=='none'||e.position==='sticky').slice(0,70),links:[...document.querySelectorAll('a[href]')].slice(0,15).map(e=>({text:e.textContent.trim().slice(0,70),href:e.href})),animations:document.getAnimations().map(a=>({state:a.playState,frames:a.effect?.getKeyframes().slice(0,2)})).slice(0,10)}))});
}
await record('desktop');
await page.mouse.move(1000,440);await page.waitForTimeout(600);await record('hover');
for(let i=0;i<3;i++){await page.mouse.wheel(0,650);await page.waitForTimeout(900);await record('scroll-'+i);}
await page.goto('https://press.stripe.com/the-art-of-doing-science-and-engineering',{waitUntil:'domcontentloaded'});await page.waitForTimeout(2200);await record('book');
await page.setViewportSize({width:390,height:844});await page.goto('https://press.stripe.com/',{waitUntil:'domcontentloaded'});await page.waitForTimeout(2200);await record('mobile');
await fs.writeFile('audit/stripe-reference.json',JSON.stringify(notes,null,2));
console.log(notes.map(n=>({label:n.label,url:n.url,canvas:n.canvas,transforms:n.transforms.slice(0,5)})));
await browser.close();
