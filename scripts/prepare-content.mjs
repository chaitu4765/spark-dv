import fs from 'node:fs/promises';import sharp from 'sharp';
import {products} from '../src/data.js';
const crawl=JSON.parse(await fs.readFile('audit/firecrawl-crawl.json'));const assets=JSON.parse(await fs.readFile('audit/asset-mapping.json'));
const find=(s)=>assets.find(a=>a.source.includes(s)&&a.local);
const overrides={'nanion-elite':'nanion-bottle','nanion-pro-plus-gummies':'gummies-bottle','pedo-spark-single':'pedo-spark-single-pack','pedo-spark-three':'pedo-spark-three-pack','endo-spark-permanent':'endo-spark-pack'};
const mapping={};
for(const p of products){const page=crawl.data.find(d=>d.metadata.sourceURL.endsWith('/'+p.slug));let asset=overrides[p.slug]?find(overrides[p.slug]):null;let buffer;if(asset)buffer=await fs.readFile('public'+asset.original);else buffer=await fs.readFile('public/images/'+p.img);
const dir=`public/assets/products/${p.slug}`;await fs.mkdir(dir,{recursive:true});await sharp(buffer).webp({quality:92}).toFile(dir+'/product.webp');await sharp(buffer).resize({width:640,withoutEnlargement:true}).webp({quality:88}).toFile(dir+'/product-640.webp');const meta=await sharp(buffer).metadata();mapping[p.slug]={name:p.name,local:`/assets/products/${p.slug}/product.webp`,width:meta.width,height:meta.height,source:asset?.source||page?.images?.find(s=>!s.includes('sparkdv-logo')&&!/diagram|mechanism/.test(s))||'Existing original asset: '+p.img,page:page?.metadata.sourceURL,sharedSource:p.slug.startsWith('nanion')&& !overrides[p.slug]?'The source reuses the Nanion Lite Pro photograph; variant-specific photography is not supplied.':null};}
await fs.writeFile('src/product-assets.json',JSON.stringify(mapping,null,2));
const content={};for(const p of crawl.data){const path=new URL(p.metadata.sourceURL).pathname;let md=p.markdown||'';const start=md.search(/^# /m);if(start<0)continue;md=md.slice(start);const footer=md.indexOf('[![SPARK-DV]');if(footer>=0)md=md.slice(0,footer);for(const a of assets)if(a.local)md=md.split(a.source).join(a.local);md=md.replace(/https:\/\/(?:www\.)?sparkdv.com(?=\/)/g,'');content[path]={title:md.match(/^# (.+)/)?.[1],markdown:md,source:p.metadata.sourceURL};}
await fs.writeFile('src/source-content.json',JSON.stringify(content,null,2));
await fs.writeFile('public/robots.txt','User-agent: *\nAllow: /\nSitemap: https://sparkdv.com/sitemap.xml\n');
await fs.writeFile('public/sitemap.xml','<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+Object.keys(content).map(p=>`<url><loc>https://sparkdv.com${p}</loc></url>`).join('')+'</urlset>');
console.log('Mapped',products.length,'products and',Object.keys(content).length,'content pages');
