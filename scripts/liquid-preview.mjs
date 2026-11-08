import {chromium,expect} from '@playwright/test';
const b=await chromium.launch({channel:'chromium'}),p=await b.newPage({viewport:{width:1440,height:1000}});
p.on('pageerror',e=>console.log('PAGE ERROR',e.message));p.on('console',m=>{if(m.type()==='error'||m.type()==='warning')console.log(m.type(),m.text())});
await p.goto('http://localhost:5173/',{waitUntil:'networkidle'});await p.waitForTimeout(500);if(await p.getByTestId('landing-reveal').isVisible())await p.getByRole('button',{name:'Enter SPARK-DV'}).click();await expect(p.getByTestId('landing-reveal')).toHaveCount(0);await p.waitForTimeout(1200);
console.log(await p.locator('.liquid-text').evaluateAll(els=>els.map(e=>({state:e.dataset.liquidState,text:e.textContent,rect:e.getBoundingClientRect().toJSON()}))));
await p.screenshot({path:'audit/screenshots/liquid-hero-desktop.png'});
const r=await p.locator('.liquid-text').last().boundingBox();await p.mouse.move(r.x+30,r.y+r.height*.6);await p.mouse.move(r.x+r.width*.62,r.y+r.height*.4,{steps:35});await p.waitForTimeout(120);await p.screenshot({path:'audit/screenshots/liquid-hero-active.png'});
await p.setViewportSize({width:390,height:844});await p.mouse.move(0,0);await p.waitForTimeout(3500);await p.screenshot({path:'audit/screenshots/liquid-hero-mobile.png'});
await b.close();
