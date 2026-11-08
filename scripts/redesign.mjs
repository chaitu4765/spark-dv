import fs from 'node:fs/promises';
let s=await fs.readFile('src/App.jsx','utf8');
s=s.replace('import React, { useEffect, useMemo, useState }','import React, { useEffect, useMemo, useState, useRef }');
s=s.replace('const disclaimer =',`import {NewHome, EditorialPage, SourceArticle, ProductImage} from './Editorial';
import sourceContent from './source-content.json';
import productAssets from './product-assets.json';
const disclaimer =`);
s=s.replace('return <Home add={add} />','return <NewHome />');
for(const [path,component] of [['science','Science'],['dentists','Dentists'],['parents','Parents'],['school-program','School'],['about','About']])s=s.replace(`return <${component} />`,`return <EditorialPage path="/${path}" />`);
s=s.replace('if (!p) p = products.find((x) => x.familySlug === slug) || products[0];','if (!p) return <NotFound />;');
s=s.replace('<img src={img(p.img)} alt={p.name} />','<ProductImage product={p} />'); // card first
s=s.replaceAll('<img src={img(p.img)} alt={p.name} />','<ProductImage product={p} hero />');
s=s.replace('<section className="section wrap detail-body" id="overview">','<section className="wrap product-source" id="overview"><SourceArticle path={`/products/${p.slug}`} embedded /></section>\n      <section className="section wrap detail-body" id="overview-summary">');
s=s.replace('<Link to="/products">Products</Link>','<details className="products-menu"><summary>Products <ChevronDown size={14}/></summary><div className="mega-menu"><Link to="/products">Explore the complete portfolio <ArrowUpRight size={18}/></Link>{categories.slice(1).map(c=><Link key={c} to={`/products?category=${encodeURIComponent(c)}`} onClick={e=>e.currentTarget.closest("details").removeAttribute("open")}>{c}<ArrowRight size={16}/></Link>)}</div></details>');
s=s.replace('    window.scrollTo(0, 0);','    if(loc.hash) requestAnimationFrame(()=>document.querySelector(loc.hash)?.scrollIntoView()); else window.scrollTo(0, 0);\n    document.querySelectorAll("details[open]").forEach(e=>e.removeAttribute("open"));');
s=s.replace('  const qty = cart.reduce',`  useEffect(()=>{
    const page=sourceContent[loc.pathname];const p=products.find(p=>loc.pathname==='/products/'+p.slug);
    document.title=(p?.name||page?.title||'SPARK-DV')+' | SPARK-DV';
    const description=p?.desc||'Science-led pediatric and preventive dentistry. Explore SPARK-DV products, clinical resources and partnership opportunities.';
    const meta=(key,value,attr='name')=>{let el=document.querySelector('meta['+attr+'="'+key+'"]');if(!el){el=document.createElement('meta');el.setAttribute(attr,key);document.head.append(el);}el.content=value;};
    meta('description',description);meta('og:title',document.title,'property');meta('og:description',description,'property');meta('og:url','https://sparkdv.com'+loc.pathname,'property');meta('og:image','https://sparkdv.com'+(p?productAssets[p.slug].local:'/images/logo.png'),'property');
    let canonical=document.querySelector('link[rel="canonical"]');if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.append(canonical);}canonical.href='https://sparkdv.com'+loc.pathname;
    let schema=document.querySelector('#structured-data');if(!schema){schema=document.createElement('script');schema.id='structured-data';schema.type='application/ld+json';document.head.append(schema);}schema.textContent=JSON.stringify(p?{'@context':'https://schema.org','@type':'Product',name:p.name,description:p.desc,image:'https://sparkdv.com'+productAssets[p.slug].local,brand:{'@type':'Brand',name:'SPARK-DV'}}:{'@context':'https://schema.org','@type':'Organization',name:'SPARK-DV',url:'https://sparkdv.com',email:'sparkdv310@gmail.com'});
  },[loc.pathname]);
  useEffect(()=>{
    if(!cartOpen&&!menu)return;const previous=document.activeElement;const region=document.querySelector(cartOpen?'.cart-drawer':'.nav.open');const old=document.body.style.overflow;document.body.style.overflow='hidden';
    const items=()=>[...region.querySelectorAll('a,button,input,select,summary')].filter(e=>e.getClientRects().length);items()[0]?.focus();const trap=e=>{if(e.key!=='Tab')return;const list=items();if(e.shiftKey&&document.activeElement===list[0]){e.preventDefault();list.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===list.at(-1)){e.preventDefault();list[0]?.focus();}};document.addEventListener('keydown',trap);return()=>{document.body.style.overflow=old;document.removeEventListener('keydown',trap);previous?.focus();};
  },[cartOpen,menu]);
  const qty = cart.reduce`);
