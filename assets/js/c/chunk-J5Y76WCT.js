import{a as ze}from"./chunk-W7NR4AHO.js";import{d as Ot}from"./chunk-W3CDWVPH.js";import{A as Xe,B as qt,C as Gt,D as b,E as Mt,G as Ze,H as ft,I as he,K as St,Ka as jt,L as Dt,La as Yt,M as Lt,O as q,P as W,Q as Wt,R as ut,S as Nt,T as de,_ as _t,ba as Ie,d as it,f as _e,i as $t,ia as Ke,ja as ne,ka as Vt,l as It,la as Qe,ma as Je,na as zt,oa as Et,pa as qe,qa as ht,ra as U,t as Ue,w as Ve,x as ct}from"./chunk-TTYOBALV.js";var et=new b;function me(l,t,e,o,r,a){let i=2*Math.PI*r/4,s=Math.max(a-2*r,0),h=Math.PI/4;et.copy(t),et[o]=0,et.normalize();let f=.5*i/(i+s),u=1-et.angleTo(l)/h;return Math.sign(et[e])===1?u*f:s/(i+s)+f+f*(1-u)}var tt=class extends W{constructor(t=1,e=1,o=1,r=2,a=.1){if(r=r*2+1,a=Math.min(t/2,e/2,o/2,a),super(1,1,1,r,r,r),r===1)return;let i=this.toNonIndexed();this.index=null,this.attributes.position=i.attributes.position,this.attributes.normal=i.attributes.normal,this.attributes.uv=i.attributes.uv;let s=new b,h=new b,f=new b(t,e,o).divideScalar(2).subScalar(a),u=this.attributes.position.array,x=this.attributes.normal.array,m=this.attributes.uv.array,z=u.length/6,k=new b,N=.5/r;for(let G=0,D=0;G<u.length;G+=3,D+=2)switch(s.fromArray(u,G),h.copy(s),h.x-=Math.sign(h.x)*N,h.y-=Math.sign(h.y)*N,h.z-=Math.sign(h.z)*N,h.normalize(),u[G+0]=f.x*Math.sign(s.x)+h.x*a,u[G+1]=f.y*Math.sign(s.y)+h.y*a,u[G+2]=f.z*Math.sign(s.z)+h.z*a,x[G+0]=h.x,x[G+1]=h.y,x[G+2]=h.z,Math.floor(G/z)){case 0:k.set(1,0,0),m[D+0]=me(k,h,"z","y",a,o),m[D+1]=1-me(k,h,"y","z",a,e);break;case 1:k.set(-1,0,0),m[D+0]=1-me(k,h,"z","y",a,o),m[D+1]=1-me(k,h,"y","z",a,e);break;case 2:k.set(0,1,0),m[D+0]=1-me(k,h,"x","z",a,t),m[D+1]=me(k,h,"z","x",a,o);break;case 3:k.set(0,-1,0),m[D+0]=1-me(k,h,"x","z",a,t),m[D+1]=1-me(k,h,"z","x",a,o);break;case 4:k.set(0,0,1),m[D+0]=1-me(k,h,"x","y",a,t),m[D+1]=1-me(k,h,"y","x",a,e);break;case 5:k.set(0,0,-1),m[D+0]=me(k,h,"x","y",a,t),m[D+1]=1-me(k,h,"y","x",a,e);break}}};var Io=new b(0,1,0);function io(l){for(let t of Object.keys(l.attributes)){let e=l.attributes[t];if(e.array instanceof Float32Array&&!e.isInterleavedBufferAttribute)continue;let o=e.itemSize,r=new Float32Array(e.count*o),a=[e.getX,e.getY,e.getZ,e.getW];for(let i=0;i<e.count;i++)for(let s=0;s<o;s++)r[i*o+s]=a[s].call(e,i);l.setAttribute(t,new Dt(r,o))}}function co(l){if(l.index){let t=l.index.array;for(let e=0;e<t.length;e+=3){let o=t[e+1];t[e+1]=t[e+2],t[e+2]=o}return}for(let t of Object.values(l.attributes)){let e=t.itemSize,o=t.array;for(let r=0;r+2<t.count;r+=3)for(let a=0;a<e;a++){let i=o[(r+1)*e+a];o[(r+1)*e+a]=o[(r+2)*e+a],o[(r+2)*e+a]=i}}}function dt(l,t,{model:e=!1}={}){l.updateMatrixWorld(!0);let o=new Ze().copy(l.matrixWorld).invert(),r=s=>Object.keys(s.attributes).sort().join(),a=new Map,i=s=>{for(;s&&s!==l;s=s.parent)if(!s.visible)return!1;return!0};for(let s of t){if(Array.isArray(s.material)||e&&(s.isInstancedMesh||s.isSkinnedMesh||s.morphTargetInfluences||!i(s)))continue;let h=e?`${s.material.uuid}|${r(s.geometry)}`:s.material;a.has(h)||a.set(h,[]),a.get(h).push(s)}for(let s of a.values()){let h=s[0].material;if(s.length<2)continue;let f=s.every(z=>z.geometry.index),u=s.map(z=>{let k=new Ze().multiplyMatrices(o,z.matrixWorld),N=z.geometry.clone();if(e&&io(N),N.applyMatrix4(k),!f&&N.index&&(N=N.toNonIndexed()),e&&k.determinant()<0&&co(N),!e)for(let G of Object.keys(N.attributes))G!=="position"&&G!=="normal"&&G!=="uv"&&N.deleteAttribute(G);return N}),x=u.every(z=>(e||z.attributes.uv)&&z.attributes.normal)?ze(u):null;if(u.forEach(z=>z.dispose()),!x)continue;let m=new q(x,h);m.castShadow=s.some(z=>z.castShadow),m.receiveShadow=s.some(z=>z.receiveShadow);for(let z of s)z.removeFromParent(),z.geometry.dispose();l.add(m)}return l}var Ut=Math.PI/180,$=l=>{let t=Math.sin(l*127.1+311.7)*43758.5453;return t-Math.floor(t)},_o=l=>l*l*(3-2*l),Vo=(l,t,e)=>Ve.clamp((l-t)/(e-t),0,1),Te=(l,t)=>{let e=document.createElement("canvas");return e.width=l,e.height=t,[e,e.getContext("2d")]},Pe=(l,t=!1)=>{let e=new Ke(l);return e.colorSpace=Ue,t&&(e.wrapS=e.wrapT=_e),e.anisotropy=4,e};function Eo(l){let[t,e]=Te(2,256),o=e.createLinearGradient(0,0,0,256);for(let[r,a]of l)o.addColorStop(r,a);return e.fillStyle=o,e.fillRect(0,0,2,256),Pe(t)}function fo(l="#c8c3b8"){let[t,e]=Te(512,512);e.fillStyle=l,e.fillRect(0,0,512,512);let o=e.getImageData(0,0,512,512);for(let r=0;r<o.data.length;r+=4){let a=(Math.random()-.5)*16;o.data[r]+=a,o.data[r+1]+=a,o.data[r+2]+=a}e.putImageData(o,0,0),e.strokeStyle="rgba(70,66,58,.2)",e.lineWidth=2;for(let r=0;r<=512;r+=128)e.beginPath(),e.moveTo(r,0),e.lineTo(r,512),e.stroke(),e.beginPath(),e.moveTo(0,r),e.lineTo(512,r),e.stroke();return Pe(t,!0)}function jo(l="#d9d4cf",t=20,e=8){let[o,r]=Te(256,256);r.fillStyle=l,r.fillRect(0,0,256,256);for(let a=0;a<3200;a++){let i=$(a*3.7)*256,s=$(a*9.1+2)*256,h=.9+$(a*1.7)*1.4;r.fillStyle=`hsl(${t+$(a+3)*14}, ${e+$(a+5)*10}%, ${70+$(a+7)*24}%)`,r.beginPath(),r.arc(i,s,h,0,Math.PI*2),r.fill()}return Pe(o,!0)}function uo(){let[l,t]=Te(256,256);t.fillStyle="#f1efe8",t.fillRect(0,0,256,256),t.globalAlpha=.08,t.fillStyle="#6b6457";for(let e=0;e<256;e+=4)t.fillRect(e,0,1,256),t.fillRect(0,e+2,256,1);t.globalAlpha=1,t.fillStyle="#1f5fb4",t.fillRect(0,150,256,10),t.fillStyle="#ffffff",t.fillRect(78,172,100,52),t.strokeStyle="#3d4a5c",t.lineWidth=2,t.strokeRect(78,172,100,52),t.fillStyle="#3d4a5c";for(let e=0;e<4;e++)t.fillRect(88,182+e*10,60+e%2*20,3);return Pe(l)}var ke=l=>(l.castShadow=l.receiveShadow=!0,l);function pe(l,t,e,o,r,a,i,s,h=0){let f=ke(new q(new W(t,e,o),s));return f.position.set(r,a,i),f.rotation.y=h,l.add(f),f}var Xt=new b(0,1,0);function Ee(l,t,e,o,r,a=6){let i=ke(new q(new ne(o,o,t.distanceTo(e),a),r));return i.position.copy(t).add(e).multiplyScalar(.5),i.quaternion.setFromUnitVectors(Xt,e.clone().sub(t).normalize()),l.add(i),i}var pt=new b;function ho(l,t,e){pt.copy(e).sub(t);let o=pt.length()||1e-4;l.position.copy(t).addScaledVector(pt,.5),l.quaternion.setFromUnitVectors(Xt,pt.divideScalar(o)),l.scale.set(1,o,1)}var po=l=>{let t=[];return l.traverse(e=>{e.isMesh&&t.push(e)}),t};function wo(){let[l,t]=Te(512,512);t.fillStyle="#5c5a56",t.fillRect(0,0,512,512);let e=t.getImageData(0,0,512,512);for(let o=0;o<e.data.length;o+=4){let r=(Math.random()-.5)*26;e.data[o]+=r,e.data[o+1]+=r,e.data[o+2]+=r*.95}t.putImageData(e,0,0);for(let o=0;o<14;o++){let r=$(o*3.3)*512,a=$(o*7.9)*512,i=30+$(o*1.7)*70;for(let[s,h]of[[0,0],[512,0],[-512,0],[0,512],[0,-512]]){let f=t.createRadialGradient(r+s,a+h,0,r+s,a+h,i);f.addColorStop(0,`rgba(${o%2?"40,39,37":"120,117,110"},.16)`),f.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=f,t.fillRect(r+s-i,a+h-i,i*2,i*2)}}t.strokeStyle="rgba(30,29,27,.35)",t.lineWidth=1.2;for(let o=0;o<5;o++){let r=$(o*9.1)*512,a=$(o*4.4)*512;t.beginPath(),t.moveTo(r,a);for(let i=0;i<8;i++)r+=($(o*13+i)-.5)*60,a+=($(o*17+i)-.3)*50,t.lineTo(r,a);t.stroke()}return Pe(l,!0)}function Yo(l,{base:t="#c8c3b8",tint:e=11840928,asphalt:o=!1}={}){let r=o?wo():fo(t);r.repeat.set(o?220:160,o?100:75),o&&(e=16777215);let a=new q(new qe(3200,1500),new U({color:e,map:r,roughness:.95}));a.rotation.x=-Math.PI/2,a.position.set(0,0,750),a.receiveShadow=!0,l.add(a);let i=new q(new W(1400,7,2),new U({color:9670018,roughness:.95}));i.position.set(0,-3.56,1),l.add(i);let s=new q(new W(1400,.05,.4),new U({color:14201385,roughness:.6}));s.position.set(0,.03,3),l.add(s);let h=new Ie(new tt(1.1,2.2,.9,2,.2),new U({color:1842721,roughness:.9}),40),f=new Ie(new ne(.28,.34,.7,10),new U({color:2764081,roughness:.6,metalness:.4}),40),u=new ft;for(let x=0;x<40;x++)u.position.set(-240+x*12,-1.5,-.3),u.updateMatrix(),h.setMatrixAt(x,u.matrix),u.position.set(-234+x*12,.35,1.4),u.updateMatrix(),f.setMatrixAt(x,u.matrix);return f.castShadow=!0,l.add(h,f),{ground:a,conc:r}}function Oo(l,t,e,o=-260,r=260){let a=new U({color:5984327,roughness:.6,metalness:.6});for(let i of[t,e]){let s=new q(new W(r-o,.16,.2),a);s.position.set((o+r)/2,.08,i),s.receiveShadow=!0,l.add(s)}}function Uo(l,t,{x:e=-6,z:o=-18.2,draft:r=6.4,shadows:a=!0}={}){let i=new de;t.rotation.y=Math.PI/2,i.add(t),i.position.set(e,-r,o),l.add(i),t.traverse(m=>{m.isMesh&&(m.castShadow=a,m.receiveShadow=!0)});let s=t.children[0];s.updateMatrix();let h={x0:-54,x1:54,z0:-12,z1:108,floor:-103.4,top:-22},f={x0:-54,x1:54,z0:-159,z1:-40,top:-22};i.updateMatrixWorld(!0);let u=m=>s.localToWorld(new b((m.x0+m.x1)/2,m.top,(m.z0+m.z1)/2)),x=m=>{let z=s.localToWorld(new b(m.x0,0,m.z0)),k=s.localToWorld(new b(m.x1,0,m.z1));return new Xe(Math.min(z.x,k.x),Math.min(z.z,k.z),Math.max(z.x,k.x),Math.max(z.z,k.z))};return{ship:i,inner:s,HOLD3:h,HOLD2:f,holdC:u(h),hold2C:u(f),rect:x}}function Xo(l,t,e,o=32){let r=new qe(t.x1-t.x0-5,t.z1-t.z0-14,o,o);r.rotateX(-Math.PI/2),r.translate((t.x0+t.x1)/2,0,(t.z0+t.z1)/2);let a=Float32Array.from(r.attributes.position.array),i=new q(r,e);i.receiveShadow=!0,l.add(i);let s="";return i.shape=(h,f=null)=>{let u=`${h.toFixed(2)}|${f?f.map(z=>z.toFixed(1)).join(","):""}`;if(u===s)return;s=u;let x=r.attributes.position,m=o+1;for(let z=0;z<x.count;z++){let k=a[z*3],N=a[z*3+2],G=z%m,D=Math.floor(z/m),T=G===0||D===0||G===o||D===o,I=h+Math.sin(k*.11+N*.07)*1.6+Math.cos(k*.05-N*.13)*1.2;if(f){let E=Math.hypot(k-f[0],N-f[1]);I-=f[2]*Math.exp(-(E*E)/120)}x.setY(z,Math.min(t.top-3,I)-(T?6:0))}x.needsUpdate=!0,r.computeVertexNormals()},i}function Zo(l,{ropeMat:t=new U({color:2040100,roughness:.5,metalness:.6})}={}){l.updateMatrixWorld(!0);let e=n=>Ot(l,new RegExp(`^${n}$`))[0],o=Object.fromEntries(["base","turnable_platform","boom","luffing_jib","hook","boom_angle_geer","boom_binding","ropes_1","ropes_2"].map(n=>[n,e(n)]));if(Object.values(o).some(n=>!n))return null;let r=n=>{let c=[],p=new b;n.traverse(g=>{if(!g.isMesh)return;let M=g.geometry.attributes.position;for(let C=0;C<M.count;C++)c.push(p.fromBufferAttribute(M,C).applyMatrix4(g.matrixWorld).clone())}),c.sort((g,M)=>g.y-M.y);let w=Math.max(3,Math.round(c.length*.03)),y=g=>g.reduce((M,C)=>M.add(C),new b).divideScalar(g.length);return{low:y(c.slice(0,w)),high:y(c.slice(-w)),all:c}},i=new Mt().setFromObject(o.base).getCenter(new b),s=r(o.boom),h=r(o.luffing_jib),f=r(o.ropes_1),u=r(o.hook),x=new de;x.position.set(i.x,0,i.z),l.add(x),x.updateMatrixWorld(!0);for(let n of["turnable_platform","boom","luffing_jib","hook","boom_angle_geer","boom_binding","ropes_1","ropes_2"])x.attach(o[n]);let m=n=>x.worldToLocal(n.clone()),z=m(s.low),k=m(s.high),N=m(h.low),G=m(h.high),D=Math.abs(m(f.low).x)||2.4,T=new b(0,m(f.low).y,m(f.low).z),I=new de;I.position.copy(z),x.add(I),I.updateMatrixWorld(!0);for(let n of["boom","boom_angle_geer","boom_binding"])I.attach(o[n]);let E=new de;E.position.copy(k).sub(z),I.add(E),E.updateMatrixWorld(!0),E.attach(o.luffing_jib),o.ropes_1.visible=o.ropes_2.visible=o.hook.visible=!1;let L=(n,c)=>new b(n.x,n.y*Math.cos(c)-n.z*Math.sin(c),n.y*Math.sin(c)+n.z*Math.cos(c)),Y=G.distanceTo(T),se=(n,c)=>{let p=z.clone().add(L(k.clone().sub(z),n));return{B:p,N:p.clone().add(L(N.clone().sub(k),c)),R:p.clone().add(L(G.clone().sub(k),c))}},Ae=[],ie=0;for(let n=0;n<=62*Ut;n+=.5*Ut){for(let p=0;p<30;p++){let w=se(n,ie).R.distanceToSquared(T)-Y*Y,y=se(n,ie+1e-4).R.distanceToSquared(T)-Y*Y,g=w/((y-w)/1e-4||1e-9);if(ie-=Ve.clamp(g,-.2,.2),Math.abs(g)<1e-7)break}let{N:c}=se(n,ie);Ae.push({a:n,f:ie,r:c.z,y:c.y})}let O=[Ae[0]];for(let n of Ae.slice(1))if(n.r>O[O.length-1].r+.001)O.push(n);else break;let be=n=>{if(n<=O[0].r)return O[0];for(let c=1;c<O.length;c++)if(O[c].r>=n){let p=O[c-1],w=O[c],y=(n-p.r)/(w.r-p.r);return{a:Ve.lerp(p.a,w.a,y),f:Ve.lerp(p.f,w.f,y),r:n,y:Ve.lerp(p.y,w.y,y)}}return O[O.length-1]},ce=new ne(1,1,1,6,1,!0),ae=new q(ce,t),we=new q(ce,t),H=[new q(ce,t),new q(ce,t)];for(let n of[ae,we])n.scale.x=n.scale.z=1;for(let n of[ae,we,...H])n.castShadow=!0,x.add(n);let Re=(n,c,p,w)=>{ho(n,c,p),n.scale.x=n.scale.z=w},J=new b;return{group:l,reach:[O[0].r,O[O.length-1].r],set(n,c,p){let w=be(c);x.rotation.y=n,I.rotation.x=w.a,E.rotation.x=w.f-w.a;let{N:y,R:g}=se(w.a,w.f);for(let[M,C]of[[ae,-1],[we,1]])Re(M,new b(C*D,T.y,T.z),new b(C*.32,g.y,g.z),.045);return J.set(0,y.y-p,y.z),H.forEach((M,C)=>Re(M,new b(C?.18:-.18,y.y-.4,y.z),new b(C?.18:-.18,J.y+.6,y.z),.03)),J},hookWorld(n=new b){return x.localToWorld(n.copy(J))},noseHeight:O[0].y,slew:x,axis:x.position.clone(),hookLength:u.high.y-u.low.y}}function Ko({steel:l,yellow:t,load:e}){let o=new de,r=ke(new q(new W(1.4,1.1,1),t));r.position.y=2.2,o.add(r);let a=new ne(1.25,1.25,2.2,14,1,!1,0,Math.PI/2);a.rotateZ(Math.PI/2);let i=[1,-1].map(h=>{let f=new de;f.position.set(0,1.6,0);let u=ke(new q(a,l));u.position.set(0,-1.25,0),u.rotation.y=h>0?0:Math.PI,f.add(u);for(let x of[-.5,.5]){let m=ke(new q(new W(.12,1.6,.12),l));m.position.set(h*.6,.6,x),m.rotation.z=h*.35,f.add(m)}return o.add(f),{pivot:f,s:h}}),s=new q(new ne(.2,1.15,.5,14),e);return s.position.y=.55,o.add(s),o.setOpen=(h,f)=>{for(let{pivot:u,s:x}of i)u.rotation.z=x*h*.85;s.visible=!!f&&h<.2},o.setOpen(0,!1),o}var wt;function Qo(){if(wt)return wt;let l=new tt(1,1.1,1,3,.18),t=l.attributes.position;for(let a=0;a<t.count;a++){let i=t.getY(a),s=1+.06*(1-(i/.55)**2);t.setX(a,t.getX(a)*s),t.setZ(a,t.getZ(a)*s)}l.computeVertexNormals(),l.translate(0,.55,0);let e=ze([[-.36,-.36],[.36,-.36],[-.36,.36],[.36,.36]].map(([a,i])=>{let s=new ht(.13,.03,6,12,Math.PI);return s.scale(1,1,.55),s.rotateY(Math.atan2(i,a)+Math.PI/2),s.translate(a,1.075,i),s})),o=uo(),r=ze([[-1,-1],[1,-1],[-1,1],[1,1]].map(([a,i])=>{let s=new ht(.13,.03,6,12,Math.PI);return s.scale(1,1,.5),s.rotateX(-Math.PI/2),s.rotateY(Math.atan2(a,i)),s.translate(a*.25,1.1+.016,i*.25),s}));return wt={body:l,loops:e,loopsFlat:r,bodyMat:new U({color:16777215,map:o,roughness:.82}),loopMat:new U({color:3104424,roughness:.7})},wt}var je;function Jo(){if(je)return je;let l=[[.32,-.7],[.9,-.7],[.92,-.66],[.92,.66],[.9,.7],[.32,.7],[.32,-.7]].map(([t,e])=>new ct(t,e));return je=new Et(l,28),je.rotateZ(Math.PI/2),je.translate(0,.92,0),je}var en=()=>new U({color:6120555,roughness:.38,metalness:.85,side:it});function xo(l,t){let[e,o]=Te(1024,256);o.clearRect(0,0,1024,256),o.strokeStyle="rgba(30,36,40,.22)",o.lineWidth=3;for(let r=40;r<1024;r+=82)o.beginPath(),o.moveTo(r,10),o.lineTo(r,246),o.stroke();return o.fillStyle="rgba(255,255,255,.92)",o.font='700 70px "Arial Black", Arial, sans-serif',o.textAlign="center",o.textBaseline="middle",o.fillText(l,512,112),o.font="600 26px Arial, sans-serif",o.fillStyle="rgba(255,255,255,.8)",o.fillText(t,512,178),o.fillRect(352,200,320,4),Pe(e)}function tn({paint:l=8359059,number:t="95 123 456"}={}){let e=new de,o=new U({color:l,roughness:.62,metalness:.32}),r=new U({color:2764080,roughness:.7,metalness:.45}),a=new U({color:6054762,roughness:.5,metalness:.6}),i=new U({color:13939002,roughness:.55,metalness:.2}),s=6.45,h=5.15,f=1.55,u=4.4,x=1.56,m=new Qe;m.moveTo(-h,f),m.lineTo(h,f),m.lineTo(s,u),m.lineTo(-s,u),m.closePath();let z=new Je(m,{depth:x*2,bevelEnabled:!1});z.translate(0,0,-x),e.add(ke(new q(z,o)));let k=ke(new q(new ne(4.2,4.2,s*2+.1,24,1,!1,Math.PI/2-.375,.75),o));k.rotation.z=Math.PI/2,k.position.set(0,u-3.92,0),e.add(k),pe(e,s*2-1.4,.16,.66,0,u+.42,0,a);for(let T=-5;T<=5;T+=2)pe(e,.22,.12,.8,T,u+.5,0,r);for(let T of[-1,1]){for(let E=0;E<11;E++){let L=-4.75+E*.95;pe(e,.1,u-f-.1,.07,L,(f+u)/2,T*(x+.035),o)}pe(e,s*2,.14,.12,0,u-.05,T*(x+.05),a),pe(e,h*2+.3,.2,.14,0,f+.08,T*(x+.06),r);let I=new q(new qe(9.2,2.3),new U({map:xo("\u0417\u0415\u0420\u041D\u041E",t),transparent:!0,roughness:.6,depthWrite:!1}));I.position.set(0,(f+u)/2+.1,T*(x+.075)),I.rotation.y=T>0?0:Math.PI,e.add(I)}let N=new ne(1.25,.32,.95,4,1);N.rotateY(Math.PI/4);for(let T of[-3.9,-1.3,1.3,3.9]){let I=ke(new q(N,o));I.position.set(T,f-.48,0),e.add(I),pe(e,.5,.12,.5,T,f-1,0,r)}pe(e,14,.34,.42,0,1.15,0,r);for(let T of[-1,1]){pe(e,.85,.07,2.9,T*(s+.2),1.32,0,r);for(let L of[-1.2,1.2])Ee(e,new b(T*(s+.55),1.35,L),new b(T*(s+.55),2.35,L),.025,i),Ee(e,new b(T*(s+.55),2.35,L),new b(T*(s-.05),2.35,L),.025,i);Ee(e,new b(T*(s+.55),2.35,-1.2),new b(T*(s+.55),2.35,1.2),.025,i);let I=new b(T*(h+.15),f,.9),E=new b(T*(s+.08),u+.3,.9);for(let L of[.68,1.12])Ee(e,new b(I.x,I.y,L),new b(E.x,E.y,L),.022,i);for(let L=1;L<9;L++){let Y=I.clone().lerp(E,L/9);Ee(e,new b(Y.x,Y.y,.68),new b(Y.x,Y.y,1.12),.018,i)}pe(e,.7,.22,.32,T*(s+.65),1.02,0,a),pe(e,.2,.3,.42,T*(s+1.05),1.02,0,r)}let G=ke(new q(new ht(.24,.025,6,18),r));G.position.set(s+.02,3.1,-.9),G.rotation.y=Math.PI/2,e.add(G);let D=new ne(.475,.475,.13,20);D.rotateX(Math.PI/2);for(let T of[-4.75,4.75]){for(let I of[-.82,.82]){pe(e,2.9,.42,.12,T,.58,I,r);for(let E of[-.35,.35])pe(e,.16,.26,.16,T+E,.95,I,a)}pe(e,.36,.3,2,T,.9,0,r);for(let I of[-.92,.92]){for(let E of[-.79,.79]){let L=ke(new q(D,a));L.position.set(T+I,.475,E),e.add(L)}Ee(e,new b(T+I,.475,-.95),new b(T+I,.475,.95),.07,a)}}return dt(e,po(e).filter(T=>!T.material.transparent)),e}function on(){let[l,t]=Te(64,16);t.fillStyle="#e0b419",t.fillRect(0,0,64,16),t.fillStyle="#1d1f22";for(let e=-16;e<64;e+=16)t.beginPath(),t.moveTo(e,16),t.lineTo(e+8,16),t.lineTo(e+16,0),t.lineTo(e+8,0),t.closePath(),t.fill();return Pe(l,!0)}function nn(){let[l,t]=Te(64,64);t.fillStyle="#7b8186",t.fillRect(0,0,64,64),t.fillStyle="rgba(255,255,255,.22)";for(let e=0;e<64;e+=16)for(let o=0;o<64;o+=16)t.save(),t.translate(o+8,e+8),t.rotate((o+e)/16%2?.8:-.8),t.fillRect(-5,-1.2,10,2.4),t.restore();return Pe(l,!0)}function sn(l){let[t,e]=Te(256,96);return e.fillStyle="#0b0c0d",e.fillRect(0,0,256,96),e.fillStyle="#ff3b2f",e.font='700 54px "Courier New", monospace',e.textAlign="center",e.textBaseline="middle",e.fillText(l,128,50),e.font="600 16px Arial",e.fillStyle="#ff8a7f",e.fillText("kg",232,80),Pe(t)}function an(l){let[t,e]=Te(512,160);return e.fillStyle="#0f8f57",e.fillRect(0,0,512,160),e.strokeStyle="rgba(255,255,255,.85)",e.lineWidth=6,e.strokeRect(10,10,492,140),e.fillStyle="#ffffff",e.font="700 64px Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(l,256,84),Pe(t)}function rn(l,{dark:t=[.33,.18,.045],light:e=[.72,.46,.15]}={}){return new ut({uniforms:Wt.merge([Yt.fog,{uTime:{value:0},uA:{value:new b},uB:{value:new b},uV:{value:new b},uFloor:{value:0},uRate:{value:0},uSize:{value:.022},uScale:{value:500},uSun:{value:l.clone()},uDark:{value:new b(...t)},uLight:{value:new b(...e)}}]),fog:!0,vertexShader:`
      attribute vec4 aSeed;
      uniform float uTime, uFloor, uRate, uSize, uScale;
      uniform vec3 uA, uB, uV, uDark, uLight;
      varying vec3 vCol;
      varying float vLit;
      #include <fog_pars_vertex>
      void main() {
        float T = 0.72 + 0.12 * aSeed.z;                    // one fall (and hop) per cycle
        float t = fract(uTime / T + aSeed.w) * T;
        vec3 side = uB - uA;
        float u = aSeed.x * aSeed.x * (3.0 - 2.0 * aSeed.x); // denser in the middle of the stream
        vec3 p0 = uA + side * u;
        vec3 sd = normalize(side);
        vec3 v = uV * (0.7 + 0.6 * aSeed.y) + sd * (aSeed.z - 0.5) * 0.32 + vec3(0.0, (aSeed.y - 0.5) * 0.35, 0.0);
        float h0 = max(p0.y - uFloor, 0.0);
        float th = (v.y + sqrt(max(v.y * v.y + 19.6 * h0, 0.0))) / 9.8; // reaches the heap
        vec3 p;
        float show = step(fract(aSeed.y * 7.13 + aSeed.z * 3.71), uRate);
        if (t < th) {
          p = p0 + v * t; p.y -= 4.9 * t * t;
        } else {
          // some kernels bounce off the heap in a short low hop, the rest sink into it
          float tb = t - th;
          vec3 hit = p0 + v * th; hit.y = uFloor;
          vec3 bv = vec3(v.x * 0.3, 0.6 + 0.9 * aSeed.w, v.z * 0.3) + sd * (aSeed.x - 0.5) * 1.1;
          p = hit + bv * tb; p.y -= 4.9 * tb * tb;
          show *= step(0.5, aSeed.w) * step(uFloor, p.y);
        }
        vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        gl_PointSize = show * max(1.5, uSize * uScale / -mvPosition.z) * (0.8 + 0.4 * aSeed.z);
        vCol = mix(uDark, uLight, aSeed.z * 0.7 + aSeed.x * 0.3);
        vLit = 0.8 + 0.2 * aSeed.w;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform vec3 uSun;
      varying vec3 vCol;
      varying float vLit;
      #include <fog_pars_fragment>
      void main() {
        vec2 c = gl_PointCoord * 2.0 - 1.0;
        float r2 = dot(c, c);
        if (r2 > 1.0) discard;
        // a small lit grain: sun side bright, the far side in shade
        vec3 n = vec3(c.x, -c.y, sqrt(1.0 - r2));
        float l = 0.5 + 0.8 * max(dot(n, normalize(vec3(-0.4, 0.75, 0.55))), 0.0);
        gl_FragColor = vec4(vCol * l * vLit, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`})}function kt(l,t){let e=l.length,o=[],r=new Array(e);for(let a=0;a<e-1;a++)o.push((t[a+1]-t[a])/(l[a+1]-l[a]));r[0]=o[0],r[e-1]=0;for(let a=1;a<e-1;a++)r[a]=o[a-1]*o[a]<=0?0:(o[a-1]+o[a])/2;for(let a=0;a<e-1;a++){if(!o[a]){r[a]=r[a+1]=0;continue}let i=r[a]/o[a],s=r[a+1]/o[a],h=i*i+s*s;if(h>9){let f=3/Math.sqrt(h);r[a]=f*i*o[a],r[a+1]=f*s*o[a]}}return a=>{if(a<=l[0])return t[0];if(a>=l[e-1])return t[e-1];let i=0;for(;a>l[i+1];)i++;let s=l[i+1]-l[i],h=(a-l[i])/s,f=h*h,u=f*h;return(2*u-3*f+1)*t[i]+(u-2*f+h)*s*r[i]+(-2*u+3*f)*t[i+1]+(u-f)*s*r[i+1]}}function hn(l){let t=l.map(f=>f.p),e=f=>kt(t,l.map(f)),o=[0,1,2].map(f=>e(u=>u.pos[f])),r=l.map(f=>{let u=new b(...f.focus).sub(new b(...f.pos)),x=u.length()||1;return[u.x/x,u.y/x,u.z/x,x]}),a=[0,1,2,3].map(f=>kt(t,r.map(u=>u[f]))),i=e(f=>f.nx),s=e(f=>f.ny),h=new b;return(f,u)=>(u.pos.set(o[0](f),o[1](f),o[2](f)),h.set(a[0](f),a[1](f),a[2](f)).normalize(),u.focus.copy(u.pos).addScaledVector(h,a[3](f)),u.nx=i(f),u.ny=s(f),u)}function dn(l,t=[]){let e=(r,a)=>({p:(r.p+a.p)/2,pos:r.pos.map((i,s)=>(i+a.pos[s])/2),focus:r.focus.map((i,s)=>(i+a.focus[s])/2),nx:(r.nx+a.nx)/2,ny:(r.ny+a.ny)/2}),o=[l[0]];for(let r=0;r+1<l.length;r+=2)o.push(e(l[r],l[r+1]));return o.push(l[l.length-1],...t),o.sort((r,a)=>r.p-a.p)}var mo=new b(0,1,0),xt=(l,t)=>{let e=new he(t),o=l.attributes.position.count,r=new Float32Array(o*3);for(let a=0;a<o;a++)r[a*3]=e.r,r[a*3+1]=e.g,r[a*3+2]=e.b;return l.setAttribute("color",new Lt(r,3)),l},te=(l,t,e,o,r,a,i)=>xt(new W(l,t,e).translate(o,r,a),i),Ge=(l,t,e,o,r=4)=>{let a=new b(...l),i=new b(...t),s=a.distanceTo(i),h=new ne(e,e,s,r);return h.applyMatrix4(new Ze().compose(a.clone().add(i).multiplyScalar(.5),new Gt().setFromUnitVectors(mo,i.clone().sub(a).normalize()),new b(1,1,1))),xt(h,o)};function go(){let o=[];for(let i of[-5,5])for(let s of[-5,5])o.push(te(.9,10,.9,i,5.4,s,14262823)),o.push(te(1.5,.9,2.6,i,.45,s,3817543));for(let i of[-5,5])o.push(te(1.1,1,11.6,i,10.6,0,14262823));for(let i of[-5,5])o.push(te(11,1,1,0,10.6,i,14262823));o.push(xt(new ne(3.1,3.1,1,10).translate(0,11.6,0),3817543)),o.push(te(6,4,7,0,14.1,-1.4,14262823)),o.push(te(5.6,2.6,2.4,0,13.4,-5.8,3817543)),o.push(te(2.2,2.4,2.2,1.9,13.8,3.1,15329248));for(let i of[-1.6,1.6])o.push(Ge([i,16,-2.4],[0,27.5,-.6],.32,14262823)),o.push(Ge([i,16,2.2],[0,27.5,-.6],.32,14262823));let r=[0,15.5,2.6],a=[0,35,21];for(let i of[-1,1])o.push(Ge([i*.95,r[1],r[2]],[i*.4,a[1],a[2]],.26,14262823));for(let i=1;i<8;i++){let s=i/8,h=(i-.5)/8,f=(u,x)=>[x*(.95-.55*u),r[1]+(a[1]-r[1])*u,r[2]+(a[2]-r[2])*u];o.push(Ge(f(s,-1),f(s,1),.12,14262823)),o.push(Ge(f(h,-1),f(s,1),.1,14262823))}return o.push(Ge([0,35,21],[0,34,33],.34,14262823)),o.push(Ge([0,35.6,14],[0,27.5,-.6],.12,3817543)),o.push(te(.08,20,.08,0,24,33,3817543)),o.push(te(.9,.7,.9,0,13.6,33,3817543)),ze(o)}function vo(){let l=[];l.push(te(2.5,2.9,2.3,0,2.05,6.3,16777215)),l.push(te(2.4,.5,14.6,0,.9,0,2764081)),l.push(te(2.5,2.9,12.6,0,2.6,-1.2,14013129));for(let t of[5.6,-4.6,-6,-7.4])l.push(te(2.6,1,.9,0,.5,t,1842463));return ze(l)}function yo(){let l=[];l.push(te(3.1,3.4,13.4,0,2.9,0,16777215)),l.push(te(2.6,.5,14.2,0,1,0,2500651));for(let t of[-4.8,4.8])l.push(te(2.2,.8,2.6,0,.45,t,1908256));return ze(l)}function bo(){return ze([xt(new ne(.22,.38,32,6).translate(0,16,0),9278618),te(3.2,.9,1.2,0,32.3,0,4870230)])}function Zt(){let l=document.createElement("canvas");l.width=128,l.height=128;let t=l.getContext("2d");t.fillStyle="#e9e7e1",t.fillRect(0,0,128,128),t.fillStyle="#3b4a57";for(let o=10;o<128;o+=21)for(let r=6;r<128;r+=15)t.fillRect(r,o,10,9);let e=new Ke(l);return e.colorSpace=Ue,e.wrapS=e.wrapT=_e,e}async function vn(l,{mobile:t=!1,clear:e=[],ships:o=null,pause:r=null}={}){let a=new de,i=(n,c,p=0)=>!e.some(([w,y,g,M])=>n>w-p&&n<g+p&&c>y-p&&c<M+p),s=new ft,h=new de,f=(n,c={})=>new U({color:n,roughness:.75,metalness:.1,...c}),u={wall:[f(14474454),f(12898004),f(14273974),f(11123140)],roof:[f(8161165,{roughness:.55,metalness:.4}),f(5993349,{roughness:.55,metalness:.4}),f(9072220,{roughness:.6,metalness:.3})],gate:f(7239549,{metalness:.4}),concrete:f(13354166,{roughness:.9}),asphalt:f(6775903,{roughness:.95}),grass:f(9210460,{roughness:1}),office:new U({color:16777215,map:Zt(),roughness:.6}),hullA:f(2241866,{roughness:.55,metalness:.3}),hullB:f(3878185,{roughness:.55,metalness:.3}),hullC:f(3033661,{roughness:.55,metalness:.3}),boot:f(9316898),deck:f(7109202,{metalness:.3}),crane:f(14201385,{roughness:.5}),sup:f(15526628,{roughness:.5}),funnel:f(1911349),rail:f(5984327,{metalness:.5})},x=(n,c,p,w,y,g=0)=>{let M=new q(n,c);return M.position.set(p,w,y),M.rotation.y=g,h.add(M),M},m=(n,c,p,w,y,g=.03)=>x(new W(n,.06,c),y,p,g,w);for(let[n,c]of[[-700,-230],[100,700]])m(c-n,34,(n+c)/2,27,u.asphalt,.02);for(let[n,c,p,w]of[[-460,75,260,40],[380,75,280,40],[-470,160,300,110],[470,165,330,120],[-60,235,330,70]])m(p,w,n,c,u.concrete,.025);for(let[n,c,p,w]of[[-430,330,520,90],[430,335,560,100],[0,380,700,70]])m(p,w,n,c,u.grass,.02);let z=new Map,k=(n,c,p,w)=>{let y=[n,c,p,w].join();if(!z.has(y)){let g=new Qe;g.moveTo(-c/2,0),g.lineTo(c/2,0),g.lineTo(c/2,p),g.lineTo(0,p+w),g.lineTo(-c/2,p),g.closePath();let M=new Je(g,{depth:n,bevelEnabled:!1});M.rotateY(Math.PI/2).translate(-n/2,0,0),z.set(y,M)}return z.get(y)},N=(n,c,p,w,y,g)=>{if(!i(n,c,Math.max(p,w)/2))return;let M=w*.2,C=Math.hypot(w/2,M),Q=Math.atan2(M,w/2);x(k(p,w,y,M),u.wall[g%u.wall.length],n,0,c);for(let re of[-1,1]){let X=x(new W(p+1.4,.3,C+.7),u.roof[g%u.roof.length],n,y+M/2+.18,c+re*w/4);X.rotation.x=re*Q}for(let re=n-p/2+p/6;re<n+p/2;re+=p/3)x(new W(Math.min(9,p/5),Math.min(7.5,y*.6),.3),u.gate,re,Math.min(7.5,y*.6)/2,c-w/2-.16)},G=[[-690,-250,125,34,13],[-690,-250,185,40,14],[-620,-270,245,36,12],[-240,140,220,38,13],[60,300,160,34,12],[380,690,130,36,13],[360,690,195,42,15],[330,650,255,34,12],[-760,-200,345,40,14],[-170,230,330,44,16],[260,780,350,40,14],[-720,-60,410,36,12],[40,720,420,38,13]],D=0;for(let[n,c,p,w,y]of G)for(let g=n;g<c;){let M=50+Math.round($(D*3.1+p)*40);if(g+M>c)break;N(g+M/2,p,M,w,y+Math.round($(D*1.7)*3),D),g+=M+10+$(D*5.3)*8,D++}await r?.();{let n=t?300:290,c=95,p=new ne(5.6,5.6,34,20),w=new Vt(5.8,3,20);for(let g=0;g<2;g++)for(let M=0;M<7;M++)x(p,u.concrete,n+M*11.4,17,c+g*11.4),x(w,u.concrete,n+M*11.4,35.5,c+g*11.4);x(new W(12,58,14),u.concrete,n-12,29,c+5.7),x(new W(8,4,14),u.roof[0],n-12,60,c+5.7),x(new W(80,3.6,3.6),u.wall[0],n+34,37.5,c+5.7);let y=x(new W(3.4,3.4,92),u.wall[0],n-12,30,c-40);y.rotation.x=-.24;for(let g of[-20,-55])x(new W(1.2,30,1.2),u.gate,n-12,15,c+g)}for(let[n,c,p,w,y]of[[-150,264,44,22,16],[-95,266,30,15,14],[150,262,36,26,16]]){if(!i(n,c,p/2))continue;x(new W(p,w,y),u.office,n,w/2,c).geometry.attributes.uv.array.forEach((M,C,Q)=>{Q[C]*=C%2?w/12:p/12}),x(new W(p+.6,.6,y+.6),u.roof[0],n,w+.3,c)}for(let n of[44,47])for(let c of[-.75,.75])x(new W(460,.18,.16),u.rail,-470,.12,n+c),x(new W(470,.18,.16),u.rail,465,.12,n+c);await r?.();let T=(n,c,p,w,y,g=!0)=>{let M=new de,C=n*.155,Q=n*.085,re=Q*.55,X=new Qe;X.moveTo(-n/2,-C/2),X.lineTo(n*.3,-C/2),X.quadraticCurveTo(n*.47,-C/2,n/2,0),X.quadraticCurveTo(n*.47,C/2,n*.3,C/2),X.lineTo(-n/2,C/2),X.closePath();let B=new Je(X,{depth:Q,bevelEnabled:!1}).rotateX(-Math.PI/2),De=new q(B,c);De.position.y=-re,M.add(De);let Le=new q(B,u.boot);Le.scale.set(1.004,.12,1.004),Le.position.y=-re-.2,M.add(Le);let ge=Q-re,Me=(Ce,fe,mt,gt,We,Oe,Fe)=>{let Ne=new q(new W(Ce,fe,mt),Fe);return Ne.position.set(gt,We,Oe),M.add(Ne),Ne};for(let Ce=0;Ce<5;Ce++){let fe=-n*.24+Ce*n*.135;Me(n*.1,1.6,C*.68,fe,ge+.8,0,u.deck),g&&Ce<4&&(Me(1,12,1,fe+n*.068,ge+6,C*.2,u.crane),Me(.7,.7,n*.12,fe+n*.068,ge+10,C*.2+n*.045,u.crane).rotation.x=-.5)}Me(n*.1,Q*1.05,C*.9,-n*.4,ge+Q*.52,0,u.sup),Me(n*.12,.6,C*1.04,-n*.4,ge+Q*1.06,0,u.sup),Me(n*.035,Q*.55,C*.22,-n*.455,ge+Q*1.3,0,u.funnel),M.position.set(p,0,w),M.rotation.y=y,h.add(M)},I=o||[[-300,150,"hullA"],[-480,175,"hullB"],[-640,120,"hullC"],[230,135,"hullB"],[420,165,"hullA"],[600,140,"hullC"]];for(let[n,c,p]of I)T(c,u[p],n,1.5-c*.155/2,0,!0);for(let[n,c,p,w,y]of[[-420,-620,180,.4,"hullA"],[160,-760,150,-.3,"hullC"],[520,-540,190,.15,"hullB"],[-80,-980,160,.7,"hullB"],[760,-900,140,-.5,"hullA"]])T(p,u[y],n,c,w,!0);await r?.();{let n=t?90:170,c=new Ie(new W(1,1,1).translate(0,.5,0),new U({color:16777215,map:Zt(),roughness:.7}),n),p=[14999250,14080992,15259844,13620943,14606046];for(let w=0;w<n;w++){let y=-1e3+$(w*1.31)*2e3,g=520+$(w*2.17)*420,M=$(w*4.4)<.25;s.position.set(y,0,g),s.rotation.set(0,($(w*6.1)-.5)*.4,0),s.scale.set(14+$(w*3.7)*30,M?30+$(w*8.2)*26:9+$(w*5.9)*14,12+$(w*2.9)*14),s.updateMatrix(),c.setMatrixAt(w,s.matrix),c.setColorAt(w,new he(p[w%p.length]))}a.add(c)}let E=f(6122046,{roughness:.95}),L=new Ie(new zt(1,1),E,t?90:160);for(let n=0;n<L.count;n++){let c=3.5+$(n*2.3)*3.2,p=-700+n/L.count*1400+$(n)*7;s.position.set(p,c*.9,300+$(n*5.1)*14+(Math.abs(p)<200?20:0)),s.rotation.set(0,$(n*7.7)*6,0),s.scale.set(c*1.2,c,c*1.2),s.updateMatrix(),L.setMatrixAt(n,s.matrix)}a.add(L),await r?.();let Y=(n,c,p,w)=>{let y=new Ie(n,c,p.length);return p.forEach((g,M)=>{w(g,M),s.updateMatrix(),y.setMatrixAt(M,s.matrix)}),a.add(y),y},se=(n={})=>new U({vertexColors:!0,roughness:.7,metalness:.2,...n}),Ae=[];for(let n=-660;n<=-300;n+=t?44:33)Ae.push(n);for(let n=250;n<=680;n+=t?44:34)Math.abs(n-278)>22&&Ae.push(n);Y(go(),se(),Ae,(n,c)=>{s.position.set(n,0,9),s.rotation.set(0,Math.PI+($(c*3.3)-.5)*.9,0),s.scale.setScalar(1)});let ie=[];for(let n=0;n<(t?14:30);n++){let c=n%3,p=c===0?-40+n%10*6:c===1?-560+n%12*26:350+n%12*27,w=c===0?268:c===1?102:100;i(p,w,8)&&ie.push([p,w,c===0?0:Math.PI/2+($(n)<.5?0:Math.PI)])}let O=Y(vo(),se(),ie,([n,c,p])=>{s.position.set(n,0,c),s.rotation.set(0,p,0)}),be=[15328990,3104667,12072236,3108431,14262823];ie.forEach((n,c)=>O.setColorAt(c,new he(be[c%be.length])));let ce=[];for(let n=0;n<(t?24:48);n++){let c=n%2,p=(n<24?-690:250)+Math.floor(n/2)%12*15.2;ce.push([p,c?47:44])}let ae=Y(yo(),se(),ce,([n,c])=>{s.position.set(n,.2,c),s.rotation.set(0,Math.PI/2,0)}),we=[8359059,7307897,9071189,6123392];ce.forEach((n,c)=>ae.setColorAt(c,new he(we[Math.floor($(c*2.9)*we.length)])));let H=[];for(let n=-680;n<=680;n+=70)i(n,36,6)&&H.push([n,36]);for(let[n,c]of[[-560,60],[-380,60],[420,60],[560,60],[-470,215],[470,225],[0,250]])i(n,c,6)&&H.push([n,c]);Y(bo(),se(),H,([n,c])=>{s.position.set(n,0,c),s.rotation.set(0,0,0)});let Re=[];for(let[n,c,p,w]of[[-520,62,34,12],[160,62,30,10],[520,152,30,12]])for(let y=0;y<p;y++)for(let g=0;g<w;g++)for(let M=0;M<2;M++){if(y%8===7||t&&(y+g)%2)continue;let C=n+y*1.35,Q=c+g*1.35;i(C,Q)&&Re.push([C,Q,M])}Y(new W(1.15,1.2,1.15),f(15789799,{roughness:.9}),Re,([n,c,p])=>{s.position.set(n,.6+p*1.22,c),s.rotation.set(0,0,0),s.scale.setScalar(1)});let J=[];for(let[n,c,p]of[[-430,58,t?50:110],[440,56,t?50:110]])for(let w=0;w<p;w++){let y=n+w%22*2.1,g=c+Math.floor(w/22)*3.4;i(y,g)&&J.push([y,g])}let nt=new ne(.95,.95,1.5,12).rotateX(Math.PI/2);return Y(nt,f(7041656,{roughness:.4,metalness:.8}),J,([n,c])=>{s.position.set(n,.95,c),s.rotation.set(0,0,0)}),await r?.(),dt(h,(()=>{let n=[];return h.traverse(c=>{c.isMesh&&n.push(c)}),n})()),a.add(h),a.traverse(n=>{n.isMesh&&(n.castShadow=!1,n.receiveShadow=!1,n.matrixAutoUpdate=!1,n.updateMatrix())}),a.updateMatrixWorld(!0),l.add(a),a}var Pt=-.6,ot=Math.PI/180,Mo=9.81,At=[{l:43,a:.06,d:81,q:.3,w:1,f:3},{l:28,a:.05,d:57,q:.4,w:-.8,f:3.2},{l:18.5,a:.04,d:106,q:.5,w:1.15,f:3.8},{l:12.2,a:.031,d:69,q:.6,w:-.7,f:3.8},{l:8.1,a:.025,d:128,q:.7,w:1.05,f:3.2},{l:5.4,a:.022,d:41,q:.75,w:-.9,f:2.6},{l:3.6,a:.017,d:94,q:.8,w:.6,f:2.2},{l:2.4,a:.0085,d:151,q:.8,w:-1.2,f:2},{l:1.6,a:.0058,d:23,q:.8,w:.75,f:1.8},{l:1.05,a:.0038,d:112,q:.8,w:-1,f:1.6},{l:.7,a:.0026,d:62,q:.8,w:.85,f:1.4}],Kt=5,Jt=[{s:.16,a:.11,r:.6,v:[.35,.62]},{s:.47,a:.1,r:-.95,v:[-.22,.85]},{s:1.3,a:.1,r:2.1,v:[.66,.28]},{s:3.1,a:.075,r:-2.4,v:[-.48,-.74]}],le={k:2*Math.PI/13,speed:70,cphase:1.3,w0:9,wgrow:11,decay:.75,spread:1/50,life:3},A=l=>{let t=String(+l.toFixed(6));return/[.e]/.test(t)?t:t+".0"},Ye="rgba";function So({nw:l,nc:t,nv:e,ns:o,hulls:r}){let a=At.slice(0,l).map((s,h)=>{let f=2*Math.PI/s.l,u=Math.cos(s.d*ot),x=Math.sin(s.d*ot),m=`(nB.r - 0.5) * ${A(4.6*s.w)} + (nC.${Ye[(h+1)%4]} - 0.5) * ${A(s.f)} + (nD.${Ye[(h+2)%4]} - 0.5) * ${A(s.f*.75)}`+(h>=4?` + (nE.${Ye[(h+1)%4]} - 0.5) * 3.2`:""),z=h<2?`(0.45 + 1.1 * nA.${Ye[(h*2+1)%4]})`:h<Kt?`(0.3 + 1.4 * nB.${Ye[(h+1)%4]})`:`(0.3 + 1.4 * nD.${Ye[(h+3)%4]})`,k=h>=Kt?`${z} * calm * uAmp`:`${z} * uAmp`;return`  { float th = ${A(f*u)} * P.x + ${A(f*x)} * P.y - uPhase[${h}] + ${m};
    float nu = ${A(f)} * length(vec2(dot(dPx, vec2(${A(u)}, ${A(x)})), dot(dPy, vec2(${A(u)}, ${A(x)}))));
    float s = sin(th), c = cos(th), fd = 1.0 - smoothstep(0.6, 1.9, nu), m = ${k};
    float ka = ${A(f*s.a)} * m * fd;
    g += vec2(${A(u)}, ${A(x)}) * (ka * c); crest += ${A(s.q)} * ka * s;${h>=3?` h += ${A(s.a/.03)} * m * fd * s;`:""}${h<5?` gL += vec2(${A(u)}, ${A(x)}) * (ka * c);`:""}
    vr += ${A(.5*(f*s.a)**2)} * m * m * (1.0 - fd); }`}).join(`
`),i=Jt.slice(0,t).map((s,h)=>{let f=Math.cos(s.r),u=Math.sin(s.r),x=`mat2(${A(f)}, ${A(u)}, ${A(-u)}, ${A(f)})`,m=`(n.yz * ${x}) * (${A(s.a)} * fd)`;return`  { float fd = (1.0 - smoothstep(0.7, 2.0, ${A(2*Math.PI*s.s)} * fp)) * ${h>=2?"calm":"1.0"} * uAmp;
    vec3 n = vnoise((${x} * P) * ${A(s.s)} - uTime * vec2(${A(s.v[0]*s.s)}, ${A(s.v[1]*s.s)}) + ${A(h*17.3)});
    ${h===0?`g += ${m}; gL += ${m};`:`vec2 cs = ${m}; g += cs; gC += cs;`}
    vr += ${A(.25*s.a*s.a)} * ${h>=2?"calm":"1.0"} * uAmp * (1.0 - fd); }`}).join(`
`);return`
uniform float uTime, uAmp, fogNear, fogFar, uFogMax, uSunK;
uniform float uPhase[${l}];
uniform vec3 uSun, uSunCol, uDeep, uShallow, uZenith, uSkyMid, uHorizon, uGlow, uHullCol, uBootCol, uHaze, uFogLin;
uniform vec4 uHoleA, uHoleB;
uniform vec4 uHullP[${r}], uHullS[${r}], uHullF[${r}];
uniform vec4 uRA[${e}], uRB[${e}], uRS[${o}], uRT[${o}];
uniform int uRN;
uniform sampler2D uNoise, uCells;
varying vec3 vW;
varying float vD;

bool inside(vec4 r) { return vW.x > r.x && vW.x < r.z && vW.z > r.y && vW.z < r.w; }
// four smooth value noises in one fetch (a 64\xB2 random texture, its texels blended with smoothstep weights)
vec4 tnoise(vec2 x) {
  vec2 i = floor(x), q = fract(x);
  return textureLod(uNoise, (i + q * q * (3.0 - 2.0 * q) + 0.5) * ${A(1/64)}, 0.0);
}
// value noise and its gradient; one texel holds a lattice cell's four corner values (a 128\xB2 grid)
vec3 vnoise(vec2 x) {
  vec2 i = floor(x), q = fract(x);
  vec2 u = q * q * (3.0 - 2.0 * q), du = 6.0 * q * (1.0 - q);
  vec4 c = texelFetch(uCells, ivec2(mod(i, 128.0)), 0);
  float k1 = c.y - c.x, k2 = c.z - c.x, k4 = c.x - c.y - c.z + c.w;
  return vec3(c.x + k1 * u.x + k2 * u.y + k4 * u.x * u.y, du * vec2(k1 + k4 * u.y, k2 + k4 * u.x));
}

// Hulls: x along the ship (towards the bow), z across. S: half length, half beam, freeboard, on.
// F: where the bow starts to narrow and over how long, the same for the stern (fractions of the half length).
// The bow comes to a fine point, the stern rounds off more quickly (the bulker's measured waterline).
vec2 hullLocal(vec2 p, vec4 H) { vec2 d = p - H.xy; return vec2(dot(d, H.zw), dot(d, vec2(-H.w, H.z))); }
float halfBeam(float x, vec4 S, vec4 F) {
  float u = x / S.x;
  float e = clamp(u > 0.0 ? (u - F.x) / F.y : (-u - F.z) / F.w, 0.0, 1.0);
  float q = 1.0 - e * e;
  return S.y * sqrt(q) * (u > 0.0 ? 0.75 + 0.25 * q : 0.55 + 0.45 * q);
}
// distance from the water point to the hull's side (0 at the hull, negative under it)
float hullDist(vec2 q, vec4 S, vec4 F) {
  float sl = halfBeam(q.x + 0.6, S, F) - halfBeam(q.x - 0.6, S, F); // the outline's slope over 1.2 m
  float dz = (abs(q.y) - halfBeam(q.x, S, F)) * inversesqrt(1.0 + min(0.7 * sl * sl, 3.0));
  float dx = abs(q.x) - (q.x > 0.0 ? F.x + F.y : F.z + F.w) * S.x;
  return dx > 0.0 ? length(vec2(dx, max(dz, 0.0))) : dz;
}
// The reflected ray from a water point beside a hull (r in the hull's frame): how much of the hull's side it
// meets between the waterline and the deck (the image softens the further the ray travels, as a reflection on
// moving water does; it thins out to nothing at the bow and the stern), how much of it is the boot-top, and
// how far the ray travelled.
vec3 hullHit(vec2 q, vec3 r, vec4 S, vec4 F) {
  float az = abs(q.y), vz = (q.y > 0.0 ? -r.z : r.z); // the ray's speed towards the side
  if (vz < 0.03) return vec3(0.0);
  float tm = az / vz; // it would reach the centreline here
  // march to where it crosses the side (curved towards the ends)
  float t0 = 0.0, g0 = az - halfBeam(q.x, S, F), th = tm;
  for (int k = 1; k <= 4; k++) {
    float t1 = tm * float(k) * 0.25;
    float g1 = az - vz * t1 - halfBeam(q.x + r.x * t1, S, F);
    if (g1 <= 0.0) { th = t0 + (t1 - t0) * g0 / max(g0 - g1, 1e-4); break; }
    t0 = t1; g0 = g1;
  }
  float x = q.x + r.x * th, y = r.y * th;
  float deck = S.z * (1.0 + 0.25 * smoothstep(0.55, 0.95, x / S.x)); // the forecastle stands higher
  float soft = min(0.8 + 0.12 * th, 4.0);
  float cov = smoothstep(-soft, soft, deck - y) * smoothstep(0.0, 0.8 + 0.05 * th, halfBeam(x, S, F));
  return vec3(cov, 1.0 - smoothstep(1.0, 1.9, y), th);
}

vec3 sky(vec3 r) {
  float e = clamp(r.y, 0.0, 1.0);
  vec3 c = mix(uHorizon, uSkyMid, smoothstep(0.0, 0.14, e));
  c = mix(c, uZenith, smoothstep(0.1, 0.6, e));
  // the glow round the sun (narrow: the water's glitter, not a mirrored sheen, carries the sun's path)
  float s = max(dot(r, uSun), 0.0);
  return c + uGlow * (0.12 * pow(s, 8.0) + 0.3 * pow(s, 64.0));
}

// Ripples from the pointer's strokes. A stroke is one source along the pointer's path (a polyline, its time
// running along it; one point for a tap): each water point takes the nearest point of the path, so a quick
// move lays one smooth wake that widens behind the pointer, and only the stroke's ends round off into rings.
// Returns the slope (xy), the crest height (z) and how much ripple is passing here (w).
vec4 packet(vec2 dv, float dl, float age, float sc, float str, vec2 seed, float fp) {
  float r = dl / sc; // pixels from the path
  float w = ${A(le.w0)} + ${A(le.wgrow)} * age;
  float x = r - ${A(le.speed)} * age;
  if (age <= 0.0 || abs(x) > 2.4 * w) return vec4(0.0);
  // longer waves run ahead, shorter ones trail (a touch of dispersion); the crests overtake the packet
  float xw = clamp(x / w, -1.6, 1.6);
  float k = ${A(le.k)} * seed.y * (1.0 - 0.13 * xw) / (1.0 + 0.12 * age);
  float ph = k * (r - ${A(le.speed*le.cphase)} * age) + seed.x;
  float env = exp(-x * x / (w * w));
  float amp = str * exp(-${A(le.decay)} * age) * smoothstep(0.0, 0.12, age) / sqrt(1.0 + r * ${A(le.spread)});
  amp *= 1.0 - smoothstep(${A(le.life*.6)}, ${A(le.life)}, age); // fades out, never pops off
  amp *= 1.0 - smoothstep(0.8, 2.2, k / sc * fp); // finer than ~3 px on screen: gone, not aliased
  return vec4(dv / max(dl, 1e-4) * (amp * env * cos(ph)), amp * env * sin(ph), amp * env);
}
vec4 ripple(vec2 P, float fp) {
  vec4 acc = vec4(0.0);
  for (int k = 0; k < ${o}; k++) {
    if (k >= uRN) break;
    vec4 S = uRS[k]; // the stroke's bounds (centre, radius\xB2) and its first vertex
    vec2 c = P - S.xy;
    if (dot(c, c) > S.z) continue;
    vec4 T = uRT[k]; // vertices, phase, wavelength
    int i0 = int(S.w), n = int(T.x);
    vec4 a = uRA[i0]; // x, z, time, metres per pixel
    vec2 bv = P - a.xy;
    float bd = dot(bv, bv), bt = a.z, bs = a.w, bstr = uRB[i0].x;
    for (int j = 1; j < ${e}; j++) {
      if (j >= n) break;
      vec4 b = uRA[i0 + j];
      vec2 ab = b.xy - a.xy, pa = P - a.xy;
      float s = clamp(dot(pa, ab) / max(dot(ab, ab), 1e-6), 0.0, 1.0);
      vec2 d = pa - ab * s;
      float d2 = dot(d, d);
      if (d2 < bd) { bd = d2; bv = d; bt = mix(a.z, b.z, s); bs = mix(a.w, b.w, s); bstr = mix(uRB[i0 + j - 1].x, uRB[i0 + j].x, s); }
      a = b;
    }
    acc += packet(bv, sqrt(bd), uTime - bt, bs, bstr, T.yz, fp);
  }
  return acc;
}

void main() {
  // The open holds go below the waterline: no sea inside them
  if (inside(uHoleA) || inside(uHoleB)) discard;
  vec2 P = vW.xz;
  vec3 V = normalize(cameraPosition - vW);
  vec2 dPx = dFdx(P), dPy = dFdy(P);
  float fp = max(length(dPx), length(dPy)); // metres per pixel (the longer way)

  // the slow fields: wind slicks, wave groups, the bend of the crests, patches of colour
  vec4 nA = tnoise(P * 0.009 + vec2(uTime * 0.004, 0.0));
  vec4 nB = tnoise(P * 0.019 + uTime * vec2(0.011, -0.007));
  vec4 nC = tnoise(P * 0.045 + vec2(3.7, 1.3) - uTime * 0.013);
  vec4 nD = tnoise(P * 0.11 + vec2(-2.1, 5.9) + uTime * vec2(0.03, -0.05));
  vec4 nE = tnoise(P * 0.27 + vec2(5.3, -2.7) + uTime * vec2(-0.06, 0.04));
  // wind slicks: broad patches where the short chop calms down
  float slick = smoothstep(0.5, 0.78, nA.r * 0.65 + nB.g * 0.35);
  vec4 rp = uRN > 0 ? ripple(P, fp) : vec4(0.0);
  // where rings pass, the finest chop gives way a little so they read
  float calm = (1.0 - 0.6 * slick) * (1.0 - 0.5 * clamp(rp.w * 3.5, 0.0, 1.0));

  vec2 g = vec2(0.0), gL = vec2(0.0), gC = vec2(0.0); float crest = 0.0, h = 0.0, vr = ${A(.0016)} * (1.0 - 0.5 * slick), vr0 = vr;
${a}
  // irregular chop: layers turned and drifting different ways, so the pattern lives rather than slides
${i}
  g += rp.xy;

  vec3 N = normalize(vec3(-g.x, max(1.0 - crest, 0.25), -g.y));
  float NdV = max(dot(N, V), 1e-3);
  float F = 0.02 + 0.98 * pow(1.0 - NdV, 5.0);

  // reflection: the sky (a ray thrown down by a steep facet meets the sea again: the horizon's colour)
  vec3 Rr = reflect(-V, N);
  Rr.y = abs(Rr.y);
  vec3 refl = sky(Rr);
  // the hulls, mirrored along the long waves (they bend the image; the chop only blurs it, a reflection on
  // moving water is soft), only as far out as a mirror image of their topsides reaches, hazed by the way the
  // light travelled from them
  vec2 gh = 0.55 * gL;
  vec3 Rh = reflect(-V, normalize(vec3(-gh.x, 1.0, -gh.y)));
  float tanV = max(V.y, 0.02) / max(length(V.xz), 1e-3);
  float near = 1e4;
  for (int i = 0; i < ${r}; i++) {
    vec4 S = uHullS[i];
    if (S.w < 0.5) continue;
    vec4 H = uHullP[i], Fh = uHullF[i];
    vec2 q = hullLocal(P, H);
    float reach = S.z * 1.3 / tanV + 3.0;
    if (abs(q.x) > S.x + max(reach, 8.0) || abs(q.y) > S.y + max(reach, 8.0)) continue; // far from this one
    float d = hullDist(q, S, Fh);
    near = min(near, d);
    if (Rh.y <= 0.0 || d > reach) continue;
    vec3 rr = vec3(dot(Rh.xz, H.zw), Rh.y, dot(Rh.xz, vec2(-H.w, H.z)));
    vec3 hit = hullHit(q, rr, S, Fh);
    // Towards the bow and the stern the reflected rays graze the narrowing side, and the image would stop in a
    // straight cut where they begin to miss it. There it is blurred along the ship instead (four more rays a
    // little forward and aft, as far apart as the image is soft there, the spread shifted by the chop), so it
    // fades out like the rest of a reflection on moving water. Those rays are found by where they would cross
    // the ship's centreline: off the end of the hull.
    float vzr = q.y > 0.0 ? -rr.z : rr.z;
    float endZone = vzr < 0.03 ? 0.0 : smoothstep(0.75 * S.x, 0.95 * S.x, abs(q.x + rr.x * abs(q.y) / vzr));
    if (endZone > 0.0) {
      float dq = min(4.5 + 0.1 * hit.z, 8.0) * endZone, w = clamp(dot(g - gL, H.zw) * 16.0, -0.8, 0.8) * dq;
      hit.x = 0.28 * hit.x
        + 0.22 * (hullHit(q + vec2(0.5 * dq + w, 0.0), rr, S, Fh).x + hullHit(q - vec2(0.5 * dq - w, 0.0), rr, S, Fh).x)
        + 0.14 * (hullHit(q + vec2(dq + w, 0.0), rr, S, Fh).x + hullHit(q - vec2(dq - w, 0.0), rr, S, Fh).x);
    }
    // past the reach of the mirror image on calm water only the steepest facets still catch the hull:
    // those stray flecks thin out instead of standing alone
    hit.x *= 1.0 - smoothstep(0.7, 1.15, max(d - 1.0, 0.0) * tanV / S.z);
    vec3 hc = mix(uHullCol, uBootCol, hit.y);
    hc = mix(hc, uFogLin, clamp(smoothstep(fogNear, fogFar, vD + hit.z) - smoothstep(fogNear, fogFar, vD), 0.0, 1.0));
    refl = mix(refl, hc, hit.x * 0.86); // a little of the sky stays: the waves still read in it
  }

  // the water's own colour: teal by the quay, deeper blue further out, in broad uneven patches
  float off = max(-vW.z, 0.0);
  vec3 body = mix(uShallow, uDeep, smoothstep(6.0, 150.0, off));
  body *= 0.93 + 0.14 * nA.g;
  // facets turned towards the light look a little lighter, those turned away darker (the light's path through
  // the surface): the waves stay readable where little of the sky is mirrored, the trains most of all seen from
  // above; the finer chop keeps the plain gain (boosted, its blotches read as lichen in a phone's steep view)
  vec2 Lh = normalize(uSun.xz + vec2(1e-4));
  body *= 1.0 + clamp(-dot(g - gC - 0.5 * gL, Lh) * mix(1.4, 3.4, smoothstep(0.3, 0.9, V.y)) - dot(gC, Lh) * 1.4, -0.32, 0.32);
  // crests seen against the light glow a little (thin water lit from behind)
  float back = pow(max(dot(-V.xz, uSun.xz) / max(length(uSun.xz), 1e-3), 0.0), 2.0);
  body += uShallow * (0.35 + 0.9 * back) * max(h, 0.0) * 0.25;

  vec3 col = mix(body, refl, F);

  // the sun: a microfacet lobe whose roughness grows with the unresolved waves (the glitter path); a very
  // bright glint stays a glint (the curve below keeps its colour)
  vec3 Hv = normalize(uSun + V);
  float NdH = max(dot(N, Hv), 1e-3), c2 = NdH * NdH;
  float D = exp(-(1.0 - c2) / (c2 * vr)) / (3.14159 * vr * c2 * c2);
  float Fs = 0.02 + 0.98 * pow(1.0 - max(dot(V, Hv), 0.0), 5.0);
  float spec = uSunK * D * Fs / (4.0 * max(NdV, 0.08)) * step(0.0, uSun.y) * smoothstep(-0.05, 0.12, dot(N, uSun));
  // glitter: the facets the screen resolves glint as they are; on waves too fine for the screen the sun's
  // reflection is not a smooth sheen but sparse twinkling points: two octaves of a noise anchored on the water
  // (picked by the pixel's footprint, so the points neither swim nor shimmer as the view moves) gather that
  // share there. The faint sheen left between them stays golden (it rolls off early); glints may burn bright.
  if (spec > 0.005) {
    // the share of the reflection carried by waves the screen doesn't resolve (once they make up half the
    // roughness, the glitter takes over: a resolved sheen that wide would read as a blot)
    float ur = smoothstep(0.0, 0.5, 1.0 - vr0 / vr);
    float lv = log2(max(fp, 1e-3) * 2.0), l0 = floor(lv), fl = lv - l0;
    vec2 dr = uTime * vec2(0.8, -0.5);
    // each octave turned its own odd way and made of two noises at odd scales: round-ish glints, no cells
    // lined up with the quay or the screen
    vec2 p0 = mat2(0.8253, 0.5646, -0.5646, 0.8253) * (P + dr) * exp2(-l0);
    vec2 p1 = mat2(0.6216, -0.7833, 0.7833, 0.6216) * (P - dr) * exp2(-l0 - 1.0) + 7.3;
    float s0 = tnoise(p0).b * tnoise(p0 * 1.73 + 3.1).g, s1 = tnoise(p1).a * tnoise(p1 * 1.73 - 2.3).r;
    float sp = mix(smoothstep(0.3, 0.62, s0), smoothstep(0.3, 0.62, s1), fl) * 7.0;
    float rs = spec * (1.0 - ur), sh = spec * ur * 0.1, gl = spec * ur * 0.9 * sp;
    col += uSunCol * (rs / (1.0 + 0.15 * rs) + sh / (1.0 + 5.0 * sh) + gl / (1.0 + 0.45 * gl));
  }

  // a little light catching the ripples' crests
  col += refl * (0.06 * max(rp.z, 0.0));

  // darker against the quay wall and along the hulls (their shade, their reflection), broken foam at both
  float ao = mix(0.5, 1.0, smoothstep(0.3, 7.0, off)) * mix(0.55, 1.0, smoothstep(0.0, 6.0, near));
  col *= ao;
  float wq = max(0.8, 1.6 * fp), wh = max(0.45, 1.6 * fp);
  if (off < wq || abs(near) < wh) {
    // the lace: two noises on a lattice turned off the quay's line and bent by a third, with soft edges, so seen
    // close and from above its patches come out ragged rather than square
    vec2 lp = mat2(0.8, 0.6, -0.6, 0.8) * P;
    vec2 bend = (tnoise(lp * 0.7 + uTime * vec2(0.05, -0.04)).rg - 0.5) * 1.4;
    float br = tnoise(lp * 2.2 + bend + uTime * vec2(0.5, -0.3)).g * 0.55 + tnoise(lp * 6.5 + bend * 2.6 + uTime * vec2(0.6, -0.4)).a * 0.45;
    // far away the lace averages out into a faint line no thinner than a pixel or two
    float lace = mix(0.2, smoothstep(0.54, 0.9, br), 1.0 - smoothstep(0.6, 2.0, fp * 6.5));
    float foam = ((1.0 - smoothstep(0.1, wq, off)) * 0.4 * 0.8 / wq + (1.0 - smoothstep(0.0, wh, abs(near))) * 0.3 * 0.45 / wh) * lace;
    col = mix(col, vec3(0.8, 0.82, 0.8) * (0.6 + 0.4 * max(uSun.y, 0.0)), clamp(foam, 0.0, 1.0));
  }

  // highlights roll off keeping their hue (a sunset glint stays golden), the very brightest a little whiter
  float mx = max(col.r, max(col.g, col.b));
  if (mx > 0.75) {
    float mr = 0.75 + 0.25 * (mx - 0.75) / (mx - 0.5);
    col = mix(col * (mr / mx), vec3(mr), 0.08 * smoothstep(1.5, 6.0, mx));
  }
  gl_FragColor = linearToOutputTexel(vec4(col, 1.0));
  // the haze over the far water: the colour of the sky just above the horizon, a shade darker, so the far
  // sea meets the visible sky and hazed hulls and quays still stand out against it
  gl_FragColor.rgb = mix(gl_FragColor.rgb, uHaze, smoothstep(fogNear, fogFar, vD) * uFogMax);
}`}var zo=`
varying vec3 vW;
varying float vD;
void main() {
  vec4 w = modelMatrix * vec4(position, 1.0);
  vW = w.xyz;
  vec4 mv = viewMatrix * w;
  vD = -mv.z;
  gl_Position = projectionMatrix * mv;
}`,ko='a, button, input, select, textarea, label, summary, [role="button"], [role="link"], .hdr, .btn, .slide, .scene__nav, .scroll-cue';function eo(l,t){let e=new Uint8Array(l),o=t;for(let r=0;r<l;r++)o=Math.imul(o,1664525)+1013904223>>>0,e[r]=o>>>24;return e}function to(l,t,e){let o=new _t(l,t,t);return o.wrapS=o.wrapT=_e,o.magFilter=o.minFilter=e,o.generateMipmaps=!1,o.needsUpdate=!0,o}var To=null,Tt=null,Po=()=>to(To||(To=eo(4096*4,3108431)),64,It);function Ao(){if(!Tt){let t=eo(16384,1524570),e=Tt=new Uint8Array(16384*4);for(let o=0;o<128;o++)for(let r=0;r<128;r++){let a=(r+1)%128,i=(o+1)%128,s=(o*128+r)*4;e[s]=t[o*128+r],e[s+1]=t[o*128+a],e[s+2]=t[i*128+r],e[s+3]=t[i*128+a]}}return to(Tt,128,$t)}var Ro=l=>l.map(([t,e])=>{let o=new he(e).convertLinearToSRGB();return[t,o.r,o.g,o.b]});function Qt(l,t,e){t=Math.min(1,Math.max(0,t));let o=1;for(;o<l.length-1&&l[o][0]<t;)o++;let r=l[o-1],a=l[o],i=a[0]>r[0]?Math.min(1,Math.max(0,(t-r[0])/(a[0]-r[0]))):0;return e.setRGB(r[1]+(a[1]-r[1])*i,r[2]+(a[2]-r[2])*i,r[3]+(a[3]-r[3])*i)}var oo=[.55,.47,.57,.41];function Mn(l,t,{sunDir:e,sun:o=[1,.85,.65],sunK:r=1,deep:a=1523538,shallow:i=2777448,sky:s={horizon:15649171,mid:11059149,zenith:5935042},glow:h=[1,.8,.55],bg:f=null,bgSky:u=1,haze:x=null,hazeK:m=.92,fogMax:z=.94,fog:k=14534562,near:N=220,far:G=760,amp:D=1,hull:T=724240,boot:I=5904916,camera:E=null}){let L=!!l.mobile,Y=!!l.lowEnd,se=Y?7:L?9:At.length,Ae=Y?2:Jt.length,ie=matchMedia("(any-pointer: fine)").matches,O=ie?Y?12:32:6,be=ie&&!Y?10:4,ce=3,ae=d=>new he(d),we=d=>new he(d).convertLinearToSRGB(),H={uTime:{value:0},uAmp:{value:D},uSunK:{value:r},uPhase:{value:new Float32Array(se)},uSun:{value:e.clone().normalize()},uSunCol:{value:new b(...o)},uDeep:{value:ae(a)},uShallow:{value:ae(i)},uZenith:{value:ae(s.zenith)},uSkyMid:{value:ae(s.mid)},uHorizon:{value:ae(s.horizon)},uGlow:{value:new b(...h)},uHullCol:{value:ae(T)},uBootCol:{value:ae(I)},uHaze:{value:we(x??k)},uFogLin:{value:ae(k)},uFogMax:{value:z},fogNear:{value:N},fogFar:{value:G},uHoleA:{value:new Xe(0,0,0,0)},uHoleB:{value:new Xe(0,0,0,0)},uHullP:{value:new Float32Array(ce*4)},uHullS:{value:new Float32Array(ce*4)},uHullF:{value:new Float32Array(ce*4)},uRA:{value:new Float32Array(O*4)},uRB:{value:new Float32Array(O*4)},uRS:{value:new Float32Array(be*4)},uRT:{value:new Float32Array(be*4)},uRN:{value:0},uNoise:{value:Po()},uCells:{value:Ao()}},Re=new ut({uniforms:H,vertexShader:zo,fragmentShader:So({nw:se,nc:Ae,nv:O,ns:be,hulls:ce}),toneMapped:!1}),J=new q(new qe(3200,1500),Re);J.rotation.x=-Math.PI/2,J.position.set(0,Pt,-750),J.renderOrder=1,t.add(J);let nt=At.slice(0,se).map(d=>Math.sqrt(Mo*2*Math.PI/d.l)),n=l.renderer;E&&n.compileAsync?.(J,E,t).catch?.(()=>{});let c=f?Ro(f):null,p={horizon:we(s.horizon),mid:we(s.mid),zenith:we(s.zenith),haze:we(x??k)},w=new he,y=new he,g=new b;function M(d,v,P,S){let R=Math.cos(v);return g.set(P*R,Math.sin(v),S*R).multiplyScalar(1e3).add(d.position).project(d),(1-g.y)/2}function C(d){if(!c)return;d.getWorldDirection(fe);let v=Math.hypot(fe.x,fe.z)||1,P=fe.x/v,S=fe.z/v,R=M(d,.004,P,S),_=(K,V,j)=>{Qt(c,V,w),w.lerp(j,1-u),K.value.setRGB(w.r,w.g,w.b).convertSRGBToLinear()};_(H.uHorizon,R,p.horizon),_(H.uSkyMid,M(d,8*ot,P,S),p.mid),_(H.uZenith,M(d,36*ot,P,S),p.zenith),Qt(c,R,y).multiplyScalar(m).lerp(p.haze,1-u),H.uHaze.value.copy(y)}let Q=n.domElement,re=n.getContext(),X=l.signal,B={x:0,y:0,n:0,at:0,ok:!1,tap:!1},De=0,Le=d=>d instanceof Element&&!d.closest(ko)&&!!d.closest(".scene");ie&&(addEventListener("pointermove",d=>{d.pointerType!=="touch"&&(B.x=d.clientX,B.y=d.clientY,B.at=performance.now(),B.n++,B.tap=!1,B.ok=Le(d.target))},{passive:!0,signal:X}),document.documentElement.addEventListener("pointerleave",()=>{B.ok=!1},{passive:!0,signal:X}));let ge=null;addEventListener("pointerdown",d=>{ge=d.pointerType==="touch"&&d.isPrimary?{id:d.pointerId,x:d.clientX,y:d.clientY,t:performance.now()}:null},{passive:!0,signal:X}),addEventListener("pointerup",d=>{let v=ge;ge=null,!(!v||d.pointerId!==v.id||performance.now()-v.t>320||Math.hypot(d.clientX-v.x,d.clientY-v.y)>9)&&(B.x=d.clientX,B.y=d.clientY,B.at=performance.now(),B.n++,B.tap=!0,B.ok=Le(d.target))},{passive:!0,signal:X}),addEventListener("pointercancel",()=>{ge=null},{passive:!0,signal:X});let Me=new jt,Ce=new ct,fe=new b,mt=()=>[H.uHoleA.value,H.uHoleB.value];function gt(d,v,P){let S=Q.getBoundingClientRect(),R=d-S.left,_=v-S.top;if(R<0||_<0||R>=S.width||_>=S.height)return null;Ce.set(R/S.width*2-1,-(_/S.height)*2+1),Me.setFromCamera(Ce,P);let K=Me.ray.origin,V=Me.ray.direction;if(V.y>-.004)return null;let j=(Pt-K.y)/V.y,F=K.x+V.x*j,oe=K.z+V.z*j;if(oe>-.4||oe<-1480||Math.abs(F)>1580)return null;for(let $e of mt())if(F>$e.x&&F<$e.z&&oe>$e.y&&oe<$e.w)return null;P.getWorldDirection(fe);let ve=V.dot(fe),xe=j*ve;if(xe>H.fogFar.value*.8)return null;let Se=P.view?.enabled?P.view.fullHeight:S.height,lt=xe*2*Math.tan(P.fov*ot/2)/(Se*(P.zoom||1))/Math.sqrt(Math.max(.12,-V.y)),bt=Math.max(P.near*1.5,(j-.25/-V.y)*ve);return{x:F,z:oe,sc:lt,px:R,py:_,w:S.width,h:S.height,clear:bt}}let We=new qt(1,1,{depthBuffer:!0}),Oe=new St({color:16777215,side:it,fog:!1,toneMapped:!1}),Fe=new Nt,Ne=new Uint8Array(4),Rt=new he,Ct=!1;Q.addEventListener("webglcontextlost",()=>{Ct=!0},{signal:X}),X?.addEventListener("abort",()=>{if(!(Ct||re.isContextLost()))for(let d of[We,Oe,H.uNoise.value,H.uCells.value,Re,J.geometry])d.dispose()},{once:!0});let vt=null,Ft=-1e9,Ht=0,Bt=0,He=0;function no(d){if(He||re.isContextLost()||X?.aborted)return;He=1;let v=[],P=n.getRenderTarget(),S=null;try{t.traverse(R=>{(R.isMesh||R.isPoints||R.isLine)&&R.material&&(v.push([R,R.material]),R.material=Oe)}),n.setRenderTarget(We),S=n.compileAsync(t,d,t)}catch{}finally{for(let[R,_]of v)R.material=_;n.setRenderTarget(P)}Promise.resolve(S).catch(()=>{}).then(()=>setTimeout(()=>{He=2},120))}function so(d,v){let P=d.view,S=!!P?.enabled,R=S?P.fullWidth:v.w,_=S?P.fullHeight:v.h,K=(S?P.offsetX:0)+v.px*(S?P.width/v.w:1),V=(S?P.offsetY:0)+v.py*(S?P.height/v.h:1);Fe.copy(d,!1),Fe.setViewOffset(R,_,K-.5,V-.5,1,1),Fe.far=Math.max(v.clear,d.near+.1),Fe.updateProjectionMatrix();let j=n.shadowMap,F=j.autoUpdate,oe=t.background,ve=t.overrideMaterial,xe=n.getRenderTarget(),Se=n.getClearAlpha();n.getClearColor(Rt),j.autoUpdate=!1,J.visible=!1,t.background=null,t.overrideMaterial=Oe;try{return n.setRenderTarget(We),n.setClearColor(0,0),n.clear(),n.render(t,Fe),n.readRenderTargetPixelsAsync(We,0,0,1,1,Ne).then(()=>Ne[3]<128,()=>null)}catch{return null}finally{t.overrideMaterial=ve,t.background=oe,J.visible=!0,j.autoUpdate=F,n.setClearColor(Rt,Se),n.setRenderTarget(xe)}}let ee=[],Z=null,st=null,at=(d,v)=>({x:d.x,z:d.z,t:d.t,sc:d.sc,str:v,cx:d.cx,cy:d.cy}),rt=d=>{let v={v:[d],ph:Math.random()*2*Math.PI,k:.92+Math.random()*.16};return ee.push(v),v},ue=null,yt=-1e9;function ao(d){if(d.tap){Z=ue=null,rt(at({...d,sc:d.sc*1.15},.34));return}let v=ue?d.t-ue.t:1,P=ue?Math.hypot(d.cx-ue.cx,d.cy-ue.cy):0;if(!ue||v>.35||P>160){ue=d,Z=rt(at(d,.2)),yt=d.t;return}if(P<5)return;let S=P/Math.max(v,1/60);if(ue=d,S<150){d.t-yt>.3&&(Z=rt(at(d,.2)),yt=d.t);return}let R=at(d,Math.min(.4,.14+S/2600));if(!Z||!ee.includes(Z)){Z=rt(R);return}let _=Z.v.length;if(_>=2){let K=Z.v[_-2],V=Z.v[_-1],j=V.cx-K.cx,F=V.cy-K.cy,oe=R.cx-V.cx,ve=R.cy-V.cy,xe=Math.hypot(j,F),Se=(j*oe+F*ve)/(xe*P+1e-6),Be=S/Math.max(xe/Math.max(V.t-K.t,.001),1);if(Se>.995&&Be>.6&&Be<1.6&&R.t-K.t<.3){R.str=Math.max(R.str,V.str),Z.v[_-1]=R;return}}Z.v.push(R)}function ro(d,v){if(st){let{q:_,sea:K}=st;st=null,K?ao(_):K===!1&&(Z=ue=null)}if(He<2||vt||B.n===De||re.isContextLost())return;if(!B.ok||performance.now()-B.at>150){De=B.n,B.ok||(Z=ue=null);return}let P=performance.now();if(!B.tap&&P-Ft<(Y?80:45)&&Math.hypot(B.x-Ht,B.y-Bt)<36)return;De=B.n,v.updateMatrixWorld();let S=gt(B.x,B.y,v);if(!S){Z=ue=null;return}S.t=d,S.cx=B.x,S.cy=B.y,S.tap=B.tap;let R=so(v,S);R&&(Ft=P,Ht=B.x,Bt=B.y,vt=R.then(_=>{vt=null,X?.aborted||(st={q:S,sea:_})}))}function lo(d){let v=ee[ee.length-1];v&&d<v.v[v.v.length-1].t-1&&(ee.length=0,Z=ue=null);for(let F of ee)for(;F.v.length&&d-F.v[0].t>le.life;)F.v.shift();for(let F=ee.length-1;F>=0;F--)ee[F].v.length||(ee[F]===Z&&(Z=null),ee.splice(F,1));let P=ee.reduce((F,oe)=>F+oe.v.length,0);for(;ee.length&&(P>O||ee.length>be);){let F=ee[0];ee.length>be||F.v.length===1?(P-=F.v.length,F===Z&&(Z=null),ee.shift()):(F.v.shift(),P--)}let S=H.uRA.value,R=H.uRB.value,_=H.uRS.value,K=H.uRT.value,V=0,j=0;for(let F of ee){let oe=1/0,ve=-1/0,xe=1/0,Se=-1/0,Be=0;for(let ye of F.v)oe=Math.min(oe,ye.x),ve=Math.max(ve,ye.x),xe=Math.min(xe,ye.z),Se=Math.max(Se,ye.z),Be=Math.max(Be,ye.sc);let lt=Math.max(0,d-F.v[0].t),bt=(le.speed*lt+2.4*(le.w0+le.wgrow*lt))*Be*1.05,$e=Math.hypot(ve-oe,Se-xe)/2+bt;_[j*4]=(oe+ve)/2,_[j*4+1]=(xe+Se)/2,_[j*4+2]=$e*$e,_[j*4+3]=V,K[j*4]=F.v.length,K[j*4+1]=F.ph,K[j*4+2]=F.k;for(let ye of F.v)S[V*4]=ye.x,S[V*4+1]=ye.z,S[V*4+2]=ye.t,S[V*4+3]=ye.sc,R[V*4]=ye.str,V++;j++}H.uRN.value=j}return{mesh:J,material:Re,uniforms:H,setFog(d,v){H.fogNear.value=d,H.fogFar.value=v},setHoles(d,v){H.uHoleA.value.copy(d),H.uHoleB.value.copy(v)},setHull(d,v){let P=H.uHullP.value,S=H.uHullS.value,R=H.uHullF.value;if(!v){S[d*4+3]=0;return}P[d*4]=v.x,P[d*4+1]=v.z,P[d*4+2]=v.dx,P[d*4+3]=v.dz,S[d*4]=v.len/2,S[d*4+1]=v.beam/2,S[d*4+2]=v.free,S[d*4+3]=1,R.set(v.form||oo,d*4)},update(d,v){H.uTime.value=d;let P=H.uPhase.value;for(let S=0;S<se;S++)P[S]=nt[S]*d%(2*Math.PI);v.updateMatrixWorld(),C(v),He||(He=-1,(l.yield?l.yield():Promise.resolve()).then(()=>{He=0,no(v)})),ro(d,v),lo(d)}}}function Sn(l,t,e,o=1,r=0){return{x:l,z:t,dx:o,dz:r,len:176,beam:30.4,free:14.5-e-Pt,form:oo}}export{tt as a,dt as b,Ut as c,$ as d,_o as e,Vo as f,Eo as g,jo as h,ke as i,pe as j,Ee as k,ho as l,Yo as m,Oo as n,Uo as o,Xo as p,Zo as q,Ko as r,Qo as s,Jo as t,en as u,tn as v,on as w,nn as x,sn as y,an as z,rn as A,hn as B,dn as C,vn as D,Mn as E,Sn as F};
