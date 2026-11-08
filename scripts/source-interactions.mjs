import {chromium} from '@playwright/test';import fs from 'node:fs/promises';
const b=await chromium.launch({channel:'chromium'});const p=await b.newPage({viewport:{width:1440,height:1000}});const report={};
for(const path of ['/dentists','/science','/parents','/contact']){
await p.goto('https://sparkdv.com'+path);await p.waitForTimeout(600);const buttons=await p.locator('main button').allTextContents();const expanded=[];
for(const btn of await p.locator('main button[aria-expanded="false"]').all()){const title=await btn.innerText();await btn.click();await p.waitForTimeout(200);expanded.push({title,content:await btn.evaluate(e=>e.parentElement.innerText)});}
// Also inspect unannotated source accordions by their observed labels.
if(path==='/dentists'){for(const label of ['NSF Toothpaste Usage','White Spot Protocol','Orthodontic Protocol','Biocem Mixing','MARC Crown Prep','P-Obtura Bio-Activ Obturation']){const el=p.getByRole('button').filter({hasText:label}).first();if(await el.count()){await el.click();await p.waitForTimeout(200);expanded.push({title:label,content:await el.evaluate(e=>e.parentElement.innerText)});}}}
report[path]={buttons,expanded,text:await p.locator('main').innerText(),links:await p.locator('main a').evaluateAll(es=>es.map(e=>({label:e.innerText,href:e.href})))};
console.log(path,buttons.length,expanded.length);}
await fs.writeFile('audit/source-interactions.json',JSON.stringify(report,null,2));await b.close();