// Honest commerce handoff: the request opens a prepared email, never claims payment or submission.
s=s.replace('setToast("Checkout is not connected in this preview.")',`window.location.href='mailto:sparkdv310@gmail.com?subject='+encodeURIComponent('SPARK-DV order enquiry')+'&body='+encodeURIComponent(cart.map(i=>i.name+' × '+i.qty).join('\\n'))`);
s=s.replace(/Proceed to checkout/g,'Request this order').replace(/Checkout integration pending[^<]*/g,'Orders are confirmed directly with SPARK-DV.');
const formStart=s.indexOf('function EnquiryForm('),formEnd=s.indexOf('function Policy(',formStart);
s=s.slice(0,formStart)+`function EnquiryForm({defaultType}) {
 const [done,setDone]=useState(false),[error,setError]=useState(''); const [type,setType]=useState(defaultType||new URLSearchParams(location.search).get('type')||'Clinical enquiry');
 useEffect(()=>{if(defaultType)setType(defaultType)},[defaultType]);
 return <form className="enquiry-form" onSubmit={e=>{e.preventDefault();setError('');try{const data=new FormData(e.currentTarget);const body=[...data].map(([k,v])=>k+': '+v).join('\\n');window.location.href='mailto:sparkdv310@gmail.com?subject='+encodeURIComponent(type)+'&body='+encodeURIComponent(body);setDone(true);}catch{setError('Unable to open your email app. Please email sparkdv310@gmail.com directly.');}}}>
 <h3>Let’s start a conversation.</h3><p>Complete your details to prepare an email to our team.</p>
 <label>Enquiry type<select name="Enquiry" value={type} onChange={e=>setType(e.target.value)}>{['Distributor enquiry','Clinical enquiry','Sample request','Demo request','School program','General contact'].map(t=><option key={t}>{t}</option>)}</select></label>
 <div className="form-row"><label>Name *<input name="Name" required autoComplete="name"/></label><label>Company / clinic<input name="Organization" autoComplete="organization"/></label></div>
 <div className="form-row"><label>Email *<input name="Email" required type="email" autoComplete="email"/></label><label>Phone<input name="Phone" type="tel" autoComplete="tel"/></label></div>
 <label>City, State *<input name="Location" required autoComplete="address-level2"/></label><label>Product<select name="Product"><option>General enquiry</option>{products.map(p=><option key={p.slug}>{p.name}</option>)}</select></label>
 <label>Message *<textarea name="Message" rows="4" required/></label><label className="consent"><input name="Contact consent" type="checkbox" required value="Yes"/>I agree to be contacted about this enquiry.</label>
 <button className="button button-dark" type="submit">Prepare email <ArrowUpRight size={17}/></button><small>Your email app opens for you to review and send. No enquiry is submitted by this website.</small>
 {done&&<p role="status">Your email draft is ready to open. Send it from your email app. If it did not open, contact <a href="mailto:sparkdv310@gmail.com">sparkdv310@gmail.com</a>.</p>}{error&&<p role="alert">{error}</p>}
 </form>;
}

`+s.slice(formEnd);
s=s.replace('const [kind, setKind] = useState("Distributor enquiry");','const [kind, setKind] = useState(new URLSearchParams(location.search).get("type")||"Distributor enquiry");');
s=s.replace('preview form does not transmit data.','form prepares an email for you to review and send.');
// Unknown source policies are unavailable, not invented legal text.
s=s.replace('isUnavailable = path === "/privacy"','isUnavailable = true');
await fs.writeFile('src/App.jsx',s);
// Existing family pages keep their variant selector; add full family-specific source content.
s=await fs.readFile('src/App.jsx','utf8');const family=s.indexOf('function ProductFamilyDetail');const end=s.indexOf('function ProductDetail',family);let part=s.slice(family,end);part=part.replace('<section className="section wrap', '<section className="wrap product-source"><SourceArticle path={\x60/products/\x24{familySlug}\x60} embedded /></section><section className="section wrap');s=s.slice(0,family)+part+s.slice(end);await fs.writeFile('src/App.jsx',s);
