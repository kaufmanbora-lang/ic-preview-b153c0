import{a as le}from"./chunk-RWUBUMAO.js";import{A as ie,B as m,Ba as Ce,C as V,G as k,I as se,J as Z,K as ye,L as I,N,O as Me,P as G,R as Se,U as be,V as Te,c as he,d as xe,ga as ce,ka as R,la as We,u as we,w as re,x as ge,xa as ze}from"./chunk-L2M37FP4.js";import"./chunk-N4BKRCPD.js";var j=96;function Ze(){let a=(j+1)*2,n=new ye,o=new Float32Array(a),l=new Float32Array(a);for(let i=0;i<=j;i++)o[i*2]=o[i*2+1]=i/j,l[i*2]=-1,l[i*2+1]=1;let v=[];for(let i=0;i<j;i++){let u=i*2;v.push(u,u+1,u+2,u+1,u+3,u+2)}return n.setAttribute("position",new Z(new Float32Array(a*3),3)),n.setAttribute("aT",new Z(o,1)),n.setAttribute("aSide",new Z(l,1)),n.setIndex(v),n}var Re=`
  attribute float aT; attribute float aSide;
  uniform vec3 uOrigin; uniform float uLen, uW0, uW1, uTime, uSeed, uVert; uniform vec2 uWind;
  varying float vT; varying float vSide; varying vec3 vW;
  void main() {
    float d = aT * uLen;
    vec3 c = uOrigin + vec3(0.0, 0.0, d);               // flight is along \u2212z, so the trail lies behind (+z)
    float k = pow(aT, 1.35);
    // wind drift + slow meander (grows downstream), and a slight sink of the older air
    // straight back along the flight line; only a gentle sink and a faint meander far downstream
    c.x += uWind.x * k * uLen + sin(d * 0.02 + uSeed * 2.7 + uTime * 0.2) * k * 0.6;
    c.y += uWind.y * k * uLen + cos(d * 0.018 + uSeed * 1.3 + uTime * 0.15) * k * 0.5;
    float w = mix(uW0, uW1, pow(aT, 0.7));
    vec3 off = uVert > 0.5 ? vec3(0.0, aSide * w * 0.22, 0.0) : vec3(aSide * w * 0.5, 0.0, 0.0); // flatter in height, like real contrails
    vec3 p = c + off;
    vT = aT; vSide = aSide; vW = p;
    gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0);
  }`,je=`
  uniform float uAlpha, uGap, uTime, uSeed;
  varying float vT; varying float vSide; varying vec3 vW;
  float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
    return mix(mix(h(i), h(i + vec2(1, 0)), f.x), mix(h(i + vec2(0, 1)), h(i + vec2(1, 1)), f.x), f.y); }
  float fbm(vec2 p){ return n(p) * 0.55 + n(p * 2.1 + 3.7) * 0.3 + n(p * 4.3 - 1.9) * 0.15; }
  void main() {
    float edge = pow(max(0.0, 1.0 - vSide * vSide), 0.9);
    float start = smoothstep(uGap, uGap + 0.035, vT);         // forms right behind the nozzle
    float fade = pow(1.0 - vT, 1.15);
    // air-anchored puffs: noise in world space, slowly evolving
    float puffs = fbm(vec2(vW.z * 0.05 + uSeed * 7.0, vSide * 1.6 + vW.x * 0.02 + uTime * 0.04));
    float body = 0.45 + 0.75 * puffs;
    float a = edge * start * fade * body * uAlpha;
    vec3 col = mix(vec3(0.82, 0.88, 0.95), vec3(1.0), smoothstep(0.3, 0.8, puffs));
    gl_FragColor = vec4(col, a);
  }`;function Ae(a,{wind:n=new ge(0,-.006)}={}){let o=new G,l=Ze(),v=[];a.forEach((u,h)=>{for(let d of[0,1]){let p=new N({vertexShader:Re,fragmentShader:je,transparent:!0,depthWrite:!1,side:xe,uniforms:{uOrigin:{value:new m},uLen:{value:1},uW0:{value:1.4},uW1:{value:10},uTime:{value:0},uSeed:{value:h*1.37+.5},uVert:{value:d},uWind:{value:n.clone()},uAlpha:{value:.4},uGap:{value:.05}}}),s=new I(l,p);s.frustumCulled=!1,s.renderOrder=200,o.add(s),v.push({mesh:s,local:u,vert:d})}});let i=new m;return{group:o,update({len:u,gapMeters:h,alpha:d,time:p,w0:s=1.8,w1:w}){for(let f of v){let c=f.mesh.material.uniforms;f.local.updateWorldMatrix(!0,!1),c.uOrigin.value.setFromMatrixPosition(f.local.matrixWorld),c.uLen.value=Math.max(1,u),c.uGap.value=Math.min(.5,h/Math.max(1,u)),c.uAlpha.value=d*(f.vert?.4:.8),c.uTime.value=p,c.uW0.value=s,c.uW1.value=w??5+u*.02}},set visible(u){o.visible=u}}}var W=a=>a*a*a*(a*(a*6-15)+10),T=(a,n,o)=>re.clamp((a-n)/(o-n),0,1),z=re.lerp,Pe=Math.PI/180;function Qe(a,n=256){let o=document.createElement("canvas");o.width=o.height=n;let l=o.getContext("2d"),v=l.createImageData(n,n),i=(d,p)=>{let s=Math.sin(d*127.1+p*311.7+a*74.7)*43758.5453;return s-Math.floor(s)},u=(d,p)=>{let s=Math.floor(d),w=Math.floor(p),f=d-s,c=p-w,S=f*f*(3-2*f),y=c*c*(3-2*c),M=i(s,w),L=i(s+1,w),q=i(s,w+1),x=i(s+1,w+1);return M+(L-M)*S+(q-M)*y+(M-L-q+x)*S*y};for(let d=0;d<n;d++)for(let p=0;p<n;p++){let s=p/n,w=d/n,f=0,c=.5,S=3;for(let H=0;H<5;H++)f+=c*u(s*S,w*S),S*=2.1,c*=.5;let y=s-.5,M=w-.5,L=Math.max(0,1-Math.sqrt(y*y+M*M)*2.1),q=Math.max(0,Math.min(1,(f*L*1.9-.42)*2.4)),x=226+Math.round(29*Math.min(1,f)),D=(d*n+p)*4;v.data[D]=x,v.data[D+1]=x+2,v.data[D+2]=255,v.data[D+3]=Math.round(q*255)}l.putImageData(v,0,0);let h=new ce(o);return h.colorSpace=we,h}function Ue(){let a=document.createElement("canvas");a.width=64,a.height=256;let n=a.getContext("2d"),o=n.createRadialGradient(32,128,4,32,128,120);return o.addColorStop(0,"rgba(0,12,28,0.45)"),o.addColorStop(1,"rgba(0,12,28,0)"),n.fillStyle=o,n.fillRect(0,0,64,256),new ce(a)}function Je(a,n){a.updateMatrixWorld(!0);let o=new V().setFromObject(a),l=o.getCenter(new m),v=o.min.y,i=o.max.y-o.min.y,u=new m,h=new m,d=0;if(a.traverse(f=>{if(!f.isMesh)return;let c=f.geometry.attributes.position,S=Math.max(1,Math.floor(c.count/4e3));for(let y=0;y<c.count;y+=S)u.fromBufferAttribute(c,y).applyMatrix4(f.matrixWorld),u.y>v+i*.82&&(h.add(u),d++)}),!d)return;h.divideScalar(d);let p=new m(l.x-h.x,0,l.z-h.z);if(p.lengthSq()<1e-6)return;p.normalize();let s=Math.atan2(n.x,n.z)-Math.atan2(p.x,p.z),w=new ie().setFromAxisAngle(new m(0,1,0),s);a.quaternion.premultiply(w),a.updateMatrixWorld(!0)}function $e(a){a.updateMatrixWorld(!0);let n=new V().setFromObject(a),o=(n.max.x-n.min.x)/2,l=(n.max.x+n.min.x)/2,v=new m,i=0,u=0,h=0,d=0,p=0,s=0;if(a.traverse(f=>{if(!f.isMesh)return;let c=f.geometry.attributes.position,S=Math.max(1,Math.floor(c.count/8e3));for(let y=0;y<c.count;y+=S){v.fromBufferAttribute(c,y).applyMatrix4(f.matrixWorld);let M=v.x-l;M>o*.2?(i+=v.z,u+=M,h++):M<-o*.2&&(d+=v.z,p+=M,s++)}}),!h||!s)return 0;let w=(i/h-d/s)/(u/h-p/s);return Math.abs(w)<.15?Math.atan(w):0}var g={rise1:[0,.18],rise2:[.18,.36],clouds:[.36,.5],cross:[.46,.64],pitch:[.6,.72],away:[.7,1]};async function st(a){let[n,o]=await Promise.all([le(a.root,"ship"),le(a.root,"plane").catch(()=>null)]),l=new Se,v=666698;l.background=new k(9418712);let i=new Me(34,1,4,22e3);i.rotation.order="YXZ",l.environment=a.environment(),l.environmentIntensity=.9,l.add(new ze(15398143,3102840,1.5));let u=new Ce(16773596,3);u.position.set(-500,900,300),l.add(u);let h=new I(new We(16e3,32,16),new N({side:he,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new k(2911408)},uHor:{value:new k(14084340)},uSun:{value:new m(-.45,.32,.25).normalize()}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 uTop, uHor, uSun; varying vec3 vD; void main(){ float h = clamp(vD.y, -0.2, 1.0); vec3 c = mix(uHor, uTop, pow(max(h,0.0), 0.5)); float s = pow(max(dot(vD, uSun), 0.0), 48.0); c += vec3(1.0,0.93,0.78) * s * 0.8; gl_FragColor = vec4(c, 1.0); }"}));h.renderOrder=-10,l.add(h);let d=new N({uniforms:{uTime:{value:0},uTravel:{value:0},uHeight:{value:300},uDeep:{value:new k(735838)},uMid:{value:new k(1532303)},uSky:{value:new k(10274790)},uHaze:{value:new k(14084340)},uSun:{value:new m(-.38,.86,.33).normalize()},uCam:{value:new m},uOct:{value:a.lowEnd?2:a.mobile?3:4},uLen:{value:128},uShip:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`
      uniform float uTime, uTravel, uHeight, uLen, uShip; uniform int uOct;
      uniform vec3 uDeep, uMid, uSky, uHaze, uSun, uCam;
      varying vec3 vW;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453123); }
      float n(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h(i),h(i+vec2(1,0)),f.x), mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x), f.y); }
      float waves(vec2 p){ float v = 0., a = .5; vec2 q = p; for (int i = 0; i < 5; i++) { if (i >= uOct) break; v += a * n(q); q = q * 2.07 + vec2(3.1, 1.7); a *= .5; } return v; }
      void main(){
        vec2 sea = vW.xz + vec2(0.0, -uTravel);
        float detail = 1.0 - smoothstep(400.0, 1800.0, uHeight);
        vec2 sp = vec2(sea.x * 0.045, sea.y * 0.075) + vec2(uTime * 0.12, uTime * 0.05);
        float e = 0.35;
        float c0 = waves(sp), cx = waves(sp + vec2(e, 0.)), cz = waves(sp + vec2(0., e));
        vec3 nrm = normalize(vec3((c0 - cx) * 1.3 * detail, 1.0, (c0 - cz) * 1.3 * detail));
        float big = n(sea * 0.0011);
        vec3 V = normalize(uCam - vW);
        float fres = pow(1.0 - max(dot(nrm, V), 0.0), 4.0);
        vec3 col = mix(uDeep, uMid, 0.35 + 0.4 * big + 0.25 * c0 * detail);
        col = mix(col, uSky, fres * 0.6);
        col += vec3(1.0, 0.96, 0.88) * pow(max(dot(nrm, normalize(uSun + V)), 0.0), 90.0) * 0.35 * detail;
        vec2 q = vW.xz;
        float hl = uLen * 0.5;
        float z = q.y - hl * 0.92;
        float behind = step(0.0, z);
        float chop = n(vec2(q.x * 0.22, (q.y - uTravel) * 0.16 + uTime * 0.8));
        float lines = smoothstep(5.0, 0.0, abs(abs(q.x) - z * 0.34)) * behind * (0.35 + 0.65 * chop);
        float trail = smoothstep(7.0 + z * 0.06, 0.0, abs(q.x)) * behind * (0.45 + 0.55 * chop);
        float fade = exp(-max(z, 0.0) / 600.0);
        vec2 el = vec2(q.x / (uLen * 0.105), q.y / (hl * 1.04));
        float ed = length(el);
        float hull = smoothstep(1.3, 1.0, ed) * step(0.98, ed) * (0.25 + 0.35 * n(q * 0.4 + uTime * 2.0)) * smoothstep(-hl, hl * 0.4, q.y);
        float bow = smoothstep(18.0, 0.0, length(q - vec2(0.0, -hl))) * chop;
        col = mix(col, vec3(0.9, 0.95, 0.98), clamp(((lines * 0.6 + trail * 0.9) * fade + hull * 0.8 + bow * 0.6) * uShip, 0.0, 1.0));
        col = mix(col, uSky * 0.85, smoothstep(900.0, 3400.0, uHeight) * 0.35);
        float dist = length(uCam - vW);
        col = mix(col, uHaze, smoothstep(2500.0, 13000.0, dist));
        gl_FragColor = vec4(col, 1.0);
      }`}),p=new I(new R(4e4,4e4),d);p.rotation.x=-Math.PI/2,l.add(p),n.rotation.y=Math.PI/2;let s=n.userData.def?.length||128;d.uniforms.uLen.value=s,n.position.y=-s*.04,l.add(n);let w={value:1};n.traverse(e=>{if(e.isMesh){e.material=Array.isArray(e.material)?e.material.map(t=>t.clone()):e.material.clone();for(let t of[].concat(e.material))t.onBeforeCompile=r=>{r.uniforms.uShipK=w,r.fragmentShader=`uniform float uShipK;
