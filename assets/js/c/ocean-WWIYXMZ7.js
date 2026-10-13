import{a as ke,b as le}from"./chunk-RENIC4OO.js";import{A as ie,B as v,Ba as Ae,C as B,G as k,Ha as Pe,I as se,J as Y,K as Me,L,N as V,O as Se,P as G,R as be,U as Te,V as We,c as xe,d as we,ga as ce,ka as Z,la as ze,u as ge,w as re,x as ye,xa as Ce}from"./chunk-L2M37FP4.js";import"./chunk-N4BKRCPD.js";var j=96;function Qe(){let a=(j+1)*2,n=new Me,o=new Float32Array(a),l=new Float32Array(a);for(let i=0;i<=j;i++)o[i*2]=o[i*2+1]=i/j,l[i*2]=-1,l[i*2+1]=1;let h=[];for(let i=0;i<j;i++){let u=i*2;h.push(u,u+1,u+2,u+1,u+3,u+2)}return n.setAttribute("position",new Y(new Float32Array(a*3),3)),n.setAttribute("aT",new Y(o,1)),n.setAttribute("aSide",new Y(l,1)),n.setIndex(h),n}var Ue=`
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
  }`,Je=`
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
  }`;function Ee(a,{wind:n=new ye(0,-.006)}={}){let o=new G,l=Qe(),h=[];a.forEach((u,w)=>{for(let f of[0,1]){let d=new V({vertexShader:Ue,fragmentShader:Je,transparent:!0,depthWrite:!1,side:we,uniforms:{uOrigin:{value:new v},uLen:{value:1},uW0:{value:1.4},uW1:{value:10},uTime:{value:0},uSeed:{value:w*1.37+.5},uVert:{value:f},uWind:{value:n.clone()},uAlpha:{value:.4},uGap:{value:.05}}}),s=new L(l,d);s.frustumCulled=!1,s.renderOrder=200,o.add(s),h.push({mesh:s,local:u,vert:f})}});let i=new v;return{group:o,update({len:u,gapMeters:w,alpha:f,time:d,w0:s=1.8,w1:p}){for(let m of h){let c=m.mesh.material.uniforms;m.local.updateWorldMatrix(!0,!1),c.uOrigin.value.setFromMatrixPosition(m.local.matrixWorld),c.uLen.value=Math.max(1,u),c.uGap.value=Math.min(.5,w/Math.max(1,u)),c.uAlpha.value=f*(m.vert?.4:.8),c.uTime.value=d,c.uW0.value=s,c.uW1.value=p??5+u*.02}},set visible(u){o.visible=u}}}var W=a=>a*a*a*(a*(a*6-15)+10),T=(a,n,o)=>re.clamp((a-n)/(o-n),0,1),z=re.lerp,qe=Math.PI/180;function $e(a,n=256){let o=document.createElement("canvas");o.width=o.height=n;let l=o.getContext("2d"),h=l.createImageData(n,n),i=(f,d)=>{let s=Math.sin(f*127.1+d*311.7+a*74.7)*43758.5453;return s-Math.floor(s)},u=(f,d)=>{let s=Math.floor(f),p=Math.floor(d),m=f-s,c=d-p,g=m*m*(3-2*m),y=c*c*(3-2*c),S=i(s,p),E=i(s+1,p),D=i(s,p+1),q=i(s+1,p+1);return S+(E-S)*g+(D-S)*y+(S-E-D+q)*g*y};for(let f=0;f<n;f++)for(let d=0;d<n;d++){let s=d/n,p=f/n,m=0,c=.5,g=3;for(let N=0;N<5;N++)m+=c*u(s*g,p*g),g*=2.1,c*=.5;let y=s-.5,S=p-.5,E=Math.max(0,1-Math.sqrt(y*y+S*S)*2.1),D=Math.max(0,Math.min(1,(m*E*1.9-.42)*2.4)),q=226+Math.round(29*Math.min(1,m)),x=(f*n+d)*4;h.data[x]=q,h.data[x+1]=q+2,h.data[x+2]=255,h.data[x+3]=Math.round(D*255)}l.putImageData(h,0,0);let w=new ce(o);return w.colorSpace=ge,w}function et(){let a=document.createElement("canvas");a.width=64,a.height=256;let n=a.getContext("2d"),o=n.createRadialGradient(32,128,4,32,128,120);return o.addColorStop(0,"rgba(0,12,28,0.45)"),o.addColorStop(1,"rgba(0,12,28,0)"),n.fillStyle=o,n.fillRect(0,0,64,256),new ce(a)}function tt(a,n){a.updateMatrixWorld(!0);let o=new B().setFromObject(a),l=o.getCenter(new v),h=o.min.y,i=o.max.y-o.min.y,u=new v,w=new v,f=0;if(a.traverse(m=>{if(!m.isMesh)return;let c=m.geometry.attributes.position,g=Math.max(1,Math.floor(c.count/4e3));for(let y=0;y<c.count;y+=g)u.fromBufferAttribute(c,y).applyMatrix4(m.matrixWorld),u.y>h+i*.82&&(w.add(u),f++)}),!f)return;w.divideScalar(f);let d=new v(l.x-w.x,0,l.z-w.z);if(d.lengthSq()<1e-6)return;d.normalize();let s=Math.atan2(n.x,n.z)-Math.atan2(d.x,d.z),p=new ie().setFromAxisAngle(new v(0,1,0),s);a.quaternion.premultiply(p),a.updateMatrixWorld(!0)}function at(a){a.updateMatrixWorld(!0);let n=new B().setFromObject(a),o=(n.max.x-n.min.x)/2,l=(n.max.x+n.min.x)/2,h=new v,i=0,u=0,w=0,f=0,d=0,s=0;if(a.traverse(m=>{if(!m.isMesh)return;let c=m.geometry.attributes.position,g=Math.max(1,Math.floor(c.count/8e3));for(let y=0;y<c.count;y+=g){h.fromBufferAttribute(c,y).applyMatrix4(m.matrixWorld);let S=h.x-l;S>o*.2?(i+=h.z,u+=S,w++):S<-o*.2&&(f+=h.z,d+=S,s++)}}),!w||!s)return 0;let p=(i/w-f/s)/(u/w-d/s);return Math.abs(p)<.15?Math.atan(p):0}var M={rise1:[0,.18],rise2:[.18,.36],clouds:[.36,.5],cross:[.46,.64],pitch:[.6,.72],away:[.7,1]};async function ft(a){let[n,o]=await Promise.all([le(a.root,"ship"),le(a.root,"plane").catch(()=>null)]),l=new be,h=666698;l.background=new k(9418712);let i=new Se(34,1,4,22e3);i.rotation.order="YXZ";let u=new Pe(a.renderer);l.environment=u.fromScene(new ke,.04).texture,l.environmentIntensity=.9,u.dispose(),l.add(new Ce(15398143,3102840,1.5));let w=new Ae(16773596,3);w.position.set(-500,900,300),l.add(w);let f=new L(new ze(16e3,32,16),new V({side:xe,depthWrite:!1,fog:!1,uniforms:{uTop:{value:new k(2911408)},uHor:{value:new k(14084340)},uSun:{value:new v(-.45,.32,.25).normalize()}},vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform vec3 uTop, uHor, uSun; varying vec3 vD; void main(){ float h = clamp(vD.y, -0.2, 1.0); vec3 c = mix(uHor, uTop, pow(max(h,0.0), 0.5)); float s = pow(max(dot(vD, uSun), 0.0), 48.0); c += vec3(1.0,0.93,0.78) * s * 0.8; gl_FragColor = vec4(c, 1.0); }"}));f.renderOrder=-10,l.add(f);let d=new V({uniforms:{uTime:{value:0},uTravel:{value:0},uHeight:{value:300},uDeep:{value:new k(735838)},uMid:{value:new k(1532303)},uSky:{value:new k(10274790)},uHaze:{value:new k(14084340)},uSun:{value:new v(-.38,.86,.33).normalize()},uCam:{value:new v},uOct:{value:a.lowEnd?2:a.mobile?3:4},uLen:{value:128},uShip:{value:1}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`
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
      }`}),s=new L(new Z(4e4,4e4),d);s.rotation.x=-Math.PI/2,l.add(s),n.rotation.y=Math.PI/2;let p=n.userData.def?.length||128;d.uniforms.uLen.value=p,n.position.y=-p*.04,l.add(n);let m={value:1};n.traverse(e=>{if(e.isMesh){e.material=Array.isArray(e.material)?e.material.map(t=>t.clone()):e.material.clone();for(let t of[].concat(e.material))t.onBeforeCompile=r=>{r.uniforms.uShipK=m,r.fragmentShader=`uniform float uShipK;
`+r.fragmentShader.replace("void main() {",`void main() {
  if (fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))) > uShipK) discard;`)},t.customProgramCacheKey=()=>"oceanShipDither"}});let c=new L(new Z(p*.24,p*1.08),new se({map:et(),transparent:!0,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.set(p*.035,.2,p*.04),l.add(c);let g=new G;l.add(g);let y=[];for(let e of[1,2,3,4,5])await a.yield?.(),y.push($e(e,a.mobile?160:256));let S=e=>(e.onBeforeCompile=t=>{t.vertexShader=`varying float vNearFade;
`+t.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
  vNearFade = smoothstep(30.0, 340.0, -mvPosition.z);`),t.fragmentShader=`varying float vNearFade;
`+t.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  gl_FragColor.a *= vNearFade;`)},e),E=y.map(e=>S(new se({map:e,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1}))),D=new Z(1,1),q=11,x=()=>((q=q*16807%2147483647)-1)/2147483646,N=a.lowEnd?60:a.mobile?90:160,ue=(e,t,r,A)=>{let b=new L(D,E[g.children.length%E.length]);b.rotation.x=-Math.PI/2,b.rotation.z=x()*Math.PI*2,b.scale.set(r,r*(.75+x()*.4),1),b.position.set(e,A,t),g.add(b)};for(let e=0;e<N;e++){let t=x()*Math.PI*2,r=Math.pow(x(),.8)*3600;ue(Math.cos(t)*r,Math.sin(t)*r-900,300+x()*720,1550+x()*600)}for(let e=0;e<10;e++)ue((x()-.5)*900,-300+x()*1100,620+x()*480,1650+x()*420);let fe=y.map(e=>new Te({map:e,transparent:!0,depthWrite:!1,toneMapped:!1,fog:!1,opacity:.92}));for(let e=0;e<(a.lowEnd?16:a.mobile?26:46);e++){let t=new We(fe[e%fe.length]),r=700+x()*1300;t.scale.set(r*(1.2+x()*.6),r,1),t.position.set((x()-.5)*9e3,2e3+x()*500,-2500-x()*9e3),g.add(t)}g.children.forEach((e,t)=>e.renderOrder=10+t);let P=new G;l.add(P);let K=70;if(o){tt(o,new v(0,0,-1)),P.add(o),o.traverse(t=>{if(!t.isMesh)return;let r=Array.isArray(t.material)?t.material:[t.material];for(let A of r)A&&"envMapIntensity"in A&&(A.envMapIntensity=1.2)});let e=new B().setFromObject(o).getSize(new v);K=Math.max(e.x,e.z)}let Fe=o?.userData.def?.engines||[[-.596,.195,-.034],[-.4265,.231,-.096],[-.253,.266,-.155],[.253,.266,-.155],[.4265,.231,-.096],[.596,.195,-.034]],F=null;if(o){o.updateMatrixWorld(!0);let e=new B().setFromObject(o),t=e.getCenter(new v),r=e.getSize(new v),A=Fe.map(([ae,oe,ne])=>{let O=new G;return O.position.copy(o.worldToLocal(new v(t.x+ae*r.x*.5,e.min.y+oe*r.y,t.z+ne*r.z))),o.add(O),O}),b=at(o);b&&(o.quaternion.premultiply(new ie().setFromAxisAngle(new v(0,1,0),b)),o.updateMatrixWorld(!0)),F=Ee(A),l.add(F.group)}let de=2700,Q=420,U=(Q- -280)/(M.cross[1]-M.cross[0]),J=M.cross[0],$=Q,Ie=e=>$-Math.max(0,e-J)*U,pe=80,Le=(e,t)=>t.set(0,de+W(T(e,M.pitch[0],1))*pe,Ie(e)),De=e=>{let t=T(e,M.pitch[0],1),r=pe*30*t*t*(1-t)*(1-t)/(1-M.pitch[0]);return Math.atan2(r,U)},I=!1,ee=34,C={x:0,y:0,tx:0,ty:0};window.addEventListener("pointermove",e=>{e.pointerType==="mouse"&&(C.tx=e.clientX/innerWidth-.5,C.ty=e.clientY/innerHeight-.5)},{passive:!0});let Ge=e=>{let t=Math.log(p*(I?2.4:2)),r=Math.log(3350);return Math.exp(z(t,r,W(T(e,0,M.cross[0]+.03))))},He=e=>{if(I)return 0;let t=z(-.2,.18,W(T(e,.16,.24)));return z(t,0,W(T(e,.36,.46)))},H=new v,me=new v;function Oe(e,t){i.aspect=e/t,I=i.aspect<.85,ee=I?58:34,i.fov=ee,J=I?.4:M.cross[0],$=Q+(M.cross[0]-J)*U,i.clearViewOffset(),i.updateProjectionMatrix()}function _e(e,t){let r=te;C.x+=(C.tx-C.x)*.04,C.y+=(C.ty-C.y)*.04;let A=Math.tan(ee*qe/2),b=Ge(r),ae=b*A*i.aspect,oe=b*A,ne=He(r)*ae+C.x*b*.02*(1-W(T(r,...M.pitch))),O=I?z(.38,.14,W(T(r,.36,.46))):0,Be=oe*O+C.y*b*.015*(1-W(T(r,...M.pitch)));if(Le(r,H),P.position.copy(H),P.rotation.set(De(r),0,Math.sin(t*.45)*.004),P.visible=ve||r>M.cross[0]-.02,F){F.visible=P.visible;let he=W(T(r,...M.pitch)),Ze=K*z(1.9,9.5,W(T(r,...M.away))),je=Math.max(1,Math.min(z(560,Ze*.55,he),$+200-H.z));F.update({len:je,gapMeters:1.5,alpha:z(.62,.5,he),time:t})}let R=W(T(r,...M.pitch)),Ve=W(T(r,...M.away)),Ne=K*z(1.9,9.5,Ve),Ke=H.x,Re=de+K*.3,Xe=H.z+Ne,Ye=-(I?13:4.5)*qe;me.set(z(ne,Ke,R),z(b,Re,R),z(Be,Xe,R)),i.position.copy(me),i.rotation.set(z(-Math.PI/2,Ye,R),0,0),f.position.copy(i.position);let _=d.uniforms;_.uTime.value=t,_.uTravel.value=t*3.5+r*360,_.uHeight.value=i.position.y,_.uCam.value.copy(i.position),n.rotation.z=Math.sin(t*.5)*.004;let X=1-W(T(r,.42,.45));_.uShip.value=X,m.value=X,c.material.opacity=X,n.visible=c.visible=X>0,g.position.x=90+30*Math.sin(t*.08)}let te=0,ve=!1;return{scene:l,camera:i,background:h,resize:Oe,update:_e,warmShow:e=>{ve=e,P.visible=e||te>M.cross[0]-.02,F&&(F.visible=P.visible)},setProgress:e=>{te=e}}}export{ft as createOcean};
