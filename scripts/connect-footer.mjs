import fs from 'node:fs/promises';
let s=await fs.readFile('src/App.jsx','utf8');s="import {CinematicFooter} from './components/ui/motion-footer';\n"+s;s=s.replace('<Footer />','<CinematicFooter disclaimer={disclaimer} />');const start=s.indexOf('function Footer()');const end=s.indexOf('export default App;',start);s=s.slice(0,start)+s.slice(end);await fs.writeFile('src/App.jsx',s);
let e=await fs.readFile('src/Editorial.jsx','utf8');e=e.replaceAll('<Partner />','');await fs.writeFile('src/Editorial.jsx',e);
await fs.appendFile('src/main.jsx',"\nimport './components/ui/motion-footer.css';\n");
