import{r as O,j as C,c as ee,u as te,a as oe,A as ae,m as le}from"./index-BrJJAZ0Q.js";import"./source-content-fOjlxm5s.js";const X={tileSize:256,logoScale:.7,finalScale:.69,logoOffset:[0,0],iconPlate:!1,keepPlate:!1,originalColors:!1,opticalDepth:1.1,dispersion:1.7,colorBleed:1.25,doubleBevel:1,bevelWidth:.14,corner:4.8,cornerPull:2.1,cornerWidth:2.2,cornerFocus:.58,edgeSmear:2.85,stretch:0,tilt:.35,bulge:1,specular:1,halo:0,shadow:1,ripple:1,bounce:0,response:.42,startSize:.2,startZoom:2.6,glide:2.3,present:2.4,drift:.12,swell:.5,focus:1,sheen:1,lightTurn:.9,hold:1,background:"#e9e9eb",plateColor:"#ffffff",logoColor:"#0e1428"},re={light:X,dark:{...X,logoScale:.72,finalScale:1,iconPlate:!0,halo:1,shadow:0,ripple:.5,startZoom:1.6,drift:.05,opticalDepth:.75,bevelWidth:.22,dispersion:.9,colorBleed:.45,corner:5,cornerPull:1.4,edgeSmear:1.2,tilt:0,cornerWidth:1.2,cornerFocus:.4,background:"#000000",plateColor:"#05070b",logoColor:"#ffffff"}},c=512,J=.75;function se(o){return new Promise((e,a)=>{const t=new Image;o.startsWith("data:")||(t.crossOrigin="anonymous"),t.onload=()=>e(t),t.onerror=()=>a(new Error("GlassIconReveal: the logo could not be loaded")),t.src=o})}function ne(o){return o.trimStart().startsWith("<")}function ie(o){const e=new DOMParser().parseFromString(o,"image/svg+xml").documentElement;if(!e||e.nodeName.toLowerCase()!=="svg")throw new Error("GlassIconReveal: the SVG could not be read");let a=parseFloat(e.getAttribute("width")||""),t=parseFloat(e.getAttribute("height")||"");const r=(e.getAttribute("viewBox")||"").split(/[\s,]+/).map(Number);r.length===4&&r[2]>0&&r[3]>0&&([a,t]=[r[2],r[3]]),a>0&&t>0||(a=t=100);const l=c/Math.max(a,t);e.setAttribute("width",String(Math.round(a*l))),e.setAttribute("height",String(Math.round(t*l)));const u=new XMLSerializer().serializeToString(e).replace(/currentColor/g,"#ffffff");return"data:image/svg+xml;charset=utf-8,"+encodeURIComponent(u)}const Q=o=>ne(o)?ie(o):o;function ue(o,e,a){const t=document.createElement("canvas");t.width=t.height=c;const r=t.getContext("2d",{willReadFrequently:!0}),l=Math.min(c/e,c/a),u=(c-e*l)/2,i=(c-a*l)/2;r.drawImage(o,u,i,e*l,a*l);const n=r.getImageData(0,0,c,c).data;let h=!0;for(let f=3;f<n.length;f+=4*97)if(n[f]<250){h=!1;break}const s=[n[0],n[1],n[2]],v=(f,w,g)=>Math.min(1,Math.max(0,(Math.hypot(f-s[0],w-s[1],g-s[2])/441-.08)/.2));let p=c,x=c,d=-1,b=-1;for(let f=0;f<c;f++)for(let w=0;w<c;w++){const g=(f*c+w)*4;(h?v(n[g],n[g+1],n[g+2])*255:n[g+3])>8&&(w<p&&(p=w),w>d&&(d=w),f<x&&(x=f),f>b&&(b=f))}if(d<0)throw new Error("GlassIconReveal: the logo is empty");const m=d-p+1,F=b-x+1,S=c*J/Math.max(m,F),R=document.createElement("canvas");R.width=R.height=c;const E=R.getContext("2d",{willReadFrequently:!0});if(E.imageSmoothingQuality="high",E.drawImage(o,c/2-(p+m/2-u)*S,c/2-(x+F/2-i)*S,e*l*S,a*l*S),h){const f=E.getImageData(0,0,c,c),w=f.data;for(let g=0;g<w.length;g+=4)w[g+3]=Math.round(w[g+3]*v(w[g],w[g+1],w[g+2]));E.putImageData(f,0,0)}return R}function ce(o){const e=c*c,a=o.getContext("2d",{willReadFrequently:!0}).getImageData(0,0,c,c).data,t=1e20,r=new Float64Array(e),l=new Float64Array(e);for(let s=0;s<e;s++){const v=a[s*4+3]/255;if(v>=1)r[s]=0,l[s]=t;else if(v<=0)r[s]=t,l[s]=0;else{const p=.5-v;r[s]=p>0?p*p:0,l[s]=p<0?p*p:0}}const u=new Float64Array(c),i=new Float64Array(c+1),n=new Uint16Array(c);j(r,u,n,i,t),j(l,u,n,i,t);const h=new Float32Array(e);for(let s=0;s<e;s++)h[s]=(Math.sqrt(r[s])-Math.sqrt(l[s]))/c;return h}function j(o,e,a,t,r){for(let l=0;l<c;l++)H(o,l,c,e,a,t,r);for(let l=0;l<c;l++)H(o,l*c,1,e,a,t,r)}function H(o,e,a,t,r,l,u){r[0]=0,l[0]=-u,l[1]=u,t[0]=o[e];for(let i=1,n=0,h=0;i<c;i++){t[i]=o[e+i*a];const s=i*i;do{const v=r[n];h=(t[i]-t[v]+s-v*v)/(i-v)/2}while(h<=l[n]&&--n>-1);n++,r[n]=i,l[n]=h,l[n+1]=u}for(let i=0,n=0;i<c;i++){for(;l[n+1]<i;)n++;const h=r[n],s=i-h;o[e+i*a]=t[h]+s*s}}const W=new Map;function fe(o){let e=W.get(o);return e||(e=se(Q(o)).then(a=>{const t=ue(a,a.naturalWidth||c,a.naturalHeight||c);return{canvas:t,sdf:ce(t)}}),W.set(o,e),e.catch(()=>W.delete(o))),e}const de=`#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`,he=`#version 300 es
precision highp float;
out vec4 outColor;

uniform vec2 uCenter;      // device px, GL coords
uniform float uTile;       // tile size, device px
uniform sampler2D uSdf;    // signed distance, texture units, + outside
uniform sampler2D uCol;    // premultiplied colour, mipmapped
uniform float uTexSize;
uniform float uBoxFrac;

uniform float uPlateScale; // plate size relative to the tile
uniform float uShapeN;     // superellipse exponent: 2 = circle
uniform float uCornerN;    // final exponent, used by the ghost
uniform float uOptics;     // 1 = full refraction, 0 = flat
uniform float uPlateAlpha; // 1 = glass shown, 0 = bare logo
uniform float uLogoHalf;   // logo half size in plate units (zoom included)
uniform vec2 uLogoOff;     // logo centre, plate units
uniform float uBold;       // stroke swell, in logo half-size units
uniform float uBlur;       // edge softness, plate units
uniform float uFrost;      // milky lift inside a young bubble
uniform float uDome;       // lens bulge height
uniform float uDrop;       // 1 while the glass is a round droplet, 0 once it has spread into the tile
uniform float uPinch;      // the face's stretch toward its corners, at the rim
uniform float uTilt;       // extra stretch of the rising diagonal's corners (0–1)
uniform float uRim;
uniform float uHalo;
uniform float uShadow;
uniform float uGhost;
uniform float uRipR;       // ripple radius, plate sizes
uniform float uRipA;
uniform float uBare;       // 1 once the logo may show without glass (the ending)
uniform float uReach;      // the rim band's full width, plate units
uniform float uCornerPull; // how much harder the corners pull than the sides
uniform float uStreak;     // how far a corner smears content along the rim, in band widths
uniform float uWiden;      // how much wider the folding band grows toward the corners
uniform float uSlab;       // how far the slab stands above the logo, plate units
uniform float uEtaSpread;  // index spread across the spectrum (red highest)
uniform float uFocus;      // how far in along the diagonal a corner focuses, plate units
uniform float uFocusK;     // how quickly the view slides back from the focus across the band
uniform float uFocusSplit; // how much further in red meets than violet, plate units
uniform float uRimLine;    // how far across the band the sight line takes to turn in to the focus
uniform float uCornerOn;   // 0 while the glass is round, 1 once it has spread into the tile
uniform float uDissolve;   // 0 → 1 as the glass lets go of the logo
uniform float uGlow;       // colour bleed in the rim, plate units on screen
uniform float uFaceDisp;   // lateral colour across the face
uniform float uVivid;      // chroma lift of the dispersed light

uniform float uDisp;
uniform float uDouble;
uniform float uBevelW;
uniform float uSpec;
uniform float uIconPlate;
uniform float uUseColor;
uniform float uLightScene; // 1 = light backdrop, 0 = dark
uniform float uLightGlass; // the same for what the glass sits on (the plate, when there is one)
uniform float uKeep;       // 1 = the glass settles into a flat plate instead of letting go of it
uniform float uSheen;      // strength of the light band crossing the face
uniform float uSweep;      // where that band is, plate sizes along its diagonal
uniform float uLightAng;   // how far the rim light has turned, radians

uniform vec3 uBg;
uniform vec3 uPlateCol;
uniform vec3 uLogoCol;

float px; // one device pixel in plate units

vec2 rot(vec2 v, float a) { float c = cos(a), s = sin(a); return vec2(c * v.x - s * v.y, s * v.x + c * v.y); }

// aa: footprint of one screen pixel at q, plate units.
vec4 logoAt(vec2 q, float blur, float aa) {
  float L = uLogoHalf;
  float k = 0.5 * uBoxFrac / L;
  vec2 uv = vec2(0.5 + (q.x - uLogoOff.x) * k, 0.5 - (q.y - uLogoOff.y) * k);
  float d = texture(uSdf, uv).r / k;
  float w = 0.75 * aa + blur;
  float a = 1.0 - smoothstep(-w, w, d - uBold * L);
  vec3 c = uLogoCol;
  if (uUseColor > 0.5) {
    float lod = log2(max(1.0, w * k * uTexSize));
    vec4 c0 = textureLod(uCol, uv, lod);
    vec4 c1 = textureLod(uCol, uv, lod + 3.0);
    vec4 c2 = textureLod(uCol, uv, 7.0);
    c = c2.rgb / max(c2.a, 1e-4);
    c = mix(c, c1.rgb / max(c1.a, 1e-4), smoothstep(0.0, 0.06, c1.a));
    c = mix(c, c0.rgb / max(c0.a, 1e-4), smoothstep(0.02, 0.3, c0.a));
  }
  return vec4(c, a);
}

// Superellipse field. Returns signed distance (plate units, − inside); g = 1 on the rim.
float shape(vec2 p, float scale, float n, out vec2 nOut, out float g, out vec2 dg) {
  vec2 pp = p / scale;
  vec2 a = max(abs(pp), vec2(1e-6));
  g = pow(pow(a.x, n) + pow(a.y, n), 1.0 / n);
  dg = sign(pp) * pow(a, vec2(n - 1.0)) * pow(max(g, 1e-6), 1.0 - n);
  float dgl = max(length(dg), 1e-6);
  nOut = dg / dgl;
  return (g - 1.0) / dgl * scale;
}

// Curvature radius (plate units) of the shape's contour through p.
float contourRadius(vec2 p, float scale, float n) {
  vec2 a = max(abs(p / scale), vec2(1e-4));
  vec2 a1 = pow(a, vec2(n - 1.0));
  vec2 a2 = pow(a, vec2(n - 2.0));
  float k = (n - 1.0) * (a2.x * a1.y * a1.y + a2.y * a1.x * a1.x) / pow(max(dot(a1, a1), 1e-30), 1.5);
  return scale / max(k, 1e-3);
}

// Where the glass at x = s / bwF across its rounded edge looks: a slab uSlab above the logo with a
// quarter-round edge of radius bwF. A straight-down sight line bends inward by Snell's law, so the
// outer rim looks deepest and the view eases back to the face across the edge.
vec2 refractSample(float x, float bwF, float eta, float R, vec2 dirOut, vec2 p, float dome, float offMul) {
  float u = clamp(1.0 - x, 0.0, 0.995);
  float th = asin(u), thr = asin(u / eta);
  float z = uSlab + bwF * sqrt(1.0 - u * u);
  float off = offMul * z * tan(th - thr);
  off = off / (1.0 + off / (6.0 * R));
  return p - (dirOut * off + p * dome) * uOptics;
}

float gauss(float x, float c, float w) { float d = (x - c) / w; return exp(-0.5 * d * d); }
float band(float x, float a, float b, float w) { return smoothstep(a - w, a, x) * (1.0 - smoothstep(b, b + w, x)); }

// Visible spectrum, red (0) to violet (1).
float bump(float x, float c, float w) { float d = (x - c) / w; return exp(-0.5 * d * d); }
vec3 spectrum(float x) {
  return vec3(bump(x, 0.34, 0.2) + 0.08 * bump(x, 0.93, 0.05), bump(x, 0.58, 0.1), bump(x, 0.8, 0.11));
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  px = 2.0 / uTile;
  vec2 p = (gl_FragCoord.xy - uCenter) * px;

  vec4 lg = logoAt(p, uBlur, px);
  vec3 plain = mix(uBg, lg.rgb, lg.a * uBare);

  vec2 nOut, dg; float g;
  float sd = shape(p, uPlateScale, uShapeN, nOut, g, dg);
  float s = -sd;
  float bw = max(uBevelW, 0.004) * uPlateScale;
  float x = clamp(s / bw, 0.0, 1.0);
  float R = contourRadius(p, uPlateScale, uShapeN);
  vec2 pq = p * p;
  float diag = 4.0 * pq.x * pq.y / max((pq.x + pq.y) * (pq.x + pq.y), 1e-6);
  float tilt = mix(1.0 - uTilt, 1.0, smoothstep(-0.02, 0.02, p.x * p.y));
  float pinchPart = uPinch * min(g * g, 1.0) * diag * diag * tilt;
  float dome = uDome * (1.0 - min(g * g, 1.0)) + pinchPart;
  vec2 dirOut = normalize(mix(nOut, p / max(length(p), 1e-4), 0.2));
  // Rounded corners curve both ways, so they draw content in from deeper than the sides.
  float cornerness = max(smoothstep(0.1, 0.9, 4.0 * nOut.x * nOut.x * nOut.y * nOut.y), smoothstep(0.15, 0.75, diag));
  float offMul = 1.0 + 0.4 * max(uCornerPull - 1.0, 0.0) * tilt * cornerness * uCornerOn;
  // Around a corner every sight line meets at one focus a little way in along the diagonal.
  vec2 focus = sign(p) * (pow(0.5, 1.0 / uShapeN) - uFocus * 0.70710678) * uPlateScale;
  float focusW = tilt * cornerness * uOptics * uCornerOn;
  float bwF = max(uReach, 0.004) * (1.0 + uWiden * tilt * cornerness * uCornerOn);
  float xf = clamp(s / bwF, 0.0, 1.0);
  // Footprint of one pixel after refraction, measured in uniform control flow.
  vec2 qc = refractSample(xf, bwF, 1.5, R, dirOut, p, dome, offMul);
  float foot = max(max(length(dFdx(qc)), length(dFdy(qc))), 0.25 * px);

  // Backdrop: anticipation ghost, ripple, soft lift shadow and glow.
  vec3 bg = uBg;
  vec3 lift = mix(uBg + vec3(0.06), mix(uBg, vec3(1.0), 0.55), uLightScene);
  if (uGhost > 0.001) {
    vec2 gn, gdg; float gg;
    float gsd = shape(p, 1.0, uCornerN, gn, gg, gdg);
    bg = mix(bg, lift, uGhost * 0.12 * (1.0 - smoothstep(-0.16, 0.14, gsd)));
    bg *= 1.0 - uGhost * 0.03 * uLightScene * exp(-max(gsd, 0.0) / 0.12) * step(0.0, gsd);
  }
  float outside = max(sd, 0.0);
  if (uRipA > 0.001) {
    float d0 = (uRipR - 1.0) * uPlateScale;
    float rx = (sd - d0) / 0.022;
    float ring = exp(-rx * rx);
    bg += uRipA * ring * (0.04 * (0.55 + 0.45 * dot(nOut, normalize(vec2(-0.5, 0.8))))) * mix(0.5, 1.0, uLightScene);
    bg -= uRipA * 0.016 * uLightScene * exp(-(rx - 1.6) * (rx - 1.6));
  }
  float shadowFall = max(sd, 0.0) / (0.9 * uPlateScale);
  bg *= 1.0 - uShadow * 0.03 * exp(-shadowFall * shadowFall) * step(0.0, sd);
  vec3 haloCol = mix(vec3(0.62, 0.69, 0.80), vec3(1.0), uLightScene);
  bg = mix(bg, haloCol, clamp(uHalo * (0.30 * exp(-outside / (0.025 * uPlateScale)) + 0.07 * exp(-outside / (0.12 * uPlateScale))), 0.0, 1.0) * step(0.0, sd));

  vec3 col = bg;
  float soft = px + uBlur * 0.8 + 0.06 * uDissolve * (1.0 - uKeep) * uPlateScale;
  if (sd < soft) {
    // Lighting surface: a superellipse quarter, flat toward the face and steep at the rim.
    float y1 = 1.0 - x;
    const float K = 2.6;
    float base1 = max(1.0 - pow(y1, K), 1e-4);
    float db = min(pow(y1, K - 1.0) * pow(base1, 1.0 / K - 1.0), 25.0);
    // A second, lower step just inside the first draws the faint inner line.
    float s1 = bw * 0.62;
    float w2 = bw * 0.22;
    float t2 = clamp((s - s1) / w2, -1.0, 1.0);
    float dh2 = uDouble * bw * 0.16;
    float dd = dh2 * 0.5 * cos(t2 * 1.5707963) * 1.5707963 / w2 * step(abs(t2), 0.999);
    vec2 gDome = -uDome * 2.0 * g * dg * step(g, 1.0);
    vec2 grad = -(db + dd) * nOut + gDome;

    vec3 back = mix(uBg, uPlateCol, uIconPlate);
    vec3 liftG = mix(back + vec3(0.06), mix(back, vec3(1.0), 0.55), uLightGlass);
    float rblur = uBlur + 0.05 * length(qc - p) + min(uGlow * uOptics * (1.0 - xf) * foot / px, 0.04);

    // Each wavelength refracts by its own index, so everything the edge draws in fans into colour
    // while the face stays crisp. Around a corner the samples also smear along the rim.
    float cornerW = smoothstep(0.1, 0.9, 4.0 * nOut.x * nOut.x * nOut.y * nOut.y);
    float streak = 0.35 * uStreak * bw * mix(0.15, 1.0, cornerW) * pow(1.0 - xf, 1.5) * uOptics;
    vec2 tangent = vec2(-nOut.y, nOut.x);
    vec3 acc = vec3(0.0), wsum = vec3(0.0);
    for (int i = 0; i < 20; i++) {
      float lam = (float(i) + 0.5) / 20.0;
      float c = uDisp * (1.0 - 2.0 * lam);
      vec2 along = tangent * (streak * 2.0 * (fract(float(i) * 0.618034 + 0.31) - 0.5));
      float cf = uDisp * (1.0 - 2.0 * lam) * (lam > 0.5 ? 1.0 : 0.5);
      vec2 sp = refractSample(xf, bwF, 1.5 + uEtaSpread * c, R, dirOut, p + along,
                              dome + pinchPart * 0.3 * c, offMul);
      vec2 focusL = focus - sign(p) * (0.70710678 * uFocusSplit * c * uPlateScale);
      float wFocus = pow(1.0 - xf, uFocusK) * smoothstep(0.0, uRimLine * (1.0 + 0.6 * c), xf);
      sp = mix(sp, mix(p + along, focusL, wFocus), focusW);
      float faceOnly = smoothstep(0.7, 1.0, xf) * uOptics;
      sp *= 1.0 + uFaceDisp * cf * faceOnly;
      vec4 l = logoAt(sp, rblur + 0.12 * streak + uFaceDisp * 0.5 * max(c, 0.0) * faceOnly, foot);
      vec3 w = spectrum(lam);
      acc += mix(back, l.rgb, l.a) * w;
      wsum += w;
    }
    vec3 trans = acc / wsum;
    float tl = dot(trans, vec3(0.2126, 0.7152, 0.0722));
    trans = clamp(tl + (trans - tl) * (1.0 + uVivid * uOptics), 0.0, 1.0);
    // A young droplet is milky; the haze only ever lightens.
    float hazeLum = dot(trans, vec3(0.2126, 0.7152, 0.0722));
    float hazeGate = mix(1.0 - smoothstep(0.25, 0.75, hazeLum), smoothstep(0.25, 0.75, hazeLum), uLightGlass);
    trans = mix(trans, liftG, uFrost * 0.45 * hazeGate);

    float glassAmt = pow(1.0 - uDissolve, 1.5);
    float lit = uSpec * glassAmt;
    vec3 rimCol = mix(vec3(0.80, 0.87, 0.97), vec3(1.0), uLightGlass);

    // Light backdrop: the thick edge glows softly white over a clear face, with a hairline that is
    // bright along the top and right and a thin dark silhouette down the left and bottom.
    float sc = uPlateScale;
    float tLum = dot(trans, vec3(0.2126, 0.7152, 0.0722));
    float lightOnly = smoothstep(0.35, 0.85, tLum);
    float hw = smoothstep(-0.85, 0.5, dot(nOut, rot(vec2(0.5, 0.866), uLightAng)));
    float tileBand = band(s, 0.016 * sc, 0.075 * sc, 0.022 * sc);
    float dropBand = (1.0 - smoothstep(0.06 * sc, 0.13 * sc, s)) * smoothstep(0.0, 0.004 * sc, s);
    float glow = mix(0.32 * tileBand, 0.75 * dropBand, uDrop) * lightOnly;
    float edgeLine = gauss(s, 0.005 * sc, 0.0045 * sc);
    float lip = gauss(s, 0.15 * sc, 0.007 * sc) * uDouble * (1.0 - uDrop);
    vec3 lightGlass = mix(trans, vec3(1.0), glow * glassAmt);
    lightGlass += (0.075 * hw * edgeLine + 0.06 * (0.4 + 0.6 * hw) * lip) * lit;
    lightGlass *= 1.0 - 0.05 * (1.0 - hw) * edgeLine * glassAmt * (1.0 - uDrop);
    lightGlass = mix(lightGlass, vec3(1.0), 0.55 * uDrop * glassAmt * edgeLine);

    // Dark backdrop: a cool rim light that grows toward the steep edge, and a small key highlight.
    vec3 Nl = normalize(vec3(-grad, 1.0));
    float edge = 1.0 - Nl.z;
    vec2 ldir = rot(normalize(vec2(-0.62, 0.78)), uLightAng);
    float side = dot(nOut, ldir);
    float fres = pow(edge, 1.5);
    vec3 rim = rimCol * fres * (0.35 + 0.65 * max(side, -side * 0.8)) * uRim * 0.65;
    vec3 Hv = normalize(normalize(vec3(-0.45, 0.6, 0.66)) + vec3(0.0, 0.0, 1.0));
    float spc = pow(max(dot(Nl, Hv), 0.0), 140.0) * 0.8 * smoothstep(0.0, 0.25, y1);
    vec3 darkGlass = trans * (1.0 - 0.25 * fres) + (rim + vec3(spc)) * lit;
    darkGlass = mix(darkGlass, rimCol, uDrop * 0.4 * uSpec * (1.0 - smoothstep(0.0, 0.1 * uPlateScale, s)));
    vec3 glass = mix(darkGlass, lightGlass, uLightGlass);

    // While the glass holds the logo a soft band of light crosses the face, brightest near the rim.
    float sweepD = dot(p / uPlateScale, normalize(vec2(0.8, 0.6))) - uSweep;
    float sheen = uSheen * glassAmt * exp(-sweepD * sweepD / 0.03) * (0.55 + 0.45 * (1.0 - x));
    glass = mix(glass, vec3(1.0), sheen * mix(0.22, 0.42, uLightGlass));

    float cov = clamp(0.5 - sd / soft, 0.0, 1.0);
    col = mix(bg, glass, cov);
  }

  vec3 outc = mix(plain, col, uPlateAlpha);
  outc += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  outColor = vec4(outc, 1.0);
}`;function V(o){const e=o.getContext("webgl2",{antialias:!1,premultipliedAlpha:!1});if(!e)return null;const a=(d,b)=>{const m=e.createShader(d);if(e.shaderSource(m,b),e.compileShader(m),!e.getShaderParameter(m,e.COMPILE_STATUS))throw new Error(e.getShaderInfoLog(m)||"shader");return m},t=e.createProgram();if(e.attachShader(t,a(e.VERTEX_SHADER,de)),e.attachShader(t,a(e.FRAGMENT_SHADER,he)),e.linkProgram(t),!e.getProgramParameter(t,e.LINK_STATUS))throw new Error(e.getProgramInfoLog(t)||"program");e.useProgram(t),e.bindBuffer(e.ARRAY_BUFFER,e.createBuffer()),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const r=e.getAttribLocation(t,"aPos");e.enableVertexAttribArray(r),e.vertexAttribPointer(r,2,e.FLOAT,!1,0,0);const l={},u=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<u;d++){const b=e.getActiveUniform(t,d);l[b.name]=e.getUniformLocation(t,b.name)}const i=e.createTexture(),n=e.createTexture();e.uniform1i(l.uSdf,0),e.uniform1i(l.uCol,1);let h=!1;const s=d=>{e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,d),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)};function v(d){e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.texImage2D(e.TEXTURE_2D,0,e.R16F,c,c,0,e.RED,e.FLOAT,d.sdf),s(e.LINEAR),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,n),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,e.RGBA,e.UNSIGNED_BYTE,d.canvas),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.generateMipmap(e.TEXTURE_2D),s(e.LINEAR_MIPMAP_LINEAR),h=!0}function p(d,b,m,F){if(h){e.viewport(0,0,b,m),e.uniform2f(l.uCenter,b/2,m/2),e.uniform1f(l.uTile,F),e.uniform1f(l.uTexSize,c),e.uniform1f(l.uBoxFrac,J);for(const S in d){const R=d[S];typeof R=="number"&&l[S]&&e.uniform1f(l[S],R)}e.uniform3fv(l.uBg,d.uBg),e.uniform3fv(l.uPlateCol,d.uPlateCol),e.uniform3fv(l.uLogoCol,d.uLogoCol),e.uniform2fv(l.uLogoOff,d.uLogoOff),e.drawArrays(e.TRIANGLES,0,3)}}function x(){var d;(d=e.getExtension("WEBGL_lose_context"))==null||d.loseContext()}return{setLogo:v,render:p,dispose:x}}const me=1.1,z=.5,ge=o=>o.present+me,q=o=>o<0?0:o>1?1:o,I=(o,e,a)=>o+(e-o)*a,L=(o,e,a)=>{const t=q((a-o)/(e-o));return t*t*(3-2*t)},K=(o,e,a)=>{const t=q((a-o)/(e-o));return t*t*t*(t*(t*6-15)+10)};function N(o){let e=o.replace("#","");e.length===3&&(e=e.replace(/./g,"$&$&"));const a=parseInt(e.slice(0,6),16)||0;return[(a>>16&255)/255,(a>>8&255)/255,(a&255)/255]}const Y=([o,e,a])=>.2126*o+.7152*e+.0722*a;function k(o,e,a){if(o<=0)return 0;const t=2*Math.PI/e;if(a>=1)return 1-Math.exp(-t*o)*(1+t*o);const r=t*Math.sqrt(1-a*a);return 1-Math.exp(-a*t*o)*(Math.cos(r*o)+a*t/r*Math.sin(r*o))}const $=new Map;function Z(o,e,a){const t=`${o}/${e}/${a}`;let r=$.get(t);if(r===void 0){let l=0,u=3;for(let i=0;i<40;i++){const n=(l+u)/2;k(n,e,a)<o?l=n:u=n}$.set(t,r=u)}return r}function pe(o,e,a=0){const t=e.present,r=e.keepPlate?1:0,l=1-e.bounce,u=k(o+.01,e.response,l),i=Z(.85,e.response,l)-.01,n=Z(.92,e.response,l)-.01,h=k(o-n,.4,1),s=1-L(.05,1,h),v=L(0,.08,o),p=e.drift*k(o-.3,2.2,1),x=.25*k(o,.7,1)+.75*K(0,e.glide,o),d=k(o-.5,2.4,1),b=k(o-t,.95,1),m=k(o-t-.05,.65,1),F=.15*e.bulge*(1-L(.4,.95,u)),S=(1+(e.startZoom-1)*(1-x))*(1-.045*d)*I(1,e.finalScale,b)*(1-.06*a),R=I(e.bevelWidth,Math.max(e.bevelWidth,.4),s),E=I(e.startSize,1,u)*(1+p)*(1+.14*m*(1-r))*(1-r*(.03*m+.06*a)),f=N(e.background);return{uPlateScale:E,uShapeN:I(2,e.corner,h),uCornerN:e.corner,uOptics:1-L(.55,1,m),uPlateAlpha:r?v*(1-a):v*(1-L(.45,1,m)),uLogoHalf:e.logoScale*S,uLogoOff:[e.logoOffset[0]*S,e.logoOffset[1]*S],uKeep:r,uSheen:e.sheen,uSweep:I(-1.6,1.6,K(.9,t-.1,o)),uLightAng:e.lightTurn*K(.4,t+.4,o),uBold:e.swell*.03*(1-x),uBlur:e.focus*.05*(1-L(.3,.95,u))+.03*a,uFrost:e.focus*(1-L(.5,.95,u)),uPinch:.38*e.stretch*L(.1,.9,h)*L(.75,.97,x),uTilt:e.tilt,uDome:F,uDrop:s,uRim:1+.8*s,uHalo:e.halo*(.5+.5*s)*(1-r*m),uShadow:Math.max(e.shadow*L(.45,.8,u)*(1-L(0,.6,h)),.8*e.shadow*r*m),uGhost:L(0,.03,o)*(1-L(.04,.08,o)),uRipR:1+.9*Math.max(0,o-i),uRipA:e.ripple*L(i,i+.06,o)*Math.exp(-Math.max(0,o-i)/.6),uBare:(1-r)*L(t-.25,t,o)*(1-a),uReach:R*E,uCornerPull:e.cornerPull,uStreak:e.edgeSmear,uWiden:e.cornerWidth,uSlab:.3*e.opticalDepth,uEtaSpread:.06,uFocus:e.cornerFocus,uFocusK:1,uFocusSplit:.056*e.colorBleed,uRimLine:.09,uCornerOn:L(.35,1,h),uGlow:.012*e.colorBleed,uFaceDisp:.012*e.dispersion,uVivid:.85,uDissolve:m,uDisp:e.dispersion,uDouble:e.doubleBevel,uBevelW:R*(1-m),uSpec:e.specular,uIconPlate:e.iconPlate?1:0,uUseColor:e.originalColors?1:0,uLightScene:Y(f)>.5?1:0,uLightGlass:Y(e.iconPlate?N(e.plateColor):f)>.5?1:0,uBg:f,uPlateCol:N(e.plateColor),uLogoCol:N(e.logoColor)}}function ve({logo:o,look:e="light",background:a,logoColor:t,plateColor:r,iconPlate:l,keepPlate:u,originalColors:i,tileSize:n,logoScale:h,finalScale:s,logoOffset:v,loop:p=!0,hold:x,speed:d=1,time:b,tuning:m,label:F="Logo",className:S,style:R,onClick:E,...f}){const w=O.useRef(null),g=O.useRef(null),[M,P]=O.useState(!1),B=JSON.stringify(m??{}),D=v?v.join(","):"",T=O.useMemo(()=>{const A=Object.fromEntries(Object.entries({background:a,logoColor:t,plateColor:r,iconPlate:l,keepPlate:u,originalColors:i,tileSize:n,logoScale:h,finalScale:s,hold:x}).filter(([,G])=>G!==void 0));return D&&(A.logoOffset=D.split(",").map(Number)),{...re[e],...A,...JSON.parse(B)}},[e,a,t,r,l,u,i,n,h,s,x,D,B]),_=O.useRef({settings:T,loop:p,speed:d,time:b});_.current={settings:T,loop:p,speed:d,time:b},O.useEffect(()=>{const y=w.current;if(!y)return;const A=xe(y,_);if(!A){P(!0);return}return g.current=A,()=>{g.current=null,A.dispose()}},[]),O.useEffect(()=>{var y;(y=g.current)==null||y.invalidate()},[T,p,d,b]),O.useEffect(()=>{let y=!1;return fe(o).then(A=>{var G;y||(G=g.current)==null||G.setLogo(A)},()=>P(!0)),()=>{y=!0}},[o]);const U=O.useMemo(()=>M?Q(o):"",[M,o]);return C.jsx("div",{ref:w,role:"img","aria-label":F,className:ee("relative isolate cursor-pointer overflow-hidden select-none",S),style:{backgroundColor:T.background,...R},onClick:y=>{var A;(A=g.current)==null||A.replay(),E==null||E(y)},...f,children:M&&C.jsx("img",{src:U,alt:"","aria-hidden":"true",style:{position:"absolute",inset:0,margin:"auto",width:"40%",height:"40%",objectFit:"contain"}})})}function xe(o,e){const a=document.createElement("canvas");a.setAttribute("aria-hidden","true"),a.style.cssText="position:absolute;inset:0;width:100%;height:100%;display:block",o.appendChild(a);let t=null;try{t=V(a)}catch(f){console.error(f)}if(!t)return a.remove(),null;const r=window.matchMedia("(prefers-reduced-motion: reduce)").matches;let l=null,u=r?1.4:0,i=!r,n=0,h=0,s=!0,v=!1,p=!1,x=0,d=0;function b(f){x=0;const w=Math.min(.1,(f-d)/1e3);d=f;const{settings:g,loop:M,speed:P,time:B}=e.current,D=ge(g);if(B!==void 0)i=!1,u=B,h=q((B-D-Math.max(.05,g.hold))/z);else if(i&&l)if(n>0){n-=w;const T=h;h=q(1-n/z),n<=0&&(n=0,h=0,u=0),(h!==T||u===0)&&(s=!0)}else u+=w*P,u>=D&&(u=D,M?n=Math.max(.05,g.hold)+z:i=!1),s=!0;if(s&&l&&t&&!p){const T=Math.min(window.devicePixelRatio||1,2),_=a.clientWidth,U=a.clientHeight,y=Math.max(1,Math.round(_*T)),A=Math.max(1,Math.round(U*T));(a.width!==y||a.height!==A)&&(a.width=y,a.height=A);const G=Math.min(g.tileSize,Math.min(_,U)/1.75);t.render(pe(Math.min(u,D),g,h),y,A,G*T),s=!1}v&&i&&l&&!p&&(x=requestAnimationFrame(b))}function m(){x||!v||p||(d=performance.now(),x=requestAnimationFrame(b))}const F=new IntersectionObserver(([f])=>{v=f.isIntersecting,v?m():x&&(cancelAnimationFrame(x),x=0)});F.observe(o);const S=new ResizeObserver(()=>{s=!0,m()});S.observe(o);const R=f=>{f.preventDefault(),p=!0},E=()=>{p=!1;try{t=V(a),t&&l&&t.setLogo(l)}catch(f){console.error(f)}s=!0,m()};return a.addEventListener("webglcontextlost",R),a.addEventListener("webglcontextrestored",E),{setLogo(f){l=f,t==null||t.setLogo(f),r||(u=0,i=!0,n=0,h=0),s=!0,m()},replay(){u=0,i=!0,n=0,h=0,s=!0,m()},invalidate(){s=!0,m()},dispose(){x&&cancelAnimationFrame(x),F.disconnect(),S.disconnect(),a.removeEventListener("webglcontextlost",R),a.removeEventListener("webglcontextrestored",E),t==null||t.dispose(),a.remove()}}}function Se(){const[o,e]=O.useState(!0),a=te();return O.useEffect(()=>{const t=setTimeout(()=>e(!1),a?700:3100);return()=>clearTimeout(t)},[a]),O.useEffect(()=>{if(!o)return;const t=document.getElementById("root"),r=t==null?void 0:t.inert,l=document.body.style.overflow;t&&(t.inert=!0),document.body.style.overflow="hidden";const u=i=>{i.key==="Escape"&&e(!1)};return document.addEventListener("keydown",u),()=>{t&&(t.inert=r||!1),document.body.style.overflow=l,document.removeEventListener("keydown",u)}},[o]),oe.createPortal(C.jsx(ae,{children:o&&C.jsxs(le.div,{className:"landing-reveal","data-testid":"landing-reveal",initial:{opacity:1},exit:{opacity:0},transition:{duration:a?0:.35},children:[a?C.jsx("img",{className:"reveal-static-logo",src:"/images/logo.png",alt:"SPARK-DV"}):C.jsx(ve,{logo:"/images/logo.png",label:"SPARK-DV glass logo reveal",className:"landing-glass",background:"#f6f5f1",originalColors:!0,loop:!1,tileSize:260,speed:1.4,tuning:{present:1.6,glide:1.4,startZoom:1.7}}),C.jsx("p",{children:"Innovating the future of dental care."}),C.jsxs("button",{autoFocus:!0,className:"reveal-skip",onClick:()=>e(!1),children:["Enter SPARK-DV ",C.jsx("span",{"aria-hidden":"true",children:"↗"})]})]})}),document.body)}export{Se as default};
