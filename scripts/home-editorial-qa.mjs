import {chromium,expect} from '@playwright/test';
import fs from 'node:fs/promises';
const b=await chromium.launch({channel:'chromium'}),p=await b.newPage({viewport:{width:1440,height:1000}}),errors=[],results=[];
p.on('pageerror',e=>errors.push(e.message));
await p.goto('http://localhost:5173/',{waitUntil:'networkidle'});await expect(p.getByTestId('landing-reveal')).toHaveCount(0,{timeout:10000});
await expect(p.locator('h1')).toHaveCount(1);await expect(p.locator('.tunnel-card[data-product="nanion-lite-pro"] img')).toHaveAttribute('src',/nanion-lite-pro/);
await expect(p.locator('[data-scene],.scene-canvas')).toHaveCount(0);
for(let i=0;i<3;i++){
 await p.locator('.home-research-copy article').nth(i).evaluate(e=>e.scrollIntoView({block:'center',behavior:'instant'}));
 await expect(p.locator('.home-research-tabs button').nth(i)).toHaveAttribute('aria-pressed','true');
 await p.waitForTimeout(600);await expect(p.locator('.home-research-images img')).toHaveCount(1);
}
results.push('Desktop scroll keeps the research topic and original illustration synchronized');
await p.locator('.home-research-tabs button').first().focus();await p.keyboard.press('Enter');await expect(p.locator('.home-research-tabs button').first()).toHaveAttribute('aria-pressed','true');
await expect(p.locator('.portfolio-section .shelf-product')).toHaveCount(17);await p.locator('.portfolio-tabs').getByRole('button',{name:'Prevention',exact:true}).click();await expect(p.locator('.portfolio-section .shelf-product')).toHaveCount(7);
await p.getByRole('button',{name:'View Nanion Lite',exact:true}).click();await expect(p.getByRole('dialog')).toBeVisible();await p.getByRole('button',{name:'Add to cart',exact:true}).click();await expect(p.locator('.cart-drawer')).toBeVisible();await p.keyboard.press('Escape');results.push('Homepage shelf filters, original product details and cart still work');
await p.getByRole('button',{name:'Read testimonial from Mrs. A. Reddy'}).click();await expect(p.locator('.home-testimonial blockquote')).toContainText('As a parent');
await p.setViewportSize({width:390,height:844});await p.locator('.home-research-tabs button').nth(2).click();await expect(p.locator('.home-research-copy article:visible')).toHaveCount(1);await expect(p.locator('.home-research-copy article:visible h3')).toHaveText('Connect research to care.');
if(await p.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Mobile overflow');results.push('Mobile topic controls and testimonial switching pass without overflow');
await p.emulateMedia({reducedMotion:'reduce'});await p.reload({waitUntil:'networkidle'});await expect(p.getByTestId('landing-reveal')).toHaveCount(0,{timeout:4000});await p.locator('.home-research-tabs button').nth(1).click();await expect(p.locator('.home-research-copy article:visible')).toHaveCount(1);await expect(p.locator('.home-research-visual')).toHaveCSS('position','static');await expect(p.locator('.home-quote-content')).toHaveCSS('animation-name','none');results.push('Reduced motion uses static layout with working topic controls');
for(const path of ['/science','/dentists','/parents','/school-program','/about','/products']){
 await p.goto('http://localhost:5173'+path,{waitUntil:'networkidle'});await expect(p.locator('.home-editorial,.home-research')).toHaveCount(0);await expect(p.locator('h1')).toHaveCount(1);await expect(p.locator('[data-scene],.scene-canvas')).toHaveCount(0);
}
results.push('All six other checked routes retain their own layouts and contain no homepage scenes');
await fs.writeFile('audit/home-editorial-qa.json',JSON.stringify({results,errors},null,2));console.log({results,errors});await b.close();if(errors.length)process.exitCode=1;
