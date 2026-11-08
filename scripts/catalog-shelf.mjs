import fs from 'node:fs/promises';
let s=await fs.readFile('src/App.jsx','utf8');s="import {ProductShelf} from './components/ui/skincare-product-shelf';\n"+s;
const start=s.indexOf('<div className="product-grid">',s.indexOf('function Catalog('));const end=s.indexOf('</div>',start)+6;
s=s.slice(0,start)+`<ProductShelf className="catalog-shelf" products={filtered.map(p=>({...p,image:productAssets[p.slug].local,imageWidth:productAssets[p.slug].width,imageHeight:productAssets[p.slug].height}))} onAdd={add}/>`+s.slice(end);
await fs.writeFile('src/App.jsx',s);