`+r.fragmentShader.replace("void main() {",`void main() {
  if (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) > uShipK) discard;`)},t.customProgramCacheKey=()=>"oceanShipDither"}});let f=new I(new R(s*.24,s*1.08),new se({map:Ue(),transparent:!0,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(s*.035,.2,s*.04),l.add(f);let c=new G;l.add(c);let S=[];for(let e of[1,2,3,4,5])await a.yield?.(),S.push(Qe(e,a.mobile?160:256));let y=e=>(e.onBeforeCompile=t=>{t.vertexShader=`varying float vNearFade;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vNearFade = smoothstep(30.0, 340.0, -mvPosition.z);`),t.fragmentShader=`varying float vNearFade;
`+t.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  gl_FragColor.a *= vNearFade;`)},e),M=S.map(e=>y(new se({map:e,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}))),L=new R(1,1),q=11,x=()=>((q=q*16807%2147483647)-1)/2147483646,D=a.lowEnd?60:a.mobile?90:160,H=(e,t,r,A)=>{let b=new I(L,M[c.children.length%M.length]);b.rotation.x=-Math.PI/2,b.rotation.z=x()*Math.PI*2,b.scale.set(r,r*(.75+x()*.4),1),b.position.set(e,A,t),c.add(b)};for(let e=0;e<D;e++){let t=x()*Math.PI*2,r=Math.pow(x(),.8)*3600;H(Math.cos(t)*r,Math.sin(t)*r-900,300+x()*720,1550+x()*600)}for(let e=0;e<10;e++)H((x()-.5)*900,-300+x()*1100,620+x()*480,1650+x()*420);let ue=S.map(e=>new be({map:e,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1,opacity:.92}));for(let e=0;e<(a.lowEnd?16:a.mobile?26:46);e++){let t=new Te(ue[e%ue.length]),r=700+x()*1300;t.scale.set(r*(1.2+x()*.6),r,1),t.position.set((x()-.5)*9e3,2e3+x()*500,-2500-x()*9e3),c.add(t)}c.children.forEach((e,t)=>e.renderOrder=10+t);let P=new G;l.add(P);let K=70;if(o){Je(o,new m(0,0,-1)),P.add(o),o.traverse(t=>{if(!t.isMesh)return;let r=Array.isArray(t.material)?t.material:[t.material];for(let A of r)A&&"envMapIntensity"in A&&(A.envMapIntensity=1.2)});let e=new V().setFromObject(o).getSize(new m);K=Math.max(e.x,e.z)}let ke=o?.userData.def?.engines||[[-.596,.195,-.034],[-.4265,.231,-.096],[-.253,.266,-.155],[.253,.266,-.155],[.4265,.231,-.096],[.596,.195,-.034]],E=null;if(o){o.updateMatrixWorld(!0);let e=new V().setFromObject(o),t=e.getCenter(new m),r=e.getSize(new m),A=ke.map(([ae,oe,ne])=>{let _=new G;return _.position.copy(o.worldToLocal(new m(t.x+ae*r.x*.5,e.min.y+oe*r.y,t.z+ne*r.z))),o.add(_),_}),b=$e(o);b&&(o.quaternion.premultiply(new ie().setFromAxisAngle(new m(0,1,0),b)),o.updateMatrixWorld(!0)),E=Ae(A),l.add(E.group)}let fe=2700,Q=420,U=(Q- -280)/(g.cross[1]-g.cross[0]),J=g.cross[0],$=Q,qe=e=>$-Math.max(0,e-J)*U,de=80,Ee=(e,t)=>t.set(0,fe+W(T(e,g.pitch[0],1))*de,qe(e)),Fe=e=>{let t=T(e,g.pitch[0],1),r=de*30*t*t*(1-t)*(1-t)/(1-g.pitch[0]);return Math.atan2(r,U)},F=!1,ee=34,C={x:0,y:0,tx:0,ty:0};window.addEventListener("pointermove",e=>{e.pointerType==="mouse"&&(C.tx=e.clientX/innerWidth-.5,C.ty=e.clientY/innerHeight-.5)},{passive:!0});let Ie=e=>{let t=Math.log(s*(F?2.4:2)),r=Math.log(3350);return Math.exp(z(t,r,W(T(e,0,g.cross[0]+.03))))},Le=e=>{if(F)return 0;let t=z(-.2,.18,W(T(e,.16,.24)));return z(t,0,W(T(e,.36,.46)))},O=new m,pe=new m;function De(e,t){i.aspect=e/t,F=i.aspect<.85,ee=F?58:34,i.fov=ee,J=F?.4:g.cross[0],$=Q+(g.cross[0]-J)*U,i.clearViewOffset(),i.updateProjectionMatrix()}function Ge(e,t){let r=te;C.x+=(C.tx-C.x)*.04,C.y+=(C.ty-C.y)*.04;let A=Math.tan(ee*Pe/2),b=Ie(r),ae=b*A*i.aspect,oe=b*A,ne=Le(r)*ae+C.x*b*.02*(1-W(T(r,...g.pitch))),_=F?z(.38,.14,W(T(r,.36,.46))):0,He=oe*_+C.y*b*.015*(1-W(T(r,...g.pitch)));if(Ee(r,O),P.position.copy(O),P.rotation.set(Fe(r),0,Math.sin(t*.45)*.004),P.visible=me||r>g.cross[0]-.02,E){E.visible=P.visible;let ve=W(T(r,...g.pitch)),Xe=K*z(1.9,9.5,W(T(r,...g.away))),Ye=Math.max(1,Math.min(z(560,Xe*.55,ve),$+200-O.z));E.update({len:Ye,gapMeters:1.5,alpha:z(.62,.5,ve),time:t})}let X=W(T(r,...g.pitch)),Oe=W(T(r,...g.away)),_e=K*z(1.9,9.5,Oe),Be=O.x,Ve=fe+K*.3,Ne=O.z+_e,Ke=-(F?13:4.5)*Pe;pe.set(z(ne,Be,X),z(b,Ve,X),z(He,Ne,X)),i.position.copy(pe),i.rotation.set(z(-Math.PI/2,Ke,X),0,0),h.position.copy(i.position);let B=d.uniforms;B.uTime.value=t,B.uTravel.value=t*3.5+r*360,B.uHeight.value=i.position.y,B.uCam.value.copy(i.position),n.rotation.z=Math.sin(t*.5)*.004;let Y=1-W(T(r,.42,.45));B.uShip.value=Y,w.value=Y,f.material.opacity=Y,n.visible=f.visible=Y>0,c.position.x=90+30*Math.sin(t*.08)}let te=0,me=!1;return{scene:l,camera:i,background:v,resize:De,update:Ge,warmShow:e=>{me=e,P.visible=e||te>g.cross[0]-.02,E&&(E.visible=P.visible)},setProgress:e=>{te=e}}}export{st as createOcean};
