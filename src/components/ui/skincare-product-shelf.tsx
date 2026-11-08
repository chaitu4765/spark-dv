"use client";

/** Adapted from Product Shelf by Aakash Mehra (user-supplied component).
 * Retains the floating shelf / shared-layout detail interaction. Actual SPARK-DV
 * images replace synthetic cosmetics; no invented labels, ratings or reverse views.
 */
import {useEffect, useId, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import {AnimatePresence, LayoutGroup, motion, useReducedMotion} from 'motion/react';
import {ArrowUpRight, ChevronDown, ChevronLeft, Minus, Plus, ShoppingBag, ZoomIn, ZoomOut} from 'lucide-react';
import {Link} from 'react-router-dom';
import {cn} from '@/lib/utils';

export type Product = {
  slug: string; name: string; category: string; eyebrow: string; desc: string;
  tags: string[]; features?: string[]; price?: number; compare?: number;
  professional?: boolean; coming?: boolean; variant?: string; family?: string;
  image: string; imageWidth: number; imageHeight: number;
};
export type ProductShelfProps = {
  products: Product[];
  onAdd: (product: Product, quantity: number) => void;
  className?: string;
};
const SPRING = {type:'spring' as const, bounce:0, duration:0.55};
const price = (value?: number) => value==null?'Request pricing':new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(value);

export function ProductShelf({products,onAdd,className}:ProductShelfProps){
  const [openId,setOpenId]=useState<string|null>(null);
  const [columns,setColumns]=useState(()=>window.matchMedia('(max-width: 760px)').matches?2:4);
  const trigger=useRef<HTMLElement|null>(null);
  const reduce=useReducedMotion();
  const id=useId();
  useEffect(()=>{const media=window.matchMedia('(max-width: 760px)');const change=()=>setColumns(media.matches?2:4);media.addEventListener('change',change);return()=>media.removeEventListener('change',change)},[]);
  const open=products.find(p=>p.slug===openId);
  const rows=Array.from({length:Math.ceil(products.length/columns)},(_,i)=>products.slice(i*columns,(i+1)*columns));
  const close=()=>setOpenId(null);
  return <div className={cn('product-shelf relative w-full',className)}>
    <div className="shelf-introduction"><span>{products.length} products</span><span>Select a product for a closer look <ArrowUpRight size={15}/></span></div>
    <LayoutGroup id={id}>
      <div className="shelf-wall">
        {rows.map((row,r)=><section className="shelf-row" key={r} aria-label={`Product shelf ${r+1}`}>
          <div className="shelf-items" style={{gridTemplateColumns:`repeat(${columns}, minmax(0,1fr))`}}>
            {row.map(p=><div className="shelf-position" key={p.slug}>
              <motion.button type="button" className="shelf-product" aria-label={`View ${p.name}`} onClick={e=>{trigger.current=e.currentTarget;setOpenId(p.slug)}} whileHover={reduce?undefined:{y:-7}} whileTap={reduce?undefined:{scale:.98}}>
                <motion.img layoutId={reduce?undefined:`product-${p.slug}`} transition={SPRING} src={p.image} width={p.imageWidth} height={p.imageHeight} alt={`${p.name} — original product image`} loading="lazy" style={{opacity:openId===p.slug?0:1}}/>
              </motion.button>
              <div className="shelf-caption"><button onClick={e=>{trigger.current=e.currentTarget;setOpenId(p.slug)}}>{p.name}</button><p>{p.coming?'Coming soon':price(p.price)}</p><small>{p.professional?'Professional use':p.eyebrow}</small></div>
            </div>)}
          </div>
          <div className="shelf-plank" aria-hidden="true"/>
        </section>)}
      </div>
      <AnimatePresence onExitComplete={()=>{if(!document.querySelector('.cart-drawer'))trigger.current?.focus({preventScroll:true})}}>
        {open&&<ProductPage key={open.slug} product={open} onClose={close} onAdd={(p,q)=>{close();onAdd(p,q)}}/>}
      </AnimatePresence>
    </LayoutGroup>
  </div>;
}

function ProductPage({product:p,onClose,onAdd}:{product:Product;onClose:()=>void;onAdd:(p:Product,qty:number)=>void}){
  const reduce=useReducedMotion();const dialog=useRef<HTMLDivElement>(null);const close=useRef<HTMLButtonElement>(null);
  const [qty,setQty]=useState(1),[zoom,setZoom]=useState(false),[section,setSection]=useState<string|null>('Characteristics');
  const heading=useId();
  useEffect(()=>{
    const root=document.getElementById('root');const previousInert=root?.inert;const overflow=document.body.style.overflow;
    if(root)root.inert=true;document.body.style.overflow='hidden';close.current?.focus();
    const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){onClose();return;}if(e.key!=='Tab')return;const items=[...dialog.current!.querySelectorAll<HTMLElement>('button:not(:disabled),a,input,select')].filter(e=>e.getClientRects().length);if(e.shiftKey&&document.activeElement===items[0]){e.preventDefault();items.at(-1)?.focus()}else if(!e.shiftKey&&document.activeElement===items.at(-1)){e.preventDefault();items[0]?.focus()}};
    document.addEventListener('keydown',key);return()=>{if(root)root.inert=previousInert||false;document.body.style.overflow=overflow;document.removeEventListener('keydown',key)};
  },[onClose]);
  const sections=[
    ['Characteristics',<ul key="features">{(p.features?.length?p.features:p.tags).map(f=><li key={f}>{f}</li>)}</ul>],
    ['Use & guidance',<p key="use">{p.professional?'For qualified dental professionals. Follow the official Instructions for Use and patient-specific clinical judgment.':'For children, use under adult supervision. Follow product labeling and consult a qualified dental professional.'} <Link to="/dentists#protocols" onClick={onClose}>Read clinical protocols</Link>.</p>],
    ['Product information',<p key="full">View the complete formulation, clinical information and product-specific guidance on the <Link to={`/products/${p.slug}`} onClick={onClose}>product page</Link>.</p>]
  ] as const;
  return createPortal(<motion.div ref={dialog} role="dialog" aria-modal="true" aria-labelledby={heading} className="shelf-dialog" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:reduce?0:.2}}>
    <div className="shelf-dialog-header"><button ref={close} onClick={onClose}><ChevronLeft size={18}/> Back to the shelf</button><span>SPARK-DV</span></div>
    <div className="shelf-detail-grid">
      <div className={cn('shelf-detail-stage',zoom&&'is-zoomed')}>
        <motion.img layoutId={reduce?undefined:`product-${p.slug}`} src={p.image} width={p.imageWidth} height={p.imageHeight} alt={`${p.name} original packaging or brand image`} transition={reduce?{duration:0}:SPRING} animate={{scale:zoom?1.6:1}} drag={zoom&&!reduce} dragConstraints={{left:-80,right:80,top:-100,bottom:100}} dragElastic={.05}/>
        <button className="shelf-zoom" onClick={()=>setZoom(!zoom)} aria-pressed={zoom}>{zoom?<ZoomOut size={18}/>:<ZoomIn size={18}/>} {zoom?'Reset image':'Inspect image'}</button>
      </div>
      <motion.div className="shelf-detail-copy" initial={{opacity:reduce?1:0,x:reduce?0:20}} animate={{opacity:1,x:0}} transition={reduce?{duration:0}:SPRING}>
        <p className="shelf-category">{p.category}{p.professional?' · Professional use':''}</p><h2 id={heading}>{p.name}</h2><p className="shelf-tagline">{p.eyebrow}</p>
        <div className="shelf-price">{p.coming?'Coming soon':price(p.price)}{p.compare&&<del>{price(p.compare)}</del>}</div><p className="shelf-description">{p.desc}</p>
        {p.variant&&<p className="shelf-variant">{p.variant}</p>}
        {p.price&&!p.coming?<div className="shelf-buy"><div className="shelf-quantity"><button disabled={qty===1} aria-label="Decrease quantity" onClick={()=>setQty(Math.max(1,qty-1))}><Minus size={17}/></button><span aria-live="polite">{qty}</span><button disabled={qty===9} aria-label="Increase quantity" onClick={()=>setQty(Math.min(9,qty+1))}><Plus size={17}/></button></div><button className="button button-dark" onClick={()=>onAdd(p,qty)}>Add to cart <ShoppingBag size={18}/></button></div>:<Link className="button button-dark" to={`/contact?type=Clinical%20enquiry`} onClick={onClose}>{p.coming?'Enquire about availability':'Request pricing'}<ArrowUpRight size={18}/></Link>}
        <p className="shelf-order-note">Orders, availability and delivery are confirmed with our team.</p>
        <div className="shelf-accordions">{sections.map(([title,body])=><div key={title}><button aria-expanded={section===title} onClick={()=>setSection(section===title?null:title)}>{title}<ChevronDown size={18} style={{transform:section===title?'rotate(180deg)':undefined}}/></button><AnimatePresence initial={false}>{section===title&&<motion.div initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={reduce?{duration:0}:SPRING} className="shelf-accordion-body"><div>{body}</div></motion.div>}</AnimatePresence></div>)}</div>
        <Link className="text-link" to={`/products/${p.slug}`} onClick={onClose}>Explore full product details <ArrowUpRight size={18}/></Link>
      </motion.div>
    </div>
  </motion.div>,document.body);
}
