import fs from 'node:fs/promises';
let s=await fs.readFile('src/App.jsx','utf8');
s=s.replace('Shipping and taxes calculated at checkout.','Pricing, availability and delivery are confirmed by our team.');
s=s.replace('<a href="#technology">How it works</a>','<a href="#overview">Clinical information</a>');
s=s.replace('document.title=(p?.name||page?.title||\'SPARK-DV\')','document.title=(p?.name||(page?.title!==\'404\'?page?.title:null)||({\'/contact\':\'Contact\',\'/privacy\':\'Privacy Policy\',\'/terms\':\'Terms of Service\',\'/shipping\':\'Shipping & Returns\',\'/cart\':\'Your selection\'}[loc.pathname])||\'Page not found\')');
// Remove superseded visual implementations; source capture remains in audit/.
for(const name of ['Home','FeaturedProduct','AudienceCard','SchoolTeaser','Science','Dentists','Parents','FaqBlock','School','About']){const start=s.indexOf('function '+name+'(');if(start<0)continue;const next=s.indexOf('\nfunction ',start+1);if(next>0)s=s.slice(0,start)+s.slice(next+1);}
await fs.writeFile('src/App.jsx',s);
let main=await fs.readFile('src/main.jsx','utf8');main=main.replace(/import '@fontsource\/newsreader[^\n]+\n/g,'').replaceAll('@fontsource/dm-sans/','@fontsource/dm-sans/latin-');await fs.writeFile('src/main.jsx',main);
const content=JSON.parse(await fs.readFile('src/source-content.json'));
content['/about'].markdown=content['/about'].markdown.replace('9\n\nProducts\n\nIndia\n\nMade in\n\nR&D\n\nDriven','Made in India. R&D-driven.').replace('\n\nOur Mission\n','\n').replace('\n\nOur Founder\n','\n');
for(const [path,p] of Object.entries(content)){
 p.markdown=p.markdown.replace(/\n\nView Studies\n/g,'\n\n[Request studies](/contact?type=Clinical%20enquiry)\n');
 p.markdown=p.markdown.replace('Request Samples [View Clinical Evidence]','[Request samples](/contact?type=Sample%20request) [View Clinical Evidence]');
 p.markdown=p.markdown.replace(/Name \\\*\n\nClinic \\\*\n\nEmail \\\*\n\nPhone\n\nCity \\\*\n\nProducts of Interest\n\nMessage\n\nSubmit/g,'[Send a clinical enquiry](/contact?type=Clinical%20enquiry)');
 if(path==='/dentists')p.markdown=p.markdown.replace(/### \\\#.*?(?=Clinical Disclaimer)/s,'<!-- protocols -->\n\n');
}
await fs.writeFile('src/source-content.json',JSON.stringify(content,null,2));
