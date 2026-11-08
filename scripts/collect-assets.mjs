import fs from 'node:fs/promises';
import sharp from 'sharp';
const {data}=JSON.parse(await fs.readFile('audit/firecrawl-crawl.json','utf8'));
const mapping=[];
for(const page of data){for(const url of page.images||[]){if(!/\.(png|jpe?g|webp|svg)(\?|$)/i.test(url))continue;
 let asset=mapping.find(a=>a.source===url);if(asset){asset.pages.push(page.metadata.sourceURL);continue;}
 const name=new URL(url).pathname.split('/').pop();const category=/founder/.test(name)?'founder':/school/.test(name)?'campaigns':/logo/.test(name)?'brand':'research';
 const dir=`public/assets/${category}`;await fs.mkdir(dir,{recursive:true});
 try{const res=await fetch(url);if(!res.ok)throw Error(res.status);const buffer=Buffer.from(await res.arrayBuffer());const meta=await sharp(buffer).metadata();await fs.writeFile(`${dir}/${name}`,buffer);const optimized=name.replace(/\.[^.]+$/,'.webp');await sharp(buffer).resize({width:1600,withoutEnlargement:true}).webp({quality:90}).toFile(`${dir}/${optimized}`);mapping.push({source:url,original:`/${dir}/${name}`.replace('/public',''),local:`/${dir}/${optimized}`.replace('/public',''),width:meta.width,height:meta.height,pages:[page.metadata.sourceURL]});}catch(e){mapping.push({source:url,error:String(e),pages:[page.metadata.sourceURL]});}
}}
await fs.writeFile('audit/asset-mapping.json',JSON.stringify(mapping,null,2));console.log('Collected',mapping.length,'assets; failed',mapping.filter(a=>a.error).length);
