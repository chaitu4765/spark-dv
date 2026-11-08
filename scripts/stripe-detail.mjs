import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const b=await chromium.launch({channel:'chromium'}),p=await b.newPage({viewport:{width:1440,height:1000}});
await p.goto('https://press.stripe.com/the-art-of-doing-science-and-engineering',{waitUntil:'domcontentloaded'});await p.waitForTimeout(5500);
await p.mouse.move(420,420);await p.mouse.down();await p.mouse.move(600,470,{steps:20});await p.mouse.up();await p.waitForTimeout(900);await p.screenshot({path:'audit/screenshots/stripe-book-drag.png'});
await p.mouse.wheel(0,650);await p.waitForTimeout(1200);await p.screenshot({path:'audit/screenshots/stripe-book-scroll.png'});
const styles=await p.evaluate(()=>({canvas:!!document.querySelector('.PressHomepageCanvas'),fixed:[...document.querySelectorAll('body *')].filter(e=>getComputedStyle(e).position==='fixed').map(e=>e.className).slice(0,12),bookText:[...document.querySelectorAll('.PressHomepageBook__text')].slice(0,2).map(e=>getComputedStyle(e).transform)}));
await p.setViewportSize({width:390,height:844});await p.reload({waitUntil:'domcontentloaded'});await p.waitForTimeout(3000);await p.screenshot({path:'audit/screenshots/stripe-book-mobile.png'});
await fs.writeFile('audit/stripe-detail.json',JSON.stringify(styles,null,2));console.log(styles);await b.close();
