(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();class Dv{static isWebGL2Available(){try{const t=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&t.getContext("webgl2"))}catch{return!1}}static isColorSpaceAvailable(t){try{const e=document.createElement("canvas"),n=window.WebGL2RenderingContext&&e.getContext("webgl2");return n.drawingBufferColorSpace=t,n.drawingBufferColorSpace===t}catch{return!1}}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(t){const e={1:"WebGL",2:"WebGL 2"},n={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let r='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const s=document.createElement("div");return s.id="webglmessage",s.style.fontFamily="monospace",s.style.fontSize="13px",s.style.fontWeight="normal",s.style.textAlign="center",s.style.background="#fff",s.style.color="#000",s.style.padding="1.5em",s.style.width="400px",s.style.margin="5em auto 0",n[t]?r=r.replace("$0","graphics card"):r=r.replace("$0","browser"),r=r.replace("$1",e[t]),s.innerHTML=r,s}static isWebGLAvailable(){console.warn("isWebGLAvailable() has been deprecated and will be removed in r178. Use isWebGL2Available() instead.");try{const t=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(t.getContext("webgl")||t.getContext("experimental-webgl")))}catch{return!1}}static getWebGLErrorMessage(){return console.warn("getWebGLErrorMessage() has been deprecated and will be removed in r178. Use getWebGL2ErrorMessage() instead."),this.getErrorMessage(1)}}const fp=Dv;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="173",vo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ho={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lv=0,mp=1,Iv=2,Sm=1,Uv=2,er=3,Wr=0,zn=1,Ni=2,kr=0,xo=1,_p=2,gp=3,vp=4,Ov=5,hs=100,Nv=101,Fv=102,kv=103,Bv=104,zv=200,Vv=201,Hv=202,Gv=203,Vu=204,Hu=205,Wv=206,Xv=207,Yv=208,qv=209,jv=210,$v=211,Kv=212,Zv=213,Jv=214,Gu=0,Wu=1,Xu=2,Ro=3,Yu=4,qu=5,ju=6,$u=7,Tm=0,Qv=1,t0=2,Br=0,e0=1,n0=2,i0=3,r0=4,s0=5,o0=6,a0=7,Cm=300,Do=301,Lo=302,Ku=303,Zu=304,Rc=306,Ju=1e3,ps=1001,Qu=1002,Li=1003,l0=1004,cl=1005,ki=1006,Hc=1007,fs=1008,dr=1009,Pm=1010,Am=1011,La=1012,od=1013,Ts=1014,sr=1015,$a=1016,ad=1017,ld=1018,Io=1020,Rm=35902,Dm=1021,Lm=1022,Ri=1023,Im=1024,Um=1025,bo=1026,Uo=1027,Om=1028,cd=1029,Nm=1030,ud=1031,hd=1033,Yl=33776,ql=33777,jl=33778,$l=33779,th=35840,eh=35841,nh=35842,ih=35843,rh=36196,sh=37492,oh=37496,ah=37808,lh=37809,ch=37810,uh=37811,hh=37812,dh=37813,ph=37814,fh=37815,mh=37816,_h=37817,gh=37818,vh=37819,xh=37820,bh=37821,Kl=36492,yh=36494,wh=36495,Fm=36283,Eh=36284,Mh=36285,Sh=36286,c0=3200,u0=3201,h0=0,d0=1,Dr="",_i="srgb",Oo="srgb-linear",cc="linear",xe="srgb",Vs=7680,xp=519,p0=512,f0=513,m0=514,km=515,_0=516,g0=517,v0=518,x0=519,bp=35044,yp="300 es",or=2e3,uc=2001;class Os{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wp=1234567;const va=Math.PI/180,Ia=180/Math.PI;function Xo(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function dd(i,t){return(i%t+t)%t}function b0(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function y0(i,t,e){return i!==t?(e-i)/(t-i):0}function xa(i,t,e){return(1-e)*i+e*t}function w0(i,t,e,n){return xa(i,t,1-Math.exp(-e*n))}function E0(i,t=1){return t-Math.abs(dd(i,t*2)-t)}function M0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function S0(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function T0(i,t){return i+Math.floor(Math.random()*(t-i+1))}function C0(i,t){return i+Math.random()*(t-i)}function P0(i){return i*(.5-Math.random())}function A0(i){i!==void 0&&(wp=i);let t=wp+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function R0(i){return i*va}function D0(i){return i*Ia}function L0(i){return(i&i-1)===0&&i!==0}function I0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function U0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function O0(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),h=s((t-n)/2),d=o((t-n)/2),p=s((n-t)/2),g=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function oo(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Fn={DEG2RAD:va,RAD2DEG:Ia,generateUUID:Xo,clamp:ne,euclideanModulo:dd,mapLinear:b0,inverseLerp:y0,lerp:xa,damp:w0,pingpong:E0,smoothstep:M0,smootherstep:S0,randInt:T0,randFloat:C0,randFloatSpread:P0,seededRandom:A0,degToRad:R0,radToDeg:D0,isPowerOfTwo:L0,ceilPowerOfTwo:I0,floorPowerOfTwo:U0,setQuaternionFromProperEuler:O0,normalize:Mn,denormalize:oo};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,r,s,o,a,l,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],M=r[1],E=r[4],x=r[7],P=r[2],C=r[5],S=r[8];return s[0]=o*_+a*M+l*P,s[3]=o*m+a*E+l*C,s[6]=o*f+a*x+l*S,s[1]=c*_+u*M+h*P,s[4]=c*m+u*E+h*C,s[7]=c*f+u*x+h*S,s[2]=d*_+p*M+g*P,s[5]=d*m+p*E+g*C,s[8]=d*f+p*x+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=e*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*c-u*n)*_,t[2]=(a*n-r*o)*_,t[3]=d*_,t[4]=(u*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gc.makeScale(t,e)),this}rotate(t){return this.premultiply(Gc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gc=new Yt;function Bm(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function hc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function N0(){const i=hc("canvas");return i.style.display="block",i}const Ep={};function ao(i){i in Ep||(Ep[i]=!0,console.warn(i))}function F0(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function k0(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function B0(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Mp=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sp=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z0(){const i={enabled:!0,workingColorSpace:Oo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xe&&(r.r=cr(r.r),r.g=cr(r.g),r.b=cr(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(r.r=yo(r.r),r.g=yo(r.g),r.b=yo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Dr?cc:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Oo]:{primaries:t,whitePoint:n,transfer:cc,toXYZ:Mp,fromXYZ:Sp,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:Mp,fromXYZ:Sp,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),i}const he=z0();function cr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Hs;class V0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hs===void 0&&(Hs=hc("canvas")),Hs.width=t.width,Hs.height=t.height;const n=Hs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Hs}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=hc("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=cr(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cr(e[n]/255)*255):e[n]=cr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let H0=0;class zm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Wc(r[o].image)):s.push(Wc(r[o]))}else s=Wc(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Wc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?V0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G0=0;class Vn extends Os{constructor(t=Vn.DEFAULT_IMAGE,e=Vn.DEFAULT_MAPPING,n=ps,r=ps,s=ki,o=fs,a=Ri,l=dr,c=Vn.DEFAULT_ANISOTROPY,u=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Xo(),this.name="",this.source=new zm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ju:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case Qu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ju:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case Qu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Cm;Vn.DEFAULT_ANISOTROPY=1;class He{constructor(t=0,e=0,n=0,r=1){He.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,x=(p+1)/2,P=(f+1)/2,C=(u+d)/4,S=(h+_)/4,A=(g+m)/4;return E>x&&E>P?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=C/n,s=S/n):x>P?x<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),n=C/r,s=A/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=S/s,r=A/s),this.set(n,r,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(h-_)/M,this.z=(d-u)/M,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class W0 extends Os{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new He(0,0,t,e),this.scissorTest=!1,this.viewport=new He(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Vn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new zm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xr extends W0{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vm extends Vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Li,this.minFilter=Li,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class X0 extends Vn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Li,this.minFilter=Li,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*_,M=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const P=Math.sqrt(E),C=Math.atan2(P,f*M);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const x=a*M;if(l=l*m+d*x,c=c*m+p*x,u=u*m+g*x,h=h*m+_*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+l*p-c*d,t[e+1]=l*g+u*d+c*h-a*p,t[e+2]=c*g+u*p+a*d-l*h,t[e+3]=u*g-a*h-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,e=0,n=0){G.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tp.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xc.copy(this).projectOnVector(t),this.sub(Xc)}reflect(t){return this.sub(Xc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xc=new G,Tp=new Cs;class Ka{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Si):Si.fromBufferAttribute(s,o),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ul.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ul.copy(n.boundingBox)),ul.applyMatrix4(t.matrixWorld),this.union(ul)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qo),hl.subVectors(this.max,Qo),Gs.subVectors(t.a,Qo),Ws.subVectors(t.b,Qo),Xs.subVectors(t.c,Qo),br.subVectors(Ws,Gs),yr.subVectors(Xs,Ws),Jr.subVectors(Gs,Xs);let e=[0,-br.z,br.y,0,-yr.z,yr.y,0,-Jr.z,Jr.y,br.z,0,-br.x,yr.z,0,-yr.x,Jr.z,0,-Jr.x,-br.y,br.x,0,-yr.y,yr.x,0,-Jr.y,Jr.x,0];return!Yc(e,Gs,Ws,Xs,hl)||(e=[1,0,0,0,1,0,0,0,1],!Yc(e,Gs,Ws,Xs,hl))?!1:(dl.crossVectors(br,yr),e=[dl.x,dl.y,dl.z],Yc(e,Gs,Ws,Xs,hl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $i=[new G,new G,new G,new G,new G,new G,new G,new G],Si=new G,ul=new Ka,Gs=new G,Ws=new G,Xs=new G,br=new G,yr=new G,Jr=new G,Qo=new G,hl=new G,dl=new G,Qr=new G;function Yc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Qr.fromArray(i,s);const a=r.x*Math.abs(Qr.x)+r.y*Math.abs(Qr.y)+r.z*Math.abs(Qr.z),l=t.dot(Qr),c=e.dot(Qr),u=n.dot(Qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Y0=new Ka,ta=new G,qc=new G;class pd{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Y0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ta.subVectors(t,this.center);const e=ta.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ta,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ta.copy(t.center).add(qc)),this.expandByPoint(ta.copy(t.center).sub(qc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new G,jc=new G,pl=new G,wr=new G,$c=new G,fl=new G,Kc=new G;class Hm{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ki)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ki.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ki.copy(this.origin).addScaledVector(this.direction,e),Ki.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){jc.copy(t).add(e).multiplyScalar(.5),pl.copy(e).sub(t).normalize(),wr.copy(this.origin).sub(jc);const s=t.distanceTo(e)*.5,o=-this.direction.dot(pl),a=wr.dot(this.direction),l=-wr.dot(pl),c=wr.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(jc).addScaledVector(pl,d),p}intersectSphere(t,e){Ki.subVectors(t.center,this.origin);const n=Ki.dot(this.direction),r=Ki.dot(Ki)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Ki)!==null}intersectTriangle(t,e,n,r,s){$c.subVectors(e,t),fl.subVectors(n,t),Kc.crossVectors($c,fl);let o=this.direction.dot(Kc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;wr.subVectors(this.origin,t);const l=a*this.direction.dot(fl.crossVectors(wr,fl));if(l<0)return null;const c=a*this.direction.dot($c.cross(wr));if(c<0||l+c>o)return null;const u=-a*wr.dot(Kc);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(t,e,n,r,s,o,a,l,c,u,h,d,p,g,_,m){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,h,d,p,g,_,m)}set(t,e,n,r,s,o,a,l,c,u,h,d,p,g,_,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ys.setFromMatrixColumn(t,0).length(),s=1/Ys.setFromMatrixColumn(t,1).length(),o=1/Ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,p=l*h,g=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,p=o*h,g=a*u,_=a*h;e[0]=l*u,e[4]=g*c-p,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*h+g,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(q0,t,j0)}lookAt(t,e,n){const r=this.elements;return Kn.subVectors(t,e),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Er.crossVectors(n,Kn),Er.lengthSq()===0&&(Math.abs(n.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Er.crossVectors(n,Kn)),Er.normalize(),ml.crossVectors(Kn,Er),r[0]=Er.x,r[4]=ml.x,r[8]=Kn.x,r[1]=Er.y,r[5]=ml.y,r[9]=Kn.y,r[2]=Er.z,r[6]=ml.z,r[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],M=n[3],E=n[7],x=n[11],P=n[15],C=r[0],S=r[4],A=r[8],b=r[12],v=r[1],R=r[5],O=r[9],k=r[13],Y=r[2],j=r[6],W=r[10],X=r[14],V=r[3],et=r[7],D=r[11],ct=r[15];return s[0]=o*C+a*v+l*Y+c*V,s[4]=o*S+a*R+l*j+c*et,s[8]=o*A+a*O+l*W+c*D,s[12]=o*b+a*k+l*X+c*ct,s[1]=u*C+h*v+d*Y+p*V,s[5]=u*S+h*R+d*j+p*et,s[9]=u*A+h*O+d*W+p*D,s[13]=u*b+h*k+d*X+p*ct,s[2]=g*C+_*v+m*Y+f*V,s[6]=g*S+_*R+m*j+f*et,s[10]=g*A+_*O+m*W+f*D,s[14]=g*b+_*k+m*X+f*ct,s[3]=M*C+E*v+x*Y+P*V,s[7]=M*S+E*R+x*j+P*et,s[11]=M*A+E*O+x*W+P*D,s[15]=M*b+E*k+x*X+P*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],_=t[7],m=t[11],f=t[15];return g*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*p-n*l*p)+_*(+e*l*p-e*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+e*c*h-e*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+f*(-r*a*u-e*l*h+e*a*d+r*o*h-n*o*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],_=t[13],m=t[14],f=t[15],M=h*m*c-_*d*c+_*l*p-a*m*p-h*l*f+a*d*f,E=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,x=u*_*c-g*h*c+g*a*p-o*_*p-u*a*f+o*h*f,P=g*h*l-u*_*l-g*a*d+o*_*d+u*a*m-o*h*m,C=e*M+n*E+r*x+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/C;return t[0]=M*S,t[1]=(_*d*s-h*m*s-_*r*p+n*m*p+h*r*f-n*d*f)*S,t[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*f+n*l*f)*S,t[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*p-n*l*p)*S,t[4]=E*S,t[5]=(u*m*s-g*d*s+g*r*p-e*m*p-u*r*f+e*d*f)*S,t[6]=(g*l*s-o*m*s-g*r*c+e*m*c+o*r*f-e*l*f)*S,t[7]=(o*d*s-u*l*s+u*r*c-e*d*c-o*r*p+e*l*p)*S,t[8]=x*S,t[9]=(g*h*s-u*_*s-g*n*p+e*_*p+u*n*f-e*h*f)*S,t[10]=(o*_*s-g*a*s+g*n*c-e*_*c-o*n*f+e*a*f)*S,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*p-e*a*p)*S,t[12]=P*S,t[13]=(u*_*r-g*h*r+g*n*d-e*_*d-u*n*m+e*h*m)*S,t[14]=(g*a*r-o*_*r-g*n*l+e*_*l+o*n*m-e*a*m)*S,t[15]=(o*h*r-u*a*r+u*n*l-e*h*l-o*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,_=o*u,m=o*h,f=a*h,M=l*c,E=l*u,x=l*h,P=n.x,C=n.y,S=n.z;return r[0]=(1-(_+f))*P,r[1]=(p+x)*P,r[2]=(g-E)*P,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(d+f))*C,r[6]=(m+M)*C,r[7]=0,r[8]=(g+E)*S,r[9]=(m-M)*S,r[10]=(1-(d+_))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ys.set(r[0],r[1],r[2]).length();const o=Ys.set(r[4],r[5],r[6]).length(),a=Ys.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ti.copy(this);const c=1/s,u=1/o,h=1/a;return Ti.elements[0]*=c,Ti.elements[1]*=c,Ti.elements[2]*=c,Ti.elements[4]*=u,Ti.elements[5]*=u,Ti.elements[6]*=u,Ti.elements[8]*=h,Ti.elements[9]*=h,Ti.elements[10]*=h,e.setFromRotationMatrix(Ti),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=or){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r);let p,g;if(a===or)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===uc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=or){const l=this.elements,c=1/(e-t),u=1/(n-r),h=1/(o-s),d=(e+t)*c,p=(n+r)*u;let g,_;if(a===or)g=(o+s)*h,_=-2*h;else if(a===uc)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ys=new G,Ti=new $e,q0=new G(0,0,0),j0=new G(1,1,1),Er=new G,ml=new G,Kn=new G,Cp=new $e,Pp=new Cs;class pr{constructor(t=0,e=0,n=0,r=pr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pp.setFromEuler(this),this.setFromQuaternion(Pp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pr.DEFAULT_ORDER="XYZ";class Gm{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let $0=0;const Ap=new G,qs=new Cs,Zi=new $e,_l=new G,ea=new G,K0=new G,Z0=new Cs,Rp=new G(1,0,0),Dp=new G(0,1,0),Lp=new G(0,0,1),Ip={type:"added"},J0={type:"removed"},js={type:"childadded",child:null},Zc={type:"childremoved",child:null};class Ln extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new G,e=new pr,n=new Cs,r=new G(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new Yt}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.multiply(qs),this}rotateOnWorldAxis(t,e){return qs.setFromAxisAngle(t,e),this.quaternion.premultiply(qs),this}rotateX(t){return this.rotateOnAxis(Rp,t)}rotateY(t){return this.rotateOnAxis(Dp,t)}rotateZ(t){return this.rotateOnAxis(Lp,t)}translateOnAxis(t,e){return Ap.copy(t).applyQuaternion(this.quaternion),this.position.add(Ap.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Rp,t)}translateY(t){return this.translateOnAxis(Dp,t)}translateZ(t){return this.translateOnAxis(Lp,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_l.copy(t):_l.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(ea,_l,this.up):Zi.lookAt(_l,ea,this.up),this.quaternion.setFromRotationMatrix(Zi),r&&(Zi.extractRotation(r.matrixWorld),qs.setFromRotationMatrix(Zi),this.quaternion.premultiply(qs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ip),js.child=t,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(J0),Zc.child=t,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ip),js.child=t,this.dispatchEvent(js),js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,t,K0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,Z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ln.DEFAULT_UP=new G(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new G,Ji=new G,Jc=new G,Qi=new G,$s=new G,Ks=new G,Up=new G,Qc=new G,tu=new G,eu=new G,nu=new He,iu=new He,ru=new He;class Ai{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ci.subVectors(t,e),r.cross(Ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ci.subVectors(r,e),Ji.subVectors(n,e),Jc.subVectors(t,e);const o=Ci.dot(Ci),a=Ci.dot(Ji),l=Ci.dot(Jc),c=Ji.dot(Ji),u=Ji.dot(Jc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Qi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Qi.x),l.addScaledVector(o,Qi.y),l.addScaledVector(a,Qi.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return nu.setScalar(0),iu.setScalar(0),ru.setScalar(0),nu.fromBufferAttribute(t,e),iu.fromBufferAttribute(t,n),ru.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(nu,s.x),o.addScaledVector(iu,s.y),o.addScaledVector(ru,s.z),o}static isFrontFacing(t,e,n,r){return Ci.subVectors(n,e),Ji.subVectors(t,e),Ci.cross(Ji).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),Ci.cross(Ji).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ai.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Ai.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;$s.subVectors(r,n),Ks.subVectors(s,n),Qc.subVectors(t,n);const l=$s.dot(Qc),c=Ks.dot(Qc);if(l<=0&&c<=0)return e.copy(n);tu.subVectors(t,r);const u=$s.dot(tu),h=Ks.dot(tu);if(u>=0&&h<=u)return e.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector($s,o);eu.subVectors(t,s);const p=$s.dot(eu),g=Ks.dot(eu);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ks,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Up.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(Up,a);const f=1/(m+_+d);return o=_*f,a=d*f,e.copy(n).addScaledVector($s,o).addScaledVector(Ks,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},gl={h:0,s:0,l:0};function su(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class ge{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_i){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=he.workingColorSpace){if(t=dd(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=su(o,s,t+1/3),this.g=su(o,s,t),this.b=su(o,s,t-1/3)}return he.toWorkingColorSpace(this,r),this}setStyle(t,e=_i){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_i){const n=Wm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cr(t.r),this.g=cr(t.g),this.b=cr(t.b),this}copyLinearToSRGB(t){return this.r=yo(t.r),this.g=yo(t.g),this.b=yo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_i){return he.fromWorkingColorSpace(mn.copy(this),t),Math.round(ne(mn.r*255,0,255))*65536+Math.round(ne(mn.g*255,0,255))*256+Math.round(ne(mn.b*255,0,255))}getHexString(t=_i){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(mn.copy(this),e);const n=mn.r,r=mn.g,s=mn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=_i){he.fromWorkingColorSpace(mn.copy(this),t);const e=mn.r,n=mn.g,r=mn.b;return t!==_i?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Mr),this.setHSL(Mr.h+t,Mr.s+e,Mr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mr),t.getHSL(gl);const n=xa(Mr.h,gl.h,e),r=xa(Mr.s,gl.s,e),s=xa(Mr.l,gl.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mn=new ge;ge.NAMES=Wm;let Q0=0;class Dc extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=xo,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vu,this.blendDst=Hu,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(n.blending=this.blending),this.side!==Wr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vu&&(n.blendSrc=this.blendSrc),this.blendDst!==Hu&&(n.blendDst=this.blendDst),this.blendEquation!==hs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ro&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Xm extends Dc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pr,this.combine=Tm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xe=new G,vl=new Lt;let tx=0;class Hi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tx++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=bp,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vl.fromBufferAttribute(this,e),vl.applyMatrix3(t),this.setXY(e,vl.x,vl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oo(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),r=Mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Mn(e,this.array),n=Mn(n,this.array),r=Mn(r,this.array),s=Mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bp&&(t.usage=this.usage),t}}class Ym extends Hi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qm extends Hi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class gs extends Hi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ex=0;const pi=new $e,ou=new Ln,Zs=new G,Zn=new Ka,na=new Ka,an=new G;class Ns extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bm(t)?qm:Ym)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Yt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,e,n){return pi.makeTranslation(t,e,n),this.applyMatrix4(pi),this}scale(t,e,n){return pi.makeScale(t,e,n),this.applyMatrix4(pi),this}lookAt(t){return ou.lookAt(t),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new gs(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Zn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pd);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];na.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Zn.min,na.min),Zn.expandByPoint(an),an.addVectors(Zn.max,na.max),Zn.expandByPoint(an)):(Zn.expandByPoint(na.min),Zn.expandByPoint(na.max))}Zn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)an.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(an));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)an.fromBufferAttribute(a,c),l&&(Zs.fromBufferAttribute(t,c),an.add(Zs)),r=Math.max(r,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new G,l[A]=new G;const c=new G,u=new G,h=new G,d=new Lt,p=new Lt,g=new Lt,_=new G,m=new G;function f(A,b,v){c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,v),d.fromBufferAttribute(s,A),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,v),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(R),a[A].add(_),a[b].add(_),a[v].add(_),l[A].add(m),l[b].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let A=0,b=M.length;A<b;++A){const v=M[A],R=v.start,O=v.count;for(let k=R,Y=R+O;k<Y;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const E=new G,x=new G,P=new G,C=new G;function S(A){P.fromBufferAttribute(r,A),C.copy(P);const b=a[A];E.copy(b),E.sub(P.multiplyScalar(P.dot(b))).normalize(),x.crossVectors(C,b);const R=x.dot(l[A])<0?-1:1;o.setXYZW(A,E.x,E.y,E.z,R)}for(let A=0,b=M.length;A<b;++A){const v=M[A],R=v.start,O=v.count;for(let k=R,Y=R+O;k<Y;k+=3)S(t.getX(k+0)),S(t.getX(k+1)),S(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Hi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,u=new G,h=new G;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Hi(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ns,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Op=new $e,ts=new Hm,xl=new pd,Np=new G,bl=new G,yl=new G,wl=new G,au=new G,El=new G,Fp=new G,Ml=new G;class Di extends Ln{constructor(t=new Ns,e=new Xm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){El.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(au.fromBufferAttribute(h,t),o?El.addScaledVector(au,u):El.addScaledVector(au.sub(e),u))}e.add(El)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xl.copy(n.boundingSphere),xl.applyMatrix4(s),ts.copy(t.ray).recast(t.near),!(xl.containsPoint(ts.origin)===!1&&(ts.intersectSphere(xl,Np)===null||ts.origin.distanceToSquared(Np)>(t.far-t.near)**2))&&(Op.copy(s).invert(),ts.copy(t.ray).applyMatrix4(Op),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,P=E;x<P;x+=3){const C=a.getX(x),S=a.getX(x+1),A=a.getX(x+2);r=Sl(this,f,t,n,c,u,h,C,S,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=a.getX(m),E=a.getX(m+1),x=a.getX(m+2);r=Sl(this,o,t,n,c,u,h,M,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],M=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=M,P=E;x<P;x+=3){const C=x,S=x+1,A=x+2;r=Sl(this,f,t,n,c,u,h,C,S,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const M=m,E=m+1,x=m+2;r=Sl(this,o,t,n,c,u,h,M,E,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function nx(i,t,e,n,r,s,o,a){let l;if(t.side===zn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Wr,a),l===null)return null;Ml.copy(a),Ml.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ml);return c<e.near||c>e.far?null:{distance:c,point:Ml.clone(),object:i}}function Sl(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,bl),i.getVertexPosition(l,yl),i.getVertexPosition(c,wl);const u=nx(i,t,e,n,bl,yl,wl,Fp);if(u){const h=new G;Ai.getBarycoord(Fp,bl,yl,wl,h),r&&(u.uv=Ai.getInterpolatedAttribute(r,a,l,c,h,new Lt)),s&&(u.uv1=Ai.getInterpolatedAttribute(s,a,l,c,h,new Lt)),o&&(u.normal=Ai.getInterpolatedAttribute(o,a,l,c,h,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new G,materialIndex:0};Ai.getNormal(bl,yl,wl,d.normal),u.face=d,u.barycoord=h}return u}class Za extends Ns{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new gs(c,3)),this.setAttribute("normal",new gs(u,3)),this.setAttribute("uv",new gs(h,2));function g(_,m,f,M,E,x,P,C,S,A,b){const v=x/S,R=P/A,O=x/2,k=P/2,Y=C/2,j=S+1,W=A+1;let X=0,V=0;const et=new G;for(let D=0;D<W;D++){const ct=D*R-k;for(let Ut=0;Ut<j;Ut++){const jt=Ut*v-O;et[_]=jt*M,et[m]=ct*E,et[f]=Y,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[f]=C>0?1:-1,u.push(et.x,et.y,et.z),h.push(Ut/S),h.push(1-D/A),X+=1}}for(let D=0;D<A;D++)for(let ct=0;ct<S;ct++){const Ut=d+ct+j*D,jt=d+ct+j*(D+1),$=d+(ct+1)+j*(D+1),nt=d+(ct+1)+j*D;l.push(Ut,jt,nt),l.push(jt,$,nt),V+=6}a.addGroup(p,V,b),p+=V,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Za(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function No(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Tn(i){const t={};for(let e=0;e<i.length;e++){const n=No(i[e]);for(const r in n)t[r]=n[r]}return t}function ix(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function jm(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const rx={clone:No,merge:Tn};var sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xi extends Dc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sx,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=No(t.uniforms),this.uniformsGroups=ix(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fd extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=or}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new G,kp=new Lt,Bp=new Lt;class gi extends fd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ia*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(va*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ia*2*Math.atan(Math.tan(va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-t/Sr.z)}getViewSize(t,e){return this.getViewBounds(t,kp,Bp),e.subVectors(Bp,kp)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(va*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Js=-90,Qs=1;class ax extends Ln{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gi(Js,Qs,t,e);r.layers=this.layers,this.add(r);const s=new gi(Js,Qs,t,e);s.layers=this.layers,this.add(s);const o=new gi(Js,Qs,t,e);o.layers=this.layers,this.add(o);const a=new gi(Js,Qs,t,e);a.layers=this.layers,this.add(a);const l=new gi(Js,Qs,t,e);l.layers=this.layers,this.add(l);const c=new gi(Js,Qs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===or)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===uc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class $m extends Vn{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Do,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class lx extends Xr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new $m(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ki}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Za(5,5,5),s=new Xi({name:"CubemapFromEquirect",uniforms:No(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:kr});s.uniforms.tEquirect.value=e;const o=new Di(r,s),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=ki),new ax(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class Tl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cx={type:"move"};class lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tl;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Km extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pr,this.environmentIntensity=1,this.environmentRotation=new pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const cu=new G,ux=new G,hx=new Yt;let Rr=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=cu.subVectors(n,e).cross(ux.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(cu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||hx.getNormalMatrix(t),r=this.coplanarPoint(cu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const es=new pd,Cl=new G;class Zm{constructor(t=new Rr,e=new Rr,n=new Rr,r=new Rr,s=new Rr,o=new Rr){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=or){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],_=r[10],m=r[11],f=r[12],M=r[13],E=r[14],x=r[15];if(n[0].setComponents(l-s,d-c,m-p,x-f).normalize(),n[1].setComponents(l+s,d+c,m+p,x+f).normalize(),n[2].setComponents(l+o,d+u,m+g,x+M).normalize(),n[3].setComponents(l-o,d-u,m-g,x-M).normalize(),n[4].setComponents(l-a,d-h,m-_,x-E).normalize(),e===or)n[5].setComponents(l+a,d+h,m+_,x+E).normalize();else if(e===uc)n[5].setComponents(a,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Cl.x=r.normal.x>0?t.max.x:t.min.x,Cl.y=r.normal.y>0?t.max.y:t.min.y,Cl.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jm extends Vn{constructor(t,e,n,r,s,o,a,l,c,u=bo){if(u!==bo&&u!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bo&&(n=Ts),n===void 0&&u===Uo&&(n=Io),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Li,this.minFilter=l!==void 0?l:Li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Yo extends Ns{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=t/a,d=e/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const M=f*d-o;for(let E=0;E<c;E++){const x=E*h-s;g.push(x,-M,0),_.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<a;M++){const E=M+c*f,x=M+c*(f+1),P=M+1+c*(f+1),C=M+1+c*f;p.push(E,x,C),p.push(x,P,C)}this.setIndex(p),this.setAttribute("position",new gs(g,3)),this.setAttribute("normal",new gs(_,3)),this.setAttribute("uv",new gs(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.widthSegments,t.heightSegments)}}class dx extends Dc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class px extends Dc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fx extends Ln{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class mx extends fx{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}class _x extends fd{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class gx extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class vx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=zp();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function zp(){return performance.now()}class po{constructor(t){this.value=t}clone(){return new po(this.value.clone===void 0?this.value:this.value.clone())}}class Vp{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xx extends Os{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Hp(i,t,e,n){const r=bx(n);switch(e){case Dm:return i*t;case Im:return i*t;case Um:return i*t*2;case Om:return i*t/r.components*r.byteLength;case cd:return i*t/r.components*r.byteLength;case Nm:return i*t*2/r.components*r.byteLength;case ud:return i*t*2/r.components*r.byteLength;case Lm:return i*t*3/r.components*r.byteLength;case Ri:return i*t*4/r.components*r.byteLength;case hd:return i*t*4/r.components*r.byteLength;case Yl:case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case jl:case $l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eh:case ih:return Math.max(i,16)*Math.max(t,8)/4;case th:case nh:return Math.max(i,8)*Math.max(t,8)/2;case rh:case sh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case oh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case lh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ch:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case uh:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case hh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case dh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ph:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fh:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case mh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case _h:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case gh:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kl:case yh:case wh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fm:case Eh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Mh:case Sh:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bx(i){switch(i){case dr:case Pm:return{byteLength:1,components:1};case La:case Am:case $a:return{byteLength:2,components:1};case ad:case ld:return{byteLength:2,components:4};case Ts:case od:case sr:return{byteLength:4,components:1};case Rm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qm(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function yx(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],_=h[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const _=h[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var wx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Px=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ax=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ux=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_b=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Pb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ab=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Db=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ob=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ey=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ay=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_y=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,by=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,My=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Py=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ay=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ry=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Oy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ny=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,By=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Gy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Yy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:wx,alphahash_pars_fragment:Ex,alphamap_fragment:Mx,alphamap_pars_fragment:Sx,alphatest_fragment:Tx,alphatest_pars_fragment:Cx,aomap_fragment:Px,aomap_pars_fragment:Ax,batching_pars_vertex:Rx,batching_vertex:Dx,begin_vertex:Lx,beginnormal_vertex:Ix,bsdfs:Ux,iridescence_fragment:Ox,bumpmap_pars_fragment:Nx,clipping_planes_fragment:Fx,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:Bx,clipping_planes_vertex:zx,color_fragment:Vx,color_pars_fragment:Hx,color_pars_vertex:Gx,color_vertex:Wx,common:Xx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:qx,displacementmap_pars_vertex:jx,displacementmap_vertex:$x,emissivemap_fragment:Kx,emissivemap_pars_fragment:Zx,colorspace_fragment:Jx,colorspace_pars_fragment:Qx,envmap_fragment:tb,envmap_common_pars_fragment:eb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:fb,envmap_vertex:rb,fog_vertex:sb,fog_pars_vertex:ob,fog_fragment:ab,fog_pars_fragment:lb,gradientmap_pars_fragment:cb,lightmap_pars_fragment:ub,lights_lambert_fragment:hb,lights_lambert_pars_fragment:db,lights_pars_begin:pb,lights_toon_fragment:mb,lights_toon_pars_fragment:_b,lights_phong_fragment:gb,lights_phong_pars_fragment:vb,lights_physical_fragment:xb,lights_physical_pars_fragment:bb,lights_fragment_begin:yb,lights_fragment_maps:wb,lights_fragment_end:Eb,logdepthbuf_fragment:Mb,logdepthbuf_pars_fragment:Sb,logdepthbuf_pars_vertex:Tb,logdepthbuf_vertex:Cb,map_fragment:Pb,map_pars_fragment:Ab,map_particle_fragment:Rb,map_particle_pars_fragment:Db,metalnessmap_fragment:Lb,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Ub,morphcolor_vertex:Ob,morphnormal_vertex:Nb,morphtarget_pars_vertex:Fb,morphtarget_vertex:kb,normal_fragment_begin:Bb,normal_fragment_maps:zb,normal_pars_fragment:Vb,normal_pars_vertex:Hb,normal_vertex:Gb,normalmap_pars_fragment:Wb,clearcoat_normal_fragment_begin:Xb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:qb,iridescence_pars_fragment:jb,opaque_fragment:$b,packing:Kb,premultiplied_alpha_fragment:Zb,project_vertex:Jb,dithering_fragment:Qb,dithering_pars_fragment:ty,roughnessmap_fragment:ey,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:ry,shadowmap_vertex:sy,shadowmask_pars_fragment:oy,skinbase_vertex:ay,skinning_pars_vertex:ly,skinning_vertex:cy,skinnormal_vertex:uy,specularmap_fragment:hy,specularmap_pars_fragment:dy,tonemapping_fragment:py,tonemapping_pars_fragment:fy,transmission_fragment:my,transmission_pars_fragment:_y,uv_pars_fragment:gy,uv_pars_vertex:vy,uv_vertex:xy,worldpos_vertex:by,background_vert:yy,background_frag:wy,backgroundCube_vert:Ey,backgroundCube_frag:My,cube_vert:Sy,cube_frag:Ty,depth_vert:Cy,depth_frag:Py,distanceRGBA_vert:Ay,distanceRGBA_frag:Ry,equirect_vert:Dy,equirect_frag:Ly,linedashed_vert:Iy,linedashed_frag:Uy,meshbasic_vert:Oy,meshbasic_frag:Ny,meshlambert_vert:Fy,meshlambert_frag:ky,meshmatcap_vert:By,meshmatcap_frag:zy,meshnormal_vert:Vy,meshnormal_frag:Hy,meshphong_vert:Gy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:Yy,meshtoon_vert:qy,meshtoon_frag:jy,points_vert:$y,points_frag:Ky,shadow_vert:Zy,shadow_frag:Jy,sprite_vert:Qy,sprite_frag:tw},_t={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},Oi={basic:{uniforms:Tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ge(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Tn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Tn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Tn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ge(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Tn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Tn([_t.points,_t.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Tn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Tn([_t.common,_t.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Tn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Tn([_t.sprite,_t.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Tn([_t.common,_t.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Tn([_t.lights,_t.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Oi.physical={uniforms:Tn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Pl={r:0,b:0,g:0},ns=new pr,ew=new $e;function nw(i,t,e,n,r,s,o){const a=new ge(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?e:t).get(x)),x}function _(E){let x=!1;const P=g(E);P===null?f(a,l):P&&P.isColor&&(f(P,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){const P=g(x);P&&(P.isCubeTexture||P.mapping===Rc)?(u===void 0&&(u=new Di(new Za(1,1,1),new Xi({name:"BackgroundCubeMaterial",uniforms:No(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ns.copy(x.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ew.makeRotationFromEuler(ns)),u.material.toneMapped=he.getTransfer(P.colorSpace)!==xe,(h!==P||d!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Di(new Yo(2,2),new Xi({name:"BackgroundMaterial",uniforms:No(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=he.getTransfer(P.colorSpace)!==xe,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||d!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,x){E.getRGB(Pl,jm(i)),n.buffers.color.setClear(Pl.r,Pl.g,Pl.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),l=x,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:_,addToRenderList:m,dispose:M}}function iw(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function a(v,R,O,k,Y){let j=!1;const W=h(k,O,R);s!==W&&(s=W,c(s.object)),j=p(v,k,O,Y),j&&g(v,k,O,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,x(v,R,O,k),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function h(v,R,O){const k=O.wireframe===!0;let Y=n[v.id];Y===void 0&&(Y={},n[v.id]=Y);let j=Y[R.id];j===void 0&&(j={},Y[R.id]=j);let W=j[k];return W===void 0&&(W=d(l()),j[k]=W),W}function d(v){const R=[],O=[],k=[];for(let Y=0;Y<e;Y++)R[Y]=0,O[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:k,object:v,attributes:{},index:null}}function p(v,R,O,k){const Y=s.attributes,j=R.attributes;let W=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){const D=Y[V];let ct=j[V];if(ct===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ct=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ct=v.instanceColor)),D===void 0||D.attribute!==ct||ct&&D.data!==ct.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function g(v,R,O,k){const Y={},j=R.attributes;let W=0;const X=O.getAttributes();for(const V in X)if(X[V].location>=0){let D=j[V];D===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(D=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(D=v.instanceColor));const ct={};ct.attribute=D,D&&D.data&&(ct.data=D.data),Y[V]=ct,W++}s.attributes=Y,s.attributesNum=W,s.index=k}function _(){const v=s.newAttributes;for(let R=0,O=v.length;R<O;R++)v[R]=0}function m(v){f(v,0)}function f(v,R){const O=s.newAttributes,k=s.enabledAttributes,Y=s.attributeDivisors;O[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),Y[v]!==R&&(i.vertexAttribDivisor(v,R),Y[v]=R)}function M(){const v=s.newAttributes,R=s.enabledAttributes;for(let O=0,k=R.length;O<k;O++)R[O]!==v[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function E(v,R,O,k,Y,j,W){W===!0?i.vertexAttribIPointer(v,R,O,Y,j):i.vertexAttribPointer(v,R,O,k,Y,j)}function x(v,R,O,k){_();const Y=k.attributes,j=O.getAttributes(),W=R.defaultAttributeValues;for(const X in j){const V=j[X];if(V.location>=0){let et=Y[X];if(et===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){const D=et.normalized,ct=et.itemSize,Ut=t.get(et);if(Ut===void 0)continue;const jt=Ut.buffer,$=Ut.type,nt=Ut.bytesPerElement,mt=$===i.INT||$===i.UNSIGNED_INT||et.gpuType===od;if(et.isInterleavedBufferAttribute){const it=et.data,Mt=it.stride,kt=et.offset;if(it.isInstancedInterleavedBuffer){for(let Rt=0;Rt<V.locationSize;Rt++)f(V.location+Rt,it.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Rt=0;Rt<V.locationSize;Rt++)m(V.location+Rt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let Rt=0;Rt<V.locationSize;Rt++)E(V.location+Rt,ct/V.locationSize,$,D,Mt*nt,(kt+ct/V.locationSize*Rt)*nt,mt)}else{if(et.isInstancedBufferAttribute){for(let it=0;it<V.locationSize;it++)f(V.location+it,et.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let it=0;it<V.locationSize;it++)m(V.location+it);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let it=0;it<V.locationSize;it++)E(V.location+it,ct/V.locationSize,$,D,ct*nt,ct/V.locationSize*it*nt,mt)}}else if(W!==void 0){const D=W[X];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(V.location,D);break;case 3:i.vertexAttrib3fv(V.location,D);break;case 4:i.vertexAttrib4fv(V.location,D);break;default:i.vertexAttrib1fv(V.location,D)}}}}M()}function P(){A();for(const v in n){const R=n[v];for(const O in R){const k=R[O];for(const Y in k)u(k[Y].object),delete k[Y];delete R[O]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const O in R){const k=R[O];for(const Y in k)u(k[Y].object),delete k[Y];delete R[O]}delete n[v.id]}function S(v){for(const R in n){const O=n[R];if(O[v.id]===void 0)continue;const k=O[v.id];for(const Y in k)u(k[Y].object),delete k[Y];delete O[v.id]}}function A(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function rw(i,t,e){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];e.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sw(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(S){return!(S!==Ri&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const A=S===$a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==dr&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==sr&&!A)}function l(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:x,vertexTextures:P,maxSamples:C}}function ow(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Rr,a=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,E=M*4;let x=f.clippingState||null;l.value=x,x=u(g,d,E,p);for(let P=0;P!==E;++P)x[P]=e[P];f.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,x=p;E!==_;++E,x+=4)o.copy(h[E]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function aw(i){let t=new WeakMap;function e(o,a){return a===Ku?o.mapping=Do:a===Zu&&(o.mapping=Lo),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ku||a===Zu)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lx(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const fo=4,Gp=[.125,.215,.35,.446,.526,.582],ds=20,uu=new _x,Wp=new ge;let hu=null,du=0,pu=0,fu=!1;const as=(1+Math.sqrt(5))/2,to=1/as,Xp=[new G(-as,to,0),new G(as,to,0),new G(-to,0,as),new G(to,0,as),new G(0,as,-to),new G(0,as,to),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Yp{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){hu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hu,du,pu),this._renderer.xr.enabled=fu,t.scissorTest=!1,Al(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Do||t.mapping===Lo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ki,minFilter:ki,generateMipmaps:!1,type:$a,format:Ri,colorSpace:Oo,depthBuffer:!1},r=qp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qp(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lw(s)),this._blurMaterial=cw(s,t,e)}return r}_compileMaterial(t){const e=new Di(this._lodPlanes[0],t);this._renderer.compile(e,uu)}_sceneToCubeUV(t,e,n,r){const a=new gi(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Wp),u.toneMapping=Br,u.autoClear=!1;const p=new Xm({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),g=new Di(new Za,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Wp),_=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):M===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const E=this._cubeSize;Al(r,M*E,f>2?E:0,E,E),u.setRenderTarget(r),_&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Do||t.mapping===Lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Di(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Al(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,uu)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Xp[(r-s-1)%Xp.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Di(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ds-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):ds;m>ds&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);const f=[];let M=0;for(let S=0;S<ds;++S){const A=S/_,b=Math.exp(-A*A/2);f.push(b),S===0?M+=b:S<m&&(M+=2*b)}for(let S=0;S<f.length;S++)f[S]=f[S]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const x=this._sizeLods[r],P=3*x*(r>E-fo?r-E+fo:0),C=4*(this._cubeSize-x);Al(e,P,C,3*x,2*x),l.setRenderTarget(e),l.render(h,uu)}}function lw(i){const t=[],e=[],n=[];let r=i;const s=i-fo+1+Gp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-fo?l=Gp[o-i+fo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,_=3,m=2,f=1,M=new Float32Array(_*g*p),E=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let C=0;C<p;C++){const S=C%3*2/3-1,A=C>2?0:-1,b=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];M.set(b,_*g*C),E.set(d,m*g*C);const v=[C,C,C,C,C,C];x.set(v,f*g*C)}const P=new Ns;P.setAttribute("position",new Hi(M,_)),P.setAttribute("uv",new Hi(E,m)),P.setAttribute("faceIndex",new Hi(x,f)),t.push(P),r>fo&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qp(i,t,e){const n=new Xr(i,t,e);return n.texture.mapping=Rc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Al(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function cw(i,t,e){const n=new Float32Array(ds),r=new G(0,1,0);return new Xi({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function jp(){return new Xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function $p(){return new Xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kr,depthTest:!1,depthWrite:!1})}function md(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uw(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ku||l===Zu,u=l===Do||l===Lo;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Yp(i)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(e===null&&(e=new Yp(i)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hw(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&ao("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function dw(i,t,e,n){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let E=0,x=M.length;E<x;E+=3){const P=M[E+0],C=M[E+1],S=M[E+2];d.push(P,C,C,S,S,P)}}else if(g!==void 0){const M=g.array;_=g.version;for(let E=0,x=M.length/3-1;E<x;E+=3){const P=E+0,C=E+1,S=E+2;d.push(P,C,C,S,S,P)}}else return;const m=new(Bm(d)?qm:Ym)(d,1);m.version=_;const f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function pw(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),e.update(p,n,g))}function u(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(d,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,_,0,g);let f=0;for(let M=0;M<g;M++)f+=p[M]*_[M];e.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fw(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function mw(i,t,e){const n=new WeakMap,r=new He;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,C=1;P>t.maxTextureSize&&(C=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const S=new Float32Array(P*C*4*h),A=new Vm(S,P,C,h);A.type=sr,A.needsUpdate=!0;const b=x*4;for(let R=0;R<h;R++){const O=f[R],k=M[R],Y=E[R],j=P*C*4*R;for(let W=0;W<O.count;W++){const X=W*b;g===!0&&(r.fromBufferAttribute(O,W),S[j+X+0]=r.x,S[j+X+1]=r.y,S[j+X+2]=r.z,S[j+X+3]=0),_===!0&&(r.fromBufferAttribute(k,W),S[j+X+4]=r.x,S[j+X+5]=r.y,S[j+X+6]=r.z,S[j+X+7]=0),m===!0&&(r.fromBufferAttribute(Y,W),S[j+X+8]=r.x,S[j+X+9]=r.y,S[j+X+10]=r.z,S[j+X+11]=Y.itemSize===4?r.w:1)}}d={count:h,texture:A,size:new Lt(P,C)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function _w(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);if(r.get(h)!==c&&(t.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const t_=new Vn,Kp=new Jm(1,1),e_=new Vm,n_=new X0,i_=new $m,Zp=[],Jp=[],Qp=new Float32Array(16),tf=new Float32Array(9),ef=new Float32Array(4);function qo(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Zp[r];if(s===void 0&&(s=new Float32Array(r),Zp[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function sn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Lc(i,t){let e=Jp[t];e===void 0&&(e=new Int32Array(t),Jp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function gw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function vw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function xw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function bw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function yw(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;ef.set(n),i.uniformMatrix2fv(this.addr,!1,ef),on(e,n)}}function ww(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;tf.set(n),i.uniformMatrix3fv(this.addr,!1,tf),on(e,n)}}function Ew(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;Qp.set(n),i.uniformMatrix4fv(this.addr,!1,Qp),on(e,n)}}function Mw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function Tw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function Cw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function Pw(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Aw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function Rw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function Dw(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function Lw(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Kp.compareFunction=km,s=Kp):s=t_,e.setTexture2D(t||s,r)}function Iw(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||n_,r)}function Uw(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||i_,r)}function Ow(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||e_,r)}function Nw(i){switch(i){case 5126:return gw;case 35664:return vw;case 35665:return xw;case 35666:return bw;case 35674:return yw;case 35675:return ww;case 35676:return Ew;case 5124:case 35670:return Mw;case 35667:case 35671:return Sw;case 35668:case 35672:return Tw;case 35669:case 35673:return Cw;case 5125:return Pw;case 36294:return Aw;case 36295:return Rw;case 36296:return Dw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Iw;case 35680:case 36300:case 36308:case 36293:return Uw;case 36289:case 36303:case 36311:case 36292:return Ow}}function Fw(i,t){i.uniform1fv(this.addr,t)}function kw(i,t){const e=qo(t,this.size,2);i.uniform2fv(this.addr,e)}function Bw(i,t){const e=qo(t,this.size,3);i.uniform3fv(this.addr,e)}function zw(i,t){const e=qo(t,this.size,4);i.uniform4fv(this.addr,e)}function Vw(i,t){const e=qo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hw(i,t){const e=qo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Gw(i,t){const e=qo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ww(i,t){i.uniform1iv(this.addr,t)}function Xw(i,t){i.uniform2iv(this.addr,t)}function Yw(i,t){i.uniform3iv(this.addr,t)}function qw(i,t){i.uniform4iv(this.addr,t)}function jw(i,t){i.uniform1uiv(this.addr,t)}function $w(i,t){i.uniform2uiv(this.addr,t)}function Kw(i,t){i.uniform3uiv(this.addr,t)}function Zw(i,t){i.uniform4uiv(this.addr,t)}function Jw(i,t,e){const n=this.cache,r=t.length,s=Lc(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||t_,s[o])}function Qw(i,t,e){const n=this.cache,r=t.length,s=Lc(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||n_,s[o])}function tE(i,t,e){const n=this.cache,r=t.length,s=Lc(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||i_,s[o])}function eE(i,t,e){const n=this.cache,r=t.length,s=Lc(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||e_,s[o])}function nE(i){switch(i){case 5126:return Fw;case 35664:return kw;case 35665:return Bw;case 35666:return zw;case 35674:return Vw;case 35675:return Hw;case 35676:return Gw;case 5124:case 35670:return Ww;case 35667:case 35671:return Xw;case 35668:case 35672:return Yw;case 35669:case 35673:return qw;case 5125:return jw;case 36294:return $w;case 36295:return Kw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Jw;case 35679:case 36299:case 36307:return Qw;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return eE}}class iE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Nw(e.type)}}class rE{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nE(e.type)}}class sE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function nf(i,t){i.seq.push(t),i.map[t.id]=t}function oE(i,t,e){const n=i.name,r=n.length;for(mu.lastIndex=0;;){const s=mu.exec(n),o=mu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nf(e,c===void 0?new iE(a,i,t):new rE(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new sE(a),nf(e,h)),e=h}}}class Zl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);oE(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function rf(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const aE=37297;let lE=0;function cE(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const sf=new Yt;function uE(i){he._getMatrix(sf,he.workingColorSpace,i);const t=`mat3( ${sf.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(i)){case cc:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function of(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+cE(i.getShaderSource(t),o)}else return r}function hE(i,t){const e=uE(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function dE(i,t){let e;switch(t){case e0:e="Linear";break;case n0:e="Reinhard";break;case i0:e="Cineon";break;case r0:e="ACESFilmic";break;case o0:e="AgX";break;case a0:e="Neutral";break;case s0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Rl=new G;function pE(){he.getLuminanceCoefficients(Rl);const i=Rl.x.toFixed(4),t=Rl.y.toFixed(4),e=Rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function mE(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _E(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ua(i){return i!==""}function af(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const gE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(i){return i.replace(gE,xE)}const vE=new Map;function xE(i,t){let e=qt[t];if(e===void 0){const n=vE.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Th(e)}const bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(i){return i.replace(bE,yE)}function yE(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function uf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function wE(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Sm?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uv?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===er&&(t="SHADOWMAP_TYPE_VSM"),t}function EE(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Do:case Lo:t="ENVMAP_TYPE_CUBE";break;case Rc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ME(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Lo:t="ENVMAP_MODE_REFRACTION";break}return t}function SE(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Tm:t="ENVMAP_BLENDING_MULTIPLY";break;case Qv:t="ENVMAP_BLENDING_MIX";break;case t0:t="ENVMAP_BLENDING_ADD";break}return t}function TE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function CE(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=wE(e),c=EE(e),u=ME(e),h=SE(e),d=TE(e),p=fE(e),g=mE(s),_=r.createProgram();let m,f,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ua).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ua).join(`
`),f.length>0&&(f+=`
`)):(m=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),f=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Br?"#define TONE_MAPPING":"",e.toneMapping!==Br?qt.tonemapping_pars_fragment:"",e.toneMapping!==Br?dE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,hE("linearToOutputTexel",e.outputColorSpace),pE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ua).join(`
`)),o=Th(o),o=af(o,e),o=lf(o,e),a=Th(a),a=af(a,e),a=lf(a,e),o=cf(o),a=cf(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=M+m+o,x=M+f+a,P=rf(r,r.VERTEX_SHADER,E),C=rf(r,r.FRAGMENT_SHADER,x);r.attachShader(_,P),r.attachShader(_,C),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function S(R){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(P).trim(),Y=r.getShaderInfoLog(C).trim();let j=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,C);else{const X=of(r,P,"vertex"),V=of(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+X+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(k===""||Y==="")&&(W=!1);W&&(R.diagnostics={runnable:j,programLog:O,vertexShader:{log:k,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(P),r.deleteShader(C),A=new Zl(r,_),b=_E(r,_)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,aE)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=C,this}let PE=0;class AE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new RE(t),e.set(t,n)),n}}class RE{constructor(t){this.id=PE++,this.code=t,this.usedTimes=0}}function DE(i,t,e,n,r,s,o){const a=new Gm,l=new AE,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,v,R,O,k){const Y=O.fog,j=k.geometry,W=b.isMeshStandardMaterial?O.environment:null,X=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),V=X&&X.mapping===Rc?X.image.height:null,et=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const D=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ct=D!==void 0?D.length:0;let Ut=0;j.morphAttributes.position!==void 0&&(Ut=1),j.morphAttributes.normal!==void 0&&(Ut=2),j.morphAttributes.color!==void 0&&(Ut=3);let jt,$,nt,mt;if(et){const gt=Oi[et];jt=gt.vertexShader,$=gt.fragmentShader}else jt=b.vertexShader,$=b.fragmentShader,l.update(b),nt=l.getVertexShaderID(b),mt=l.getFragmentShaderID(b);const it=i.getRenderTarget(),Mt=i.state.buffers.depth.getReversed(),kt=k.isInstancedMesh===!0,Rt=k.isBatchedMesh===!0,re=!!b.map,Jt=!!b.matcap,bt=!!X,L=!!b.aoMap,ye=!!b.lightMap,Bt=!!b.bumpMap,F=!!b.normalMap,wt=!!b.displacementMap,se=!!b.emissiveMap,St=!!b.metalnessMap,T=!!b.roughnessMap,y=b.anisotropy>0,B=b.clearcoat>0,Q=b.dispersion>0,J=b.iridescence>0,K=b.sheen>0,ut=b.transmission>0,ot=y&&!!b.anisotropyMap,dt=B&&!!b.clearcoatMap,Gt=B&&!!b.clearcoatNormalMap,rt=B&&!!b.clearcoatRoughnessMap,st=J&&!!b.iridescenceMap,It=J&&!!b.iridescenceThicknessMap,Dt=K&&!!b.sheenColorMap,vt=K&&!!b.sheenRoughnessMap,Wt=!!b.specularMap,Ft=!!b.specularColorMap,ae=!!b.specularIntensityMap,I=ut&&!!b.transmissionMap,lt=ut&&!!b.thicknessMap,q=!!b.gradientMap,Z=!!b.alphaMap,at=b.alphaTest>0,ht=!!b.alphaHash,zt=!!b.extensions;let ce=Br;b.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(ce=i.toneMapping);const Ne={shaderID:et,shaderType:b.type,shaderName:b.name,vertexShader:jt,fragmentShader:$,defines:b.defines,customVertexShaderID:nt,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Rt,batchingColor:Rt&&k._colorsTexture!==null,instancing:kt,instancingColor:kt&&k.instanceColor!==null,instancingMorph:kt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:Oo,alphaToCoverage:!!b.alphaToCoverage,map:re,matcap:Jt,envMap:bt,envMapMode:bt&&X.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:ye,bumpMap:Bt,normalMap:F,displacementMap:d&&wt,emissiveMap:se,normalMapObjectSpace:F&&b.normalMapType===d0,normalMapTangentSpace:F&&b.normalMapType===h0,metalnessMap:St,roughnessMap:T,anisotropy:y,anisotropyMap:ot,clearcoat:B,clearcoatMap:dt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:rt,dispersion:Q,iridescence:J,iridescenceMap:st,iridescenceThicknessMap:It,sheen:K,sheenColorMap:Dt,sheenRoughnessMap:vt,specularMap:Wt,specularColorMap:Ft,specularIntensityMap:ae,transmission:ut,transmissionMap:I,thicknessMap:lt,gradientMap:q,opaque:b.transparent===!1&&b.blending===xo&&b.alphaToCoverage===!1,alphaMap:Z,alphaTest:at,alphaHash:ht,combine:b.combine,mapUv:re&&_(b.map.channel),aoMapUv:L&&_(b.aoMap.channel),lightMapUv:ye&&_(b.lightMap.channel),bumpMapUv:Bt&&_(b.bumpMap.channel),normalMapUv:F&&_(b.normalMap.channel),displacementMapUv:wt&&_(b.displacementMap.channel),emissiveMapUv:se&&_(b.emissiveMap.channel),metalnessMapUv:St&&_(b.metalnessMap.channel),roughnessMapUv:T&&_(b.roughnessMap.channel),anisotropyMapUv:ot&&_(b.anisotropyMap.channel),clearcoatMapUv:dt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:rt&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:It&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(b.sheenRoughnessMap.channel),specularMapUv:Wt&&_(b.specularMap.channel),specularColorMapUv:Ft&&_(b.specularColorMap.channel),specularIntensityMapUv:ae&&_(b.specularIntensityMap.channel),transmissionMapUv:I&&_(b.transmissionMap.channel),thicknessMapUv:lt&&_(b.thicknessMap.channel),alphaMapUv:Z&&_(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(F||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&(re||Z),fog:!!Y,useFog:b.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Mt,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Ut,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:ce,decodeVideoTexture:re&&b.map.isVideoTexture===!0&&he.getTransfer(b.map.colorSpace)===xe,decodeVideoTextureEmissive:se&&b.emissiveMap.isVideoTexture===!0&&he.getTransfer(b.emissiveMap.colorSpace)===xe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ni,flipSided:b.side===zn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:zt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&b.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function f(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const R in b.defines)v.push(R),v.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(M(v,b),E(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function M(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function E(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const v=g[b.type];let R;if(v){const O=Oi[v];R=rx.clone(O.uniforms)}else R=b.uniforms;return R}function P(b,v){let R;for(let O=0,k=u.length;O<k;O++){const Y=u[O];if(Y.cacheKey===v){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new CE(i,v,b,s),u.push(R)),R}function C(b){if(--b.usedTimes===0){const v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function S(b){l.remove(b)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:P,releaseProgram:C,releaseShaderCache:S,programs:u,dispose:A}}function LE(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function IE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function hf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function df(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h,d,p,g,_,m){let f=i[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=_,f.group=m),t++,f}function a(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):e.push(f)}function l(h,d,p,g,_,m){const f=o(h,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||IE),n.length>1&&n.sort(d||hf),r.length>1&&r.sort(d||hf)}function u(){for(let h=t,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function UE(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new df,i.set(n,[o])):r>=s.length?(o=new df,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function OE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new ge};break;case"SpotLight":e={position:new G,direction:new G,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new ge,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":e={color:new ge,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function NE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let FE=0;function kE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function BE(i){const t=new OE,e=NE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,s=new $e,o=new $e;function a(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,M=0,E=0,x=0,P=0,C=0,S=0;c.sort(kE);for(let b=0,v=c.length;b<v;b++){const R=c[b],O=R.color,k=R.intensity,Y=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=O.r*k,h+=O.g*k,d+=O.b*k;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],k);S++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,V=e.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=j,n.directionalShadowMatrix[p]=R.shadow.matrix,M++}n.directional[p]=W,p++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(O).multiplyScalar(k),W.distance=Y,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const X=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,X.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[_]=X.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=j,x++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(O).multiplyScalar(k),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const X=R.shadow,V=e.get(R);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=R.shadow.matrix,E++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(k),W.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==p||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==M||A.numPointShadows!==E||A.numSpotShadows!==x||A.numSpotMaps!==P||A.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=x+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=S,A.directionalLength=p,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=M,A.numPointShadows=E,A.numSpotShadows=x,A.numSpotMaps=P,A.numLightProbes=S,n.version=FE++)}function l(c,u){let h=0,d=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,M=c.length;f<M;f++){const E=c[f];if(E.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(E.isSpotLight){const x=n.spot[p];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(E.width*.5,0,0),x.halfHeight.set(0,E.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(E.matrixWorld),x.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(E.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function pf(i){const t=new BE(i),e=[],n=[];function r(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zE(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new pf(i),t.set(r,[a])):s>=o.length?(a=new pf(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const VE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GE(i,t,e){let n=new Zm;const r=new Lt,s=new Lt,o=new He,a=new dx({depthPacking:u0}),l=new px,c={},u=e.maxTextureSize,h={[Wr]:zn,[zn]:Wr,[Ni]:Ni},d=new Xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:VE,fragmentShader:HE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ns;g.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Di(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sm;let f=this.type;this.render=function(C,S,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),v=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(kr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=f!==er&&this.type===er,Y=f===er&&this.type!==er;for(let j=0,W=C.length;j<W;j++){const X=C[j],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const et=V.getFrameExtents();if(r.multiply(et),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/et.x),r.x=s.x*et.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/et.y),r.y=s.y*et.y,V.mapSize.y=s.y)),V.map===null||k===!0||Y===!0){const ct=this.type!==er?{minFilter:Li,magFilter:Li}:{};V.map!==null&&V.map.dispose(),V.map=new Xr(r.x,r.y,ct),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const D=V.getViewportCount();for(let ct=0;ct<D;ct++){const Ut=V.getViewport(ct);o.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),O.viewport(o),V.updateMatrices(X,ct),n=V.getFrustum(),x(S,A,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===er&&M(V,A),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(b,v,R)};function M(C,S){const A=t.update(_);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Xr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(S,null,A,d,_,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(S,null,A,p,_,null)}function E(C,S,A,b){let v=null;const R=A.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)v=R;else if(v=A.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const O=v.uuid,k=S.uuid;let Y=c[O];Y===void 0&&(Y={},c[O]=Y);let j=Y[k];j===void 0&&(j=v.clone(),Y[k]=j,S.addEventListener("dispose",P)),v=j}if(v.visible=S.visible,v.wireframe=S.wireframe,b===er?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:h[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=i.properties.get(v);O.light=A}return v}function x(C,S,A,b,v){if(C.visible===!1)return;if(C.layers.test(S.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===er)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,C.matrixWorld);const k=t.update(C),Y=C.material;if(Array.isArray(Y)){const j=k.groups;for(let W=0,X=j.length;W<X;W++){const V=j[W],et=Y[V.materialIndex];if(et&&et.visible){const D=E(C,et,b,v);C.onBeforeShadow(i,C,S,A,k,D,V),i.renderBufferDirect(A,null,k,D,C,V),C.onAfterShadow(i,C,S,A,k,D,V)}}}else if(Y.visible){const j=E(C,Y,b,v);C.onBeforeShadow(i,C,S,A,k,j,null),i.renderBufferDirect(A,null,k,j,C,null),C.onAfterShadow(i,C,S,A,k,j,null)}}const O=C.children;for(let k=0,Y=O.length;k<Y;k++)x(O[k],S,A,b,v)}function P(C){C.target.removeEventListener("dispose",P);for(const A in c){const b=c[A],v=C.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const WE={[Gu]:Wu,[Xu]:ju,[Yu]:$u,[Ro]:qu,[Wu]:Gu,[ju]:Xu,[$u]:Yu,[qu]:Ro};function XE(i,t){function e(){let I=!1;const lt=new He;let q=null;const Z=new He(0,0,0,0);return{setMask:function(at){q!==at&&!I&&(i.colorMask(at,at,at,at),q=at)},setLocked:function(at){I=at},setClear:function(at,ht,zt,ce,Ne){Ne===!0&&(at*=ce,ht*=ce,zt*=ce),lt.set(at,ht,zt,ce),Z.equals(lt)===!1&&(i.clearColor(at,ht,zt,ce),Z.copy(lt))},reset:function(){I=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,lt=!1,q=null,Z=null,at=null;return{setReversed:function(ht){if(lt!==ht){const zt=t.get("EXT_clip_control");lt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const ce=at;at=null,this.setClear(ce)}lt=ht},getReversed:function(){return lt},setTest:function(ht){ht?it(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(ht){q!==ht&&!I&&(i.depthMask(ht),q=ht)},setFunc:function(ht){if(lt&&(ht=WE[ht]),Z!==ht){switch(ht){case Gu:i.depthFunc(i.NEVER);break;case Wu:i.depthFunc(i.ALWAYS);break;case Xu:i.depthFunc(i.LESS);break;case Ro:i.depthFunc(i.LEQUAL);break;case Yu:i.depthFunc(i.EQUAL);break;case qu:i.depthFunc(i.GEQUAL);break;case ju:i.depthFunc(i.GREATER);break;case $u:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=ht}},setLocked:function(ht){I=ht},setClear:function(ht){at!==ht&&(lt&&(ht=1-ht),i.clearDepth(ht),at=ht)},reset:function(){I=!1,q=null,Z=null,at=null,lt=!1}}}function r(){let I=!1,lt=null,q=null,Z=null,at=null,ht=null,zt=null,ce=null,Ne=null;return{setTest:function(gt){I||(gt?it(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(gt){lt!==gt&&!I&&(i.stencilMask(gt),lt=gt)},setFunc:function(gt,Tt,Xt){(q!==gt||Z!==Tt||at!==Xt)&&(i.stencilFunc(gt,Tt,Xt),q=gt,Z=Tt,at=Xt)},setOp:function(gt,Tt,Xt){(ht!==gt||zt!==Tt||ce!==Xt)&&(i.stencilOp(gt,Tt,Xt),ht=gt,zt=Tt,ce=Xt)},setLocked:function(gt){I=gt},setClear:function(gt){Ne!==gt&&(i.clearStencil(gt),Ne=gt)},reset:function(){I=!1,lt=null,q=null,Z=null,at=null,ht=null,zt=null,ce=null,Ne=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,E=null,x=null,P=null,C=null,S=new ge(0,0,0),A=0,b=!1,v=null,R=null,O=null,k=null,Y=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,X=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=X>=2);let et=null,D={};const ct=i.getParameter(i.SCISSOR_BOX),Ut=i.getParameter(i.VIEWPORT),jt=new He().fromArray(ct),$=new He().fromArray(Ut);function nt(I,lt,q,Z){const at=new Uint8Array(4),ht=i.createTexture();i.bindTexture(I,ht),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<q;zt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,at):i.texImage2D(lt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,at);return ht}const mt={};mt[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(Ro),Bt(!1),F(mp),it(i.CULL_FACE),L(kr);function it(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Mt(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function kt(I,lt){return h[I]!==lt?(i.bindFramebuffer(I,lt),h[I]=lt,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=lt),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function Rt(I,lt){let q=p,Z=!1;if(I){q=d.get(lt),q===void 0&&(q=[],d.set(lt,q));const at=I.textures;if(q.length!==at.length||q[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,zt=at.length;ht<zt;ht++)q[ht]=i.COLOR_ATTACHMENT0+ht;q.length=at.length,Z=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,Z=!0);Z&&i.drawBuffers(q)}function re(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Jt={[hs]:i.FUNC_ADD,[Nv]:i.FUNC_SUBTRACT,[Fv]:i.FUNC_REVERSE_SUBTRACT};Jt[kv]=i.MIN,Jt[Bv]=i.MAX;const bt={[zv]:i.ZERO,[Vv]:i.ONE,[Hv]:i.SRC_COLOR,[Vu]:i.SRC_ALPHA,[jv]:i.SRC_ALPHA_SATURATE,[Yv]:i.DST_COLOR,[Wv]:i.DST_ALPHA,[Gv]:i.ONE_MINUS_SRC_COLOR,[Hu]:i.ONE_MINUS_SRC_ALPHA,[qv]:i.ONE_MINUS_DST_COLOR,[Xv]:i.ONE_MINUS_DST_ALPHA,[$v]:i.CONSTANT_COLOR,[Kv]:i.ONE_MINUS_CONSTANT_COLOR,[Zv]:i.CONSTANT_ALPHA,[Jv]:i.ONE_MINUS_CONSTANT_ALPHA};function L(I,lt,q,Z,at,ht,zt,ce,Ne,gt){if(I===kr){_===!0&&(Mt(i.BLEND),_=!1);return}if(_===!1&&(it(i.BLEND),_=!0),I!==Ov){if(I!==m||gt!==b){if((f!==hs||x!==hs)&&(i.blendEquation(i.FUNC_ADD),f=hs,x=hs),gt)switch(I){case xo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _p:i.blendFunc(i.ONE,i.ONE);break;case gp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vp:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _p:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case gp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vp:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,E=null,P=null,C=null,S.set(0,0,0),A=0,m=I,b=gt}return}at=at||lt,ht=ht||q,zt=zt||Z,(lt!==f||at!==x)&&(i.blendEquationSeparate(Jt[lt],Jt[at]),f=lt,x=at),(q!==M||Z!==E||ht!==P||zt!==C)&&(i.blendFuncSeparate(bt[q],bt[Z],bt[ht],bt[zt]),M=q,E=Z,P=ht,C=zt),(ce.equals(S)===!1||Ne!==A)&&(i.blendColor(ce.r,ce.g,ce.b,Ne),S.copy(ce),A=Ne),m=I,b=!1}function ye(I,lt){I.side===Ni?Mt(i.CULL_FACE):it(i.CULL_FACE);let q=I.side===zn;lt&&(q=!q),Bt(q),I.blending===xo&&I.transparent===!1?L(kr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const Z=I.stencilWrite;a.setTest(Z),Z&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),se(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){v!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),v=I)}function F(I){I!==Lv?(it(i.CULL_FACE),I!==R&&(I===mp?i.cullFace(i.BACK):I===Iv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),R=I}function wt(I){I!==O&&(W&&i.lineWidth(I),O=I)}function se(I,lt,q){I?(it(i.POLYGON_OFFSET_FILL),(k!==lt||Y!==q)&&(i.polygonOffset(lt,q),k=lt,Y=q)):Mt(i.POLYGON_OFFSET_FILL)}function St(I){I?it(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function T(I){I===void 0&&(I=i.TEXTURE0+j-1),et!==I&&(i.activeTexture(I),et=I)}function y(I,lt,q){q===void 0&&(et===null?q=i.TEXTURE0+j-1:q=et);let Z=D[q];Z===void 0&&(Z={type:void 0,texture:void 0},D[q]=Z),(Z.type!==I||Z.texture!==lt)&&(et!==q&&(i.activeTexture(q),et=q),i.bindTexture(I,lt||mt[I]),Z.type=I,Z.texture=lt)}function B(){const I=D[et];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(I){jt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),jt.copy(I))}function vt(I){$.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),$.copy(I))}function Wt(I,lt){let q=c.get(lt);q===void 0&&(q=new WeakMap,c.set(lt,q));let Z=q.get(I);Z===void 0&&(Z=i.getUniformBlockIndex(lt,I.name),q.set(I,Z))}function Ft(I,lt){const Z=c.get(lt).get(I);l.get(lt)!==Z&&(i.uniformBlockBinding(lt,Z,I.__bindingPointIndex),l.set(lt,Z))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},et=null,D={},h={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,M=null,E=null,x=null,P=null,C=null,S=new ge(0,0,0),A=0,b=!1,v=null,R=null,O=null,k=null,Y=null,jt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:it,disable:Mt,bindFramebuffer:kt,drawBuffers:Rt,useProgram:re,setBlending:L,setMaterial:ye,setFlipSided:Bt,setCullFace:F,setLineWidth:wt,setPolygonOffset:se,setScissorTest:St,activeTexture:T,bindTexture:y,unbindTexture:B,compressedTexImage2D:Q,compressedTexImage3D:J,texImage2D:st,texImage3D:It,updateUBOMapping:Wt,uniformBlockBinding:Ft,texStorage2D:Gt,texStorage3D:rt,texSubImage2D:K,texSubImage3D:ut,compressedTexSubImage2D:ot,compressedTexSubImage3D:dt,scissor:Dt,viewport:vt,reset:ae}}function YE(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Lt,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return p?new OffscreenCanvas(T,y):hc("canvas")}function _(T,y,B){let Q=1;const J=St(T);if((J.width>B||J.height>B)&&(Q=B/Math.max(J.width,J.height)),Q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Q*J.width),ut=Math.floor(Q*J.height);h===void 0&&(h=g(K,ut));const ot=y?g(K,ut):h;return ot.width=K,ot.height=ut,ot.getContext("2d").drawImage(T,0,0,K,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+ut+")."),ot}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function m(T){return T.generateMipmaps}function f(T){i.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,y,B,Q,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=y;if(y===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),y===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),y===i.RGBA){const ut=J?cc:he.getTransfer(Q);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=ut===xe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function x(T,y){let B;return T?y===null||y===Ts||y===Io?B=i.DEPTH24_STENCIL8:y===sr?B=i.DEPTH32F_STENCIL8:y===La&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ts||y===Io?B=i.DEPTH_COMPONENT24:y===sr?B=i.DEPTH_COMPONENT32F:y===La&&(B=i.DEPTH_COMPONENT16),B}function P(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Li&&T.minFilter!==ki?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function C(T){const y=T.target;y.removeEventListener("dispose",C),A(y),y.isVideoTexture&&u.delete(y)}function S(T){const y=T.target;y.removeEventListener("dispose",S),v(y)}function A(T){const y=n.get(T);if(y.__webglInit===void 0)return;const B=T.source,Q=d.get(B);if(Q){const J=Q[y.__cacheKey];J.usedTimes--,J.usedTimes===0&&b(T),Object.keys(Q).length===0&&d.delete(B)}n.remove(T)}function b(T){const y=n.get(T);i.deleteTexture(y.__webglTexture);const B=T.source,Q=d.get(B);delete Q[y.__cacheKey],o.memory.textures--}function v(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let J=0;J<y.__webglFramebuffer[Q].length;J++)i.deleteFramebuffer(y.__webglFramebuffer[Q][J]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const B=T.textures;for(let Q=0,J=B.length;Q<J;Q++){const K=n.get(B[Q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[Q])}n.remove(T)}let R=0;function O(){R=0}function k(){const T=R;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function Y(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function j(T,y){const B=n.get(T);if(T.isVideoTexture&&wt(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Q=T.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,T,y);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function W(T,y){const B=n.get(T);if(T.version>0&&B.__version!==T.version){$(B,T,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function X(T,y){const B=n.get(T);if(T.version>0&&B.__version!==T.version){$(B,T,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function V(T,y){const B=n.get(T);if(T.version>0&&B.__version!==T.version){nt(B,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}const et={[Ju]:i.REPEAT,[ps]:i.CLAMP_TO_EDGE,[Qu]:i.MIRRORED_REPEAT},D={[Li]:i.NEAREST,[l0]:i.NEAREST_MIPMAP_NEAREST,[cl]:i.NEAREST_MIPMAP_LINEAR,[ki]:i.LINEAR,[Hc]:i.LINEAR_MIPMAP_NEAREST,[fs]:i.LINEAR_MIPMAP_LINEAR},ct={[p0]:i.NEVER,[x0]:i.ALWAYS,[f0]:i.LESS,[km]:i.LEQUAL,[m0]:i.EQUAL,[v0]:i.GEQUAL,[_0]:i.GREATER,[g0]:i.NOTEQUAL};function Ut(T,y){if(y.type===sr&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ki||y.magFilter===Hc||y.magFilter===cl||y.magFilter===fs||y.minFilter===ki||y.minFilter===Hc||y.minFilter===cl||y.minFilter===fs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,et[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,et[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,et[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,D[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,D[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Li||y.minFilter!==cl&&y.minFilter!==fs||y.type===sr&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function jt(T,y){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",C));const Q=y.source;let J=d.get(Q);J===void 0&&(J={},d.set(Q,J));const K=Y(y);if(K!==T.__cacheKey){J[K]===void 0&&(J[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[K].usedTimes++;const ut=J[T.__cacheKey];ut!==void 0&&(J[T.__cacheKey].usedTimes--,ut.usedTimes===0&&b(y)),T.__cacheKey=K,T.__webglTexture=J[K].texture}return B}function $(T,y,B){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);const J=jt(T,y),K=y.source;e.bindTexture(Q,T.__webglTexture,i.TEXTURE0+B);const ut=n.get(K);if(K.version!==ut.__version||J===!0){e.activeTexture(i.TEXTURE0+B);const ot=he.getPrimaries(he.workingColorSpace),dt=y.colorSpace===Dr?null:he.getPrimaries(y.colorSpace),Gt=y.colorSpace===Dr||ot===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let rt=_(y.image,!1,r.maxTextureSize);rt=se(y,rt);const st=s.convert(y.format,y.colorSpace),It=s.convert(y.type);let Dt=E(y.internalFormat,st,It,y.colorSpace,y.isVideoTexture);Ut(Q,y);let vt;const Wt=y.mipmaps,Ft=y.isVideoTexture!==!0,ae=ut.__version===void 0||J===!0,I=K.dataReady,lt=P(y,rt);if(y.isDepthTexture)Dt=x(y.format===Uo,y.type),ae&&(Ft?e.texStorage2D(i.TEXTURE_2D,1,Dt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,st,It,null));else if(y.isDataTexture)if(Wt.length>0){Ft&&ae&&e.texStorage2D(i.TEXTURE_2D,lt,Dt,Wt[0].width,Wt[0].height);for(let q=0,Z=Wt.length;q<Z;q++)vt=Wt[q],Ft?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,st,It,vt.data):e.texImage2D(i.TEXTURE_2D,q,Dt,vt.width,vt.height,0,st,It,vt.data);y.generateMipmaps=!1}else Ft?(ae&&e.texStorage2D(i.TEXTURE_2D,lt,Dt,rt.width,rt.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,st,It,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,rt.width,rt.height,0,st,It,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ft&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Dt,Wt[0].width,Wt[0].height,rt.depth);for(let q=0,Z=Wt.length;q<Z;q++)if(vt=Wt[q],y.format!==Ri)if(st!==null)if(Ft){if(I)if(y.layerUpdates.size>0){const at=Hp(vt.width,vt.height,y.format,y.type);for(const ht of y.layerUpdates){const zt=vt.data.subarray(ht*at/vt.data.BYTES_PER_ELEMENT,(ht+1)*at/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,ht,vt.width,vt.height,1,st,zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,rt.depth,st,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Dt,vt.width,vt.height,rt.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,vt.width,vt.height,rt.depth,st,It,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,q,Dt,vt.width,vt.height,rt.depth,0,st,It,vt.data)}else{Ft&&ae&&e.texStorage2D(i.TEXTURE_2D,lt,Dt,Wt[0].width,Wt[0].height);for(let q=0,Z=Wt.length;q<Z;q++)vt=Wt[q],y.format!==Ri?st!==null?Ft?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,st,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,q,Dt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,vt.width,vt.height,st,It,vt.data):e.texImage2D(i.TEXTURE_2D,q,Dt,vt.width,vt.height,0,st,It,vt.data)}else if(y.isDataArrayTexture)if(Ft){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Dt,rt.width,rt.height,rt.depth),I)if(y.layerUpdates.size>0){const q=Hp(rt.width,rt.height,y.format,y.type);for(const Z of y.layerUpdates){const at=rt.data.subarray(Z*q/rt.data.BYTES_PER_ELEMENT,(Z+1)*q/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,rt.width,rt.height,1,st,It,at)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,st,It,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,rt.width,rt.height,rt.depth,0,st,It,rt.data);else if(y.isData3DTexture)Ft?(ae&&e.texStorage3D(i.TEXTURE_3D,lt,Dt,rt.width,rt.height,rt.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,st,It,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,rt.width,rt.height,rt.depth,0,st,It,rt.data);else if(y.isFramebufferTexture){if(ae)if(Ft)e.texStorage2D(i.TEXTURE_2D,lt,Dt,rt.width,rt.height);else{let q=rt.width,Z=rt.height;for(let at=0;at<lt;at++)e.texImage2D(i.TEXTURE_2D,at,Dt,q,Z,0,st,It,null),q>>=1,Z>>=1}}else if(Wt.length>0){if(Ft&&ae){const q=St(Wt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Dt,q.width,q.height)}for(let q=0,Z=Wt.length;q<Z;q++)vt=Wt[q],Ft?I&&e.texSubImage2D(i.TEXTURE_2D,q,0,0,st,It,vt):e.texImage2D(i.TEXTURE_2D,q,Dt,st,It,vt);y.generateMipmaps=!1}else if(Ft){if(ae){const q=St(rt);e.texStorage2D(i.TEXTURE_2D,lt,Dt,q.width,q.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st,It,rt)}else e.texImage2D(i.TEXTURE_2D,0,Dt,st,It,rt);m(y)&&f(Q),ut.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function nt(T,y,B){if(y.image.length!==6)return;const Q=jt(T,y),J=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const K=n.get(J);if(J.version!==K.__version||Q===!0){e.activeTexture(i.TEXTURE0+B);const ut=he.getPrimaries(he.workingColorSpace),ot=y.colorSpace===Dr?null:he.getPrimaries(y.colorSpace),dt=y.colorSpace===Dr||ut===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Gt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,st=[];for(let Z=0;Z<6;Z++)!Gt&&!rt?st[Z]=_(y.image[Z],!0,r.maxCubemapSize):st[Z]=rt?y.image[Z].image:y.image[Z],st[Z]=se(y,st[Z]);const It=st[0],Dt=s.convert(y.format,y.colorSpace),vt=s.convert(y.type),Wt=E(y.internalFormat,Dt,vt,y.colorSpace),Ft=y.isVideoTexture!==!0,ae=K.__version===void 0||Q===!0,I=J.dataReady;let lt=P(y,It);Ut(i.TEXTURE_CUBE_MAP,y);let q;if(Gt){Ft&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Wt,It.width,It.height);for(let Z=0;Z<6;Z++){q=st[Z].mipmaps;for(let at=0;at<q.length;at++){const ht=q[at];y.format!==Ri?Dt!==null?Ft?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,0,0,ht.width,ht.height,Dt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,Wt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,0,0,ht.width,ht.height,Dt,vt,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at,Wt,ht.width,ht.height,0,Dt,vt,ht.data)}}}else{if(q=y.mipmaps,Ft&&ae){q.length>0&&lt++;const Z=St(st[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(rt){Ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,st[Z].width,st[Z].height,Dt,vt,st[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,st[Z].width,st[Z].height,0,Dt,vt,st[Z].data);for(let at=0;at<q.length;at++){const zt=q[at].image[Z].image;Ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,0,0,zt.width,zt.height,Dt,vt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,Wt,zt.width,zt.height,0,Dt,vt,zt.data)}}else{Ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Dt,vt,st[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Dt,vt,st[Z]);for(let at=0;at<q.length;at++){const ht=q[at];Ft?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,0,0,Dt,vt,ht.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,at+1,Wt,Dt,vt,ht.image[Z])}}}m(y)&&f(i.TEXTURE_CUBE_MAP),K.__version=J.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function mt(T,y,B,Q,J,K){const ut=s.convert(B.format,B.colorSpace),ot=s.convert(B.type),dt=E(B.internalFormat,ut,ot,B.colorSpace),Gt=n.get(y),rt=n.get(B);if(rt.__renderTarget=y,!Gt.__hasExternalTextures){const st=Math.max(1,y.width>>K),It=Math.max(1,y.height>>K);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,K,dt,st,It,y.depth,0,ut,ot,null):e.texImage2D(J,K,dt,st,It,0,ut,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),F(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,J,rt.__webglTexture,0,Bt(y)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,J,rt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(T,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){const Q=y.depthTexture,J=Q&&Q.isDepthTexture?Q.type:null,K=x(y.stencilBuffer,J),ut=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=Bt(y);F(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ot,K,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,K,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,K,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,T)}else{const Q=y.textures;for(let J=0;J<Q.length;J++){const K=Q[J],ut=s.convert(K.format,K.colorSpace),ot=s.convert(K.type),dt=E(K.internalFormat,ut,ot,K.colorSpace),Gt=Bt(y);B&&F(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,dt,y.width,y.height):F(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,dt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,dt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j(y.depthTexture,0);const J=Q.__webglTexture,K=Bt(y);if(y.depthTexture.format===bo)F(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(y.depthTexture.format===Uo)F(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function kt(T){const y=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const Q=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const J=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",J)};Q.addEventListener("dispose",J),y.__depthDisposeCallback=J}y.__boundDepthTexture=Q}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Mt(y.__webglFramebuffer,T)}else if(B){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),it(y.__webglDepthbuffer[Q],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),it(y.__webglDepthbuffer,T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(T,y,B){const Q=n.get(T);y!==void 0&&mt(Q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&kt(T)}function re(T){const y=T.texture,B=n.get(T),Q=n.get(y);T.addEventListener("dispose",S);const J=T.textures,K=T.isWebGLCubeRenderTarget===!0,ut=J.length>1;if(ut||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let dt=0;dt<y.mipmaps.length;dt++)B.__webglFramebuffer[ot][dt]=i.createFramebuffer()}else B.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<y.mipmaps.length;ot++)B.__webglFramebuffer[ot]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ut)for(let ot=0,dt=J.length;ot<dt;ot++){const Gt=n.get(J[ot]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&F(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ot=0;ot<J.length;ot++){const dt=J[ot];B.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ot]);const Gt=s.convert(dt.format,dt.colorSpace),rt=s.convert(dt.type),st=E(dt.internalFormat,Gt,rt,dt.colorSpace,T.isXRRenderTarget===!0),It=Bt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,It,st,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,B.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),it(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ut(i.TEXTURE_CUBE_MAP,y);for(let ot=0;ot<6;ot++)if(y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)mt(B.__webglFramebuffer[ot][dt],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,dt);else mt(B.__webglFramebuffer[ot],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);m(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let ot=0,dt=J.length;ot<dt;ot++){const Gt=J[ot],rt=n.get(Gt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),Ut(i.TEXTURE_2D,Gt),mt(B.__webglFramebuffer,T,Gt,i.COLOR_ATTACHMENT0+ot,i.TEXTURE_2D,0),m(Gt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ot=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,Q.__webglTexture),Ut(ot,y),y.mipmaps&&y.mipmaps.length>0)for(let dt=0;dt<y.mipmaps.length;dt++)mt(B.__webglFramebuffer[dt],T,y,i.COLOR_ATTACHMENT0,ot,dt);else mt(B.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,ot,0);m(y)&&f(ot),e.unbindTexture()}T.depthBuffer&&kt(T)}function Jt(T){const y=T.textures;for(let B=0,Q=y.length;B<Q;B++){const J=y[B];if(m(J)){const K=M(T),ut=n.get(J).__webglTexture;e.bindTexture(K,ut),f(K),e.unbindTexture()}}}const bt=[],L=[];function ye(T){if(T.samples>0){if(F(T)===!1){const y=T.textures,B=T.width,Q=T.height;let J=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(T),ot=y.length>1;if(ot)for(let dt=0;dt<y.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let dt=0;dt<y.length;dt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);const Gt=n.get(y[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,B,Q,0,0,B,Q,J,i.NEAREST),l===!0&&(bt.length=0,L.length=0,bt.push(i.COLOR_ATTACHMENT0+dt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(bt.push(K),L.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let dt=0;dt<y.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[dt]);const Gt=n.get(y[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Bt(T){return Math.min(r.maxSamples,T.samples)}function F(T){const y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function wt(T){const y=o.render.frame;u.get(T)!==y&&(u.set(T,y),T.update())}function se(T,y){const B=T.colorSpace,Q=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Oo&&B!==Dr&&(he.getTransfer(B)===xe?(Q!==Ri||J!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function St(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=O,this.setTexture2D=j,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Rt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=F}function qE(i,t){function e(n,r=Dr){let s;const o=he.getTransfer(r);if(n===dr)return i.UNSIGNED_BYTE;if(n===ad)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ld)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pm)return i.BYTE;if(n===Am)return i.SHORT;if(n===La)return i.UNSIGNED_SHORT;if(n===od)return i.INT;if(n===Ts)return i.UNSIGNED_INT;if(n===sr)return i.FLOAT;if(n===$a)return i.HALF_FLOAT;if(n===Dm)return i.ALPHA;if(n===Lm)return i.RGB;if(n===Ri)return i.RGBA;if(n===Im)return i.LUMINANCE;if(n===Um)return i.LUMINANCE_ALPHA;if(n===bo)return i.DEPTH_COMPONENT;if(n===Uo)return i.DEPTH_STENCIL;if(n===Om)return i.RED;if(n===cd)return i.RED_INTEGER;if(n===Nm)return i.RG;if(n===ud)return i.RG_INTEGER;if(n===hd)return i.RGBA_INTEGER;if(n===Yl||n===ql||n===jl||n===$l)if(o===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$l)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===th||n===eh||n===nh||n===ih)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===th)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ih)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rh||n===sh||n===oh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===rh||n===sh)return o===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===oh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ah||n===lh||n===ch||n===uh||n===hh||n===dh||n===ph||n===fh||n===mh||n===_h||n===gh||n===vh||n===xh||n===bh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ah)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ch)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ph)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_h)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bh)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===yh||n===wh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Kl)return o===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fm||n===Eh||n===Mh||n===Sh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Kl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Eh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Io?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const jE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$E=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Vn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Xi({vertexShader:jE,fragmentShader:$E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Di(new Yo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZE extends Os{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const _=new KE,m=e.getContextAttributes();let f=null,M=null;const E=[],x=[],P=new Lt;let C=null;const S=new gi;S.viewport=new He;const A=new gi;A.viewport=new He;const b=[S,A],v=new gx;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let nt=E[$];return nt===void 0&&(nt=new lu,E[$]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function($){let nt=E[$];return nt===void 0&&(nt=new lu,E[$]=nt),nt.getGripSpace()},this.getHand=function($){let nt=E[$];return nt===void 0&&(nt=new lu,E[$]=nt),nt.getHandSpace()};function k($){const nt=x.indexOf($.inputSource);if(nt===-1)return;const mt=E[nt];mt!==void 0&&(mt.update($.inputSource,$.frame,c||o),mt.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",j);for(let $=0;$<E.length;$++){const nt=x[$];nt!==null&&(x[$]=null,E[$].disconnect(nt))}R=null,O=null,_.reset(),t.setRenderTarget(f),p=null,d=null,h=null,r=null,M=null,jt.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,it=null,Mt=null;m.depth&&(Mt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=m.stencil?Uo:bo,it=m.stencil?Io:Ts);const kt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};h=new XRWebGLBinding(r,e),d=h.createProjectionLayer(kt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Xr(d.textureWidth,d.textureHeight,{format:Ri,type:dr,depthTexture:new Jm(d.textureWidth,d.textureHeight,it,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const mt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,mt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Xr(p.framebufferWidth,p.framebufferHeight,{format:Ri,type:dr,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),jt.setContext(r),jt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j($){for(let nt=0;nt<$.removed.length;nt++){const mt=$.removed[nt],it=x.indexOf(mt);it>=0&&(x[it]=null,E[it].disconnect(mt))}for(let nt=0;nt<$.added.length;nt++){const mt=$.added[nt];let it=x.indexOf(mt);if(it===-1){for(let kt=0;kt<E.length;kt++)if(kt>=x.length){x.push(mt),it=kt;break}else if(x[kt]===null){x[kt]=mt,it=kt;break}if(it===-1)break}const Mt=E[it];Mt&&Mt.connect(mt)}}const W=new G,X=new G;function V($,nt,mt){W.setFromMatrixPosition(nt.matrixWorld),X.setFromMatrixPosition(mt.matrixWorld);const it=W.distanceTo(X),Mt=nt.projectionMatrix.elements,kt=mt.projectionMatrix.elements,Rt=Mt[14]/(Mt[10]-1),re=Mt[14]/(Mt[10]+1),Jt=(Mt[9]+1)/Mt[5],bt=(Mt[9]-1)/Mt[5],L=(Mt[8]-1)/Mt[0],ye=(kt[8]+1)/kt[0],Bt=Rt*L,F=Rt*ye,wt=it/(-L+ye),se=wt*-L;if(nt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(se),$.translateZ(wt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Mt[10]===-1)$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const St=Rt+wt,T=re+wt,y=Bt-se,B=F+(it-se),Q=Jt*re/T*St,J=bt*re/T*St;$.projectionMatrix.makePerspective(y,B,Q,J,St,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function et($,nt){nt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(nt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let nt=$.near,mt=$.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(mt=_.depthFar)),v.near=A.near=S.near=nt,v.far=A.far=S.far=mt,(R!==v.near||O!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,O=v.far),S.layers.mask=$.layers.mask|2,A.layers.mask=$.layers.mask|4,v.layers.mask=S.layers.mask|A.layers.mask;const it=$.parent,Mt=v.cameras;et(v,it);for(let kt=0;kt<Mt.length;kt++)et(Mt[kt],it);Mt.length===2?V(v,S,A):v.projectionMatrix.copy(S.projectionMatrix),D($,v,it)};function D($,nt,mt){mt===null?$.matrix.copy(nt.matrixWorld):($.matrix.copy(mt.matrixWorld),$.matrix.invert(),$.matrix.multiply(nt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(nt.projectionMatrix),$.projectionMatrixInverse.copy(nt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ia*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ct=null;function Ut($,nt){if(u=nt.getViewerPose(c||o),g=nt,u!==null){const mt=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let it=!1;mt.length!==v.cameras.length&&(v.cameras.length=0,it=!0);for(let Rt=0;Rt<mt.length;Rt++){const re=mt[Rt];let Jt=null;if(p!==null)Jt=p.getViewport(re);else{const L=h.getViewSubImage(d,re);Jt=L.viewport,Rt===0&&(t.setRenderTargetTextures(M,L.colorTexture,d.ignoreDepthValues?void 0:L.depthStencilTexture),t.setRenderTarget(M))}let bt=b[Rt];bt===void 0&&(bt=new gi,bt.layers.enable(Rt),bt.viewport=new He,b[Rt]=bt),bt.matrix.fromArray(re.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(re.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Rt===0&&(v.matrix.copy(bt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),it===!0&&v.cameras.push(bt)}const Mt=r.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const Rt=h.getDepthInformation(mt[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,r.renderState)}}for(let mt=0;mt<E.length;mt++){const it=x[mt],Mt=E[mt];it!==null&&Mt!==void 0&&Mt.update(it,nt,c||o)}ct&&ct($,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const jt=new Qm;jt.setAnimationLoop(Ut),this.setAnimationLoop=function($){ct=$},this.dispose=function(){}}}const is=new pr,JE=new $e;function QE(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,jm(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,M,E,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,M,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const M=t.get(f),E=M.envMap,x=M.envMapRotation;E&&(m.envMap.value=E,is.copy(x),is.x*=-1,is.y*=-1,is.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),m.envMapRotation.value.setFromMatrix4(JE.makeRotationFromEuler(is)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tM(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,E){const x=E.program;n.uniformBlockBinding(M,x)}function c(M,E){let x=r[M.id];x===void 0&&(g(M),x=u(M),r[M.id]=x,M.addEventListener("dispose",m));const P=E.program;n.updateUBOMapping(M,P);const C=t.render.frame;s[M.id]!==C&&(d(M),s[M.id]=C)}function u(M){const E=h();M.__bindingPointIndex=E;const x=i.createBuffer(),P=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const E=r[M.id],x=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,S=x.length;C<S;C++){const A=Array.isArray(x[C])?x[C]:[x[C]];for(let b=0,v=A.length;b<v;b++){const R=A[b];if(p(R,C,b,P)===!0){const O=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let j=0;j<k.length;j++){const W=k[j],X=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+Y,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,Y),Y+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(M,E,x,P){const C=M.value,S=E+"_"+x;if(P[S]===void 0)return typeof C=="number"||typeof C=="boolean"?P[S]=C:P[S]=C.clone(),!0;{const A=P[S];if(typeof C=="number"||typeof C=="boolean"){if(A!==C)return P[S]=C,!0}else if(A.equals(C)===!1)return A.copy(C),!0}return!1}function g(M){const E=M.uniforms;let x=0;const P=16;for(let S=0,A=E.length;S<A;S++){const b=Array.isArray(E[S])?E[S]:[E[S]];for(let v=0,R=b.length;v<R;v++){const O=b[v],k=Array.isArray(O.value)?O.value:[O.value];for(let Y=0,j=k.length;Y<j;Y++){const W=k[Y],X=_(W),V=x%P,et=V%X.boundary,D=V+et;x+=et,D!==0&&P-D<X.storage&&(x+=P-D),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=X.storage}}}const C=x%P;return C>0&&(x+=P-C),M.__size=x,M.__cache={},this}function _(M){const E={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function m(M){const E=M.target;E.removeEventListener("dispose",m);const x=o.indexOf(E.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(const M in r)i.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class eM{constructor(t={}){const{canvas:e=N0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,f=null;const M=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this.toneMapping=Br,this.toneMappingExposure=1;const x=this;let P=!1,C=0,S=0,A=null,b=-1,v=null;const R=new He,O=new He;let k=null;const Y=new ge(0);let j=0,W=e.width,X=e.height,V=1,et=null,D=null;const ct=new He(0,0,W,X),Ut=new He(0,0,W,X);let jt=!1;const $=new Zm;let nt=!1,mt=!1;this.transmissionResolutionScale=1;const it=new $e,Mt=new $e,kt=new G,Rt=new He,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function bt(){return A===null?V:1}let L=n;function ye(w,N){return e.getContext(w,N)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${sd}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",at,!1),e.addEventListener("webglcontextcreationerror",ht,!1),L===null){const N="webgl2";if(L=ye(N,w),L===null)throw ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Bt,F,wt,se,St,T,y,B,Q,J,K,ut,ot,dt,Gt,rt,st,It,Dt,vt,Wt,Ft,ae,I;function lt(){Bt=new hw(L),Bt.init(),Ft=new qE(L,Bt),F=new sw(L,Bt,t,Ft),wt=new XE(L,Bt),F.reverseDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),se=new fw(L),St=new LE,T=new YE(L,Bt,wt,St,F,Ft,se),y=new aw(x),B=new uw(x),Q=new yx(L),ae=new iw(L,Q),J=new dw(L,Q,se,ae),K=new _w(L,J,Q,se),Dt=new mw(L,F,T),rt=new ow(St),ut=new DE(x,y,B,Bt,F,ae,rt),ot=new QE(x,St),dt=new UE,Gt=new zE(Bt),It=new nw(x,y,B,wt,K,p,l),st=new GE(x,K,F),I=new tM(L,se,F,wt),vt=new rw(L,Bt,se),Wt=new pw(L,Bt,se),se.programs=ut.programs,x.capabilities=F,x.extensions=Bt,x.properties=St,x.renderLists=dt,x.shadowMap=st,x.state=wt,x.info=se}lt();const q=new ZE(x,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(W,X,!1))},this.getSize=function(w){return w.set(W,X)},this.setSize=function(w,N,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,X=N,e.width=Math.floor(w*V),e.height=Math.floor(N*V),H===!0&&(e.style.width=w+"px",e.style.height=N+"px"),this.setViewport(0,0,w,N)},this.getDrawingBufferSize=function(w){return w.set(W*V,X*V).floor()},this.setDrawingBufferSize=function(w,N,H){W=w,X=N,V=H,e.width=Math.floor(w*H),e.height=Math.floor(N*H),this.setViewport(0,0,w,N)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(ct)},this.setViewport=function(w,N,H,z){w.isVector4?ct.set(w.x,w.y,w.z,w.w):ct.set(w,N,H,z),wt.viewport(R.copy(ct).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Ut)},this.setScissor=function(w,N,H,z){w.isVector4?Ut.set(w.x,w.y,w.z,w.w):Ut.set(w,N,H,z),wt.scissor(O.copy(Ut).multiplyScalar(V).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(w){wt.setScissorTest(jt=w)},this.setOpaqueSort=function(w){et=w},this.setTransparentSort=function(w){D=w},this.getClearColor=function(w){return w.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(w=!0,N=!0,H=!0){let z=0;if(w){let U=!1;if(A!==null){const tt=A.texture.format;U=tt===hd||tt===ud||tt===cd}if(U){const tt=A.texture.type,ft=tt===dr||tt===Ts||tt===La||tt===Io||tt===ad||tt===ld,yt=It.getClearColor(),xt=It.getClearAlpha(),At=yt.r,Nt=yt.g,Pt=yt.b;ft?(g[0]=At,g[1]=Nt,g[2]=Pt,g[3]=xt,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=At,_[1]=Nt,_[2]=Pt,_[3]=xt,L.clearBufferiv(L.COLOR,0,_))}else z|=L.COLOR_BUFFER_BIT}N&&(z|=L.DEPTH_BUFFER_BIT),H&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",at,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),It.dispose(),dt.dispose(),Gt.dispose(),St.dispose(),y.dispose(),B.dispose(),K.dispose(),ae.dispose(),I.dispose(),ut.dispose(),q.dispose(),q.removeEventListener("sessionstart",pt),q.removeEventListener("sessionend",Ht),Ct.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=se.autoReset,N=st.enabled,H=st.autoUpdate,z=st.needsUpdate,U=st.type;lt(),se.autoReset=w,st.enabled=N,st.autoUpdate=H,st.needsUpdate=z,st.type=U}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function zt(w){const N=w.target;N.removeEventListener("dispose",zt),ce(N)}function ce(w){Ne(w),St.remove(w)}function Ne(w){const N=St.get(w).programs;N!==void 0&&(N.forEach(function(H){ut.releaseProgram(H)}),w.isShaderMaterial&&ut.releaseShaderCache(w))}this.renderBufferDirect=function(w,N,H,z,U,tt){N===null&&(N=re);const ft=U.isMesh&&U.matrixWorld.determinant()<0,yt=jn(w,N,H,z,U);wt.setMaterial(z,ft);let xt=H.index,At=1;if(z.wireframe===!0){if(xt=J.getWireframeAttribute(H),xt===void 0)return;At=2}const Nt=H.drawRange,Pt=H.attributes.position;let $t=Nt.start*At,fe=(Nt.start+Nt.count)*At;tt!==null&&($t=Math.max($t,tt.start*At),fe=Math.min(fe,(tt.start+tt.count)*At)),xt!==null?($t=Math.max($t,0),fe=Math.min(fe,xt.count)):Pt!=null&&($t=Math.max($t,0),fe=Math.min(fe,Pt.count));const We=fe-$t;if(We<0||We===1/0)return;ae.setup(U,z,yt,H,xt);let Fe,ue=vt;if(xt!==null&&(Fe=Q.get(xt),ue=Wt,ue.setIndex(Fe)),U.isMesh)z.wireframe===!0?(wt.setLineWidth(z.wireframeLinewidth*bt()),ue.setMode(L.LINES)):ue.setMode(L.TRIANGLES);else if(U.isLine){let Ot=z.linewidth;Ot===void 0&&(Ot=1),wt.setLineWidth(Ot*bt()),U.isLineSegments?ue.setMode(L.LINES):U.isLineLoop?ue.setMode(L.LINE_LOOP):ue.setMode(L.LINE_STRIP)}else U.isPoints?ue.setMode(L.POINTS):U.isSprite&&ue.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ue.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))ue.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ot=U._multiDrawStarts,hn=U._multiDrawCounts,me=U._multiDrawCount,Mi=xt?Q.get(xt).bytesPerElement:1,zs=St.get(z).currentProgram.getUniforms();for(let $n=0;$n<me;$n++)zs.setValue(L,"_gl_DrawID",$n),ue.render(Ot[$n]/Mi,hn[$n])}else if(U.isInstancedMesh)ue.renderInstances($t,We,U.count);else if(H.isInstancedBufferGeometry){const Ot=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,hn=Math.min(H.instanceCount,Ot);ue.renderInstances($t,We,hn)}else ue.render($t,We)};function gt(w,N,H){w.transparent===!0&&w.side===Ni&&w.forceSinglePass===!1?(w.side=zn,w.needsUpdate=!0,we(w,N,H),w.side=Wr,w.needsUpdate=!0,we(w,N,H),w.side=Ni):we(w,N,H)}this.compile=function(w,N,H=null){H===null&&(H=w),f=Gt.get(H),f.init(N),E.push(f),H.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),w!==H&&w.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const z=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const tt=U.material;if(tt)if(Array.isArray(tt))for(let ft=0;ft<tt.length;ft++){const yt=tt[ft];gt(yt,H,U),z.add(yt)}else gt(tt,H,U),z.add(tt)}),E.pop(),f=null,z},this.compileAsync=function(w,N,H=null){const z=this.compile(w,N,H);return new Promise(U=>{function tt(){if(z.forEach(function(ft){St.get(ft).currentProgram.isReady()&&z.delete(ft)}),z.size===0){U(w);return}setTimeout(tt,10)}Bt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let Tt=null;function Xt(w){Tt&&Tt(w)}function pt(){Ct.stop()}function Ht(){Ct.start()}const Ct=new Qm;Ct.setAnimationLoop(Xt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(w){Tt=w,q.setAnimationLoop(w),w===null?Ct.stop():Ct.start()},q.addEventListener("sessionstart",pt),q.addEventListener("sessionend",Ht),this.render=function(w,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(N),N=q.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,N,A),f=Gt.get(w,E.length),f.init(N),E.push(f),Mt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Mt),mt=this.localClippingEnabled,nt=rt.init(this.clippingPlanes,mt),m=dt.get(w,M.length),m.init(),M.push(m),q.enabled===!0&&q.isPresenting===!0){const tt=x.xr.getDepthSensingMesh();tt!==null&&Vt(tt,N,-1/0,x.sortObjects)}Vt(w,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(et,D),Jt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Jt&&It.addToRenderList(m,w),this.info.render.frame++,nt===!0&&rt.beginShadows();const H=f.state.shadowsArray;st.render(H,w,N),nt===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(f.setupLights(),N.isArrayCamera){const tt=N.cameras;if(U.length>0)for(let ft=0,yt=tt.length;ft<yt;ft++){const xt=tt[ft];Qt(z,U,w,xt)}Jt&&It.render(w);for(let ft=0,yt=tt.length;ft<yt;ft++){const xt=tt[ft];ze(m,w,xt,xt.viewport)}}else U.length>0&&Qt(z,U,w,N),Jt&&It.render(w),ze(m,w,N);A!==null&&S===0&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(x,w,N),ae.resetDefaultState(),b=-1,v=null,E.pop(),E.length>0?(f=E[E.length-1],nt===!0&&rt.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Vt(w,N,H,z){if(w.visible===!1)return;if(w.layers.test(N.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(N);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){z&&Rt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Mt);const ft=K.update(w),yt=w.material;yt.visible&&m.push(w,ft,yt,H,Rt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const ft=K.update(w),yt=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Rt.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Rt.copy(ft.boundingSphere.center)),Rt.applyMatrix4(w.matrixWorld).applyMatrix4(Mt)),Array.isArray(yt)){const xt=ft.groups;for(let At=0,Nt=xt.length;At<Nt;At++){const Pt=xt[At],$t=yt[Pt.materialIndex];$t&&$t.visible&&m.push(w,ft,$t,H,Rt.z,Pt)}}else yt.visible&&m.push(w,ft,yt,H,Rt.z,null)}}const tt=w.children;for(let ft=0,yt=tt.length;ft<yt;ft++)Vt(tt[ft],N,H,z)}function ze(w,N,H,z){const U=w.opaque,tt=w.transmissive,ft=w.transparent;f.setupLightsView(H),nt===!0&&rt.setGlobalState(x.clippingPlanes,H),z&&wt.viewport(R.copy(z)),U.length>0&&Te(U,N,H),tt.length>0&&Te(tt,N,H),ft.length>0&&Te(ft,N,H),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function Qt(w,N,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Xr(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?$a:dr,minFilter:fs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));const tt=f.state.transmissionRenderTarget[z.id],ft=z.viewport||R;tt.setSize(ft.z*x.transmissionResolutionScale,ft.w*x.transmissionResolutionScale);const yt=x.getRenderTarget();x.setRenderTarget(tt),x.getClearColor(Y),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),Jt&&It.render(H);const xt=x.toneMapping;x.toneMapping=Br;const At=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),nt===!0&&rt.setGlobalState(x.clippingPlanes,z),Te(w,H,z),T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Pt=0,$t=N.length;Pt<$t;Pt++){const fe=N[Pt],We=fe.object,Fe=fe.geometry,ue=fe.material,Ot=fe.group;if(ue.side===Ni&&We.layers.test(z.layers)){const hn=ue.side;ue.side=zn,ue.needsUpdate=!0,Ze(We,H,z,Fe,ue,Ot),ue.side=hn,ue.needsUpdate=!0,Nt=!0}}Nt===!0&&(T.updateMultisampleRenderTarget(tt),T.updateRenderTargetMipmap(tt))}x.setRenderTarget(yt),x.setClearColor(Y,j),At!==void 0&&(z.viewport=At),x.toneMapping=xt}function Te(w,N,H){const z=N.isScene===!0?N.overrideMaterial:null;for(let U=0,tt=w.length;U<tt;U++){const ft=w[U],yt=ft.object,xt=ft.geometry,At=z===null?ft.material:z,Nt=ft.group;yt.layers.test(H.layers)&&Ze(yt,N,H,xt,At,Nt)}}function Ze(w,N,H,z,U,tt){w.onBeforeRender(x,N,H,z,U,tt),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,N,H,z,w,tt),U.transparent===!0&&U.side===Ni&&U.forceSinglePass===!1?(U.side=zn,U.needsUpdate=!0,x.renderBufferDirect(H,N,z,U,w,tt),U.side=Wr,U.needsUpdate=!0,x.renderBufferDirect(H,N,z,U,w,tt),U.side=Ni):x.renderBufferDirect(H,N,z,U,w,tt),w.onAfterRender(x,N,H,z,U,tt)}function we(w,N,H){N.isScene!==!0&&(N=re);const z=St.get(w),U=f.state.lights,tt=f.state.shadowsArray,ft=U.state.version,yt=ut.getParameters(w,U.state,tt,N,H),xt=ut.getProgramCacheKey(yt);let At=z.programs;z.environment=w.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(w.isMeshStandardMaterial?B:y).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?N.environmentRotation:w.envMapRotation,At===void 0&&(w.addEventListener("dispose",zt),At=new Map,z.programs=At);let Nt=At.get(xt);if(Nt!==void 0){if(z.currentProgram===Nt&&z.lightsStateVersion===ft)return pe(w,yt),Nt}else yt.uniforms=ut.getUniforms(w),w.onBeforeCompile(yt,x),Nt=ut.acquireProgram(yt,xt),At.set(xt,Nt),z.uniforms=yt.uniforms;const Pt=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pt.clippingPlanes=rt.uniform),pe(w,yt),z.needsLights=yn(w),z.lightsStateVersion=ft,z.needsLights&&(Pt.ambientLightColor.value=U.state.ambient,Pt.lightProbe.value=U.state.probe,Pt.directionalLights.value=U.state.directional,Pt.directionalLightShadows.value=U.state.directionalShadow,Pt.spotLights.value=U.state.spot,Pt.spotLightShadows.value=U.state.spotShadow,Pt.rectAreaLights.value=U.state.rectArea,Pt.ltc_1.value=U.state.rectAreaLTC1,Pt.ltc_2.value=U.state.rectAreaLTC2,Pt.pointLights.value=U.state.point,Pt.pointLightShadows.value=U.state.pointShadow,Pt.hemisphereLights.value=U.state.hemi,Pt.directionalShadowMap.value=U.state.directionalShadowMap,Pt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Pt.spotShadowMap.value=U.state.spotShadowMap,Pt.spotLightMatrix.value=U.state.spotLightMatrix,Pt.spotLightMap.value=U.state.spotLightMap,Pt.pointShadowMap.value=U.state.pointShadowMap,Pt.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=Nt,z.uniformsList=null,Nt}function Ee(w){if(w.uniformsList===null){const N=w.currentProgram.getUniforms();w.uniformsList=Zl.seqWithValue(N.seq,w.uniforms)}return w.uniformsList}function pe(w,N){const H=St.get(w);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function jn(w,N,H,z,U){N.isScene!==!0&&(N=re),T.resetTextureUnits();const tt=N.fog,ft=z.isMeshStandardMaterial?N.environment:null,yt=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Oo,xt=(z.isMeshStandardMaterial?B:y).get(z.envMap||ft),At=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Nt=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!H.morphAttributes.position,$t=!!H.morphAttributes.normal,fe=!!H.morphAttributes.color;let We=Br;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(We=x.toneMapping);const Fe=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ue=Fe!==void 0?Fe.length:0,Ot=St.get(z),hn=f.state.lights;if(nt===!0&&(mt===!0||w!==v)){const wn=w===v&&z.id===b;rt.setState(z,w,wn)}let me=!1;z.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==hn.state.version||Ot.outputColorSpace!==yt||U.isBatchedMesh&&Ot.batching===!1||!U.isBatchedMesh&&Ot.batching===!0||U.isBatchedMesh&&Ot.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ot.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ot.instancing===!1||!U.isInstancedMesh&&Ot.instancing===!0||U.isSkinnedMesh&&Ot.skinning===!1||!U.isSkinnedMesh&&Ot.skinning===!0||U.isInstancedMesh&&Ot.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ot.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ot.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ot.instancingMorph===!1&&U.morphTexture!==null||Ot.envMap!==xt||z.fog===!0&&Ot.fog!==tt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==rt.numPlanes||Ot.numIntersection!==rt.numIntersection)||Ot.vertexAlphas!==At||Ot.vertexTangents!==Nt||Ot.morphTargets!==Pt||Ot.morphNormals!==$t||Ot.morphColors!==fe||Ot.toneMapping!==We||Ot.morphTargetsCount!==ue)&&(me=!0):(me=!0,Ot.__version=z.version);let Mi=Ot.currentProgram;me===!0&&(Mi=we(z,N,U));let zs=!1,$n=!1,Jo=!1;const Re=Mi.getUniforms(),hi=Ot.uniforms;if(wt.useProgram(Mi.program)&&(zs=!0,$n=!0,Jo=!0),z.id!==b&&(b=z.id,$n=!0),zs||v!==w){wt.buffers.depth.getReversed()?(it.copy(w.projectionMatrix),k0(it),B0(it),Re.setValue(L,"projectionMatrix",it)):Re.setValue(L,"projectionMatrix",w.projectionMatrix),Re.setValue(L,"viewMatrix",w.matrixWorldInverse);const On=Re.map.cameraPosition;On!==void 0&&On.setValue(L,kt.setFromMatrixPosition(w.matrixWorld)),F.logarithmicDepthBuffer&&Re.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Re.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,$n=!0,Jo=!0)}if(U.isSkinnedMesh){Re.setOptional(L,U,"bindMatrix"),Re.setOptional(L,U,"bindMatrixInverse");const wn=U.skeleton;wn&&(wn.boneTexture===null&&wn.computeBoneTexture(),Re.setValue(L,"boneTexture",wn.boneTexture,T))}U.isBatchedMesh&&(Re.setOptional(L,U,"batchingTexture"),Re.setValue(L,"batchingTexture",U._matricesTexture,T),Re.setOptional(L,U,"batchingIdTexture"),Re.setValue(L,"batchingIdTexture",U._indirectTexture,T),Re.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&Re.setValue(L,"batchingColorTexture",U._colorsTexture,T));const di=H.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&Dt.update(U,H,Mi),($n||Ot.receiveShadow!==U.receiveShadow)&&(Ot.receiveShadow=U.receiveShadow,Re.setValue(L,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(hi.envMap.value=xt,hi.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(hi.envMapIntensity.value=N.environmentIntensity),$n&&(Re.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&Ae(hi,Jo),tt&&z.fog===!0&&ot.refreshFogUniforms(hi,tt),ot.refreshMaterialUniforms(hi,z,V,X,f.state.transmissionRenderTarget[w.id]),Zl.upload(L,Ee(Ot),hi,T)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Zl.upload(L,Ee(Ot),hi,T),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Re.setValue(L,"center",U.center),Re.setValue(L,"modelViewMatrix",U.modelViewMatrix),Re.setValue(L,"normalMatrix",U.normalMatrix),Re.setValue(L,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const wn=z.uniformsGroups;for(let On=0,Vc=wn.length;On<Vc;On++){const Zr=wn[On];I.update(Zr,Mi),I.bind(Zr,Mi)}}return Mi}function Ae(w,N){w.ambientLightColor.needsUpdate=N,w.lightProbe.needsUpdate=N,w.directionalLights.needsUpdate=N,w.directionalLightShadows.needsUpdate=N,w.pointLights.needsUpdate=N,w.pointLightShadows.needsUpdate=N,w.spotLights.needsUpdate=N,w.spotLightShadows.needsUpdate=N,w.rectAreaLights.needsUpdate=N,w.hemisphereLights.needsUpdate=N}function yn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,N,H){St.get(w.texture).__webglTexture=N,St.get(w.depthTexture).__webglTexture=H;const z=St.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=H===void 0,z.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,N){const H=St.get(w);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const ui=L.createFramebuffer();this.setRenderTarget=function(w,N=0,H=0){A=w,C=N,S=H;let z=!0,U=null,tt=!1,ft=!1;if(w){const xt=St.get(w);if(xt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(L.FRAMEBUFFER,null),z=!1;else if(xt.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(xt.__hasExternalTextures)T.rebindTextures(w,St.get(w.texture).__webglTexture,St.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pt=w.depthTexture;if(xt.__boundDepthTexture!==Pt){if(Pt!==null&&St.has(Pt)&&(w.width!==Pt.image.width||w.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const At=w.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ft=!0);const Nt=St.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?U=Nt[N][H]:U=Nt[N],tt=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?U=St.get(w).__webglMultisampledFramebuffer:Array.isArray(Nt)?U=Nt[H]:U=Nt,R.copy(w.viewport),O.copy(w.scissor),k=w.scissorTest}else R.copy(ct).multiplyScalar(V).floor(),O.copy(Ut).multiplyScalar(V).floor(),k=jt;if(H!==0&&(U=ui),wt.bindFramebuffer(L.FRAMEBUFFER,U)&&z&&wt.drawBuffers(w,U),wt.viewport(R),wt.scissor(O),wt.setScissorTest(k),tt){const xt=St.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,xt.__webglTexture,H)}else if(ft){const xt=St.get(w.texture),At=N;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,xt.__webglTexture,H,At)}else if(w!==null&&H!==0){const xt=St.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xt.__webglTexture,H)}b=-1},this.readRenderTargetPixels=function(w,N,H,z,U,tt,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){wt.bindFramebuffer(L.FRAMEBUFFER,yt);try{const xt=w.texture,At=xt.format,Nt=xt.type;if(!F.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!F.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=w.width-z&&H>=0&&H<=w.height-U&&L.readPixels(N,H,z,U,Ft.convert(At),Ft.convert(Nt),tt)}finally{const xt=A!==null?St.get(A).__webglFramebuffer:null;wt.bindFramebuffer(L.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(w,N,H,z,U,tt,ft){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=St.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(yt=yt[ft]),yt){const xt=w.texture,At=xt.format,Nt=xt.type;if(!F.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!F.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=w.width-z&&H>=0&&H<=w.height-U){wt.bindFramebuffer(L.FRAMEBUFFER,yt);const Pt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Pt),L.bufferData(L.PIXEL_PACK_BUFFER,tt.byteLength,L.STREAM_READ),L.readPixels(N,H,z,U,Ft.convert(At),Ft.convert(Nt),0);const $t=A!==null?St.get(A).__webglFramebuffer:null;wt.bindFramebuffer(L.FRAMEBUFFER,$t);const fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await F0(L,fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Pt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,tt),L.deleteBuffer(Pt),L.deleteSync(fe),tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,N=null,H=0){w.isTexture!==!0&&(ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-H),U=Math.floor(w.image.width*z),tt=Math.floor(w.image.height*z),ft=N!==null?N.x:0,yt=N!==null?N.y:0;T.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ft,yt,U,tt),wt.unbindTexture()};const Je=L.createFramebuffer(),Qe=L.createFramebuffer();this.copyTextureToTexture=function(w,N,H=null,z=null,U=0,tt=null){w.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],N=arguments[2],tt=arguments[3]||0,H=null),tt===null&&(U!==0?(ao("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),tt=U,U=0):tt=0);let ft,yt,xt,At,Nt,Pt,$t,fe,We;const Fe=w.isCompressedTexture?w.mipmaps[tt]:w.image;if(H!==null)ft=H.max.x-H.min.x,yt=H.max.y-H.min.y,xt=H.isBox3?H.max.z-H.min.z:1,At=H.min.x,Nt=H.min.y,Pt=H.isBox3?H.min.z:0;else{const di=Math.pow(2,-U);ft=Math.floor(Fe.width*di),yt=Math.floor(Fe.height*di),w.isDataArrayTexture?xt=Fe.depth:w.isData3DTexture?xt=Math.floor(Fe.depth*di):xt=1,At=0,Nt=0,Pt=0}z!==null?($t=z.x,fe=z.y,We=z.z):($t=0,fe=0,We=0);const ue=Ft.convert(N.format),Ot=Ft.convert(N.type);let hn;N.isData3DTexture?(T.setTexture3D(N,0),hn=L.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(T.setTexture2DArray(N,0),hn=L.TEXTURE_2D_ARRAY):(T.setTexture2D(N,0),hn=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const me=L.getParameter(L.UNPACK_ROW_LENGTH),Mi=L.getParameter(L.UNPACK_IMAGE_HEIGHT),zs=L.getParameter(L.UNPACK_SKIP_PIXELS),$n=L.getParameter(L.UNPACK_SKIP_ROWS),Jo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Fe.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Fe.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,At),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pt);const Re=w.isDataArrayTexture||w.isData3DTexture,hi=N.isDataArrayTexture||N.isData3DTexture;if(w.isDepthTexture){const di=St.get(w),wn=St.get(N),On=St.get(di.__renderTarget),Vc=St.get(wn.__renderTarget);wt.bindFramebuffer(L.READ_FRAMEBUFFER,On.__webglFramebuffer),wt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Vc.__webglFramebuffer);for(let Zr=0;Zr<xt;Zr++)Re&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(w).__webglTexture,U,Pt+Zr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,St.get(N).__webglTexture,tt,We+Zr)),L.blitFramebuffer(At,Nt,ft,yt,$t,fe,ft,yt,L.DEPTH_BUFFER_BIT,L.NEAREST);wt.bindFramebuffer(L.READ_FRAMEBUFFER,null),wt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(U!==0||w.isRenderTargetTexture||St.has(w)){const di=St.get(w),wn=St.get(N);wt.bindFramebuffer(L.READ_FRAMEBUFFER,Je),wt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Qe);for(let On=0;On<xt;On++)Re?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,di.__webglTexture,U,Pt+On):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,di.__webglTexture,U),hi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,wn.__webglTexture,tt,We+On):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wn.__webglTexture,tt),U!==0?L.blitFramebuffer(At,Nt,ft,yt,$t,fe,ft,yt,L.COLOR_BUFFER_BIT,L.NEAREST):hi?L.copyTexSubImage3D(hn,tt,$t,fe,We+On,At,Nt,ft,yt):L.copyTexSubImage2D(hn,tt,$t,fe,At,Nt,ft,yt);wt.bindFramebuffer(L.READ_FRAMEBUFFER,null),wt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else hi?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(hn,tt,$t,fe,We,ft,yt,xt,ue,Ot,Fe.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(hn,tt,$t,fe,We,ft,yt,xt,ue,Fe.data):L.texSubImage3D(hn,tt,$t,fe,We,ft,yt,xt,ue,Ot,Fe):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,tt,$t,fe,ft,yt,ue,Ot,Fe.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,tt,$t,fe,Fe.width,Fe.height,ue,Fe.data):L.texSubImage2D(L.TEXTURE_2D,tt,$t,fe,ft,yt,ue,Ot,Fe);L.pixelStorei(L.UNPACK_ROW_LENGTH,me),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mi),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zs),L.pixelStorei(L.UNPACK_SKIP_ROWS,$n),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Jo),tt===0&&N.generateMipmaps&&L.generateMipmap(hn),wt.unbindTexture()},this.copyTextureToTexture3D=function(w,N,H=null,z=null,U=0){return w.isTexture!==!0&&(ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,z=arguments[1]||null,w=arguments[2],N=arguments[3],U=arguments[4]||0),ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,N,H,z,U)},this.initRenderTarget=function(w){St.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),wt.unbindTexture()},this.resetState=function(){C=0,S=0,A=null,wt.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}function nr(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function r_(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fo={duration:.5,overwrite:!1,delay:0},_d,pn,De,bi=1e8,Se=1/bi,Ch=Math.PI*2,nM=Ch/4,iM=0,s_=Math.sqrt,rM=Math.cos,sM=Math.sin,un=function(t){return typeof t=="string"},Be=function(t){return typeof t=="function"},fr=function(t){return typeof t=="number"},gd=function(t){return typeof t>"u"},Yi=function(t){return typeof t=="object"},Hn=function(t){return t!==!1},vd=function(){return typeof window<"u"},Dl=function(t){return Be(t)||un(t)},o_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},bn=Array.isArray,Ph=/(?:-?\.?\d|\.)+/gi,a_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,_u=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,l_=/[+-]=-?[.\d]+/,c_=/[^,'"\[\]\s]+/gi,oM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ie,Ii,Ah,xd,oi={},dc={},u_,h_=function(t){return(dc=ko(t,oi))&&Yn},bd=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Ua=function(t,e){return!e&&console.warn(t)},d_=function(t,e){return t&&(oi[t]=e)&&dc&&(dc[t]=e)||oi},Oa=function(){return 0},aM={suppressEvents:!0,isStart:!0,kill:!1},Jl={suppressEvents:!0,kill:!1},lM={suppressEvents:!0},yd={},zr=[],Rh={},p_,ti={},gu={},ff=30,Ql=[],wd="",Ed=function(t){var e=t[0],n,r;if(Yi(e)||Be(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Ql.length;r--&&!Ql[r].targetTest(e););n=Ql[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new F_(t[r],n)))||t.splice(r,1);return t},vs=function(t){return t._gsap||Ed(yi(t))[0]._gsap},f_=function(t,e,n){return(n=t[e])&&Be(n)?t[e]():gd(n)&&t.getAttribute&&t.getAttribute(e)||n},Gn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ve=function(t){return Math.round(t*1e5)/1e5||0},je=function(t){return Math.round(t*1e7)/1e7||0},wo=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},cM=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},pc=function(){var t=zr.length,e=zr.slice(0),n,r;for(Rh={},zr.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},m_=function(t,e,n,r){zr.length&&!pn&&pc(),t.render(e,n,r||pn&&e<0&&(t._initted||t._startAt)),zr.length&&!pn&&pc()},__=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(c_).length<2?e:un(t)?t.trim():t},g_=function(t){return t},ai=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},uM=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},ko=function(t,e){for(var n in e)t[n]=e[n];return t},mf=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Yi(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},fc=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},ba=function(t){var e=t.parent||Ie,n=t.keyframes?uM(bn(t.keyframes)):ai;if(Hn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},hM=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},v_=function(t,e,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},Ic=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Yr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},xs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},dM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Dh=function(t,e,n,r){return t._startAt&&(pn?t._startAt.revert(Jl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},pM=function i(t){return!t||t._ts&&i(t.parent)},_f=function(t){return t._repeat?Bo(t._tTime,t=t.duration()+t._rDelay)*t:0},Bo=function(t,e){var n=Math.floor(t=je(t/e));return t&&n===t?n-1:n},mc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Uc=function(t){return t._end=je(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},Oc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=je(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Uc(t),n._dirty||xs(n,t)),t},x_=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=mc(t.rawTime(),e),(!e._dur||Ja(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),xs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Fi=function(t,e,n,r){return e.parent&&Yr(e),e._start=je((fr(n)?n:n||t!==Ie?mi(t,n,e):t._time)+e._delay),e._end=je(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),v_(t,e,"_first","_last",t._sort?"_start":0),Lh(e)||(t._recent=e),r||x_(t,e),t._ts<0&&Oc(t,t._tTime),t},b_=function(t,e){return(oi.ScrollTrigger||bd("scrollTrigger",e))&&oi.ScrollTrigger.create(e,t)},y_=function(t,e,n,r,s){if(Sd(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!pn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&p_!==ni.frame)return zr.push(t),t._lazy=[s,r],1},fM=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Lh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},mM=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&fM(t)&&!(!t._initted&&Lh(t))||(t._ts<0||t._dp._ts<0)&&!Lh(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=Ja(0,t._tDur,e),u=Bo(l,a),t._yoyo&&u&1&&(o=1-o),u!==Bo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||pn||r||t._zTime===Se||!e&&t._zTime){if(!t._initted&&y_(t,e,r,n,l))return;for(h=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Dh(t,e,n,!0),t._onUpdate&&!n&&ri(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ri(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Yr(t,1),!n&&!pn&&(ri(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},_M=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},zo=function(t,e,n,r){var s=t._repeat,o=je(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:je(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Oc(t,t._tTime=t._tDur*a),t.parent&&Uc(t),n||xs(t.parent,t),t},gf=function(t){return t instanceof Rn?xs(t):zo(t,t._dur)},gM={_start:0,endTime:Oa,totalDuration:Oa},mi=function i(t,e,n){var r=t.labels,s=t._recent||gM,o=t.duration()>=bi?s.endTime(!1):t._dur,a,l,c;return un(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(bn(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ya=function(t,e,n){var r=fr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Hn(l.vars.inherit)&&l.parent;o.immediateRender=Hn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new qe(e[0],o,e[s+1])},Kr=function(t,e){return t||t===0?e(t):e},Ja=function(t,e,n){return n<t?t:n>e?e:n},vn=function(t,e){return!un(t)||!(e=oM.exec(t))?"":e[1]},vM=function(t,e,n){return Kr(n,function(r){return Ja(t,e,r)})},Ih=[].slice,w_=function(t,e){return t&&Yi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Yi(t[0]))&&!t.nodeType&&t!==Ii},xM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return un(r)&&!e||w_(r,1)?(s=n).push.apply(s,yi(r)):n.push(r)})||n},yi=function(t,e,n){return De&&!e&&De.selector?De.selector(t):un(t)&&!n&&(Ah||!Vo())?Ih.call((e||xd).querySelectorAll(t),0):bn(t)?xM(t,n):w_(t)?Ih.call(t,0):t?[t]:[]},Uh=function(t){return t=yi(t)[0]||Ua("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return yi(e,n.querySelectorAll?n:n===t?Ua("Invalid scope")||xd.createElement("div"):t)}},E_=function(t){return t.sort(function(){return .5-Math.random()})},M_=function(t){if(Be(t))return t;var e=Yi(t)?t:{each:t},n=bs(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,u=r,h=r;return un(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(d,p,g){var _=(g||e).length,m=o[_],f,M,E,x,P,C,S,A,b;if(!m){if(b=e.grid==="auto"?0:(e.grid||[1,bi])[1],!b){for(S=-bi;S<(S=g[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=o[_]=[],f=l?Math.min(b,_)*u-.5:r%b,M=b===bi?0:l?_*h/b-.5:r/b|0,S=0,A=bi,C=0;C<_;C++)E=C%b-f,x=M-(C/b|0),m[C]=P=c?Math.abs(c==="y"?x:E):s_(E*E+x*x),P>S&&(S=P),P<A&&(A=P);r==="random"&&E_(m),m.max=S-A,m.min=A,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(b>_?_-1:c?c==="y"?_/b:b:Math.max(b,_/b))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=vn(e.amount||e.each)||0,n=n&&_<0?U_(n):n}return _=(m[d]-m.min)/m.max||0,je(m.b+(n?n(_):_)*m.v)+m.u}},Oh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=je(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(fr(n)?0:vn(n))}},S_=function(t,e){var n=bn(t),r,s;return!n&&Yi(t)&&(r=n=t.radius||bi,t.values?(t=yi(t.values),(s=!fr(t[0]))&&(r*=r)):t=Oh(t.increment)),Kr(e,n?Be(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=bi,u=0,h=t.length,d,p;h--;)s?(d=t[h].x-a,p=t[h].y-l,d=d*d+p*p):d=Math.abs(t[h]-a),d<c&&(c=d,u=h);return u=!r||c<=r?t[u]:o,s||u===o||fr(o)?u:u+vn(o)}:Oh(t))},T_=function(t,e,n,r){return Kr(bn(t)?!e:n===!0?!!(n=0):!r,function(){return bn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},bM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},yM=function(t,e){return function(n){return t(parseFloat(n))+(e||vn(n))}},wM=function(t,e,n){return P_(t,e,0,1,n)},C_=function(t,e,n){return Kr(n,function(r){return t[~~e(r)]})},EM=function i(t,e,n){var r=e-t;return bn(t)?C_(t,i(0,t.length),e):Kr(n,function(s){return(r+(s-t)%r)%r+t})},MM=function i(t,e,n){var r=e-t,s=r*2;return bn(t)?C_(t,i(0,t.length-1),e):Kr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},Na=function(t){for(var e=0,n="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?c_:Ph),n+=t.substr(e,r-e)+T_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},P_=function(t,e,n,r,s){var o=e-t,a=r-n;return Kr(s,function(l){return n+((l-t)/o*a||0)})},SM=function i(t,e,n,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=un(t),a={},l,c,u,h,d;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(bn(t)&&!bn(e)){for(u=[],h=t.length,d=h-2,c=1;c<h;c++)u.push(i(t[c-1],t[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return u[_](g-_)},n=e}else r||(t=ko(bn(t)?[]:{},t));if(!u){for(l in e)Md.call(a,t,l,"get",e[l]);s=function(g){return Pd(g,a)||(o?t.p:t)}}}return Kr(n,s)},vf=function(t,e,n){var r=t.labels,s=bi,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ri=function(t,e,n){var r=t.vars,s=r[e],o=De,a=t._ctx,l,c,u;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&zr.length&&pc(),a&&(De=a),u=l?s.apply(c,l):s.call(c),De=o,u},ha=function(t){return Yr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!pn),t.progress()<1&&ri(t,"onInterrupt"),t},_o,A_=[],R_=function(t){if(t)if(t=!t.name&&t.default||t,vd()||t.headless){var e=t.name,n=Be(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Oa,render:Pd,add:Md,kill:VM,modifier:zM,rawVars:0},o={targetTest:0,get:0,getSetter:Cd,aliases:{},register:0};if(Vo(),t!==r){if(ti[e])return;ai(r,ai(fc(t,s),o)),ko(r.prototype,ko(s,fc(t,o))),ti[r.prop=e]=r,t.targetTest&&(Ql.push(r),yd[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}d_(e,r),t.register&&t.register(Yn,r,Wn)}else A_.push(t)},Me=255,da={aqua:[0,Me,Me],lime:[0,Me,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Me],navy:[0,0,128],white:[Me,Me,Me],olive:[128,128,0],yellow:[Me,Me,0],orange:[Me,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Me,0,0],pink:[Me,192,203],cyan:[0,Me,Me],transparent:[Me,Me,Me,0]},vu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Me+.5|0},D_=function(t,e,n){var r=t?fr(t)?[t>>16,t>>8&Me,t&Me]:0:da.black,s,o,a,l,c,u,h,d,p,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),da[t])r=da[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&Me,r&Me,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&Me,t&Me]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(Ph),!e)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=vu(l+1/3,s,o),r[1]=vu(l,s,o),r[2]=vu(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(a_),n&&r.length<4&&(r[3]=1),r}else r=t.match(Ph)||da.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/Me,o=r[1]/Me,a=r[2]/Me,h=Math.max(s,o,a),d=Math.min(s,o,a),u=(h+d)/2,h===d?l=c=0:(p=h-d,c=u>.5?p/(2-h-d):p/(h+d),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},L_=function(t){var e=[],n=[],r=-1;return t.split(Vr).forEach(function(s){var o=s.match(mo)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},xf=function(t,e,n){var r="",s=(t+r).match(Vr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(d){return(d=D_(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=L_(t),l=n.c,l.join(r)!==u.c.join(r)))for(c=t.replace(Vr,"1").split(mo),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Vr),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Vr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in da)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),TM=/hsl[a]?\(/,I_=function(t){var e=t.join(" "),n;if(Vr.lastIndex=0,Vr.test(e))return n=TM.test(e),t[1]=xf(t[1],n),t[0]=xf(t[0],n,L_(t[1])),!0},Fa,ni=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,d,p,g=function _(m){var f=i()-r,M=m===!0,E,x,P,C;if((f>t||f<0)&&(n+=f-e),r+=f,P=r-n,E=P-o,(E>0||M)&&(C=++h.frame,d=P-h.time*1e3,h.time=P=P/1e3,o+=E+(E>=s?4:s-E),x=1),M||(l=c(_)),x)for(p=0;p<a.length;p++)a[p](P,d,C,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){u_&&(!Ah&&vd()&&(Ii=Ah=window,xd=Ii.document||{},oi.gsap=Yn,(Ii.gsapVersions||(Ii.gsapVersions=[])).push(Yn.version),h_(dc||Ii.GreenSockGlobals||!Ii.gsap&&Ii||{}),A_.forEach(R_)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Fa=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Fa=0,c=Oa},lagSmoothing:function(m,f){t=m||1/0,e=Math.min(f||33,t)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,f,M){var E=f?function(x,P,C,S){m(x,P,C,S),h.remove(E)}:m;return h.remove(m),a[M?"unshift":"push"](E),Vo(),E},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},h}(),Vo=function(){return!Fa&&ni.wake()},oe={},CM=/^[\d.\-M][\d.\-,\s]/,PM=/["']/g,AM=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(PM,"").trim():+c,r=l.substr(a+1).trim();return e},RM=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},DM=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[AM(e[1])]:RM(t).split(",").map(__)):oe._CE&&CM.test(t)?oe._CE("",t):n},U_=function(t){return function(e){return 1-t(1-e)}},O_=function i(t,e){for(var n=t._first,r;n;)n instanceof Rn?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},bs=function(t,e){return t&&(Be(t)?t:oe[t]||DM(t))||e},Fs=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return Gn(t,function(a){oe[a]=oi[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},N_=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},xu=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Ch*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*sM((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:N_(a);return s=Ch/s,l.config=function(c,u){return i(t,c,u)},l},bu=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:N_(n);return r.config=function(s){return i(t,s)},r};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;Fs(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Fs("Elastic",xu("in"),xu("out"),xu());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};Fs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Fs("Expo",function(i){return Math.pow(2,10*(i-1))*i+i*i*i*i*i*i*(1-i)});Fs("Circ",function(i){return-(s_(1-i*i)-1)});Fs("Sine",function(i){return i===1?1:-rM(i*nM)+1});Fs("Back",bu("in"),bu("out"),bu());oe.SteppedEase=oe.steps=oi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-Se;return function(a){return((r*Ja(0,o,a)|0)+s)*n}}};Fo.ease=oe["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return wd+=i+","+i+"Params,"});var F_=function(t,e){this.id=iM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:f_,this.set=e?e.getSetter:Cd},ka=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,zo(this,+e.duration,1,1),this.data=e.data,De&&(this._ctx=De,De.data.push(this)),Fa||ni.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,zo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Vo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Oc(this,n),!s._dp||s.parent||x_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Se||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),m_(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_f(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_f(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Bo(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?mc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(Ja(-Math.abs(this._delay),this._tDur,s),r!==!1),Uc(this),dM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Vo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Fi(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?mc(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=lM);var r=pn;return pn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),pn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,gf(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(mi(this,n),Hn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Hn(r)),this._dur||(this._zTime=-Se),this},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this;return new Promise(function(s){var o=Be(n)?n:g_,a=function(){var c=r.then;r.then=null,Be(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){ha(this)},i}();ai(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var Rn=function(i){r_(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Hn(n.sortChildren),Ie&&Fi(n.parent||Ie,nr(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&b_(nr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return ya(0,arguments,this),this},e.from=function(r,s,o){return ya(1,arguments,this),this},e.fromTo=function(r,s,o,a){return ya(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,ba(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qe(r,s,mi(this,o),1),this},e.call=function(r,s,o){return Fi(this,qe.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new qe(r,o,mi(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,ba(o).immediateRender=Hn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},e.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,ba(a).immediateRender=Hn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:je(r),h=this._zTime<0!=r<0&&(this._initted||!c),d,p,g,_,m,f,M,E,x,P,C,S;if(this!==Ie&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),d=u,x=this._start,E=this._ts,f=!E,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=je(u%m),u===l?(_=this._repeat,d=c):(P=je(u/m),_=~~P,_&&_===P&&(d=c,_--),d>c&&(d=c)),P=Bo(this._tTime,m),!a&&this._tTime&&P!==_&&this._tTime-P*m-this._dur<=0&&(P=_),C&&_&1&&(d=c-d,S=1),_!==P&&!this._lock){var A=C&&P&1,b=A===(C&&_&1);if(_<P&&(A=!A),a=A?0:u%c?c:u,this._lock=1,this.render(a||(S?0:je(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ri(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;O_(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=_M(this,je(a),je(d)),M&&(u-=d-(d=M._start))),this._tTime=u,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!_&&(ri(this,"onStart"),this._tTime!==u))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||d>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!f){M=0,g&&(u+=this._zTime=-Se);break}}p=g}else{p=this._last;for(var v=r<0?r:d;p;){if(g=p._prev,(p._act||v<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(v-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(v-p._start)*p._ts,s,o||pn&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!f){M=0,g&&(u+=this._zTime=v?-Se:Se);break}}p=g}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-Se)._zTime=d>=a?1:-1,this._ts))return this._start=x,Uc(this),this.render(r,s,o);this._onUpdate&&!s&&ri(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(ri(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(fr(s)||(s=mi(this,s,r)),!(r instanceof ka)){if(bn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(un(r))return this.addLabel(r,s);if(Be(r))r=qe.delayedCall(0,r);else return this}return this!==r?Fi(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-bi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof qe?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return un(r)?this.removeLabel(r):Be(r)?this.killTweensOf(r):(r.parent===this&&Ic(this,r),r===this._recent&&(this._recent=this._last),xs(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=je(ni.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=mi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=qe.delayedCall(0,s||Oa,o);return a.data="isPause",this._hasPause=1,Fi(this,a,mi(this,r))},e.removePause=function(r){var s=this._first;for(r=mi(this,r);s;)s._start===r&&s.data==="isPause"&&Yr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Lr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=yi(r),l=this._first,c=fr(s),u;l;)l instanceof qe?cM(l._targets,a)&&(c?(!Lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=mi(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,p,g=qe.to(o,ai({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&zo(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return d?g.render(0):g},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,ai({startAt:{time:mi(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),vf(this,mi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),vf(this,mi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return xs(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),xs(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=bi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Fi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;zo(o,o===Ie&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Ie._ts&&(m_(Ie,mc(r,Ie)),p_=ni.frame),ni.frame>=ff){ff+=si.autoSleep||120;var s=Ie._first;if((!s||!s._ts)&&si.autoSleep&&ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ni.sleep()}}},t}(ka);ai(Rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var LM=function(t,e,n,r,s,o,a){var l=new Wn(this._pt,t,e,0,1,G_,null,s),c=0,u=0,h,d,p,g,_,m,f,M;for(l.b=n,l.e=r,n+="",r+="",(f=~r.indexOf("random("))&&(r=Na(r)),o&&(M=[n,r],o(M,t,e),n=M[0],r=M[1]),d=n.match(_u)||[];h=_u.exec(r);)g=h[0],_=r.substring(c,h.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?wo(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=_u.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(l_.test(r)||f)&&(l.e=0),this._pt=l,l},Md=function(t,e,n,r,s,o,a,l,c,u){Be(r)&&(r=r(s||0,t,o));var h=t[e],d=n!=="get"?n:Be(h)?c?t[e.indexOf("set")||!Be(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,p=Be(h)?c?FM:V_:Td,g;if(un(r)&&(~r.indexOf("random(")&&(r=Na(r)),r.charAt(1)==="="&&(g=wo(d,r)+(vn(d)||0),(g||g===0)&&(r=g))),!u||d!==r||Nh)return!isNaN(d*r)&&r!==""?(g=new Wn(this._pt,t,e,+d||0,r-(d||0),typeof h=="boolean"?BM:H_,0,p),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&bd(e,r),LM.call(this,t,e,d,r,p,l||si.stringFilter,c))},IM=function(t,e,n,r,s){if(Be(t)&&(t=wa(t,s,e,n,r)),!Yi(t)||t.style&&t.nodeType||bn(t)||o_(t))return un(t)?wa(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=wa(t[a],s,e,n,r);return o},k_=function(t,e,n,r,s,o){var a,l,c,u;if(ti[t]&&(a=new ti[t]).init(s,a.rawVars?e[t]:IM(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Wn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==_o))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Lr,Nh,Sd=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,h=r.yoyoEase,d=r.keyframes,p=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,f=t.parent,M=f&&f.data==="nested"?f.vars.targets:m,E=t._overwrite==="auto"&&!_d,x=t.timeline,P,C,S,A,b,v,R,O,k,Y,j,W,X;if(x&&(!d||!s)&&(s="none"),t._ease=bs(s,Fo.ease),t._yEase=h?U_(bs(h===!0?s:h,Fo.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!x&&!!r.runBackwards,!x||d&&!r.stagger){if(O=m[0]?vs(m[0]).harness:0,W=O&&r[O.prop],P=fc(r,yd),_&&(_._zTime<0&&_.progress(1),e<0&&u&&a&&!p?_.render(-1,!0):_.revert(u&&g?Jl:aM),_._lazy=0),o){if(Yr(t._startAt=qe.set(m,ai({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&Hn(l),startAt:null,delay:0,onUpdate:c&&function(){return ri(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn||!a&&!p)&&t._startAt.revert(Jl),a&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(a=!1),S=ai({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Hn(l),immediateRender:a,stagger:0,parent:f},P),W&&(S[O.prop]=W),Yr(t._startAt=qe.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(pn?t._startAt.revert(Jl):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Hn(l)||l&&!g,C=0;C<m.length;C++){if(b=m[C],R=b._gsap||Ed(m)[C]._gsap,t._ptLookup[C]=Y={},Rh[R.id]&&zr.length&&pc(),j=M===m?C:M.indexOf(b),O&&(k=new O).init(b,W||P,t,j,M)!==!1&&(t._pt=A=new Wn(t._pt,b,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(V){Y[V]=A}),k.priority&&(v=1)),!O||W)for(S in P)ti[S]&&(k=k_(S,P,t,j,b,M))?k.priority&&(v=1):Y[S]=A=Md.call(t,b,S,"get",P[S],j,M,0,r.stringFilter);t._op&&t._op[C]&&t.kill(b,t._op[C]),E&&t._pt&&(Lr=t,Ie.killTweensOf(b,Y,t.globalTime(e)),X=!t.parent,Lr=0),t._pt&&l&&(Rh[R.id]=1)}v&&W_(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,d&&e<=0&&x.render(bi,!0,!0)},UM=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(u=d[p][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Nh=1,t.vars[e]="+=0",Sd(t,a),Nh=0,l?Ua(e+" not eligible for reset"):1;c.push(u)}for(p=c.length;p--;)h=c[p],u=h._pt||h,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Ve(n)+vn(h.e)),h.b&&(h.b=u.s+vn(h.b))},OM=function(t,e){var n=t[0]?vs(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=ko({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},NM=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(bn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},wa=function(t,e,n,r,s){return Be(t)?t.call(e,n,r,s):un(t)&&~t.indexOf("random(")?Na(t):t},B_=wd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",z_={};Gn(B_+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return z_[i]=1});var qe=function(i){r_(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:ba(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,M=r.parent||Ie,E=(bn(n)||o_(n)?fr(n[0]):"length"in r)?[n]:yi(n),x,P,C,S,A,b,v,R;if(a._targets=E.length?Ed(E):Ua("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||d||Dl(c)||Dl(u)){if(r=a.vars,x=a.timeline=new Rn({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:E}),x.kill(),x.parent=x._dp=nr(a),x._start=0,d||Dl(c)||Dl(u)){if(S=E.length,v=d&&M_(d),Yi(d))for(A in d)~B_.indexOf(A)&&(R||(R={}),R[A]=d[A]);for(P=0;P<S;P++)C=fc(r,z_),C.stagger=0,f&&(C.yoyoEase=f),R&&ko(C,R),b=E[P],C.duration=+wa(c,nr(a),P,b,E),C.delay=(+wa(u,nr(a),P,b,E)||0)-a._delay,!d&&S===1&&C.delay&&(a._delay=u=C.delay,a._start+=u,C.delay=0),x.to(b,C,v?v(P,b,E):0),x._ease=oe.none;x.duration()?c=u=0:a.timeline=0}else if(g){ba(ai(x.vars.defaults,{ease:"none"})),x._ease=bs(g.ease||r.ease||"none");var O=0,k,Y,j;if(bn(g))g.forEach(function(W){return x.to(E,W,">")}),x.duration();else{C={};for(A in g)A==="ease"||A==="easeEach"||NM(A,g[A],C,g.easeEach);for(A in C)for(k=C[A].sort(function(W,X){return W.t-X.t}),O=0,P=0;P<k.length;P++)Y=k[P],j={ease:Y.e,duration:(Y.t-(P?k[P-1].t:0))/100*c},j[A]=Y.v,x.to(E,j,O),O+=j.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return p===!0&&!_d&&(Lr=nr(a),Ie.killTweensOf(E),Lr=0),Fi(M,nr(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===je(M._time)&&Hn(h)&&pM(nr(a))&&M.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-u)||0)),m&&b_(nr(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-Se&&!u?l:r<Se?0:r,d,p,g,_,m,f,M,E,x;if(!c)mM(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(d=je(h%_),h===l?(g=this._repeat,d=c):(m=je(h/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),f=this._yoyo&&g&1,f&&(x=this._yEase,d=c-d),m=Bo(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(E&&this._yEase&&O_(E,f),this.vars.repeatRefresh&&!f&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(je(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(y_(this,u?r:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(d/c),this._from&&(this.ratio=M=1-M),d&&!a&&!s&&!g&&(ri(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;E&&E.render(r<0?r:E._dur*E._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Dh(this,r,s,o),ri(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ri(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Dh(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Yr(this,1),!s&&!(u&&!a)&&(h||a||f)&&(ri(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){Fa||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Sd(this,c),u=this._ease(c/this._dur),UM(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(Oc(this,0),this.parent||v_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ha(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Lr&&Lr.vars.overwrite!==!0)._first||ha(this),this.parent&&o!==this.timeline.totalDuration()&&zo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?yi(r):a,c=this._ptLookup,u=this._pt,h,d,p,g,_,m,f;if((!s||s==="all")&&hM(a,l))return s==="all"&&(this._pt=0),ha(this);for(h=this._op=this._op||[],s!=="all"&&(un(s)&&(_={},Gn(s,function(M){return _[M]=1}),s=_),s=OM(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){d=c[f],s==="all"?(h[f]=s,g=d,p={}):(p=h[f]=h[f]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Ic(this,m,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&ha(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return ya(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return ya(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Ie.killTweensOf(r,s,o)},t}(ka);ai(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(i){qe[i]=function(){var t=new Rn,e=Ih.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Td=function(t,e,n){return t[e]=n},V_=function(t,e,n){return t[e](n)},FM=function(t,e,n,r){return t[e](r.fp,n)},kM=function(t,e,n){return t.setAttribute(e,n)},Cd=function(t,e){return Be(t[e])?V_:gd(t[e])&&t.setAttribute?kM:Td},H_=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},BM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},G_=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},Pd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},zM=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},VM=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Ic(this,e,"_pt"):e.dep||(n=1),e=r;return!n},HM=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},W_=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},Wn=function(){function i(e,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||H_,this.d=l||this,this.set=c||Td,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=HM,this.m=n,this.mt=s,this.tween=r},i}();Gn(wd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return yd[i]=1});oi.TweenMax=oi.TweenLite=qe;oi.TimelineLite=oi.TimelineMax=Rn;Ie=new Rn({sortChildren:!1,defaults:Fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=I_;var ys=[],tc={},GM=[],bf=0,WM=0,yu=function(t){return(tc[t]||GM).map(function(e){return e()})},Fh=function(){var t=Date.now(),e=[];t-bf>2&&(yu("matchMediaInit"),ys.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Ii.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),yu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),bf=t,yu("matchMedia"))},X_=function(){function i(e,n){this.selector=n&&Uh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=WM++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){Be(n)&&(s=r,r=n,n=Be);var o=this,a=function(){var c=De,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Uh(s)),De=o,h=r.apply(o,arguments),Be(h)&&o._r.push(h),De=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Be?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=De;De=null,n(this),De=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof qe&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Rn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ys.length;o--;)ys[o].id===this.id&&ys.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),XM=function(){function i(e){this.contexts=[],this.scope=e,De&&De.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Yi(n)||(n={matches:n});var o=new X_(0,s||this.scope),a=o.conditions={},l,c,u;De&&!o.selector&&(o.selector=De.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Ii.matchMedia(n[c]),l&&(ys.indexOf(o)<0&&ys.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Fh):l.addEventListener("change",Fh)));return u&&r(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),_c={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return R_(r)})},timeline:function(t){return new Rn(t)},getTweensOf:function(t,e){return Ie.getTweensOf(t,e)},getProperty:function(t,e,n,r){un(t)&&(t=yi(t)[0]);var s=vs(t||{}).get,o=n?g_:__;return n==="native"&&(n=""),t&&(e?o((ti[e]&&ti[e].get||s)(t,e,n,r)):function(a,l,c){return o((ti[a]&&ti[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=yi(t),t.length>1){var r=t.map(function(u){return Yn.quickSetter(u,e,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}t=t[0]||{};var o=ti[e],a=vs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;_o._pt=0,h.init(t,n?u+n:u,_o,0,[t]),h.render(1,h),_o._pt&&Pd(1,_o)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var r,s=Yn.to(t,ai((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=bs(t.ease,Fo.ease)),mf(Fo,t||{})},config:function(t){return mf(si,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ti[a]&&!oi[a]&&Ua(e+" effect requires "+a+" plugin.")}),gu[e]=function(a,l,c){return n(yi(a),ai(l||{},s),c)},o&&(Rn.prototype[e]=function(a,l,c){return this.add(gu[e](a,Yi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=bs(e)},parseEase:function(t,e){return arguments.length?bs(t,e):oe},getById:function(t){return Ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Rn(t),r,s;for(n.smoothChildTiming=Hn(t.smoothChildTiming),Ie.remove(n),n._dp=0,n._time=n._tTime=Ie._time,r=Ie._first;r;)s=r._next,(e||!(!r._dur&&r instanceof qe&&r.vars.onComplete===r._targets[0]))&&Fi(n,r,r._start-r._delay),r=s;return Fi(Ie,n,0),n},context:function(t,e){return t?new X_(t,e):De},matchMedia:function(t){return new XM(t)},matchMediaRefresh:function(){return ys.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Fh()},addEventListener:function(t,e){var n=tc[t]||(tc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=tc[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:EM,wrapYoyo:MM,distribute:M_,random:T_,snap:S_,normalize:wM,getUnit:vn,clamp:vM,splitColor:D_,toArray:yi,selector:Uh,mapRange:P_,pipe:bM,unitize:yM,interpolate:SM,shuffle:E_},install:h_,effects:gu,ticker:ni,updateRoot:Rn.updateRoot,plugins:ti,globalTimeline:Ie,core:{PropTween:Wn,globals:d_,Tween:qe,Timeline:Rn,Animation:ka,getCache:vs,_removeLinkedListItem:Ic,reverting:function(){return pn},context:function(t){return t&&De&&(De.data.push(t),t._ctx=De),De},suppressOverwrites:function(t){return _d=t}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return _c[i]=qe[i]});ni.add(Rn.updateRoot);_o=_c.to({},{duration:0});var YM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},qM=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=YM(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},wu=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(un(s)&&(l={},Gn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}qM(a,s)}}}},Yn=_c.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)pn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},wu("roundProps",Oh),wu("modifiers"),wu("snap",S_))||_c;qe.version=Rn.version=Yn.version="3.12.7";u_=1;vd()&&Vo();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.12.7
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yf,Ir,Eo,Ad,ms,wf,Rd,jM=function(){return typeof window<"u"},mr={},ls=180/Math.PI,Mo=Math.PI/180,eo=Math.atan2,Ef=1e8,Dd=/([A-Z])/g,$M=/(left|right|width|margin|padding|x)/i,KM=/[\s,\(]\S/,Bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ZM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},JM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},QM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Y_=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},q_=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},tS=function(t,e,n){return t.style[e]=n},eS=function(t,e,n){return t.style.setProperty(e,n)},nS=function(t,e,n){return t._gsap[e]=n},iS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},rS=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},sS=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ue="transform",Xn=Ue+"Origin",oS=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in mr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Bi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ir(r,a)}):this.tfm[t]=o.x?o[t]:ir(r,t),t===Xn&&(this.tfm.zOrigin=o.zOrigin);else return Bi.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(Ue)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Xn,e,"")),t=Ue}(s||e)&&this.props.push(t,e,s[t])},j_=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},aS=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Dd,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Rd(),(!s||!s.isStart)&&!n[Ue]&&(j_(n),r.zOrigin&&n[Xn]&&(n[Xn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},$_=function(t,e){var n={target:t,props:[],revert:aS,save:oS};return t._gsap||Yn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return n.save(r)}),n},K_,Bh=function(t,e){var n=Ir.createElementNS?Ir.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ir.createElement(t);return n&&n.style?n:Ir.createElement(t)},Gi=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Dd,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,Ho(e)||e,1)||""},Mf="O,Moz,ms,Ms,Webkit".split(","),Ho=function(t,e,n){var r=e||ms,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Mf[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Mf[o]:"")+t},zh=function(){jM()&&window.document&&(yf=window,Ir=yf.document,Eo=Ir.documentElement,ms=Bh("div")||{style:{}},Bh("div"),Ue=Ho(Ue),Xn=Ue+"Origin",ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",K_=!!Ho("perspective"),Rd=Yn.core.reverting,Ad=1)},Sf=function(t){var e=t.ownerSVGElement,n=Bh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",n.appendChild(r),Eo.appendChild(n);try{s=r.getBBox()}catch{}return n.removeChild(r),Eo.removeChild(n),s},Tf=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Z_=function(t){var e,n;try{e=t.getBBox()}catch{e=Sf(t),n=1}return e&&(e.width||e.height)||n||(e=Sf(t)),e&&!e.width&&!e.x&&!e.y?{x:+Tf(t,["x","cx","x1"])||0,y:+Tf(t,["y","cy","y1"])||0,width:0,height:0}:e},J_=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Z_(t))},Ps=function(t,e){if(e){var n=t.style,r;e in mr&&e!==Xn&&(e=Ue),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(Dd,"-$1").toLowerCase())):n.removeAttribute(e)}},Ur=function(t,e,n,r,s,o){var a=new Wn(t._pt,e,n,0,1,o?q_:Y_);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},Cf={deg:1,rad:1,turn:1},lS={grid:1,flex:1},qr=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ms.style,l=$M.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=r==="px",p=r==="%",g,_,m,f;if(r===o||!s||Cf[r]||Cf[o])return s;if(o!=="px"&&!d&&(s=i(t,e,n,"px")),f=t.getCTM&&J_(t),(p||o==="%")&&(mr[e]||~e.indexOf("adius")))return g=f?t.getBBox()[l?"width":"height"]:t[u],Ve(p?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,f&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ir||!_.appendChild)&&(_=Ir.body),m=_._gsap,m&&p&&m.width&&l&&m.time===ni.time&&!m.uncache)return Ve(s/m.width*h);if(p&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=h+r,g=t[u],M?t.style[e]=M:Ps(t,e)}else(p||o==="%")&&!lS[Gi(_,"display")]&&(a.position=Gi(t,"position")),_===t&&(a.position="static"),_.appendChild(ms),g=ms[u],_.removeChild(ms),a.position="absolute";return l&&p&&(m=vs(_),m.time=ni.time,m.width=_[u]),Ve(d?g*s/h:g&&s?h/g*s:0)},ir=function(t,e,n,r){var s;return Ad||zh(),e in Bi&&e!=="transform"&&(e=Bi[e],~e.indexOf(",")&&(e=e.split(",")[0])),mr[e]&&e!=="transform"?(s=za(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:vc(Gi(t,Xn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=gc[e]&&gc[e](t,e,n)||Gi(t,e)||f_(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?qr(t,e,s,n)+n:s},cS=function(t,e,n,r){if(!n||n==="none"){var s=Ho(e,t,1),o=s&&Gi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Gi(t,"borderTopColor"))}var a=new Wn(this._pt,t.style,e,0,1,G_),l=0,c=0,u,h,d,p,g,_,m,f,M,E,x,P;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=t.style[e],t.style[e]=r,r=Gi(t,e)||r,_?t.style[e]=_:Ps(t,e)),u=[n,r],I_(u),n=u[0],r=u[1],d=n.match(mo)||[],P=r.match(mo)||[],P.length){for(;h=mo.exec(r);)m=h[0],M=r.substring(l,h.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(p=parseFloat(_)||0,x=_.substr((p+"").length),m.charAt(1)==="="&&(m=wo(p,m)+x),f=parseFloat(m),E=m.substr((f+"").length),l=mo.lastIndex-E.length,E||(E=E||si.units[e]||x,l===r.length&&(r+=E,a.e+=E)),x!==E&&(p=qr(t,e,_,E)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:p,c:f-p,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?q_:Y_;return l_.test(r)&&(a.e=0),this._pt=a,a},Pf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},uS=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=Pf[n]||n,e[1]=Pf[r]||r,e.join(" ")},hS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],mr[a]&&(l=1,a=a==="transformOrigin"?Xn:Ue),Ps(n,a);l&&(Ps(n,Ue),o&&(o.svg&&n.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",za(n,1),o.uncache=1,j_(r)))}},gc={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new Wn(t._pt,e,n,0,0,hS);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},Ba=[1,0,0,1,0,0],Q_={},tg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Af=function(t){var e=Gi(t,Ue);return tg(e)?Ba:e.substr(7).match(a_).map(Ve)},Ld=function(t,e){var n=t._gsap||vs(t),r=t.style,s=Af(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ba:s):(s===Ba&&!t.offsetParent&&t!==Eo&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,Eo.appendChild(t)),s=Af(t),l?r.display=l:Ps(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Eo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Vh=function(t,e,n,r,s,o){var a=t._gsap,l=s||Ld(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],f=l[4],M=l[5],E=e.split(" "),x=parseFloat(E[0])||0,P=parseFloat(E[1])||0,C,S,A,b;n?l!==Ba&&(S=p*m-g*_)&&(A=x*(m/S)+P*(-_/S)+(_*M-m*f)/S,b=x*(-g/S)+P*(p/S)-(p*M-g*f)/S,x=A,P=b):(C=Z_(t),x=C.x+(~E[0].indexOf("%")?x/100*C.width:x),P=C.y+(~(E[1]||E[0]).indexOf("%")?P/100*C.height:P)),r||r!==!1&&a.smooth?(f=x-c,M=P-u,a.xOffset=h+(f*p+M*_)-f,a.yOffset=d+(f*g+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=P,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[Xn]="0px 0px",o&&(Ur(o,a,"xOrigin",c,x),Ur(o,a,"yOrigin",u,P),Ur(o,a,"xOffset",h,a.xOffset),Ur(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+P)},za=function(t,e){var n=t._gsap||new F_(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Gi(t,Xn)||"0",u,h,d,p,g,_,m,f,M,E,x,P,C,S,A,b,v,R,O,k,Y,j,W,X,V,et,D,ct,Ut,jt,$,nt;return u=h=d=_=m=f=M=E=x=0,p=g=1,n.svg=!!(t.getCTM&&J_(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ue]!=="none"?l[Ue]:"")),r.scale=r.rotate=r.translate="none"),S=Ld(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),Vh(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,S)),P=n.xOrigin||0,C=n.yOrigin||0,S!==Ba&&(R=S[0],O=S[1],k=S[2],Y=S[3],u=j=S[4],h=W=S[5],S.length===6?(p=Math.sqrt(R*R+O*O),g=Math.sqrt(Y*Y+k*k),_=R||O?eo(O,R)*ls:0,M=k||Y?eo(k,Y)*ls+_:0,M&&(g*=Math.abs(Math.cos(M*Mo))),n.svg&&(u-=P-(P*R+C*k),h-=C-(P*O+C*Y))):(nt=S[6],jt=S[7],D=S[8],ct=S[9],Ut=S[10],$=S[11],u=S[12],h=S[13],d=S[14],A=eo(nt,Ut),m=A*ls,A&&(b=Math.cos(-A),v=Math.sin(-A),X=j*b+D*v,V=W*b+ct*v,et=nt*b+Ut*v,D=j*-v+D*b,ct=W*-v+ct*b,Ut=nt*-v+Ut*b,$=jt*-v+$*b,j=X,W=V,nt=et),A=eo(-k,Ut),f=A*ls,A&&(b=Math.cos(-A),v=Math.sin(-A),X=R*b-D*v,V=O*b-ct*v,et=k*b-Ut*v,$=Y*v+$*b,R=X,O=V,k=et),A=eo(O,R),_=A*ls,A&&(b=Math.cos(A),v=Math.sin(A),X=R*b+O*v,V=j*b+W*v,O=O*b-R*v,W=W*b-j*v,R=X,j=V),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=Ve(Math.sqrt(R*R+O*O+k*k)),g=Ve(Math.sqrt(W*W+nt*nt)),A=eo(j,W),M=Math.abs(A)>2e-4?A*ls:0,x=$?1/($<0?-$:$):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!tg(Gi(t,Ue)),X&&t.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ve(p),n.scaleY=Ve(g),n.rotation=Ve(_)+a,n.rotationX=Ve(m)+a,n.rotationY=Ve(f)+a,n.skewX=M+a,n.skewY=E+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[Xn]=vc(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?pS:K_?eg:dS,n.uncache=0,n},vc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Eu=function(t,e,n){var r=vn(e);return Ve(parseFloat(e)+parseFloat(qr(t,"x",n+"px",r)))+r},dS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,eg(t,e)},rs="0deg",ia="0px",ss=") ",eg=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,f=n.force3D,M=n.target,E=n.zOrigin,x="",P=f==="auto"&&t&&t!==1||f===!0;if(E&&(h!==rs||u!==rs)){var C=parseFloat(u)*Mo,S=Math.sin(C),A=Math.cos(C),b;C=parseFloat(h)*Mo,b=Math.cos(C),o=Eu(M,o,S*b*-E),a=Eu(M,a,-Math.sin(C)*-E),l=Eu(M,l,A*b*-E+E)}m!==ia&&(x+="perspective("+m+ss),(r||s)&&(x+="translate("+r+"%, "+s+"%) "),(P||o!==ia||a!==ia||l!==ia)&&(x+=l!==ia||P?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ss),c!==rs&&(x+="rotate("+c+ss),u!==rs&&(x+="rotateY("+u+ss),h!==rs&&(x+="rotateX("+h+ss),(d!==rs||p!==rs)&&(x+="skew("+d+", "+p+ss),(g!==1||_!==1)&&(x+="scale("+g+", "+_+ss),M.style[Ue]=x||"translate(0, 0)"},pS=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,f=n.yOffset,M=n.forceCSS,E=parseFloat(o),x=parseFloat(a),P,C,S,A,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Mo,c*=Mo,P=Math.cos(l)*h,C=Math.sin(l)*h,S=Math.sin(l-c)*-d,A=Math.cos(l-c)*d,c&&(u*=Mo,b=Math.tan(c-u),b=Math.sqrt(1+b*b),S*=b,A*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),P*=b,C*=b)),P=Ve(P),C=Ve(C),S=Ve(S),A=Ve(A)):(P=h,A=d,C=S=0),(E&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(E=qr(p,"x",o,"px"),x=qr(p,"y",a,"px")),(g||_||m||f)&&(E=Ve(E+g-(g*P+_*S)+m),x=Ve(x+_-(g*C+_*A)+f)),(r||s)&&(b=p.getBBox(),E=Ve(E+r/100*b.width),x=Ve(x+s/100*b.height)),b="matrix("+P+","+C+","+S+","+A+","+E+","+x+")",p.setAttribute("transform",b),M&&(p.style[Ue]=b)},fS=function(t,e,n,r,s){var o=360,a=un(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ls:1),c=l-r,u=r+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Ef)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Ef)%o-~~(c/o)*o)),t._pt=d=new Wn(t._pt,e,n,r,c,ZM),d.e=u,d.u="deg",t._props.push(n),d},Rf=function(t,e){for(var n in e)t[n]=e[n];return t},mS=function(t,e,n){var r=Rf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,d,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ue]=e,a=za(n,1),Ps(n,Ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ue],o[Ue]=e,a=za(n,1),o[Ue]=c);for(l in mr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=vn(c),g=vn(u),h=p!==g?qr(n,l,c,g):parseFloat(c),d=parseFloat(u),t._pt=new Wn(t._pt,a,l,h,d-h,kh),t._pt.u=g||0,t._props.push(l));Rf(a,r)};Gn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});gc[t>1?"border"+i:i]=function(a,l,c,u,h){var d,p;if(arguments.length<4)return d=o.map(function(g){return ir(a,g,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(u+"").split(" "),p={},o.forEach(function(g,_){return p[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,p,h)}});var ng={name:"css",register:zh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,d,p,g,_,m,f,M,E,x,P,C,S,A;Ad||zh(),this.styles=this.styles||$_(t),A=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(ti[_]&&k_(_,e,n,r,t,s)))){if(p=typeof u,g=gc[_],p==="function"&&(u=u.call(n,r,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Na(u)),g)g(this,t,_,u,n)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Vr.lastIndex=0,Vr.test(c)||(m=vn(c),f=vn(u)),f?m!==f&&(c=qr(t,_,c,f)+f):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),A.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],un(c)&&~c.indexOf("random(")&&(c=Na(c)),vn(c+"")||c==="auto"||(c+=si.units[_]||vn(ir(t,_))||""),(c+"").charAt(1)==="="&&(c=ir(t,_))):c=ir(t,_),d=parseFloat(c),M=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),_ in Bi&&(_==="autoAlpha"&&(d===1&&ir(t,"visibility")==="hidden"&&h&&(d=0),A.push("visibility",0,a.visibility),Ur(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=Bi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in mr,E){if(this.styles.save(_),x||(P=t._gsap,P.renderTransform&&!e.parseTransform||za(t,e.parseTransform),C=e.smoothOrigin!==!1&&P.smooth,x=this._pt=new Wn(this._pt,a,Ue,0,1,P.renderTransform,P,0,-1),x.dep=1),_==="scale")this._pt=new Wn(this._pt,P,"scaleY",P.scaleY,(M?wo(P.scaleY,M+h):h)-P.scaleY||0,kh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){A.push(Xn,0,a[Xn]),u=uS(u),P.svg?Vh(t,u,0,C,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==P.zOrigin&&Ur(this,P,"zOrigin",P.zOrigin,f),Ur(this,a,_,vc(c),vc(u)));continue}else if(_==="svgOrigin"){Vh(t,u,1,C,0,this);continue}else if(_ in Q_){fS(this,P,_,d,M?wo(d,M+u):u);continue}else if(_==="smoothOrigin"){Ur(this,P,"smooth",P.smooth,u);continue}else if(_==="force3D"){P[_]=u;continue}else if(_==="transform"){mS(this,u,t);continue}}else _ in a||(_=Ho(_)||_);if(E||(h||h===0)&&(d||d===0)&&!KM.test(u)&&_ in a)m=(c+"").substr((d+"").length),h||(h=0),f=vn(u)||(_ in si.units?si.units[_]:m),m!==f&&(d=qr(t,_,c,f)),this._pt=new Wn(this._pt,E?P:a,_,d,(M?wo(d,M+h):h)-d,!E&&(f==="px"||_==="zIndex")&&e.autoRound!==!1?QM:kh),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=JM);else if(_ in a)cS.call(this,t,_,c,M?M+u:u);else if(_ in t)this.add(t,_,c||t[_],M?M+u:u,r,s);else if(_!=="parseTransform"){bd(_,u);continue}E||(_ in a?A.push(_,0,a[_]):typeof t[_]=="function"?A.push(_,2,t[_]()):A.push(_,1,c||t[_])),o.push(_)}}S&&W_(this)},render:function(t,e){if(e.tween._time||!Rd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ir,aliases:Bi,getSetter:function(t,e,n){var r=Bi[e];return r&&r.indexOf(",")<0&&(e=r),e in mr&&e!==Xn&&(t._gsap.x||ir(t,"x"))?n&&wf===n?e==="scale"?iS:nS:(wf=n||{})&&(e==="scale"?rS:sS):t.style&&!gd(t.style[e])?tS:~e.indexOf("-")?eS:Cd(t,e)},core:{_removeProperty:Ps,_getMatrix:Ld}};Yn.utils.checkPrefix=Ho;Yn.core.getStyleSaver=$_;(function(i,t,e,n){var r=Gn(i+","+t+","+e,function(s){mr[s]=1});Gn(t,function(s){si.units[s]="deg",Q_[s]=1}),Bi[r[13]]=i+","+t,Gn(n,function(s){var o=s.split(":");Bi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){si.units[i]="px"});Yn.registerPlugin(ng);var xc=Yn.registerPlugin(ng)||Yn;xc.core.Tween;class _S{constructor(){this.gl=new xr,this.instance=new eM({canvas:this.gl.canvas,powerPreference:"high-performance",alpha:!0,precision:"lowp"}),this.instance.setPixelRatio(this.gl.sizes.pixelRatio),this.instance.setSize(this.gl.sizes.width,this.gl.sizes.height)}update(){for(const t in this.gl.world.scenes)this.gl.world.scenes[t].renderPipeline();this.instance.setRenderTarget(null),this.instance.render(this.gl.scene,this.gl.camera)}resize(){this.instance.setPixelRatio(this.gl.sizes.pixelRatio),this.instance.setSize(this.gl.sizes.width,this.gl.sizes.height)}}const Df={type:"change"},Id={type:"start"},ig={type:"end"},Ll=new Hm,Lf=new Rr,gS=Math.cos(70*Fn.DEG2RAD),tn=new G,Nn=2*Math.PI,be={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mu=1e-6;class vS extends xx{constructor(t,e=null){super(t,e),this.state=be.NONE,this.enabled=!0,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vo.ROTATE,MIDDLE:vo.DOLLY,RIGHT:vo.PAN},this.touches={ONE:ho.ROTATE,TWO:ho.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Cs,this._lastTargetPosition=new G,this._quat=new Cs().setFromUnitVectors(t.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vp,this._sphericalDelta=new Vp,this._scale=1,this._panOffset=new G,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new G,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=bS.bind(this),this._onPointerDown=xS.bind(this),this._onPointerUp=yS.bind(this),this._onContextMenu=PS.bind(this),this._onMouseWheel=MS.bind(this),this._onKeyDown=SS.bind(this),this._onTouchStart=TS.bind(this),this._onTouchMove=CS.bind(this),this._onMouseDown=wS.bind(this),this._onMouseMove=ES.bind(this),this._interceptControlDown=AS.bind(this),this._interceptControlUp=RS.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Df),this.update(),this.state=be.NONE}update(t=null){const e=this.object.position;tn.copy(e).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===be.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Nn:n>Math.PI&&(n-=Nn),r<-Math.PI?r+=Nn:r>Math.PI&&(r-=Nn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),e.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=tn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new G(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ll.origin.copy(this.object.position),Ll.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ll.direction))<gS?this.object.lookAt(this.target):(Lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ll.intersectPlane(Lf,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Mu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mu||this._lastTargetPosition.distanceToSquared(this.target)>Mu?(this.dispatchEvent(Df),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Nn/60*this.autoRotateSpeed*t:Nn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){tn.setFromMatrixColumn(e,0),tn.multiplyScalar(-t),this._panOffset.add(tn)}_panUp(t,e){this.screenSpacePanning===!0?tn.setFromMatrixColumn(e,1):(tn.setFromMatrixColumn(e,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(t),this._panOffset.add(tn)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;tn.copy(r).sub(this.target);let s=tn.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Nn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Nn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Nn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function xS(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function bS(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function yS(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ig),this.state=be.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function wS(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case vo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=be.DOLLY;break;case vo.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}break;case vo.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=be.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=be.PAN}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Id)}function ES(i){switch(this.state){case be.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case be.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case be.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function MS(i){this.enabled===!1||this.enableZoom===!1||this.state!==be.NONE||(i.preventDefault(),this.dispatchEvent(Id),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ig))}function SS(i){this.enabled!==!1&&this._handleKeyDown(i)}function TS(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ho.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=be.TOUCH_ROTATE;break;case ho.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=be.TOUCH_PAN;break;default:this.state=be.NONE}break;case 2:switch(this.touches.TWO){case ho.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=be.TOUCH_DOLLY_PAN;break;case ho.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=be.TOUCH_DOLLY_ROTATE;break;default:this.state=be.NONE}break;default:this.state=be.NONE}this.state!==be.NONE&&this.dispatchEvent(Id)}function CS(i){switch(this._trackPointer(i),this.state){case be.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case be.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case be.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case be.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=be.NONE}}function PS(i){this.enabled!==!1&&i.preventDefault()}function AS(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function RS(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function If(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function DS(i,t,e){return t&&If(i.prototype,t),e&&If(i,e),i}/*!
 * Observer 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dn,ec,ii,Or,Nr,So,rg,cs,Ea,sg,ar,Pi,og,ag=function(){return dn||typeof window<"u"&&(dn=window.gsap)&&dn.registerPlugin&&dn},lg=1,go=[],ee=[],Wi=[],Ma=Date.now,Hh=function(t,e){return e},LS=function(){var t=Ea.core,e=t.bridge||{},n=t._scrollers,r=t._proxies;n.push.apply(n,ee),r.push.apply(r,Wi),ee=n,Wi=r,Hh=function(o,a){return e[o](a)}},Hr=function(t,e){return~Wi.indexOf(t)&&Wi[Wi.indexOf(t)+1][e]},Sa=function(t){return!!~sg.indexOf(t)},Sn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:r!==!1,capture:!!s})},En=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Il="scrollLeft",Ul="scrollTop",Gh=function(){return ar&&ar.isPressed||ee.cache++},bc=function(t,e){var n=function r(s){if(s||s===0){lg&&(ii.history.scrollRestoration="manual");var o=ar&&ar.isPressed;s=r.v=Math.round(s)||(ar&&ar.iOS?1:0),t(s),r.cacheID=ee.cache,o&&Hh("ss",s)}else(e||ee.cache!==r.cacheID||Hh("ref"))&&(r.cacheID=ee.cache,r.v=t());return r.v+r.offset};return n.offset=0,t&&n},Dn={s:Il,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:bc(function(i){return arguments.length?ii.scrollTo(i,nn.sc()):ii.pageXOffset||Or[Il]||Nr[Il]||So[Il]||0})},nn={s:Ul,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Dn,sc:bc(function(i){return arguments.length?ii.scrollTo(Dn.sc(),i):ii.pageYOffset||Or[Ul]||Nr[Ul]||So[Ul]||0})},kn=function(t,e){return(e&&e._ctx&&e._ctx.selector||dn.utils.toArray)(t)[0]||(typeof t=="string"&&dn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},jr=function(t,e){var n=e.s,r=e.sc;Sa(t)&&(t=Or.scrollingElement||Nr);var s=ee.indexOf(t),o=r===nn.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+o]||Sn(t,"scroll",Gh);var a=ee[s+o],l=a||(ee[s+o]=bc(Hr(t,n),!0)||(Sa(t)?r:bc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=dn.getProperty(t,"scrollBehavior")==="smooth"),l},Wh=function(t,e,n){var r=t,s=t,o=Ma(),a=o,l=e||50,c=Math.max(500,l*3),u=function(g,_){var m=Ma();_||m-o>l?(s=r,r=g,a=o,o=m):n?r+=g:r=s+(g-s)/(m-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},d=function(g){var _=a,m=s,f=Ma();return(g||g===0)&&g!==r&&u(g),o===a||f-a>c?0:(r+(n?m:-m))/((n?f:o)-_)*1e3};return{update:u,reset:h,getVelocity:d}},ra=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Uf=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},cg=function(){Ea=dn.core.globals().ScrollTrigger,Ea&&Ea.core&&LS()},ug=function(t){return dn=t||ag(),!ec&&dn&&typeof document<"u"&&document.body&&(ii=window,Or=document,Nr=Or.documentElement,So=Or.body,sg=[ii,Or,Nr,So],dn.utils.clamp,og=dn.core.context||function(){},cs="onpointerenter"in So?"pointer":"mouse",rg=Ge.isTouch=ii.matchMedia&&ii.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ii||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Pi=Ge.eventTypes=("ontouchstart"in Nr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Nr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return lg=0},500),cg(),ec=1),ec};Dn.op=nn;ee.cache=0;var Ge=function(){function i(e){this.init(e)}var t=i.prototype;return t.init=function(n){ec||ug(dn)||console.warn("Please gsap.registerPlugin(Observer)"),Ea||cg();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,d=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,f=n.onDragEnd,M=n.onDrag,E=n.onPress,x=n.onRelease,P=n.onRight,C=n.onLeft,S=n.onUp,A=n.onDown,b=n.onChangeX,v=n.onChangeY,R=n.onChange,O=n.onToggleX,k=n.onToggleY,Y=n.onHover,j=n.onHoverEnd,W=n.onMove,X=n.ignoreCheck,V=n.isNormalizer,et=n.onGestureStart,D=n.onGestureEnd,ct=n.onWheel,Ut=n.onEnable,jt=n.onDisable,$=n.onClick,nt=n.scrollSpeed,mt=n.capture,it=n.allowClicks,Mt=n.lockAxis,kt=n.onLockAxis;this.target=a=kn(a)||Nr,this.vars=n,p&&(p=dn.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,nt=nt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ii.getComputedStyle(So).lineHeight)||22);var Rt,re,Jt,bt,L,ye,Bt,F=this,wt=0,se=0,St=n.passive||!u&&n.passive!==!1,T=jr(a,Dn),y=jr(a,nn),B=T(),Q=y(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Pi[0]==="pointerdown",K=Sa(a),ut=a.ownerDocument||Or,ot=[0,0,0],dt=[0,0,0],Gt=0,rt=function(){return Gt=Ma()},st=function(Tt,Xt){return(F.event=Tt)&&p&&~p.indexOf(Tt.target)||Xt&&J&&Tt.pointerType!=="touch"||X&&X(Tt,Xt)},It=function(){F._vx.reset(),F._vy.reset(),re.pause(),h&&h(F)},Dt=function(){var Tt=F.deltaX=Uf(ot),Xt=F.deltaY=Uf(dt),pt=Math.abs(Tt)>=r,Ht=Math.abs(Xt)>=r;R&&(pt||Ht)&&R(F,Tt,Xt,ot,dt),pt&&(P&&F.deltaX>0&&P(F),C&&F.deltaX<0&&C(F),b&&b(F),O&&F.deltaX<0!=wt<0&&O(F),wt=F.deltaX,ot[0]=ot[1]=ot[2]=0),Ht&&(A&&F.deltaY>0&&A(F),S&&F.deltaY<0&&S(F),v&&v(F),k&&F.deltaY<0!=se<0&&k(F),se=F.deltaY,dt[0]=dt[1]=dt[2]=0),(bt||Jt)&&(W&&W(F),Jt&&(m&&Jt===1&&m(F),M&&M(F),Jt=0),bt=!1),ye&&!(ye=!1)&&kt&&kt(F),L&&(ct(F),L=!1),Rt=0},vt=function(Tt,Xt,pt){ot[pt]+=Tt,dt[pt]+=Xt,F._vx.update(Tt),F._vy.update(Xt),c?Rt||(Rt=requestAnimationFrame(Dt)):Dt()},Wt=function(Tt,Xt){Mt&&!Bt&&(F.axis=Bt=Math.abs(Tt)>Math.abs(Xt)?"x":"y",ye=!0),Bt!=="y"&&(ot[2]+=Tt,F._vx.update(Tt,!0)),Bt!=="x"&&(dt[2]+=Xt,F._vy.update(Xt,!0)),c?Rt||(Rt=requestAnimationFrame(Dt)):Dt()},Ft=function(Tt){if(!st(Tt,1)){Tt=ra(Tt,u);var Xt=Tt.clientX,pt=Tt.clientY,Ht=Xt-F.x,Ct=pt-F.y,Vt=F.isDragging;F.x=Xt,F.y=pt,(Vt||(Ht||Ct)&&(Math.abs(F.startX-Xt)>=s||Math.abs(F.startY-pt)>=s))&&(Jt=Vt?2:1,Vt||(F.isDragging=!0),Wt(Ht,Ct))}},ae=F.onPress=function(gt){st(gt,1)||gt&&gt.button||(F.axis=Bt=null,re.pause(),F.isPressed=!0,gt=ra(gt),wt=se=0,F.startX=F.x=gt.clientX,F.startY=F.y=gt.clientY,F._vx.reset(),F._vy.reset(),Sn(V?a:ut,Pi[1],Ft,St,!0),F.deltaX=F.deltaY=0,E&&E(F))},I=F.onRelease=function(gt){if(!st(gt,1)){En(V?a:ut,Pi[1],Ft,!0);var Tt=!isNaN(F.y-F.startY),Xt=F.isDragging,pt=Xt&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Ht=ra(gt);!pt&&Tt&&(F._vx.reset(),F._vy.reset(),u&&it&&dn.delayedCall(.08,function(){if(Ma()-Gt>300&&!gt.defaultPrevented){if(gt.target.click)gt.target.click();else if(ut.createEvent){var Ct=ut.createEvent("MouseEvents");Ct.initMouseEvent("click",!0,!0,ii,1,Ht.screenX,Ht.screenY,Ht.clientX,Ht.clientY,!1,!1,!1,!1,0,null),gt.target.dispatchEvent(Ct)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&Xt&&!V&&re.restart(!0),Jt&&Dt(),f&&Xt&&f(F),x&&x(F,pt)}},lt=function(Tt){return Tt.touches&&Tt.touches.length>1&&(F.isGesturing=!0)&&et(Tt,F.isDragging)},q=function(){return(F.isGesturing=!1)||D(F)},Z=function(Tt){if(!st(Tt)){var Xt=T(),pt=y();vt((Xt-B)*nt,(pt-Q)*nt,1),B=Xt,Q=pt,h&&re.restart(!0)}},at=function(Tt){if(!st(Tt)){Tt=ra(Tt,u),ct&&(L=!0);var Xt=(Tt.deltaMode===1?l:Tt.deltaMode===2?ii.innerHeight:1)*g;vt(Tt.deltaX*Xt,Tt.deltaY*Xt,0),h&&!V&&re.restart(!0)}},ht=function(Tt){if(!st(Tt)){var Xt=Tt.clientX,pt=Tt.clientY,Ht=Xt-F.x,Ct=pt-F.y;F.x=Xt,F.y=pt,bt=!0,h&&re.restart(!0),(Ht||Ct)&&Wt(Ht,Ct)}},zt=function(Tt){F.event=Tt,Y(F)},ce=function(Tt){F.event=Tt,j(F)},Ne=function(Tt){return st(Tt)||ra(Tt,u)&&$(F)};re=F._dc=dn.delayedCall(d||.25,It).pause(),F.deltaX=F.deltaY=0,F._vx=Wh(0,50,!0),F._vy=Wh(0,50,!0),F.scrollX=T,F.scrollY=y,F.isDragging=F.isGesturing=F.isPressed=!1,og(this),F.enable=function(gt){return F.isEnabled||(Sn(K?ut:a,"scroll",Gh),o.indexOf("scroll")>=0&&Sn(K?ut:a,"scroll",Z,St,mt),o.indexOf("wheel")>=0&&Sn(a,"wheel",at,St,mt),(o.indexOf("touch")>=0&&rg||o.indexOf("pointer")>=0)&&(Sn(a,Pi[0],ae,St,mt),Sn(ut,Pi[2],I),Sn(ut,Pi[3],I),it&&Sn(a,"click",rt,!0,!0),$&&Sn(a,"click",Ne),et&&Sn(ut,"gesturestart",lt),D&&Sn(ut,"gestureend",q),Y&&Sn(a,cs+"enter",zt),j&&Sn(a,cs+"leave",ce),W&&Sn(a,cs+"move",ht)),F.isEnabled=!0,F.isDragging=F.isGesturing=F.isPressed=bt=Jt=!1,F._vx.reset(),F._vy.reset(),B=T(),Q=y(),gt&&gt.type&&ae(gt),Ut&&Ut(F)),F},F.disable=function(){F.isEnabled&&(go.filter(function(gt){return gt!==F&&Sa(gt.target)}).length||En(K?ut:a,"scroll",Gh),F.isPressed&&(F._vx.reset(),F._vy.reset(),En(V?a:ut,Pi[1],Ft,!0)),En(K?ut:a,"scroll",Z,mt),En(a,"wheel",at,mt),En(a,Pi[0],ae,mt),En(ut,Pi[2],I),En(ut,Pi[3],I),En(a,"click",rt,!0),En(a,"click",Ne),En(ut,"gesturestart",lt),En(ut,"gestureend",q),En(a,cs+"enter",zt),En(a,cs+"leave",ce),En(a,cs+"move",ht),F.isEnabled=F.isPressed=F.isDragging=!1,jt&&jt(F))},F.kill=F.revert=function(){F.disable();var gt=go.indexOf(F);gt>=0&&go.splice(gt,1),ar===F&&(ar=0)},go.push(F),V&&Sa(a)&&(ar=F),F.enable(_)},DS(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Ge.version="3.12.7";Ge.create=function(i){return new Ge(i)};Ge.register=ug;Ge.getAll=function(){return go.slice()};Ge.getById=function(i){return go.filter(function(t){return t.vars.id===i})[0]};ag()&&dn.registerPlugin(Ge);/*!
 * ScrollTrigger 3.12.7
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Et,lo,te,Ce,ei,_e,Ud,yc,Va,Ta,pa,Ol,_n,Nc,Xh,Pn,Of,Nf,co,hg,Su,dg,Cn,Yh,pg,fg,Ar,qh,Od,To,Nd,wc,jh,Tu,Nl=1,gn=Date.now,Cu=gn(),Ei=0,fa=0,Ff=function(t,e,n){var r=Qn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=r,r?t.substr(6,t.length-7):t},kf=function(t,e){return e&&(!Qn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},IS=function i(){return fa&&requestAnimationFrame(i)},Bf=function(){return Nc=1},zf=function(){return Nc=0},Ui=function(t){return t},ma=function(t){return Math.round(t*1e5)/1e5||0},mg=function(){return typeof window<"u"},_g=function(){return Et||mg()&&(Et=window.gsap)&&Et.registerPlugin&&Et},As=function(t){return!!~Ud.indexOf(t)},gg=function(t){return(t==="Height"?Nd:te["inner"+t])||ei["client"+t]||_e["client"+t]},vg=function(t){return Hr(t,"getBoundingClientRect")||(As(t)?function(){return oc.width=te.innerWidth,oc.height=Nd,oc}:function(){return rr(t)})},US=function(t,e,n){var r=n.d,s=n.d2,o=n.a;return(o=Hr(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(e?gg(s):t["client"+s])||0}},OS=function(t,e){return!e||~Wi.indexOf(t)?vg(t):function(){return oc}},zi=function(t,e){var n=e.s,r=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+r)&&(o=Hr(t,n))?o()-vg(t)()[s]:As(t)?(ei[n]||_e[n])-gg(r):t[n]-t["offset"+r])},Fl=function(t,e){for(var n=0;n<co.length;n+=3)(!e||~e.indexOf(co[n+1]))&&t(co[n],co[n+1],co[n+2])},Qn=function(t){return typeof t=="string"},xn=function(t){return typeof t=="function"},_a=function(t){return typeof t=="number"},us=function(t){return typeof t=="object"},sa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Pu=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},no=Math.abs,xg="left",bg="top",Fd="right",kd="bottom",ws="width",Es="height",Ca="Right",Pa="Left",Aa="Top",Ra="Bottom",Ye="padding",vi="margin",Go="Width",Bd="Height",en="px",xi=function(t){return te.getComputedStyle(t)},NS=function(t){var e=xi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Vf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},rr=function(t,e){var n=e&&xi(t)[Xh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Et.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return n&&n.progress(0).kill(),r},Ec=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},yg=function(t){var e=[],n=t.labels,r=t.duration(),s;for(s in n)e.push(n[s]/r);return e},FS=function(t){return function(e){return Et.utils.snap(yg(t),e)}},zd=function(t){var e=Et.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return e(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=e(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:e(s<0?r-t:r+t)}},kS=function(t){return function(e,n){return zd(yg(t))(e,n.direction)}},kl=function(t,e,n,r){return n.split(",").forEach(function(s){return t(e,s,r)})},cn=function(t,e,n,r,s){return t.addEventListener(e,n,{passive:!r,capture:!!s})},ln=function(t,e,n,r){return t.removeEventListener(e,n,!!r)},Bl=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Hf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zl={toggleActions:"play",anticipatePin:0},Mc={top:0,left:0,center:.5,bottom:1,right:1},nc=function(t,e){if(Qn(t)){var n=t.indexOf("="),r=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(r*=e/100),t=t.substr(0,n-1)),t=r+(t in Mc?Mc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Vl=function(t,e,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,d=s.indent,p=s.fontWeight,g=Ce.createElement("div"),_=As(n)||Hr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,f=_?_e:n,M=t.indexOf("start")!==-1,E=M?c:u,x="border-color:"+E+";font-size:"+h+";color:"+E+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(x+=(r===nn?Fd:kd)+":"+(o+parseFloat(d))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=M,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=x,g.innerText=e||e===0?t+"-"+e:t,f.children[0]?f.insertBefore(g,f.children[0]):f.appendChild(g),g._offset=g["offset"+r.op.d2],ic(g,0,r,M),g},ic=function(t,e,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];t._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+Go]=1,s["border"+a+Go]=0,s[n.p]=e+"px",Et.set(t,s)},Kt=[],$h={},Ha,Gf=function(){return gn()-Ei>34&&(Ha||(Ha=requestAnimationFrame(ur)))},io=function(){(!Cn||!Cn.isPressed||Cn.startX>_e.clientWidth)&&(ee.cache++,Cn?Ha||(Ha=requestAnimationFrame(ur)):ur(),Ei||Ds("scrollStart"),Ei=gn())},Au=function(){fg=te.innerWidth,pg=te.innerHeight},ga=function(t){ee.cache++,(t===!0||!_n&&!dg&&!Ce.fullscreenElement&&!Ce.webkitFullscreenElement&&(!Yh||fg!==te.innerWidth||Math.abs(te.innerHeight-pg)>te.innerHeight*.25))&&yc.restart(!0)},Rs={},BS=[],wg=function i(){return ln(ie,"scrollEnd",i)||_s(!0)},Ds=function(t){return Rs[t]&&Rs[t].map(function(e){return e()})||BS},Jn=[],Eg=function(t){for(var e=0;e<Jn.length;e+=5)(!t||Jn[e+4]&&Jn[e+4].query===t)&&(Jn[e].style.cssText=Jn[e+1],Jn[e].getBBox&&Jn[e].setAttribute("transform",Jn[e+2]||""),Jn[e+3].uncache=1)},Vd=function(t,e){var n;for(Pn=0;Pn<Kt.length;Pn++)n=Kt[Pn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));wc=!0,e&&Eg(e),e||Ds("revert")},Mg=function(t,e){ee.cache++,(e||!An)&&ee.forEach(function(n){return xn(n)&&n.cacheID++&&(n.rec=0)}),Qn(t)&&(te.history.scrollRestoration=Od=t)},An,Ms=0,Wf,zS=function(){if(Wf!==Ms){var t=Wf=Ms;requestAnimationFrame(function(){return t===Ms&&_s(!0)})}},Sg=function(){_e.appendChild(To),Nd=!Cn&&To.offsetHeight||te.innerHeight,_e.removeChild(To)},Xf=function(t){return Va(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},_s=function(t,e){if(ei=Ce.documentElement,_e=Ce.body,Ud=[te,Ce,ei,_e],Ei&&!t&&!wc){cn(ie,"scrollEnd",wg);return}Sg(),An=ie.isRefreshing=!0,ee.forEach(function(r){return xn(r)&&++r.cacheID&&(r.rec=r())});var n=Ds("refreshInit");hg&&ie.sort(),e||Vd(),ee.forEach(function(r){xn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Kt.slice(0).forEach(function(r){return r.refresh()}),wc=!1,Kt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),jh=1,Xf(!0),Kt.forEach(function(r){var s=zi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Xf(!1),jh=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),ee.forEach(function(r){xn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Mg(Od,1),yc.pause(),Ms++,An=2,ur(2),Kt.forEach(function(r){return xn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),An=ie.isRefreshing=!1,Ds("refresh")},Kh=0,rc=1,Da,ur=function(t){if(t===2||!An&&!wc){ie.isUpdating=!0,Da&&Da.update(0);var e=Kt.length,n=gn(),r=n-Cu>=50,s=e&&Kt[0].scroll();if(rc=Kh>s?-1:1,An||(Kh=s),r&&(Ei&&!Nc&&n-Ei>200&&(Ei=0,Ds("scrollEnd")),pa=Cu,Cu=n),rc<0){for(Pn=e;Pn-- >0;)Kt[Pn]&&Kt[Pn].update(0,r);rc=1}else for(Pn=0;Pn<e;Pn++)Kt[Pn]&&Kt[Pn].update(0,r);ie.isUpdating=!1}Ha=0},Zh=[xg,bg,kd,Fd,vi+Ra,vi+Ca,vi+Aa,vi+Pa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],sc=Zh.concat([ws,Es,"boxSizing","max"+Go,"max"+Bd,"position",vi,Ye,Ye+Aa,Ye+Ca,Ye+Ra,Ye+Pa]),VS=function(t,e,n){Co(n);var r=t._gsap;if(r.spacerIsNative)Co(r.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Ru=function(t,e,n,r){if(!t._gsap.swappedIn){for(var s=Zh.length,o=e.style,a=t.style,l;s--;)l=Zh[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[kd]=a[Fd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ws]=Ec(t,Dn)+en,o[Es]=Ec(t,nn)+en,o[Ye]=a[vi]=a[bg]=a[xg]="0",Co(r),a[ws]=a["max"+Go]=n[ws],a[Es]=a["max"+Bd]=n[Es],a[Ye]=n[Ye],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},HS=/([A-Z])/g,Co=function(t){if(t){var e=t.t.style,n=t.length,r=0,s,o;for((t.t._gsap||Et.core.getCache(t.t)).uncache=1;r<n;r+=2)o=t[r+1],s=t[r],o?e[s]=o:e[s]&&e.removeProperty(s.replace(HS,"-$1").toLowerCase())}},Hl=function(t){for(var e=sc.length,n=t.style,r=[],s=0;s<e;s++)r.push(sc[s],n[sc[s]]);return r.t=t,r},GS=function(t,e,n){for(var r=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],r.push(a,a in e?e[a]:t[o+1]);return r.t=t.t,r},oc={left:0,top:0},Yf=function(t,e,n,r,s,o,a,l,c,u,h,d,p,g){xn(t)&&(t=t(l)),Qn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?nc("0"+t.substr(3),n):0));var _=p?p.time():0,m,f,M;if(p&&p.seek(0),isNaN(t)||(t=+t),_a(t))p&&(t=Et.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,t)),a&&ic(a,n,r,!0);else{xn(e)&&(e=e(l));var E=(t||"0").split(" "),x,P,C,S;M=kn(e,l)||_e,x=rr(M)||{},(!x||!x.left&&!x.top)&&xi(M).display==="none"&&(S=M.style.display,M.style.display="block",x=rr(M),S?M.style.display=S:M.style.removeProperty("display")),P=nc(E[0],x[r.d]),C=nc(E[1]||"0",n),t=x[r.p]-c[r.p]-u+P+s-C,a&&ic(a,C,r,n-C<20||a._isStart&&C>20),n-=n-C}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var A=t+n,b=o._isStart;m="scroll"+r.d2,ic(o,A,r,b&&A>20||!b&&(h?Math.max(_e[m],ei[m]):o.parentNode[m])<=A+1),h&&(c=rr(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+en))}return p&&M&&(m=rr(M),p.seek(d),f=rr(M),p._caScrollDist=m[r.p]-f[r.p],t=t/p._caScrollDist*d),p&&p.seek(_),p?t:Math.round(t)},WS=/(webkit|moz|length|cssText|inset)/i,qf=function(t,e,n,r){if(t.parentNode!==e){var s=t.style,o,a;if(e===_e){t._stOrig=s.cssText,a=xi(t);for(o in a)!+o&&!WS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=t._stOrig;Et.core.getCache(t).uncache=1,e.appendChild(t)}},Tg=function(t,e,n){var r=e,s=r;return function(o){var a=Math.round(t());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=Math.round(o),r}},Gl=function(t,e,n){var r={};r[e.p]="+="+n,Et.set(t,r)},jf=function(t,e){var n=jr(t,e),r="_scroll"+e.p2,s=function o(a,l,c,u,h){var d=o.tween,p=l.onComplete,g={};c=c||n();var _=Tg(n,c,function(){d.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*d.ratio+h*d.ratio*d.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&ur()},l.onComplete=function(){o.tween=0,p&&p.call(d)},d=o.tween=Et.to(t,l),d};return t[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},cn(t,"wheel",n.wheelHandler),ie.isTouch&&cn(t,"touchmove",n.wheelHandler),s},ie=function(){function i(e,n){lo||i.register(Et)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),qh(this),this.init(e,n)}var t=i.prototype;return t.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!fa){this.update=this.refresh=this.kill=Ui;return}n=Vf(Qn(n)||_a(n)||n.nodeType?{trigger:n}:n,zl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,d=s.trigger,p=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,f=s.onScrubComplete,M=s.onSnapComplete,E=s.once,x=s.snap,P=s.pinReparent,C=s.pinSpacer,S=s.containerAnimation,A=s.fastScrollEnd,b=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Dn:nn,R=!h&&h!==0,O=kn(n.scroller||te),k=Et.core.getCache(O),Y=As(O),j=("pinType"in n?n.pinType:Hr(O,"pinType")||Y&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=R&&n.toggleActions.split(" "),V="markers"in n?n.markers:zl.markers,et=Y?0:parseFloat(xi(O)["border"+v.p2+Go])||0,D=this,ct=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ut=US(O,Y,v),jt=OS(O,Y),$=0,nt=0,mt=0,it=jr(O,v),Mt,kt,Rt,re,Jt,bt,L,ye,Bt,F,wt,se,St,T,y,B,Q,J,K,ut,ot,dt,Gt,rt,st,It,Dt,vt,Wt,Ft,ae,I,lt,q,Z,at,ht,zt,ce;if(D._startClamp=D._endClamp=!1,D._dir=v,m*=45,D.scroller=O,D.scroll=S?S.time.bind(S):it,re=it(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(hg=1,n.refreshPriority===-9999&&(Da=D)),k.tweenScroll=k.tweenScroll||{top:jf(O,nn),left:jf(O,Dn)},D.tweenTo=Mt=k.tweenScroll[v.p],D.scrubDuration=function(pt){lt=_a(pt)&&pt,lt?I?I.duration(pt):I=Et.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:lt,paused:!0,onComplete:function(){return f&&f(D)}}):(I&&I.progress(1).kill(),I=0)},r&&(r.vars.lazy=!1,r._initted&&!D.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(h),Ft=0,l||(l=r.vars.id)),x&&((!us(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in _e.style&&Et.set(Y?[_e,ei]:O,{scrollBehavior:"auto"}),ee.forEach(function(pt){return xn(pt)&&pt.target===(Y?Ce.scrollingElement||ei:O)&&(pt.smooth=!1)}),Rt=xn(x.snapTo)?x.snapTo:x.snapTo==="labels"?FS(r):x.snapTo==="labelsDirectional"?kS(r):x.directional!==!1?function(pt,Ht){return zd(x.snapTo)(pt,gn()-nt<500?0:Ht.direction)}:Et.utils.snap(x.snapTo),q=x.duration||{min:.1,max:2},q=us(q)?Ta(q.min,q.max):Ta(q,q),Z=Et.delayedCall(x.delay||lt/2||.1,function(){var pt=it(),Ht=gn()-nt<500,Ct=Mt.tween;if((Ht||Math.abs(D.getVelocity())<10)&&!Ct&&!Nc&&$!==pt){var Vt=(pt-bt)/T,ze=r&&!R?r.totalProgress():Vt,Qt=Ht?0:(ze-ae)/(gn()-pa)*1e3||0,Te=Et.utils.clamp(-Vt,1-Vt,no(Qt/2)*Qt/.185),Ze=Vt+(x.inertia===!1?0:Te),we,Ee,pe=x,jn=pe.onStart,Ae=pe.onInterrupt,yn=pe.onComplete;if(we=Rt(Ze,D),_a(we)||(we=Ze),Ee=Math.max(0,Math.round(bt+we*T)),pt<=L&&pt>=bt&&Ee!==pt){if(Ct&&!Ct._initted&&Ct.data<=no(Ee-pt))return;x.inertia===!1&&(Te=we-Vt),Mt(Ee,{duration:q(no(Math.max(no(Ze-ze),no(we-ze))*.185/Qt/.05||0)),ease:x.ease||"power3",data:no(Ee-pt),onInterrupt:function(){return Z.restart(!0)&&Ae&&Ae(D)},onComplete:function(){D.update(),$=it(),r&&!R&&(I?I.resetTo("totalProgress",we,r._tTime/r._tDur):r.progress(we)),Ft=ae=r&&!R?r.totalProgress():D.progress,M&&M(D),yn&&yn(D)}},pt,Te*T,Ee-pt-Te*T),jn&&jn(D,Mt.tween)}}else D.isActive&&$!==pt&&Z.restart(!0)}).pause()),l&&($h[l]=D),d=D.trigger=kn(d||p!==!0&&p),ce=d&&d._gsap&&d._gsap.stRevert,ce&&(ce=ce(D)),p=p===!0?d:kn(p),Qn(a)&&(a={targets:d,className:a}),p&&(g===!1||g===vi||(g=!g&&p.parentNode&&p.parentNode.style&&xi(p.parentNode).display==="flex"?!1:Ye),D.pin=p,kt=Et.core.getCache(p),kt.spacer?y=kt.pinState:(C&&(C=kn(C),C&&!C.nodeType&&(C=C.current||C.nativeElement),kt.spacerIsNative=!!C,C&&(kt.spacerState=Hl(C))),kt.spacer=J=C||Ce.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),kt.pinState=y=Hl(p)),n.force3D!==!1&&Et.set(p,{force3D:!0}),D.spacer=J=kt.spacer,Wt=xi(p),rt=Wt[g+v.os2],ut=Et.getProperty(p),ot=Et.quickSetter(p,v.a,en),Ru(p,J,Wt),Q=Hl(p)),V){se=us(V)?Vf(V,Hf):Hf,F=Vl("scroller-start",l,O,v,se,0),wt=Vl("scroller-end",l,O,v,se,0,F),K=F["offset"+v.op.d2];var Ne=kn(Hr(O,"content")||O);ye=this.markerStart=Vl("start",l,Ne,v,se,K,0,S),Bt=this.markerEnd=Vl("end",l,Ne,v,se,K,0,S),S&&(zt=Et.quickSetter([ye,Bt],v.a,en)),!j&&!(Wi.length&&Hr(O,"fixedMarkers")===!0)&&(NS(Y?_e:O),Et.set([F,wt],{force3D:!0}),It=Et.quickSetter(F,v.a,en),vt=Et.quickSetter(wt,v.a,en))}if(S){var gt=S.vars.onUpdate,Tt=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){D.update(0,0,1),gt&&gt.apply(S,Tt||[])})}if(D.previous=function(){return Kt[Kt.indexOf(D)-1]},D.next=function(){return Kt[Kt.indexOf(D)+1]},D.revert=function(pt,Ht){if(!Ht)return D.kill(!0);var Ct=pt!==!1||!D.enabled,Vt=_n;Ct!==D.isReverted&&(Ct&&(at=Math.max(it(),D.scroll.rec||0),mt=D.progress,ht=r&&r.progress()),ye&&[ye,Bt,F,wt].forEach(function(ze){return ze.style.display=Ct?"none":"block"}),Ct&&(_n=D,D.update(Ct)),p&&(!P||!D.isActive)&&(Ct?VS(p,J,y):Ru(p,J,xi(p),st)),Ct||D.update(Ct),_n=Vt,D.isReverted=Ct)},D.refresh=function(pt,Ht,Ct,Vt){if(!((_n||!D.enabled)&&!Ht)){if(p&&pt&&Ei){cn(i,"scrollEnd",wg);return}!An&&ct&&ct(D),_n=D,Mt.tween&&!Ct&&(Mt.tween.kill(),Mt.tween=0),I&&I.pause(),_&&r&&r.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var ze=Ut(),Qt=jt(),Te=S?S.duration():zi(O,v),Ze=T<=.01,we=0,Ee=Vt||0,pe=us(Ct)?Ct.end:n.end,jn=n.endTrigger||d,Ae=us(Ct)?Ct.start:n.start||(n.start===0||!d?0:p?"0 0":"0 100%"),yn=D.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,D),ui=d&&Math.max(0,Kt.indexOf(D))||0,Je=ui,Qe,w,N,H,z,U,tt,ft,yt,xt,At,Nt,Pt;for(V&&us(Ct)&&(Nt=Et.getProperty(F,v.p),Pt=Et.getProperty(wt,v.p));Je-- >0;)U=Kt[Je],U.end||U.refresh(0,1)||(_n=D),tt=U.pin,tt&&(tt===d||tt===p||tt===yn)&&!U.isReverted&&(xt||(xt=[]),xt.unshift(U),U.revert(!0,!0)),U!==Kt[Je]&&(ui--,Je--);for(xn(Ae)&&(Ae=Ae(D)),Ae=Ff(Ae,"start",D),bt=Yf(Ae,d,ze,v,it(),ye,F,D,Qt,et,j,Te,S,D._startClamp&&"_startClamp")||(p?-.001:0),xn(pe)&&(pe=pe(D)),Qn(pe)&&!pe.indexOf("+=")&&(~pe.indexOf(" ")?pe=(Qn(Ae)?Ae.split(" ")[0]:"")+pe:(we=nc(pe.substr(2),ze),pe=Qn(Ae)?Ae:(S?Et.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,bt):bt)+we,jn=d)),pe=Ff(pe,"end",D),L=Math.max(bt,Yf(pe||(jn?"100% 0":Te),jn,ze,v,it()+we,Bt,wt,D,Qt,et,j,Te,S,D._endClamp&&"_endClamp"))||-.001,we=0,Je=ui;Je--;)U=Kt[Je],tt=U.pin,tt&&U.start-U._pinPush<=bt&&!S&&U.end>0&&(Qe=U.end-(D._startClamp?Math.max(0,U.start):U.start),(tt===d&&U.start-U._pinPush<bt||tt===yn)&&isNaN(Ae)&&(we+=Qe*(1-U.progress)),tt===p&&(Ee+=Qe));if(bt+=we,L+=we,D._startClamp&&(D._startClamp+=we),D._endClamp&&!An&&(D._endClamp=L||-.001,L=Math.min(L,zi(O,v))),T=L-bt||(bt-=.01)&&.001,Ze&&(mt=Et.utils.clamp(0,1,Et.utils.normalize(bt,L,at))),D._pinPush=Ee,ye&&we&&(Qe={},Qe[v.a]="+="+we,yn&&(Qe[v.p]="-="+it()),Et.set([ye,Bt],Qe)),p&&!(jh&&D.end>=zi(O,v)))Qe=xi(p),H=v===nn,N=it(),dt=parseFloat(ut(v.a))+Ee,!Te&&L>1&&(At=(Y?Ce.scrollingElement||ei:O).style,At={style:At,value:At["overflow"+v.a.toUpperCase()]},Y&&xi(_e)["overflow"+v.a.toUpperCase()]!=="scroll"&&(At.style["overflow"+v.a.toUpperCase()]="scroll")),Ru(p,J,Qe),Q=Hl(p),w=rr(p,!0),ft=j&&jr(O,H?Dn:nn)(),g?(st=[g+v.os2,T+Ee+en],st.t=J,Je=g===Ye?Ec(p,v)+T+Ee:0,Je&&(st.push(v.d,Je+en),J.style.flexBasis!=="auto"&&(J.style.flexBasis=Je+en)),Co(st),yn&&Kt.forEach(function($t){$t.pin===yn&&$t.vars.pinSpacing!==!1&&($t._subPinOffset=!0)}),j&&it(at)):(Je=Ec(p,v),Je&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=Je+en)),j&&(z={top:w.top+(H?N-bt:ft)+en,left:w.left+(H?ft:N-bt)+en,boxSizing:"border-box",position:"fixed"},z[ws]=z["max"+Go]=Math.ceil(w.width)+en,z[Es]=z["max"+Bd]=Math.ceil(w.height)+en,z[vi]=z[vi+Aa]=z[vi+Ca]=z[vi+Ra]=z[vi+Pa]="0",z[Ye]=Qe[Ye],z[Ye+Aa]=Qe[Ye+Aa],z[Ye+Ca]=Qe[Ye+Ca],z[Ye+Ra]=Qe[Ye+Ra],z[Ye+Pa]=Qe[Ye+Pa],B=GS(y,z,P),An&&it(0)),r?(yt=r._initted,Su(1),r.render(r.duration(),!0,!0),Gt=ut(v.a)-dt+T+Ee,Dt=Math.abs(T-Gt)>1,j&&Dt&&B.splice(B.length-2,2),r.render(0,!0,!0),yt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Su(0)):Gt=T,At&&(At.value?At.style["overflow"+v.a.toUpperCase()]=At.value:At.style.removeProperty("overflow-"+v.a));else if(d&&it()&&!S)for(w=d.parentNode;w&&w!==_e;)w._pinOffset&&(bt-=w._pinOffset,L-=w._pinOffset),w=w.parentNode;xt&&xt.forEach(function($t){return $t.revert(!1,!0)}),D.start=bt,D.end=L,re=Jt=An?at:it(),!S&&!An&&(re<at&&it(at),D.scroll.rec=0),D.revert(!1,!0),nt=gn(),Z&&($=-1,Z.restart(!0)),_n=0,r&&R&&(r._initted||ht)&&r.progress()!==ht&&r.progress(ht||0,!0).render(r.time(),!0,!0),(Ze||mt!==D.progress||S||_||r&&!r._initted)&&(r&&!R&&r.totalProgress(S&&bt<-.001&&!mt?Et.utils.normalize(bt,L,0):mt,!0),D.progress=Ze||(re-bt)/T===mt?0:mt),p&&g&&(J._pinOffset=Math.round(D.progress*Gt)),I&&I.invalidate(),isNaN(Nt)||(Nt-=Et.getProperty(F,v.p),Pt-=Et.getProperty(wt,v.p),Gl(F,v,Nt),Gl(ye,v,Nt-(Vt||0)),Gl(wt,v,Pt),Gl(Bt,v,Pt-(Vt||0))),Ze&&!An&&D.update(),u&&!An&&!St&&(St=!0,u(D),St=!1)}},D.getVelocity=function(){return(it()-Jt)/(gn()-pa)*1e3||0},D.endAnimation=function(){sa(D.callbackAnimation),r&&(I?I.progress(1):r.paused()?R||sa(r,D.direction<0,1):sa(r,r.reversed()))},D.labelToScroll=function(pt){return r&&r.labels&&(bt||D.refresh()||bt)+r.labels[pt]/r.duration()*T||0},D.getTrailing=function(pt){var Ht=Kt.indexOf(D),Ct=D.direction>0?Kt.slice(0,Ht).reverse():Kt.slice(Ht+1);return(Qn(pt)?Ct.filter(function(Vt){return Vt.vars.preventOverlaps===pt}):Ct).filter(function(Vt){return D.direction>0?Vt.end<=bt:Vt.start>=L})},D.update=function(pt,Ht,Ct){if(!(S&&!Ct&&!pt)){var Vt=An===!0?at:D.scroll(),ze=pt?0:(Vt-bt)/T,Qt=ze<0?0:ze>1?1:ze||0,Te=D.progress,Ze,we,Ee,pe,jn,Ae,yn,ui;if(Ht&&(Jt=re,re=S?it():Vt,x&&(ae=Ft,Ft=r&&!R?r.totalProgress():Qt)),m&&p&&!_n&&!Nl&&Ei&&(!Qt&&bt<Vt+(Vt-Jt)/(gn()-pa)*m?Qt=1e-4:Qt===1&&L>Vt+(Vt-Jt)/(gn()-pa)*m&&(Qt=.9999)),Qt!==Te&&D.enabled){if(Ze=D.isActive=!!Qt&&Qt<1,we=!!Te&&Te<1,Ae=Ze!==we,jn=Ae||!!Qt!=!!Te,D.direction=Qt>Te?1:-1,D.progress=Qt,jn&&!_n&&(Ee=Qt&&!Te?0:Qt===1?1:Te===1?2:3,R&&(pe=!Ae&&X[Ee+1]!=="none"&&X[Ee+1]||X[Ee],ui=r&&(pe==="complete"||pe==="reset"||pe in r))),b&&(Ae||ui)&&(ui||h||!r)&&(xn(b)?b(D):D.getTrailing(b).forEach(function(N){return N.endAnimation()})),R||(I&&!_n&&!Nl?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",Qt,r._tTime/r._tDur):(I.vars.totalProgress=Qt,I.invalidate().restart())):r&&r.totalProgress(Qt,!!(_n&&(nt||pt)))),p){if(pt&&g&&(J.style[g+v.os2]=rt),!j)ot(ma(dt+Gt*Qt));else if(jn){if(yn=!pt&&Qt>Te&&L+1>Vt&&Vt+1>=zi(O,v),P)if(!pt&&(Ze||yn)){var Je=rr(p,!0),Qe=Vt-bt;qf(p,_e,Je.top+(v===nn?Qe:0)+en,Je.left+(v===nn?0:Qe)+en)}else qf(p,J);Co(Ze||yn?B:Q),Dt&&Qt<1&&Ze||ot(dt+(Qt===1&&!yn?Gt:0))}}x&&!Mt.tween&&!_n&&!Nl&&Z.restart(!0),a&&(Ae||E&&Qt&&(Qt<1||!Tu))&&Va(a.targets).forEach(function(N){return N.classList[Ze||E?"add":"remove"](a.className)}),o&&!R&&!pt&&o(D),jn&&!_n?(R&&(ui&&(pe==="complete"?r.pause().totalProgress(1):pe==="reset"?r.restart(!0).pause():pe==="restart"?r.restart(!0):r[pe]()),o&&o(D)),(Ae||!Tu)&&(c&&Ae&&Pu(D,c),W[Ee]&&Pu(D,W[Ee]),E&&(Qt===1?D.kill(!1,1):W[Ee]=0),Ae||(Ee=Qt===1?1:3,W[Ee]&&Pu(D,W[Ee]))),A&&!Ze&&Math.abs(D.getVelocity())>(_a(A)?A:2500)&&(sa(D.callbackAnimation),I?I.progress(1):sa(r,pe==="reverse"?1:!Qt,1))):R&&o&&!_n&&o(D)}if(vt){var w=S?Vt/S.duration()*(S._caScrollDist||0):Vt;It(w+(F._isFlipped?1:0)),vt(w)}zt&&zt(-Vt/S.duration()*(S._caScrollDist||0))}},D.enable=function(pt,Ht){D.enabled||(D.enabled=!0,cn(O,"resize",ga),Y||cn(O,"scroll",io),ct&&cn(i,"refreshInit",ct),pt!==!1&&(D.progress=mt=0,re=Jt=$=it()),Ht!==!1&&D.refresh())},D.getTween=function(pt){return pt&&Mt?Mt.tween:I},D.setPositions=function(pt,Ht,Ct,Vt){if(S){var ze=S.scrollTrigger,Qt=S.duration(),Te=ze.end-ze.start;pt=ze.start+Te*pt/Qt,Ht=ze.start+Te*Ht/Qt}D.refresh(!1,!1,{start:kf(pt,Ct&&!!D._startClamp),end:kf(Ht,Ct&&!!D._endClamp)},Vt),D.update()},D.adjustPinSpacing=function(pt){if(st&&pt){var Ht=st.indexOf(v.d)+1;st[Ht]=parseFloat(st[Ht])+pt+en,st[1]=parseFloat(st[1])+pt+en,Co(st)}},D.disable=function(pt,Ht){if(D.enabled&&(pt!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,Ht||I&&I.pause(),at=0,kt&&(kt.uncache=1),ct&&ln(i,"refreshInit",ct),Z&&(Z.pause(),Mt.tween&&Mt.tween.kill()&&(Mt.tween=0)),!Y)){for(var Ct=Kt.length;Ct--;)if(Kt[Ct].scroller===O&&Kt[Ct]!==D)return;ln(O,"resize",ga),Y||ln(O,"scroll",io)}},D.kill=function(pt,Ht){D.disable(pt,Ht),I&&!Ht&&I.kill(),l&&delete $h[l];var Ct=Kt.indexOf(D);Ct>=0&&Kt.splice(Ct,1),Ct===Pn&&rc>0&&Pn--,Ct=0,Kt.forEach(function(Vt){return Vt.scroller===D.scroller&&(Ct=1)}),Ct||An||(D.scroll.rec=0),r&&(r.scrollTrigger=null,pt&&r.revert({kill:!1}),Ht||r.kill()),ye&&[ye,Bt,F,wt].forEach(function(Vt){return Vt.parentNode&&Vt.parentNode.removeChild(Vt)}),Da===D&&(Da=0),p&&(kt&&(kt.uncache=1),Ct=0,Kt.forEach(function(Vt){return Vt.pin===p&&Ct++}),Ct||(kt.spacer=0)),n.onKill&&n.onKill(D)},Kt.push(D),D.enable(!1,!1),ce&&ce(D),r&&r.add&&!T){var Xt=D.update;D.update=function(){D.update=Xt,ee.cache++,bt||L||D.refresh()},Et.delayedCall(.01,D.update),T=.01,bt=L=0}else D.refresh();p&&zS()},i.register=function(n){return lo||(Et=n||_g(),mg()&&window.document&&i.enable(),lo=fa),lo},i.defaults=function(n){if(n)for(var r in n)zl[r]=n[r];return zl},i.disable=function(n,r){fa=0,Kt.forEach(function(o){return o[r?"kill":"disable"](n)}),ln(te,"wheel",io),ln(Ce,"scroll",io),clearInterval(Ol),ln(Ce,"touchcancel",Ui),ln(_e,"touchstart",Ui),kl(ln,Ce,"pointerdown,touchstart,mousedown",Bf),kl(ln,Ce,"pointerup,touchend,mouseup",zf),yc.kill(),Fl(ln);for(var s=0;s<ee.length;s+=3)Bl(ln,ee[s],ee[s+1]),Bl(ln,ee[s],ee[s+2])},i.enable=function(){if(te=window,Ce=document,ei=Ce.documentElement,_e=Ce.body,Et&&(Va=Et.utils.toArray,Ta=Et.utils.clamp,qh=Et.core.context||Ui,Su=Et.core.suppressOverwrites||Ui,Od=te.history.scrollRestoration||"auto",Kh=te.pageYOffset||0,Et.core.globals("ScrollTrigger",i),_e)){fa=1,To=document.createElement("div"),To.style.height="100vh",To.style.position="absolute",Sg(),IS(),Ge.register(Et),i.isTouch=Ge.isTouch,Ar=Ge.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Yh=Ge.isTouch===1,cn(te,"wheel",io),Ud=[te,Ce,ei,_e],Et.matchMedia?(i.matchMedia=function(c){var u=Et.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Et.addEventListener("matchMediaInit",function(){return Vd()}),Et.addEventListener("matchMediaRevert",function(){return Eg()}),Et.addEventListener("matchMedia",function(){_s(0,1),Ds("matchMedia")}),Et.matchMedia().add("(orientation: portrait)",function(){return Au(),Au})):console.warn("Requires GSAP 3.11.0 or later"),Au(),cn(Ce,"scroll",io);var n=_e.hasAttribute("style"),r=_e.style,s=r.borderTopStyle,o=Et.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=rr(_e),nn.m=Math.round(a.top+nn.sc())||0,Dn.m=Math.round(a.left+Dn.sc())||0,s?r.borderTopStyle=s:r.removeProperty("border-top-style"),n||(_e.setAttribute("style",""),_e.removeAttribute("style")),Ol=setInterval(Gf,250),Et.delayedCall(.5,function(){return Nl=0}),cn(Ce,"touchcancel",Ui),cn(_e,"touchstart",Ui),kl(cn,Ce,"pointerdown,touchstart,mousedown",Bf),kl(cn,Ce,"pointerup,touchend,mouseup",zf),Xh=Et.utils.checkPrefix("transform"),sc.push(Xh),lo=gn(),yc=Et.delayedCall(.2,_s).pause(),co=[Ce,"visibilitychange",function(){var c=te.innerWidth,u=te.innerHeight;Ce.hidden?(Of=c,Nf=u):(Of!==c||Nf!==u)&&ga()},Ce,"DOMContentLoaded",_s,te,"load",_s,te,"resize",ga],Fl(cn),Kt.forEach(function(c){return c.enable(0,1)}),l=0;l<ee.length;l+=3)Bl(ln,ee[l],ee[l+1]),Bl(ln,ee[l],ee[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Tu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Ol)||(Ol=r)&&setInterval(Gf,r),"ignoreMobileResize"in n&&(Yh=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Fl(ln)||Fl(cn,n.autoRefreshEvents||"none"),dg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=kn(n),o=ee.indexOf(s),a=As(s);~o&&ee.splice(o,a?6:2),r&&(a?Wi.unshift(te,r,_e,r,ei,r):Wi.unshift(s,r))},i.clearMatchMedia=function(n){Kt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(Qn(n)?kn(n):n).getBoundingClientRect(),a=o[s?ws:Es]*r||0;return s?o.right-a>0&&o.left+a<te.innerWidth:o.bottom-a>0&&o.top+a<te.innerHeight},i.positionInViewport=function(n,r,s){Qn(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[s?ws:Es],l=r==null?a/2:r in Mc?Mc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/te.innerWidth:(o.top+l)/te.innerHeight},i.killAll=function(n){if(Kt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Rs.killAll||[];Rs={},r.forEach(function(s){return s()})}},i}();ie.version="3.12.7";ie.saveStyles=function(i){return i?Va(i).forEach(function(t){if(t&&t.style){var e=Jn.indexOf(t);e>=0&&Jn.splice(e,5),Jn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Et.core.getCache(t),qh())}}):Jn};ie.revert=function(i,t){return Vd(!i,t)};ie.create=function(i,t){return new ie(i,t)};ie.refresh=function(i){return i?ga(!0):(lo||ie.register())&&_s(!0)};ie.update=function(i){return++ee.cache&&ur(i===!0?2:0)};ie.clearScrollMemory=Mg;ie.maxScroll=function(i,t){return zi(i,t?Dn:nn)};ie.getScrollFunc=function(i,t){return jr(kn(i),t?Dn:nn)};ie.getById=function(i){return $h[i]};ie.getAll=function(){return Kt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};ie.isScrolling=function(){return!!Ei};ie.snapDirectional=zd;ie.addEventListener=function(i,t){var e=Rs[i]||(Rs[i]=[]);~e.indexOf(t)||e.push(t)};ie.removeEventListener=function(i,t){var e=Rs[i],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ie.batch=function(i,t){var e=[],n={},r=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],d=[],p=Et.delayedCall(r,function(){u(h,d),h=[],d=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),d.push(g),s<=h.length&&p.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&xn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return xn(s)&&(s=s(),cn(ie,"refresh",function(){return s=t.batchMax()})),Va(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ie.create(c))}),e};var $f=function(t,e,n,r){return e>r?t(r):e<0&&t(0),n>r?(r-e)/(n-e):n<0?e/(e-n):1},Du=function i(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ge.isTouch?" pinch-zoom":""):"none",t===ei&&i(_e,e)},Wl={auto:1,scroll:1},XS=function(t){var e=t.event,n=t.target,r=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Et.core.getCache(s),a=gn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==_e&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Wl[(l=xi(s)).overflowY]||Wl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!As(s)&&(Wl[(l=xi(s)).overflowY]||Wl[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Cg=function(t,e,n,r){return Ge.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:r=r&&XS,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&cn(Ce,Ge.eventTypes[0],Zf,!1,!0)},onDisable:function(){return ln(Ce,Ge.eventTypes[0],Zf,!0)}})},YS=/(input|label|select|textarea)/i,Kf,Zf=function(t){var e=YS.test(t.target.tagName);(e||Kf)&&(t._gsapAllow=!0,Kf=e)},qS=function(t){us(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,r=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=kn(t.target)||ei,u=Et.core.globals().ScrollSmoother,h=u&&u.get(),d=Ar&&(t.content&&kn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),p=jr(c,nn),g=jr(c,Dn),_=1,m=(Ge.isTouch&&te.visualViewport?te.visualViewport.scale*te.visualViewport.width:te.outerWidth)/te.innerWidth,f=0,M=xn(r)?function(){return r(a)}:function(){return r||2.8},E,x,P=Cg(c,t.type,!0,s),C=function(){return x=!1},S=Ui,A=Ui,b=function(){l=zi(c,nn),A=Ta(Ar?1:0,l),n&&(S=Ta(0,zi(c,Dn))),E=Ms},v=function(){d._gsap.y=ma(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},R=function(){if(x){requestAnimationFrame(C);var V=ma(a.deltaY/2),et=A(p.v-V);if(d&&et!==p.v+p.offset){p.offset=et-p.v;var D=ma((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",d._gsap.y=D+"px",p.cacheID=ee.cache,ur()}return!0}p.offset&&v(),x=!0},O,k,Y,j,W=function(){b(),O.isActive()&&O.vars.scrollY>l&&(p()>l?O.progress(1)&&p(l):O.resetTo("scrollY",l))};return d&&Et.set(d,{y:"+=0"}),t.ignoreCheck=function(X){return Ar&&X.type==="touchmove"&&R()||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){x=!1;var X=_;_=ma((te.visualViewport&&te.visualViewport.scale||1)/m),O.pause(),X!==_&&Du(c,_>1.01?!0:n?!1:"x"),k=g(),Y=p(),b(),E=Ms},t.onRelease=t.onGestureStart=function(X,V){if(p.offset&&v(),!V)j.restart(!0);else{ee.cache++;var et=M(),D,ct;n&&(D=g(),ct=D+et*.05*-X.velocityX/.227,et*=$f(g,D,ct,zi(c,Dn)),O.vars.scrollX=S(ct)),D=p(),ct=D+et*.05*-X.velocityY/.227,et*=$f(p,D,ct,zi(c,nn)),O.vars.scrollY=A(ct),O.invalidate().duration(et).play(.01),(Ar&&O.vars.scrollY>=l||D>=l-1)&&Et.to({},{onUpdate:W,duration:et})}o&&o(X)},t.onWheel=function(){O._ts&&O.pause(),gn()-f>1e3&&(E=0,f=gn())},t.onChange=function(X,V,et,D,ct){if(Ms!==E&&b(),V&&n&&g(S(D[2]===V?k+(X.startX-X.x):g()+V-D[1])),et){p.offset&&v();var Ut=ct[2]===et,jt=Ut?Y+X.startY-X.y:p()+et-ct[1],$=A(jt);Ut&&jt!==$&&(Y+=$-jt),p($)}(et||V)&&ur()},t.onEnable=function(){Du(c,n?!1:"x"),ie.addEventListener("refresh",W),cn(te,"resize",W),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),P.enable()},t.onDisable=function(){Du(c,!0),ln(te,"resize",W),ie.removeEventListener("refresh",W),P.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ge(t),a.iOS=Ar,Ar&&!p()&&p(1),Ar&&Et.ticker.add(Ui),j=a._dc,O=Et.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Tg(p,p(),function(){return O.pause()})},onUpdate:ur,onComplete:j.vars.onComplete}),a};ie.sort=function(i){if(xn(i))return Kt.sort(i);var t=te.pageYOffset||0;return ie.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+te.innerHeight}),Kt.sort(i||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ie.observe=function(i){return new Ge(i)};ie.normalizeScroll=function(i){if(typeof i>"u")return Cn;if(i===!0&&Cn)return Cn.enable();if(i===!1){Cn&&Cn.kill(),Cn=i;return}var t=i instanceof Ge?i:qS(i);return Cn&&Cn.target===t.target&&Cn.kill(),As(t.target)&&(Cn=t),t};ie.core={_getVelocityProp:Wh,_inputObserver:Cg,_scrollers:ee,_proxies:Wi,bridge:{ss:function(){Ei||Ds("scrollStart"),Ei=gn()},ref:function(){return _n}}};_g()&&Et.registerPlugin(ie);class jS{constructor(){this.gl=new xr,this.geometry=new Yo(1,1),this.material=new Xi({vertexShader:`
        varying vec2 vUv;

        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        
          vUv = uv;
        }
      `,fragmentShader:`
        varying vec2 vUv;
        
        void main() {        
          gl_FragColor = vec4(vec3(vUv.x, vUv.y, 0.0), 1.0);
        }
      `,side:Ni}),this.instance=new Di(this.geometry,this.material)}update(){this.instance.position.y=Math.sin(this.gl.time.elapsed)}}class $S{constructor(){this.gl=new xr,this.light=new mx(16777215,0,1),this.gl.scene.add(this.light)}}class KS{constructor(t){xc.registerPlugin(ie),this.id="objects",this.params=t,this.isRendering=!1,this.gl=new xr,this.scene=new Km,this.renderPlane={mesh:new Di(new Yo(1,1),new Xi({uniforms:{tDiffuse:new po(null),uScale:new po(new Lt(this.gl.sizes.width,this.gl.sizes.height)),uPosition:new po(new Lt(0,0)),uResolution:new po(new Lt(this.gl.sizes.width,this.gl.sizes.height))},vertexShader:`
            varying vec2 vUv;

            uniform vec2 uPosition;
            uniform vec2 uScale;
            uniform vec2 uResolution;

            void main() {
              vec2 pos = position.xy * 2.0;

              // Scale
              pos.x *= uScale.x / uResolution.x;
              pos.y *= uScale.y / uResolution.y;

              // Position
              pos.x += - 1.0 + uPosition.x / uResolution.x * 2. + uScale.x / uResolution.x;
              pos.y -= uPosition.y / uResolution.y * 2.0;
              
              gl_Position = vec4(pos.xy, 0.0, 1.0);
            
              // Varyings
              vUv = uv;
            }
          `,fragmentShader:`
            varying vec2 vUv;

            uniform sampler2D tDiffuse;
            
            void main() {
              vec4 textureDiffuse = texture(tDiffuse, vUv);
            
              gl_FragColor = textureDiffuse;
              
              // Debug
              // gl_FragColor.rgb += vec3(vUv.x, vUv.y, 0.0);
              // gl_FragColor.a = 1.0;
            }
          `}))},this.renderPlane.mesh.frustumCulled=!1,this.renderPlane.mesh.matrixAutoUpdate=!1,this.bounds={},this.renderTarget=new Xr(this.gl.sizes.width*this.gl.sizes.pixelRatio,this.gl.sizes.height*this.gl.sizes.pixelRatio,{samples:1}),this.camera=new gi(75,this.gl.sizes.width/this.gl.sizes.height,.1,1e3),this.camera.position.z=2,this.plane=new jS,this.scene.add(this.plane.instance),this.lighting=new $S,this.setIsRendering(),this.getBounds(),this.setScroll(),this.gl.isDebug&&this.setOrbitControls()}setOrbitControls(){this.controls=new vS(this.camera,this.gl.canvas),this.controls.enableDamping=!0,this.controls.enableZoom=!1}resize(){this.renderTarget.setSize(this.gl.sizes.width*this.gl.sizes.pixelRatio,this.gl.sizes.height*this.gl.sizes.pixelRatio)}updateCameraAspect(){this.camera.aspect=this.renderPlane.mesh.material.uniforms.uScale.value.x/this.renderPlane.mesh.material.uniforms.uScale.value.y,this.camera.updateProjectionMatrix()}setIsRendering(){ie.create({trigger:this.params.dom,start:()=>`top-=${this.gl.sizes.height/2} bottom`,end:()=>`bottom+=${this.gl.sizes.height/2} top`,invalidateOnRefresh:!0,onEnter:()=>{this.isRendering=!0},onEnterBack:()=>{this.isRendering=!0},onLeave:()=>{this.isRendering=!1},onLeaveBack:()=>{this.isRendering=!1}})}getBounds(){this.bounds=this.params.dom.getBoundingClientRect(),this.renderPlane.mesh.material.uniforms.uResolution.value.set(this.gl.sizes.width,this.gl.sizes.height),this.renderPlane.mesh.material.uniforms.uPosition.value.x=this.bounds.left,this.renderPlane.mesh.material.uniforms.uScale.value.set(this.bounds.width,this.bounds.height)}setScroll(){xc.fromTo(this.renderPlane.mesh.material.uniforms.uPosition.value,{y:()=>Math.max(this.gl.sizes.height,this.bounds.height)},{y:()=>-Math.max(this.gl.sizes.height,this.bounds.height),ease:"none",scrollTrigger:{invalidateOnRefresh:!0,scrub:!0,trigger:this.params.dom,start:()=>`center-=${Math.max(this.gl.sizes.height,this.bounds.height)} top+=${this.gl.sizes.height/2}`,end:()=>`center+=${Math.max(this.gl.sizes.height,this.bounds.height)} top+=${this.gl.sizes.height/2}`,refreshPriority:-99,onRefresh:()=>{this.getBounds(),this.updateCameraAspect()}}})}renderPipeline(){this.isRendering&&(this.gl.renderer.instance.setRenderTarget(this.renderTarget),this.gl.renderer.instance.render(this.scene,this.camera),this.renderPlane.mesh.material.uniforms.tDiffuse.value=this.renderTarget.texture)}update(){this.isRendering&&this.plane.update()}}class ZS{constructor(){this.gl=new xr,this.selectors=[],this.scenes=[],this.gl.isDebug&&this.setDebug()}setDebug(){this.debugWorldFolder=this.gl.debug.gui.addFolder({title:"World"})}add(){this.selectors=document.querySelectorAll("[data-gl]"),this.selectors.forEach((t,e)=>{t.dataset.gl==="objects"&&this.scenes.push(new KS({dom:t}))});for(const t in this.scenes)this.gl.scene.add(this.scenes[t].renderPlane.mesh)}destroy(){this.gl.isDebug&&console.log("Before destroy:",this.gl.renderer.instance.info);for(const t in this.scenes)this.gl.scene.remove(this.scenes[t].renderPlane.mesh),this.scenes[t].renderTarget&&this.scenes[t].renderTarget.dispose(),this.scenes[t].renderPlane.mesh.geometry.dispose(),this.scenes[t].renderPlane.mesh.material.dispose(),this.scenes[t].scene&&this.scenes[t].scene.traverse(e=>{if(this.scenes[t].scene.remove(e.name),!!e.isMesh)if(e.geometry.dispose(),e.material.isMaterial)this.cleanMaterial(e.material);else for(const n of e.material)this.cleanMaterial(n)});this.selectors=[],this.scenes=[],this.gl.renderer.instance.setRenderTarget(null),this.gl.renderer.instance.clear(),this.gl.isDebug&&console.log("After destroy:",this.gl.renderer.instance.info)}cleanMaterial(t){t.dispose();for(const e of Object.keys(t)){const n=t[e];n&&typeof n=="object"&&"minFilter"in n&&n.dispose()}}resize(){for(const t in this.scenes)this.scenes[t].resize()}update(){for(const t in this.scenes)this.scenes[t].update()}}class JS{constructor(){this.clock=new vx,this.elapsed=0,this.delta=0}update(){this.delta=Math.min(this.clock.getDelta(),1/30)*100,this.elapsed=this.clock.getElapsedTime()}}class QS{constructor(){this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.aspect=this.width/this.height,window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.aspect=this.width/this.height})}}/*! Tweakpane 4.0.5 (c) 2016 cocopon, licensed under the MIT license. */function Pe(i){return i==null}function Hd(i){return i!==null&&typeof i=="object"}function Jh(i){return i!==null&&typeof i=="object"}function tT(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;e++)if(i[e]!==t[e])return!1;return!0}function Ls(i,t){return Array.from(new Set([...Object.keys(i),...Object.keys(t)])).reduce((n,r)=>{const s=i[r],o=t[r];return Jh(s)&&Jh(o)?Object.assign(Object.assign({},n),{[r]:Ls(s,o)}):Object.assign(Object.assign({},n),{[r]:r in t?o:s})},{})}function Gd(i){return Hd(i)?"target"in i:!1}const eT={alreadydisposed:()=>"View has been already disposed",invalidparams:i=>`Invalid parameters for '${i.name}'`,nomatchingcontroller:i=>`No matching controller for '${i.key}'`,nomatchingview:i=>`No matching view for '${JSON.stringify(i.params)}'`,notbindable:()=>"Value is not bindable",notcompatible:i=>`Not compatible with  plugin '${i.id}'`,propertynotfound:i=>`Property '${i.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class ke{static alreadyDisposed(){return new ke({type:"alreadydisposed"})}static notBindable(){return new ke({type:"notbindable"})}static notCompatible(t,e){return new ke({type:"notcompatible",context:{id:`${t}.${e}`}})}static propertyNotFound(t){return new ke({type:"propertynotfound",context:{name:t}})}static shouldNeverHappen(){return new ke({type:"shouldneverhappen"})}constructor(t){var e;this.message=(e=eT[t.type](t.context))!==null&&e!==void 0?e:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=t.type}toString(){return this.message}}class Sc{constructor(t,e){this.obj_=t,this.key=e}static isBindable(t){return!(t===null||typeof t!="object"&&typeof t!="function")}read(){return this.obj_[this.key]}write(t){this.obj_[this.key]=t}writeProperty(t,e){const n=this.read();if(!Sc.isBindable(n))throw ke.notBindable();if(!(t in n))throw ke.propertyNotFound(t);n[t]=e}}class Ke{constructor(){this.observers_={}}on(t,e,n){var r;let s=this.observers_[t];return s||(s=this.observers_[t]=[]),s.push({handler:e,key:(r=n==null?void 0:n.key)!==null&&r!==void 0?r:e}),this}off(t,e){const n=this.observers_[t];return n&&(this.observers_[t]=n.filter(r=>r.key!==e)),this}emit(t,e){const n=this.observers_[t];n&&n.forEach(r=>{r.handler(e)})}}class nT{constructor(t,e){var n;this.constraint_=e==null?void 0:e.constraint,this.equals_=(n=e==null?void 0:e.equals)!==null&&n!==void 0?n:(r,s)=>r===s,this.emitter=new Ke,this.rawValue_=t}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const n=e??{forceEmit:!1,last:!0},r=this.constraint_?this.constraint_.constrain(t):t,s=this.rawValue_;this.equals_(s,r)&&!n.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=r,this.emitter.emit("change",{options:n,previousRawValue:s,rawValue:r,sender:this}))}}class iT{constructor(t){this.emitter=new Ke,this.value_=t}get rawValue(){return this.value_}set rawValue(t){this.setRawValue(t,{forceEmit:!1,last:!0})}setRawValue(t,e){const n=e??{forceEmit:!1,last:!0},r=this.value_;r===t&&!n.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=t,this.emitter.emit("change",{options:n,previousRawValue:r,rawValue:this.value_,sender:this}))}}class rT{constructor(t){this.emitter=new Ke,this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_)}get rawValue(){return this.value_.rawValue}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function Le(i,t){const e=t==null?void 0:t.constraint,n=t==null?void 0:t.equals;return!e&&!n?new iT(i):new nT(i,t)}function sT(i){return[new rT(i),(t,e)=>{i.setRawValue(t,e)}]}class Zt{constructor(t){this.emitter=new Ke,this.valMap_=t;for(const e in this.valMap_)this.valMap_[e].emitter.on("change",()=>{this.emitter.emit("change",{key:e,sender:this})})}static createCore(t){return Object.keys(t).reduce((n,r)=>Object.assign(n,{[r]:Le(t[r])}),{})}static fromObject(t){const e=this.createCore(t);return new Zt(e)}get(t){return this.valMap_[t].rawValue}set(t,e){this.valMap_[t].rawValue=e}value(t){return this.valMap_[t]}}class Qa{constructor(t){this.values=Zt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),n=this.values.get("min");return Math.min(Math.max(t,n),e)}}class oT{constructor(t){this.values=Zt.fromObject({max:t.max,min:t.min})}constrain(t){const e=this.values.get("max"),n=this.values.get("min");let r=t;return Pe(n)||(r=Math.max(r,n)),Pe(e)||(r=Math.min(r,e)),r}}class aT{constructor(t,e=0){this.step=t,this.origin=e}constrain(t){const e=this.origin%this.step,n=Math.round((t-e)/this.step);return e+n*this.step}}class lT{constructor(t){this.text=t}evaluate(){return Number(this.text)}toString(){return this.text}}const cT={"**":(i,t)=>Math.pow(i,t),"*":(i,t)=>i*t,"/":(i,t)=>i/t,"%":(i,t)=>i%t,"+":(i,t)=>i+t,"-":(i,t)=>i-t,"<<":(i,t)=>i<<t,">>":(i,t)=>i>>t,">>>":(i,t)=>i>>>t,"&":(i,t)=>i&t,"^":(i,t)=>i^t,"|":(i,t)=>i|t};class uT{constructor(t,e,n){this.left=e,this.operator=t,this.right=n}evaluate(){const t=cT[this.operator];if(!t)throw new Error(`unexpected binary operator: '${this.operator}`);return t(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const hT={"+":i=>i,"-":i=>-i,"~":i=>~i};class dT{constructor(t,e){this.operator=t,this.expression=e}evaluate(){const t=hT[this.operator];if(!t)throw new Error(`unexpected unary operator: '${this.operator}`);return t(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function Wd(i){return(t,e)=>{for(let n=0;n<i.length;n++){const r=i[n](t,e);if(r!=="")return r}return""}}function Ga(i,t){var e;const n=i.substr(t).match(/^\s+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function pT(i,t){const e=i.substr(t,1);return e.match(/^[1-9]$/)?e:""}function Wa(i,t){var e;const n=i.substr(t).match(/^[0-9]+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function fT(i,t){const e=Wa(i,t);if(e!=="")return e;const n=i.substr(t,1);if(t+=1,n!=="-"&&n!=="+")return"";const r=Wa(i,t);return r===""?"":n+r}function Xd(i,t){const e=i.substr(t,1);if(t+=1,e.toLowerCase()!=="e")return"";const n=fT(i,t);return n===""?"":e+n}function Pg(i,t){const e=i.substr(t,1);if(e==="0")return e;const n=pT(i,t);return t+=n.length,n===""?"":n+Wa(i,t)}function mT(i,t){const e=Pg(i,t);if(t+=e.length,e==="")return"";const n=i.substr(t,1);if(t+=n.length,n!==".")return"";const r=Wa(i,t);return t+=r.length,e+n+r+Xd(i,t)}function _T(i,t){const e=i.substr(t,1);if(t+=e.length,e!==".")return"";const n=Wa(i,t);return t+=n.length,n===""?"":e+n+Xd(i,t)}function gT(i,t){const e=Pg(i,t);return t+=e.length,e===""?"":e+Xd(i,t)}const vT=Wd([mT,_T,gT]);function xT(i,t){var e;const n=i.substr(t).match(/^[01]+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function bT(i,t){const e=i.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0b")return"";const n=xT(i,t);return n===""?"":e+n}function yT(i,t){var e;const n=i.substr(t).match(/^[0-7]+/);return(e=n&&n[0])!==null&&e!==void 0?e:""}function wT(i,t){const e=i.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0o")return"";const n=yT(i,t);return n===""?"":e+n}function ET(i,t){var e;const n=i.substr(t).match(/^[0-9a-f]+/i);return(e=n&&n[0])!==null&&e!==void 0?e:""}function MT(i,t){const e=i.substr(t,2);if(t+=e.length,e.toLowerCase()!=="0x")return"";const n=ET(i,t);return n===""?"":e+n}const ST=Wd([bT,wT,MT]),TT=Wd([ST,vT]);function CT(i,t){const e=TT(i,t);return t+=e.length,e===""?null:{evaluable:new lT(e),cursor:t}}function PT(i,t){const e=i.substr(t,1);if(t+=e.length,e!=="(")return null;const n=Rg(i,t);if(!n)return null;t=n.cursor,t+=Ga(i,t).length;const r=i.substr(t,1);return t+=r.length,r!==")"?null:{evaluable:n.evaluable,cursor:t}}function AT(i,t){var e;return(e=CT(i,t))!==null&&e!==void 0?e:PT(i,t)}function Ag(i,t){const e=AT(i,t);if(e)return e;const n=i.substr(t,1);if(t+=n.length,n!=="+"&&n!=="-"&&n!=="~")return null;const r=Ag(i,t);return r?(t=r.cursor,{cursor:t,evaluable:new dT(n,r.evaluable)}):null}function RT(i,t,e){e+=Ga(t,e).length;const n=i.filter(r=>t.startsWith(r,e))[0];return n?(e+=n.length,e+=Ga(t,e).length,{cursor:e,operator:n}):null}function DT(i,t){return(e,n)=>{const r=i(e,n);if(!r)return null;n=r.cursor;let s=r.evaluable;for(;;){const o=RT(t,e,n);if(!o)break;n=o.cursor;const a=i(e,n);if(!a)return null;n=a.cursor,s=new uT(o.operator,s,a.evaluable)}return s?{cursor:n,evaluable:s}:null}}const LT=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((i,t)=>DT(i,t),Ag);function Rg(i,t){return t+=Ga(i,t).length,LT(i,t)}function IT(i){const t=Rg(i,0);return!t||t.cursor+Ga(i,t.cursor).length!==i.length?null:t.evaluable}function _r(i){var t;const e=IT(i);return(t=e==null?void 0:e.evaluate())!==null&&t!==void 0?t:null}function Dg(i){if(typeof i=="number")return i;if(typeof i=="string"){const t=_r(i);if(!Pe(t))return t}return 0}function UT(i){return String(i)}function qn(i){return t=>t.toFixed(Math.max(Math.min(i,20),0))}function ve(i,t,e,n,r){const s=(i-t)/(e-t);return n+s*(r-n)}function Jf(i){return String(i.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function rn(i,t,e){return Math.min(Math.max(i,t),e)}function Lg(i,t){return(i%t+t)%t}function OT(i,t){return Pe(i.step)?Math.max(Jf(t),2):Jf(i.step)}function Ig(i){var t;return(t=i.step)!==null&&t!==void 0?t:1}function Ug(i,t){var e;const n=Math.abs((e=i.step)!==null&&e!==void 0?e:t);return n===0?.1:Math.pow(10,Math.floor(Math.log10(n))-1)}function Og(i,t){return Pe(i.step)?null:new aT(i.step,t)}function Ng(i){return!Pe(i.max)&&!Pe(i.min)?new Qa({max:i.max,min:i.min}):!Pe(i.max)||!Pe(i.min)?new oT({max:i.max,min:i.min}):null}function Fg(i,t){var e,n,r;return{formatter:(e=i.format)!==null&&e!==void 0?e:qn(OT(i,t)),keyScale:(n=i.keyScale)!==null&&n!==void 0?n:Ig(i),pointerScale:(r=i.pointerScale)!==null&&r!==void 0?r:Ug(i,t)}}function kg(i){return{format:i.optional.function,keyScale:i.optional.number,max:i.optional.number,min:i.optional.number,pointerScale:i.optional.number,step:i.optional.number}}function Yd(i){return{constraint:i.constraint,textProps:Zt.fromObject(Fg(i.params,i.initialValue))}}class ks{constructor(t){this.controller=t}get element(){return this.controller.view.element}get disabled(){return this.controller.viewProps.get("disabled")}set disabled(t){this.controller.viewProps.set("disabled",t)}get hidden(){return this.controller.viewProps.get("hidden")}set hidden(t){this.controller.viewProps.set("hidden",t)}dispose(){this.controller.viewProps.set("disposed",!0)}importState(t){return this.controller.importState(t)}exportState(){return this.controller.exportState()}}class Fc{constructor(t){this.target=t}}class tl extends Fc{constructor(t,e,n){super(t),this.value=e,this.last=n??!0}}class NT extends Fc{constructor(t,e){super(t),this.expanded=e}}class FT extends Fc{constructor(t,e){super(t),this.index=e}}class kT extends Fc{constructor(t,e){super(t),this.native=e}}class Xa extends ks{constructor(t){super(t),this.onValueChange_=this.onValueChange_.bind(this),this.emitter_=new Ke,this.controller.value.emitter.on("change",this.onValueChange_)}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get key(){return this.controller.value.binding.target.key}get tag(){return this.controller.tag}set tag(t){this.controller.tag=t}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.controller.value.fetch()}onValueChange_(t){const e=this.controller.value;this.emitter_.emit("change",new tl(this,e.binding.target.read(),t.options.last))}}class BT{constructor(t,e){this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=e,this.value_=t,this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.emitter=new Ke}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=this.binding.read()}push(){this.binding.write(this.value_.rawValue)}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.push(),this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function zT(i){if(!("binding"in i))return!1;const t=i.binding;return Gd(t)&&"read"in t&&"write"in t}function VT(i,t){const n=Object.keys(t).reduce((r,s)=>{if(r===void 0)return;const o=t[s],a=o(i[s]);return a.succeeded?Object.assign(Object.assign({},r),{[s]:a.value}):void 0},{});return n}function HT(i,t){return i.reduce((e,n)=>{if(e===void 0)return;const r=t(n);if(!(!r.succeeded||r.value===void 0))return[...e,r.value]},[])}function GT(i){return i===null?!1:typeof i=="object"}function tr(i){return t=>e=>{if(!t&&e===void 0)return{succeeded:!1,value:void 0};if(t&&e===void 0)return{succeeded:!0,value:void 0};const n=i(e);return n!==void 0?{succeeded:!0,value:n}:{succeeded:!1,value:void 0}}}function Qf(i){return{custom:t=>tr(t)(i),boolean:tr(t=>typeof t=="boolean"?t:void 0)(i),number:tr(t=>typeof t=="number"?t:void 0)(i),string:tr(t=>typeof t=="string"?t:void 0)(i),function:tr(t=>typeof t=="function"?t:void 0)(i),constant:t=>tr(e=>e===t?t:void 0)(i),raw:tr(t=>t)(i),object:t=>tr(e=>{if(GT(e))return VT(e,t)})(i),array:t=>tr(e=>{if(Array.isArray(e))return HT(e,t)})(i)}}const Qh={optional:Qf(!0),required:Qf(!1)};function Oe(i,t){const e=t(Qh),n=Qh.required.object(e)(i);return n.succeeded?n.value:void 0}function li(i,t,e,n){if(t&&!t(i))return!1;const r=Oe(i,e);return r?n(r):!1}function ci(i,t){var e;return Ls((e=i==null?void 0:i())!==null&&e!==void 0?e:{},t)}function Ss(i){return"value"in i}function Bg(i){if(!Hd(i)||!("binding"in i))return!1;const t=i.binding;return Gd(t)}const Vi="http://www.w3.org/2000/svg";function Tc(i){i.offsetHeight}function WT(i,t){const e=i.style.transition;i.style.transition="none",t(),i.style.transition=e}function qd(i){return i.ontouchstart!==void 0}function XT(){return globalThis}function YT(){return XT().document}function qT(i){const t=i.ownerDocument.defaultView;return t&&"document"in t?i.getContext("2d",{willReadFrequently:!0}):null}const jT={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function kc(i,t){const e=i.createElementNS(Vi,"svg");return e.innerHTML=jT[t],e}function zg(i,t,e){i.insertBefore(t,i.children[e])}function jd(i){i.parentElement&&i.parentElement.removeChild(i)}function Vg(i){for(;i.children.length>0;)i.removeChild(i.children[0])}function $T(i){for(;i.childNodes.length>0;)i.removeChild(i.childNodes[0])}function Hg(i){return i.relatedTarget?i.relatedTarget:"explicitOriginalTarget"in i?i.explicitOriginalTarget:null}function hr(i,t){i.emitter.on("change",e=>{t(e.rawValue)}),t(i.rawValue)}function qi(i,t,e){hr(i.value(t),e)}const KT="tp";function le(i){return(e,n)=>[KT,"-",i,"v",e?`_${e}`:"",n?`-${n}`:""].join("")}const oa=le("lbl");function ZT(i,t){const e=i.createDocumentFragment();return t.split(`
`).map(r=>i.createTextNode(r)).forEach((r,s)=>{s>0&&e.appendChild(i.createElement("br")),e.appendChild(r)}),e}class Gg{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(oa()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(oa("l")),qi(e.props,"label",s=>{Pe(s)?this.element.classList.add(oa(void 0,"nol")):(this.element.classList.remove(oa(void 0,"nol")),$T(n),n.appendChild(ZT(t,s)))}),this.element.appendChild(n),this.labelElement=n;const r=t.createElement("div");r.classList.add(oa("v")),this.element.appendChild(r),this.valueElement=r}}class Wg{constructor(t,e){this.props=e.props,this.valueController=e.valueController,this.viewProps=e.valueController.viewProps,this.view=new Gg(t,{props:e.props,viewProps:this.viewProps}),this.view.valueElement.appendChild(this.valueController.view.element)}importProps(t){return li(t,null,e=>({label:e.optional.string}),e=>(this.props.set("label",e.label),!0))}exportProps(){return ci(null,{label:this.props.get("label")})}}function JT(){return["veryfirst","first","last","verylast"]}const tm=le(""),em={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Bc{constructor(t){this.parent_=null,this.blade=t.blade,this.view=t.view,this.viewProps=t.viewProps;const e=this.view.element;this.blade.value("positions").emitter.on("change",()=>{JT().forEach(n=>{e.classList.remove(tm(void 0,em[n]))}),this.blade.get("positions").forEach(n=>{e.classList.add(tm(void 0,em[n]))})}),this.viewProps.handleDispose(()=>{jd(e)})}get parent(){return this.parent_}set parent(t){this.parent_=t,this.viewProps.set("parent",this.parent_?this.parent_.viewProps:null)}importState(t){return li(t,null,e=>({disabled:e.required.boolean,hidden:e.required.boolean}),e=>(this.viewProps.importState(e),!0))}exportState(){return ci(null,Object.assign({},this.viewProps.exportState()))}}class Is extends Bc{constructor(t,e){if(e.value!==e.valueController.value)throw ke.shouldNeverHappen();const n=e.valueController.viewProps,r=new Wg(t,{blade:e.blade,props:e.props,valueController:e.valueController});super(Object.assign(Object.assign({},e),{view:new Gg(t,{props:e.props,viewProps:n}),viewProps:n})),this.labelController=r,this.value=e.value,this.valueController=e.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}importState(t){return li(t,e=>{var n,r,s;return super.importState(e)&&this.labelController.importProps(e)&&((s=(r=(n=this.valueController).importProps)===null||r===void 0?void 0:r.call(n,t))!==null&&s!==void 0?s:!0)},e=>({value:e.optional.raw}),e=>(e.value&&(this.value.rawValue=e.value),!0))}exportState(){var t,e,n;return ci(()=>super.exportState(),Object.assign(Object.assign({value:this.value.rawValue},this.labelController.exportProps()),(n=(e=(t=this.valueController).exportProps)===null||e===void 0?void 0:e.call(t))!==null&&n!==void 0?n:{}))}}function nm(i){const t=Object.assign({},i);return delete t.value,t}class Xg extends Is{constructor(t,e){super(t,e),this.tag=e.tag}importState(t){return li(t,e=>super.importState(nm(t)),e=>({tag:e.optional.string}),e=>(this.tag=e.tag,!0))}exportState(){return ci(()=>nm(super.exportState()),{binding:{key:this.value.binding.target.key,value:this.value.binding.target.read()},tag:this.tag})}}function QT(i){return Ss(i)&&Bg(i.value)}class tC extends Xg{importState(t){return li(t,e=>super.importState(e),e=>({binding:e.required.object({value:e.required.raw})}),e=>(this.value.binding.inject(e.binding.value),this.value.fetch(),!0))}}function eC(i){return Ss(i)&&zT(i.value)}function Yg(i,t){for(;i.length<t;)i.push(void 0)}function nC(i){const t=[];return Yg(t,i),t}function iC(i){const t=i.indexOf(void 0);return t<0?i:i.slice(0,t)}function rC(i,t){const e=[...iC(i),t];return e.length>i.length?e.splice(0,e.length-i.length):Yg(e,i.length),e}class sC{constructor(t){this.emitter=new Ke,this.onTick_=this.onTick_.bind(this),this.onValueBeforeChange_=this.onValueBeforeChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.binding=t.binding,this.value_=Le(nC(t.bufferSize)),this.value_.emitter.on("beforechange",this.onValueBeforeChange_),this.value_.emitter.on("change",this.onValueChange_),this.ticker=t.ticker,this.ticker.emitter.on("tick",this.onTick_),this.fetch()}get rawValue(){return this.value_.rawValue}set rawValue(t){this.value_.rawValue=t}setRawValue(t,e){this.value_.setRawValue(t,e)}fetch(){this.value_.rawValue=rC(this.value_.rawValue,this.binding.read())}onTick_(){this.fetch()}onValueBeforeChange_(t){this.emitter.emit("beforechange",Object.assign(Object.assign({},t),{sender:this}))}onValueChange_(t){this.emitter.emit("change",Object.assign(Object.assign({},t),{sender:this}))}}function oC(i){if(!("binding"in i))return!1;const t=i.binding;return Gd(t)&&"read"in t&&!("write"in t)}class aC extends Xg{exportState(){return ci(()=>super.exportState(),{binding:{readonly:!0}})}}function lC(i){return Ss(i)&&oC(i.value)}class cC extends ks{get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get title(){var t;return(t=this.controller.buttonController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.buttonController.props.set("title",t)}on(t,e){const n=e.bind(this);return this.controller.buttonController.emitter.on(t,s=>{n(new kT(this,s.nativeEvent))}),this}off(t,e){return this.controller.buttonController.emitter.off(t,e),this}}function uC(i,t,e){e?i.classList.add(t):i.classList.remove(t)}function jo(i,t){return e=>{uC(i,t,e)}}function $d(i,t){hr(i,e=>{t.textContent=e??""})}const Lu=le("btn");class hC{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Lu()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("button");n.classList.add(Lu("b")),e.viewProps.bindDisabled(n),this.element.appendChild(n),this.buttonElement=n;const r=t.createElement("div");r.classList.add(Lu("t")),$d(e.props.value("title"),r),this.buttonElement.appendChild(r)}}class dC{constructor(t,e){this.emitter=new Ke,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new hC(t,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}importProps(t){return li(t,null,e=>({title:e.optional.string}),e=>(this.props.set("title",e.title),!0))}exportProps(){return ci(null,{title:this.props.get("title")})}onClick_(t){this.emitter.emit("click",{nativeEvent:t,sender:this})}}class im extends Bc{constructor(t,e){const n=new dC(t,{props:e.buttonProps,viewProps:e.viewProps}),r=new Wg(t,{blade:e.blade,props:e.labelProps,valueController:n});super({blade:e.blade,view:r.view,viewProps:e.viewProps}),this.buttonController=n,this.labelController=r}importState(t){return li(t,e=>super.importState(e)&&this.buttonController.importProps(e)&&this.labelController.importProps(e),()=>({}),()=>!0)}exportState(){return ci(()=>super.exportState(),Object.assign(Object.assign({},this.buttonController.exportProps()),this.labelController.exportProps()))}}class qg{constructor(t){const[e,n]=t.split("-"),r=e.split(".");this.major=parseInt(r[0],10),this.minor=parseInt(r[1],10),this.patch=parseInt(r[2],10),this.prerelease=n??null}toString(){const t=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[t,this.prerelease].join("-"):t}}const $o=new qg("2.0.5");function Un(i){return Object.assign({core:$o},i)}const pC=Un({id:"button",type:"blade",accept(i){const t=Oe(i,e=>({title:e.required.string,view:e.required.constant("button"),label:e.optional.string}));return t?{params:t}:null},controller(i){return new im(i.document,{blade:i.blade,buttonProps:Zt.fromObject({title:i.params.title}),labelProps:Zt.fromObject({label:i.params.label}),viewProps:i.viewProps})},api(i){return i.controller instanceof im?new cC(i.controller):null}});function fC(i,t){return i.addBlade(Object.assign(Object.assign({},t),{view:"button"}))}function mC(i,t){return i.addBlade(Object.assign(Object.assign({},t),{view:"folder"}))}function _C(i,t){return i.addBlade(Object.assign(Object.assign({},t),{view:"tab"}))}function gC(i){return Hd(i)?"refresh"in i&&typeof i.refresh=="function":!1}function vC(i,t){if(!Sc.isBindable(i))throw ke.notBindable();return new Sc(i,t)}class xC{constructor(t,e){this.onRackValueChange_=this.onRackValueChange_.bind(this),this.controller_=t,this.emitter_=new Ke,this.pool_=e,this.controller_.rack.emitter.on("valuechange",this.onRackValueChange_)}get children(){return this.controller_.rack.children.map(t=>this.pool_.createApi(t))}addBinding(t,e,n){const r=n??{},s=this.controller_.element.ownerDocument,o=this.pool_.createBinding(s,vC(t,e),r),a=this.pool_.createBindingApi(o);return this.add(a,r.index)}addFolder(t){return mC(this,t)}addButton(t){return fC(this,t)}addTab(t){return _C(this,t)}add(t,e){const n=t.controller;return this.controller_.rack.add(n,e),t}remove(t){this.controller_.rack.remove(t.controller)}addBlade(t){const e=this.controller_.element.ownerDocument,n=this.pool_.createBlade(e,t),r=this.pool_.createApi(n);return this.add(r,t.index)}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}refresh(){this.children.forEach(t=>{gC(t)&&t.refresh()})}onRackValueChange_(t){const e=t.bladeController,n=this.pool_.createApi(e),r=Bg(e.value)?e.value.binding:null;this.emitter_.emit("change",new tl(n,r?r.target.read():e.value.rawValue,t.options.last))}}class Kd extends ks{constructor(t,e){super(t),this.rackApi_=new xC(t.rackController,e)}refresh(){this.rackApi_.refresh()}}class Zd extends Bc{constructor(t){super({blade:t.blade,view:t.view,viewProps:t.rackController.viewProps}),this.rackController=t.rackController}importState(t){return li(t,e=>super.importState(e),e=>({children:e.required.array(e.required.raw)}),e=>this.rackController.rack.children.every((n,r)=>n.importState(e.children[r])))}exportState(){return ci(()=>super.exportState(),{children:this.rackController.rack.children.map(t=>t.exportState())})}}function td(i){return"rackController"in i}class bC{constructor(t){this.emitter=new Ke,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=t}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(t){for(const e of this.allItems())if(t(e))return e;return null}includes(t){return this.cache_.has(t)}add(t,e){if(this.includes(t))throw ke.shouldNeverHappen();const n=e!==void 0?e:this.items_.length;this.items_.splice(n,0,t),this.cache_.add(t);const r=this.extract_(t);r&&(r.emitter.on("add",this.onSubListAdd_),r.emitter.on("remove",this.onSubListRemove_),r.allItems().forEach(s=>{this.cache_.add(s)})),this.emitter.emit("add",{index:n,item:t,root:this,target:this})}remove(t){const e=this.items_.indexOf(t);if(e<0)return;this.items_.splice(e,1),this.cache_.delete(t);const n=this.extract_(t);n&&(n.allItems().forEach(r=>{this.cache_.delete(r)}),n.emitter.off("add",this.onSubListAdd_),n.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:e,item:t,root:this,target:this})}onSubListAdd_(t){this.cache_.add(t.item),this.emitter.emit("add",{index:t.index,item:t.item,root:this,target:t.target})}onSubListRemove_(t){this.cache_.delete(t.item),this.emitter.emit("remove",{index:t.index,item:t.item,root:this,target:t.target})}}function yC(i,t){for(let e=0;e<i.length;e++){const n=i[e];if(Ss(n)&&n.value===t)return n}return null}function wC(i){return td(i)?i.rackController.rack.bcSet_:null}class EC{constructor(t){var e,n;this.emitter=new Ke,this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onRackLayout_=this.onRackLayout_.bind(this),this.onRackValueChange_=this.onRackValueChange_.bind(this),this.blade_=(e=t.blade)!==null&&e!==void 0?e:null,(n=this.blade_)===null||n===void 0||n.value("positions").emitter.on("change",this.onBladePositionsChange_),this.viewProps=t.viewProps,this.bcSet_=new bC(wC),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(t,e){var n;(n=t.parent)===null||n===void 0||n.remove(t),t.parent=this,this.bcSet_.add(t,e)}remove(t){t.parent=null,this.bcSet_.remove(t)}find(t){return this.bcSet_.allItems().filter(t)}onSetAdd_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("add",{bladeController:t.item,index:t.index,root:e,sender:this}),!e)return;const n=t.item;if(n.viewProps.emitter.on("change",this.onChildViewPropsChange_),n.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),n.viewProps.handleDispose(this.onChildDispose_),Ss(n))n.value.emitter.on("change",this.onChildValueChange_);else if(td(n)){const r=n.rackController.rack;if(r){const s=r.emitter;s.on("layout",this.onRackLayout_),s.on("valuechange",this.onRackValueChange_)}}}onSetRemove_(t){this.updatePositions_();const e=t.target===t.root;if(this.emitter.emit("remove",{bladeController:t.item,root:e,sender:this}),!e)return;const n=t.item;if(Ss(n))n.value.emitter.off("change",this.onChildValueChange_);else if(td(n)){const r=n.rackController.rack;if(r){const s=r.emitter;s.off("layout",this.onRackLayout_),s.off("valuechange",this.onRackValueChange_)}}}updatePositions_(){const t=this.bcSet_.items.filter(r=>!r.viewProps.get("hidden")),e=t[0],n=t[t.length-1];this.bcSet_.items.forEach(r=>{const s=[];r===e&&(s.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&s.push("veryfirst")),r===n&&(s.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&s.push("verylast")),r.blade.set("positions",s)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(e=>e.viewProps.get("disposed")).forEach(e=>{this.bcSet_.remove(e)})}onChildValueChange_(t){const e=yC(this.find(Ss),t.sender);if(!e)throw ke.alreadyDisposed();this.emitter.emit("valuechange",{bladeController:e,options:t.options,sender:this})}onRackLayout_(t){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onRackValueChange_(t){this.emitter.emit("valuechange",{bladeController:t.bladeController,options:t.options,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class Jd{constructor(t){this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.element=t.element,this.viewProps=t.viewProps;const e=new EC({blade:t.root?void 0:t.blade,viewProps:t.viewProps});e.emitter.on("add",this.onRackAdd_),e.emitter.on("remove",this.onRackRemove_),this.rack=e,this.viewProps.handleDispose(()=>{for(let n=this.rack.children.length-1;n>=0;n--)this.rack.children[n].viewProps.set("disposed",!0)})}onRackAdd_(t){t.root&&zg(this.element,t.bladeController.view.element,t.index)}onRackRemove_(t){t.root&&jd(t.bladeController.view.element)}}function Ko(){return new Zt({positions:Le([],{equals:tT})})}class el extends Zt{constructor(t){super(t)}static create(t){const e={completed:!0,expanded:t,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},n=Zt.createCore(e);return new el(n)}get styleExpanded(){var t;return(t=this.get("temporaryExpanded"))!==null&&t!==void 0?t:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const t=this.get("expandedHeight");return this.get("shouldFixHeight")&&!Pe(t)?`${t}px`:"auto"}bindExpandedClass(t,e){const n=()=>{this.styleExpanded?t.classList.add(e):t.classList.remove(e)};qi(this,"expanded",n),qi(this,"temporaryExpanded",n)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function MC(i,t){let e=0;return WT(t,()=>{i.set("expandedHeight",null),i.set("temporaryExpanded",!0),Tc(t),e=t.clientHeight,i.set("temporaryExpanded",null),Tc(t)}),e}function rm(i,t){t.style.height=i.styleHeight}function Qd(i,t){i.value("expanded").emitter.on("beforechange",()=>{if(i.set("completed",!1),Pe(i.get("expandedHeight"))){const e=MC(i,t);e>0&&i.set("expandedHeight",e)}i.set("shouldFixHeight",!0),Tc(t)}),i.emitter.on("change",()=>{rm(i,t)}),rm(i,t),t.addEventListener("transitionend",e=>{e.propertyName==="height"&&i.cleanUpTransition()})}class jg extends Kd{constructor(t,e){super(t,e),this.emitter_=new Ke,this.controller.foldable.value("expanded").emitter.on("change",n=>{this.emitter_.emit("fold",new NT(this,n.sender.rawValue))}),this.rackApi_.on("change",n=>{this.emitter_.emit("change",n)})}get expanded(){return this.controller.foldable.get("expanded")}set expanded(t){this.controller.foldable.set("expanded",t)}get title(){return this.controller.props.get("title")}set title(t){this.controller.props.set("title",t)}get children(){return this.rackApi_.children}addBinding(t,e,n){return this.rackApi_.addBinding(t,e,n)}addFolder(t){return this.rackApi_.addFolder(t)}addButton(t){return this.rackApi_.addButton(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){return this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBlade(t){return this.rackApi_.addBlade(t)}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const $g=le("cnt");class SC{constructor(t,e){var n;this.className_=le((n=e.viewName)!==null&&n!==void 0?n:"fld"),this.element=t.createElement("div"),this.element.classList.add(this.className_(),$g()),e.viewProps.bindClassModifiers(this.element),this.foldable_=e.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),qi(this.foldable_,"completed",jo(this.element,this.className_(void 0,"cpl")));const r=t.createElement("button");r.classList.add(this.className_("b")),qi(e.props,"title",c=>{Pe(c)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r;const s=t.createElement("div");s.classList.add(this.className_("i")),this.element.appendChild(s);const o=t.createElement("div");o.classList.add(this.className_("t")),$d(e.props.value("title"),o),this.buttonElement.appendChild(o),this.titleElement=o;const a=t.createElement("div");a.classList.add(this.className_("m")),this.buttonElement.appendChild(a);const l=t.createElement("div");l.classList.add(this.className_("c")),this.element.appendChild(l),this.containerElement=l}}class ed extends Zd{constructor(t,e){var n;const r=el.create((n=e.expanded)!==null&&n!==void 0?n:!0),s=new SC(t,{foldable:r,props:e.props,viewName:e.root?"rot":void 0,viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Jd({blade:e.blade,element:s.containerElement,root:e.root,viewProps:e.viewProps}),view:s})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=e.props,this.foldable=r,Qd(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}importState(t){return li(t,e=>super.importState(e),e=>({expanded:e.required.boolean,title:e.optional.string}),e=>(this.foldable.set("expanded",e.expanded),this.props.set("title",e.title),!0))}exportState(){return ci(()=>super.exportState(),{expanded:this.foldable.get("expanded"),title:this.props.get("title")})}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const TC=Un({id:"folder",type:"blade",accept(i){const t=Oe(i,e=>({title:e.required.string,view:e.required.constant("folder"),expanded:e.optional.boolean}));return t?{params:t}:null},controller(i){return new ed(i.document,{blade:i.blade,expanded:i.params.expanded,props:Zt.fromObject({title:i.params.title}),viewProps:i.viewProps})},api(i){return i.controller instanceof ed?new jg(i.controller,i.pool):null}}),CC=le("");function sm(i,t){return jo(i,CC(void 0,t))}class vr extends Zt{constructor(t){var e;super(t),this.onDisabledChange_=this.onDisabledChange_.bind(this),this.onParentChange_=this.onParentChange_.bind(this),this.onParentGlobalDisabledChange_=this.onParentGlobalDisabledChange_.bind(this),[this.globalDisabled_,this.setGlobalDisabled_]=sT(Le(this.getGlobalDisabled_())),this.value("disabled").emitter.on("change",this.onDisabledChange_),this.value("parent").emitter.on("change",this.onParentChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_)}static create(t){var e,n,r;const s=t??{};return new vr(Zt.createCore({disabled:(e=s.disabled)!==null&&e!==void 0?e:!1,disposed:!1,hidden:(n=s.hidden)!==null&&n!==void 0?n:!1,parent:(r=s.parent)!==null&&r!==void 0?r:null}))}get globalDisabled(){return this.globalDisabled_}bindClassModifiers(t){hr(this.globalDisabled_,sm(t,"disabled")),qi(this,"hidden",sm(t,"hidden"))}bindDisabled(t){hr(this.globalDisabled_,e=>{t.disabled=e})}bindTabIndex(t){hr(this.globalDisabled_,e=>{t.tabIndex=e?-1:0})}handleDispose(t){this.value("disposed").emitter.on("change",e=>{e&&t()})}importState(t){this.set("disabled",t.disabled),this.set("hidden",t.hidden)}exportState(){return{disabled:this.get("disabled"),hidden:this.get("hidden")}}getGlobalDisabled_(){const t=this.get("parent");return(t?t.globalDisabled.rawValue:!1)||this.get("disabled")}updateGlobalDisabled_(){this.setGlobalDisabled_(this.getGlobalDisabled_())}onDisabledChange_(){this.updateGlobalDisabled_()}onParentGlobalDisabledChange_(){this.updateGlobalDisabled_()}onParentChange_(t){var e;const n=t.previousRawValue;n==null||n.globalDisabled.emitter.off("change",this.onParentGlobalDisabledChange_),(e=this.get("parent"))===null||e===void 0||e.globalDisabled.emitter.on("change",this.onParentGlobalDisabledChange_),this.updateGlobalDisabled_()}}const om=le("tbp");class PC{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(om()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(om("c")),this.element.appendChild(n),this.containerElement=n}}const aa=le("tbi");class AC{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(aa()),e.viewProps.bindClassModifiers(this.element),qi(e.props,"selected",s=>{s?this.element.classList.add(aa(void 0,"sel")):this.element.classList.remove(aa(void 0,"sel"))});const n=t.createElement("button");n.classList.add(aa("b")),e.viewProps.bindDisabled(n),this.element.appendChild(n),this.buttonElement=n;const r=t.createElement("div");r.classList.add(aa("t")),$d(e.props.value("title"),r),this.buttonElement.appendChild(r),this.titleElement=r}}class RC{constructor(t,e){this.emitter=new Ke,this.onClick_=this.onClick_.bind(this),this.props=e.props,this.viewProps=e.viewProps,this.view=new AC(t,{props:e.props,viewProps:e.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class nd extends Zd{constructor(t,e){const n=new PC(t,{viewProps:e.viewProps});super(Object.assign(Object.assign({},e),{rackController:new Jd({blade:e.blade,element:n.containerElement,viewProps:e.viewProps}),view:n})),this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new RC(t,{props:e.itemProps,viewProps:vr.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.props=e.props,qi(this.props,"selected",r=>{this.itemController.props.set("selected",r),this.viewProps.set("hidden",!r)})}get itemController(){return this.ic_}importState(t){return li(t,e=>super.importState(e),e=>({selected:e.required.boolean,title:e.required.string}),e=>(this.ic_.props.set("selected",e.selected),this.ic_.props.set("title",e.title),!0))}exportState(){return ci(()=>super.exportState(),{selected:this.ic_.props.get("selected"),title:this.ic_.props.get("title")})}onItemClick_(){this.props.set("selected",!0)}}class DC extends Kd{constructor(t,e){super(t,e),this.emitter_=new Ke,this.onSelect_=this.onSelect_.bind(this),this.pool_=e,this.rackApi_.on("change",n=>{this.emitter_.emit("change",n)}),this.controller.tab.selectedIndex.emitter.on("change",this.onSelect_)}get pages(){return this.rackApi_.children}addPage(t){const e=this.controller.view.element.ownerDocument,n=new nd(e,{blade:Ko(),itemProps:Zt.fromObject({selected:!1,title:t.title}),props:Zt.fromObject({selected:!1}),viewProps:vr.create()}),r=this.pool_.createApi(n);return this.rackApi_.add(r,t.index)}removePage(t){this.rackApi_.remove(this.rackApi_.children[t])}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}onSelect_(t){this.emitter_.emit("select",new FT(this,t.rawValue))}}class LC extends Kd{get title(){var t;return(t=this.controller.itemController.props.get("title"))!==null&&t!==void 0?t:""}set title(t){this.controller.itemController.props.set("title",t)}get selected(){return this.controller.props.get("selected")}set selected(t){this.controller.props.set("selected",t)}get children(){return this.rackApi_.children}addButton(t){return this.rackApi_.addButton(t)}addFolder(t){return this.rackApi_.addFolder(t)}addTab(t){return this.rackApi_.addTab(t)}add(t,e){this.rackApi_.add(t,e)}remove(t){this.rackApi_.remove(t)}addBinding(t,e,n){return this.rackApi_.addBinding(t,e,n)}addBlade(t){return this.rackApi_.addBlade(t)}}const am=-1;class IC{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=Le(!0),this.selectedIndex=Le(am),this.items_=[]}add(t,e){const n=e??this.items_.length;this.items_.splice(n,0,t),t.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(t){const e=this.items_.indexOf(t);e<0||(this.items_.splice(e,1),t.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=am,this.empty.rawValue=!0;return}const t=this.items_.findIndex(e=>e.rawValue);t<0?(this.items_.forEach((e,n)=>{e.rawValue=n===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((e,n)=>{e.rawValue=n===t}),this.selectedIndex.rawValue=t),this.empty.rawValue=!1}onItemSelectedChange_(t){if(t.rawValue){const e=this.items_.findIndex(n=>n===t.sender);this.items_.forEach((n,r)=>{n.rawValue=r===e}),this.selectedIndex.rawValue=e}else this.keepSelection_()}}const la=le("tab");class UC{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(la(),$g()),e.viewProps.bindClassModifiers(this.element),hr(e.empty,jo(this.element,la(void 0,"nop")));const n=t.createElement("div");n.classList.add(la("t")),this.element.appendChild(n),this.itemsElement=n;const r=t.createElement("div");r.classList.add(la("i")),this.element.appendChild(r);const s=t.createElement("div");s.classList.add(la("c")),this.element.appendChild(s),this.contentsElement=s}}class lm extends Zd{constructor(t,e){const n=new IC,r=new UC(t,{empty:n.empty,viewProps:e.viewProps});super({blade:e.blade,rackController:new Jd({blade:e.blade,element:r.contentsElement,viewProps:e.viewProps}),view:r}),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const s=this.rackController.rack;s.emitter.on("add",this.onRackAdd_),s.emitter.on("remove",this.onRackRemove_),this.tab=n}add(t,e){this.rackController.rack.add(t,e)}remove(t){this.rackController.rack.remove(this.rackController.rack.children[t])}onRackAdd_(t){if(!t.root)return;const e=t.bladeController;zg(this.view.itemsElement,e.itemController.view.element,t.index),e.itemController.viewProps.set("parent",this.viewProps),this.tab.add(e.props.value("selected"))}onRackRemove_(t){if(!t.root)return;const e=t.bladeController;jd(e.itemController.view.element),e.itemController.viewProps.set("parent",null),this.tab.remove(e.props.value("selected"))}}const Kg=Un({id:"tab",type:"blade",accept(i){const t=Oe(i,e=>({pages:e.required.array(e.required.object({title:e.required.string})),view:e.required.constant("tab")}));return!t||t.pages.length===0?null:{params:t}},controller(i){const t=new lm(i.document,{blade:i.blade,viewProps:i.viewProps});return i.params.pages.forEach(e=>{const n=new nd(i.document,{blade:Ko(),itemProps:Zt.fromObject({selected:!1,title:e.title}),props:Zt.fromObject({selected:!1}),viewProps:vr.create()});t.add(n)}),t},api(i){return i.controller instanceof lm?new DC(i.controller,i.pool):i.controller instanceof nd?new LC(i.controller,i.pool):null}});function OC(i,t){const e=i.accept(t.params);if(!e)return null;const n=Oe(t.params,r=>({disabled:r.optional.boolean,hidden:r.optional.boolean}));return i.controller({blade:Ko(),document:t.document,params:Object.assign(Object.assign({},e.params),{disabled:n==null?void 0:n.disabled,hidden:n==null?void 0:n.hidden}),viewProps:vr.create({disabled:n==null?void 0:n.disabled,hidden:n==null?void 0:n.hidden})})}class tp extends Xa{get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}}class NC{constructor(){this.disabled=!1,this.emitter=new Ke}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class FC{constructor(t,e){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=t,this.emitter=new Ke,this.interval_=e,this.setTimer_()}get disabled(){return this.disabled_}set disabled(t){this.disabled_=t,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const t=this.doc_.defaultView;t&&t.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const t=this.doc_.defaultView;t&&(this.timerId_=t.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class nl{constructor(t){this.constraints=t}constrain(t){return this.constraints.reduce((e,n)=>n.constrain(e),t)}}function Cc(i,t){if(i instanceof t)return i;if(i instanceof nl){const e=i.constraints.reduce((n,r)=>n||(r instanceof t?r:null),null);if(e)return e}return null}class il{constructor(t){this.values=Zt.fromObject({options:t})}constrain(t){const e=this.values.get("options");return e.length===0||e.filter(r=>r.value===t).length>0?t:e[0].value}}function rl(i){var t;const e=Qh;if(Array.isArray(i))return(t=Oe({items:i},n=>({items:n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))})))===null||t===void 0?void 0:t.items;if(typeof i=="object")return e.required.raw(i).value}function ep(i){if(Array.isArray(i))return i;const t=[];return Object.keys(i).forEach(e=>{t.push({text:e,value:i[e]})}),t}function np(i){return Pe(i)?null:new il(ep(i))}const Iu=le("lst");class kC{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.element=t.createElement("div"),this.element.classList.add(Iu()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("select");n.classList.add(Iu("s")),e.viewProps.bindDisabled(n),this.element.appendChild(n),this.selectElement=n;const r=t.createElement("div");r.classList.add(Iu("m")),r.appendChild(kc(t,"dropdown")),this.element.appendChild(r),e.value.emitter.on("change",this.onValueChange_),this.value_=e.value,qi(this.props_,"options",s=>{Vg(this.selectElement),s.forEach(o=>{const a=t.createElement("option");a.textContent=o.text,this.selectElement.appendChild(a)}),this.update_()})}update_(){const t=this.props_.get("options").map(e=>e.value);this.selectElement.selectedIndex=t.indexOf(this.value_.rawValue)}onValueChange_(){this.update_()}}class $r{constructor(t,e){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new kC(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(t){const e=t.currentTarget;this.value.rawValue=this.props.get("options")[e.selectedIndex].value}importProps(t){return li(t,null,e=>({options:e.required.custom(rl)}),e=>(this.props.set("options",ep(e.options)),!0))}exportProps(){return ci(null,{options:this.props.get("options")})}}const cm=le("pop");class BC{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(cm()),e.viewProps.bindClassModifiers(this.element),hr(e.shows,jo(this.element,cm(void 0,"v")))}}class Zg{constructor(t,e){this.shows=Le(!1),this.viewProps=e.viewProps,this.view=new BC(t,{shows:this.shows,viewProps:this.viewProps})}}const um=le("txt");class zC{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(um()),e.viewProps.bindClassModifiers(this.element),this.props_=e.props,this.props_.emitter.on("change",this.onChange_);const n=t.createElement("input");n.classList.add(um("i")),n.type="text",e.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,e.value.emitter.on("change",this.onChange_),this.value_=e.value,this.refresh()}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value_.rawValue)}onChange_(){this.refresh()}}class Ya{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=e.parser,this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new zC(t,{props:e.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(t){const n=t.currentTarget.value,r=this.parser_(n);Pe(r)||(this.value.rawValue=r),this.view.refresh()}}function VC(i){return String(i)}function Jg(i){return i==="false"?!1:!!i}function hm(i){return VC(i)}function HC(i){return t=>i.reduce((e,n)=>e!==null?e:n(t),null)}const GC=qn(0);function Pc(i){return GC(i)+"%"}function Qg(i){return String(i)}function id(i){return i}function Zo({primary:i,secondary:t,forward:e,backward:n}){let r=!1;function s(o){r||(r=!0,o(),r=!1)}i.emitter.on("change",o=>{s(()=>{t.setRawValue(e(i.rawValue,t.rawValue),o.options)})}),t.emitter.on("change",o=>{s(()=>{i.setRawValue(n(i.rawValue,t.rawValue),o.options)}),s(()=>{t.setRawValue(e(i.rawValue,t.rawValue),o.options)})}),s(()=>{t.setRawValue(e(i.rawValue,t.rawValue),{forceEmit:!1,last:!0})})}function Bn(i,t){const e=i*(t.altKey?.1:1)*(t.shiftKey?10:1);return t.upKey?+e:t.downKey?-e:0}function qa(i){return{altKey:i.altKey,downKey:i.key==="ArrowDown",shiftKey:i.shiftKey,upKey:i.key==="ArrowUp"}}function gr(i){return{altKey:i.altKey,downKey:i.key==="ArrowLeft",shiftKey:i.shiftKey,upKey:i.key==="ArrowRight"}}function WC(i){return i==="ArrowUp"||i==="ArrowDown"}function tv(i){return WC(i)||i==="ArrowLeft"||i==="ArrowRight"}function Uu(i,t){var e,n;const r=t.ownerDocument.defaultView,s=t.getBoundingClientRect();return{x:i.pageX-(((e=r&&r.scrollX)!==null&&e!==void 0?e:0)+s.left),y:i.pageY-(((n=r&&r.scrollY)!==null&&n!==void 0?n:0)+s.top)}}class Bs{constructor(t){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=t,this.emitter=new Ke,t.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd_),t.addEventListener("mousedown",this.onMouseDown_)}computePosition_(t){const e=this.elem_.getBoundingClientRect();return{bounds:{width:e.width,height:e.height},point:t?{x:t.x,y:t.y}:null}}onMouseDown_(t){var e;t.preventDefault(),(e=t.currentTarget)===null||e===void 0||e.focus();const n=this.elem_.ownerDocument;n.addEventListener("mousemove",this.onDocumentMouseMove_),n.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(Uu(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseMove_(t){this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(Uu(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onDocumentMouseUp_(t){const e=this.elem_.ownerDocument;e.removeEventListener("mousemove",this.onDocumentMouseMove_),e.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(Uu(t,this.elem_)),sender:this,shiftKey:t.shiftKey})}onTouchStart_(t){t.preventDefault();const e=t.targetTouches.item(0),n=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-n.left,y:e.clientY-n.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchMove_(t){const e=t.targetTouches.item(0),n=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:t.altKey,data:this.computePosition_(e?{x:e.clientX-n.left,y:e.clientY-n.top}:void 0),sender:this,shiftKey:t.shiftKey}),this.lastTouch_=e}onTouchEnd_(t){var e;const n=(e=t.targetTouches.item(0))!==null&&e!==void 0?e:this.lastTouch_,r=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:t.altKey,data:this.computePosition_(n?{x:n.clientX-r.left,y:n.clientY-r.top}:void 0),sender:this,shiftKey:t.shiftKey})}}const fi=le("txt");class XC{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(fi(),fi(void 0,"num")),e.arrayPosition&&this.element.classList.add(fi(void 0,e.arrayPosition)),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("input");n.classList.add(fi("i")),n.type="text",e.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=e.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(fi()),this.inputElement.classList.add(fi("i"));const r=t.createElement("div");r.classList.add(fi("k")),this.element.appendChild(r),this.knobElement=r;const s=t.createElementNS(Vi,"svg");s.classList.add(fi("g")),this.knobElement.appendChild(s);const o=t.createElementNS(Vi,"path");o.classList.add(fi("gb")),s.appendChild(o),this.guideBodyElem_=o;const a=t.createElementNS(Vi,"path");a.classList.add(fi("gh")),s.appendChild(a),this.guideHeadElem_=a;const l=t.createElement("div");l.classList.add(le("tt")()),this.knobElement.appendChild(l),this.tooltipElem_=l,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.refresh()}onDraggingChange_(t){if(t.rawValue===null){this.element.classList.remove(fi(void 0,"drg"));return}this.element.classList.add(fi(void 0,"drg"));const e=t.rawValue/this.props_.get("pointerScale"),n=e+(e>0?-1:e<0?1:0),r=rn(-n,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${n+r},0 L${n},4 L${n+r},8`,`M ${e},-1 L${e},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${e},4`);const s=this.props_.get("formatter");this.tooltipElem_.textContent=s(this.value.rawValue),this.tooltipElem_.style.left=`${e}px`}refresh(){const t=this.props_.get("formatter");this.inputElement.value=t(this.value.rawValue)}onChange_(){this.refresh()}}class sl{constructor(t,e){var n;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.parser_=e.parser,this.props=e.props,this.sliderProps_=(n=e.sliderProps)!==null&&n!==void 0?n:null,this.value=e.value,this.viewProps=e.viewProps,this.dragging_=Le(null),this.view=new XC(t,{arrayPosition:e.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const r=new Bs(this.view.knobElement);r.emitter.on("down",this.onPointerDown_),r.emitter.on("move",this.onPointerMove_),r.emitter.on("up",this.onPointerUp_)}constrainValue_(t){var e,n;const r=(e=this.sliderProps_)===null||e===void 0?void 0:e.get("min"),s=(n=this.sliderProps_)===null||n===void 0?void 0:n.get("max");let o=t;return r!==void 0&&(o=Math.max(o,r)),s!==void 0&&(o=Math.min(o,s)),o}onInputChange_(t){const n=t.currentTarget.value,r=this.parser_(n);Pe(r)||(this.value.rawValue=this.constrainValue_(r)),this.view.refresh()}onInputKeyDown_(t){const e=Bn(this.props.get("keyScale"),qa(t));e!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+e),{forceEmit:!1,last:!1})}onInputKeyUp_(t){Bn(this.props.get("keyScale"),qa(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(t){if(!t.point)return null;const e=t.point.x-t.bounds.width/2;return this.constrainValue_(this.originRawValue_+e*this.props.get("pointerScale"))}onPointerMove_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(t){const e=this.computeDraggingValue_(t.data);e!==null&&(this.value.setRawValue(e,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const Ou=le("sld");class YC{constructor(t,e){this.onChange_=this.onChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onChange_),this.element=t.createElement("div"),this.element.classList.add(Ou()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(Ou("t")),e.viewProps.bindTabIndex(n),this.element.appendChild(n),this.trackElement=n;const r=t.createElement("div");r.classList.add(Ou("k")),this.trackElement.appendChild(r),this.knobElement=r,e.value.emitter.on("change",this.onChange_),this.value=e.value,this.update_()}update_(){const t=rn(ve(this.value.rawValue,this.props_.get("min"),this.props_.get("max"),0,100),0,100);this.knobElement.style.width=`${t}%`}onChange_(){this.update_()}}class qC{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.props=e.props,this.view=new YC(t,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bs(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){t.point&&this.value.setRawValue(ve(rn(t.point.x,0,t.bounds.width),0,t.bounds.width,this.props.get("min"),this.props.get("max")),e)}onPointerDownOrMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Bn(this.props.get("keyScale"),gr(t));e!==0&&this.value.setRawValue(this.value.rawValue+e,{forceEmit:!1,last:!1})}onKeyUp_(t){Bn(this.props.get("keyScale"),gr(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Nu=le("sldtxt");class jC{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Nu());const n=t.createElement("div");n.classList.add(Nu("s")),this.sliderView_=e.sliderView,n.appendChild(this.sliderView_.element),this.element.appendChild(n);const r=t.createElement("div");r.classList.add(Nu("t")),this.textView_=e.textView,r.appendChild(this.textView_.element),this.element.appendChild(r)}}class Ac{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.sliderC_=new qC(t,{props:e.sliderProps,value:e.value,viewProps:this.viewProps}),this.textC_=new sl(t,{parser:e.parser,props:e.textProps,sliderProps:e.sliderProps,value:e.value,viewProps:e.viewProps}),this.view=new jC(t,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}importProps(t){return li(t,null,e=>({max:e.required.number,min:e.required.number}),e=>{const n=this.sliderC_.props;return n.set("max",e.max),n.set("min",e.min),!0})}exportProps(){const t=this.sliderC_.props;return ci(null,{max:t.get("max"),min:t.get("min")})}}function ev(i){return{sliderProps:new Zt({keyScale:i.keyScale,max:i.max,min:i.min}),textProps:new Zt({formatter:Le(i.formatter),keyScale:i.keyScale,pointerScale:Le(i.pointerScale)})}}const $C={containerUnitSize:"cnt-usz"};function nv(i){return`--${$C[i]}`}function ja(i){return kg(i)}function Fr(i){if(Jh(i))return Oe(i,ja)}function lr(i,t){if(!i)return;const e=[],n=Og(i,t);n&&e.push(n);const r=Ng(i);return r&&e.push(r),new nl(e)}function KC(i){return i?i.major===$o.major:!1}function iv(i){if(i==="inline"||i==="popup")return i}function ol(i,t){i.write(t)}const Xl=le("ckb");class ZC{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Xl()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("label");n.classList.add(Xl("l")),this.element.appendChild(n),this.labelElement=n;const r=t.createElement("input");r.classList.add(Xl("i")),r.type="checkbox",this.labelElement.appendChild(r),this.inputElement=r,e.viewProps.bindDisabled(this.inputElement);const s=t.createElement("div");s.classList.add(Xl("w")),this.labelElement.appendChild(s);const o=kc(t,"check");s.appendChild(o),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class JC{constructor(t,e){this.onInputChange_=this.onInputChange_.bind(this),this.onLabelMouseDown_=this.onLabelMouseDown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new ZC(t,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.labelElement.addEventListener("mousedown",this.onLabelMouseDown_)}onInputChange_(t){const e=t.currentTarget;this.value.rawValue=e.checked,t.preventDefault(),t.stopPropagation()}onLabelMouseDown_(t){t.preventDefault()}}function QC(i){const t=[],e=np(i.options);return e&&t.push(e),new nl(t)}const tP=Un({id:"input-bool",type:"input",accept:(i,t)=>{if(typeof i!="boolean")return null;const e=Oe(t,n=>({options:n.optional.custom(rl),readonly:n.optional.constant(!1)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>Jg,constraint:i=>QC(i.params),writer:i=>ol},controller:i=>{const t=i.document,e=i.value,n=i.constraint,r=n&&Cc(n,il);return r?new $r(t,{props:new Zt({options:r.values.value("options")}),value:e,viewProps:i.viewProps}):new JC(t,{value:e,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="boolean"?null:i.controller.valueController instanceof $r?new tp(i.controller):null}}),os=le("col");class eP{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(os()),e.foldable.bindExpandedClass(this.element,os(void 0,"expanded")),qi(e.foldable,"completed",jo(this.element,os(void 0,"cpl")));const n=t.createElement("div");n.classList.add(os("h")),this.element.appendChild(n);const r=t.createElement("div");r.classList.add(os("s")),n.appendChild(r),this.swatchElement=r;const s=t.createElement("div");if(s.classList.add(os("t")),n.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const o=t.createElement("div");o.classList.add(os("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}function nP(i,t,e){const n=rn(i/255,0,1),r=rn(t/255,0,1),s=rn(e/255,0,1),o=Math.max(n,r,s),a=Math.min(n,r,s),l=o-a;let c=0,u=0;const h=(a+o)/2;return l!==0&&(u=l/(1-Math.abs(o+a-1)),n===o?c=(r-s)/l:r===o?c=2+(s-n)/l:c=4+(n-r)/l,c=c/6+(c<0?1:0)),[c*360,u*100,h*100]}function iP(i,t,e){const n=(i%360+360)%360,r=rn(t/100,0,1),s=rn(e/100,0,1),o=(1-Math.abs(2*s-1))*r,a=o*(1-Math.abs(n/60%2-1)),l=s-o/2;let c,u,h;return n>=0&&n<60?[c,u,h]=[o,a,0]:n>=60&&n<120?[c,u,h]=[a,o,0]:n>=120&&n<180?[c,u,h]=[0,o,a]:n>=180&&n<240?[c,u,h]=[0,a,o]:n>=240&&n<300?[c,u,h]=[a,0,o]:[c,u,h]=[o,0,a],[(c+l)*255,(u+l)*255,(h+l)*255]}function rP(i,t,e){const n=rn(i/255,0,1),r=rn(t/255,0,1),s=rn(e/255,0,1),o=Math.max(n,r,s),a=Math.min(n,r,s),l=o-a;let c;l===0?c=0:o===n?c=60*(((r-s)/l%6+6)%6):o===r?c=60*((s-n)/l+2):c=60*((n-r)/l+4);const u=o===0?0:l/o,h=o;return[c,u*100,h*100]}function rv(i,t,e){const n=Lg(i,360),r=rn(t/100,0,1),s=rn(e/100,0,1),o=s*r,a=o*(1-Math.abs(n/60%2-1)),l=s-o;let c,u,h;return n>=0&&n<60?[c,u,h]=[o,a,0]:n>=60&&n<120?[c,u,h]=[a,o,0]:n>=120&&n<180?[c,u,h]=[0,o,a]:n>=180&&n<240?[c,u,h]=[0,a,o]:n>=240&&n<300?[c,u,h]=[a,0,o]:[c,u,h]=[o,0,a],[(c+l)*255,(u+l)*255,(h+l)*255]}function sP(i,t,e){const n=e+t*(100-Math.abs(2*e-100))/200;return[i,n!==0?t*(100-Math.abs(2*e-100))/n:0,e+t*(100-Math.abs(2*e-100))/(2*100)]}function oP(i,t,e){const n=100-Math.abs(e*(200-t)/100-100);return[i,n!==0?t*e/n:0,e*(200-t)/(2*100)]}function ji(i){return[i[0],i[1],i[2]]}function zc(i,t){return[i[0],i[1],i[2],t]}const aP={hsl:{hsl:(i,t,e)=>[i,t,e],hsv:sP,rgb:iP},hsv:{hsl:oP,hsv:(i,t,e)=>[i,t,e],rgb:rv},rgb:{hsl:nP,hsv:rP,rgb:(i,t,e)=>[i,t,e]}};function Wo(i,t){return[t==="float"?1:i==="rgb"?255:360,t==="float"?1:i==="rgb"?255:100,t==="float"?1:i==="rgb"?255:100]}function lP(i,t){return i===t?t:Lg(i,t)}function sv(i,t,e){var n;const r=Wo(t,e);return[t==="rgb"?rn(i[0],0,r[0]):lP(i[0],r[0]),rn(i[1],0,r[1]),rn(i[2],0,r[2]),rn((n=i[3])!==null&&n!==void 0?n:1,0,1)]}function dm(i,t,e,n){const r=Wo(t,e),s=Wo(t,n);return i.map((o,a)=>o/r[a]*s[a])}function ov(i,t,e){const n=dm(i,t.mode,t.type,"int"),r=aP[t.mode][e.mode](...n);return dm(r,e.mode,"int",e.type)}class de{static black(){return new de([0,0,0],"rgb")}constructor(t,e){this.type="int",this.mode=e,this.comps_=sv(t,e,this.type)}getComponents(t){return zc(ov(ji(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const Tr=le("colp");class cP{constructor(t,e){this.alphaViews_=null,this.element=t.createElement("div"),this.element.classList.add(Tr()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(Tr("hsv"));const r=t.createElement("div");r.classList.add(Tr("sv")),this.svPaletteView_=e.svPaletteView,r.appendChild(this.svPaletteView_.element),n.appendChild(r);const s=t.createElement("div");s.classList.add(Tr("h")),this.hPaletteView_=e.hPaletteView,s.appendChild(this.hPaletteView_.element),n.appendChild(s),this.element.appendChild(n);const o=t.createElement("div");if(o.classList.add(Tr("rgb")),this.textsView_=e.textsView,o.appendChild(this.textsView_.element),this.element.appendChild(o),e.alphaViews){this.alphaViews_={palette:e.alphaViews.palette,text:e.alphaViews.text};const a=t.createElement("div");a.classList.add(Tr("a"));const l=t.createElement("div");l.classList.add(Tr("ap")),l.appendChild(this.alphaViews_.palette.element),a.appendChild(l);const c=t.createElement("div");c.classList.add(Tr("at")),c.appendChild(this.alphaViews_.text.element),a.appendChild(c),this.element.appendChild(a)}}get allFocusableElements(){const t=[this.svPaletteView_.element,this.hPaletteView_.element,this.textsView_.modeSelectElement,...this.textsView_.inputViews.map(e=>e.inputElement)];return this.alphaViews_&&t.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),t}}function uP(i){return i==="int"?"int":i==="float"?"float":void 0}function ip(i){return Oe(i,t=>({color:t.optional.object({alpha:t.optional.boolean,type:t.optional.custom(uP)}),expanded:t.optional.boolean,picker:t.optional.custom(iv),readonly:t.optional.constant(!1)}))}function Us(i){return i?.1:1}function av(i){var t;return(t=i.color)===null||t===void 0?void 0:t.type}class rp{constructor(t,e){this.type="float",this.mode=e,this.comps_=sv(t,e,this.type)}getComponents(t){return zc(ov(ji(this.comps_),{mode:this.mode,type:this.type},{mode:t??this.mode,type:this.type}),this.comps_[3])}toRgbaObject(){const t=this.getComponents("rgb");return{r:t[0],g:t[1],b:t[2],a:t[3]}}}const hP={int:(i,t)=>new de(i,t),float:(i,t)=>new rp(i,t)};function sp(i,t,e){return hP[e](i,t)}function dP(i){return i.type==="float"}function pP(i){return i.type==="int"}function fP(i){const t=i.getComponents(),e=Wo(i.mode,"int");return new de([Math.round(ve(t[0],0,1,0,e[0])),Math.round(ve(t[1],0,1,0,e[1])),Math.round(ve(t[2],0,1,0,e[2])),t[3]],i.mode)}function mP(i){const t=i.getComponents(),e=Wo(i.mode,"int");return new rp([ve(t[0],0,e[0],0,1),ve(t[1],0,e[1],0,1),ve(t[2],0,e[2],0,1),t[3]],i.mode)}function In(i,t){if(i.type===t)return i;if(pP(i)&&t==="float")return mP(i);if(dP(i)&&t==="int")return fP(i);throw ke.shouldNeverHappen()}function _P(i,t){return i.alpha===t.alpha&&i.mode===t.mode&&i.notation===t.notation&&i.type===t.type}function wi(i,t){const e=i.match(/^(.+)%$/);return Math.min(e?parseFloat(e[1])*.01*t:parseFloat(i),t)}const gP={deg:i=>i,grad:i=>i*360/400,rad:i=>i*360/(2*Math.PI),turn:i=>i*360};function lv(i){const t=i.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!t)return parseFloat(i);const e=parseFloat(t[1]),n=t[2];return gP[n](e)}function cv(i){const t=i.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[wi(t[1],255),wi(t[2],255),wi(t[3],255)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function vP(i){const t=cv(i);return t?new de(t,"rgb"):null}function uv(i){const t=i.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[wi(t[1],255),wi(t[2],255),wi(t[3],255),wi(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function xP(i){const t=uv(i);return t?new de(t,"rgb"):null}function hv(i){const t=i.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[lv(t[1]),wi(t[2],100),wi(t[3],100)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function bP(i){const t=hv(i);return t?new de(t,"hsl"):null}function dv(i){const t=i.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!t)return null;const e=[lv(t[1]),wi(t[2],100),wi(t[3],100),wi(t[4],1)];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function yP(i){const t=dv(i);return t?new de(t,"hsl"):null}function pv(i){const t=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)];const e=i.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]:null}function wP(i){const t=pv(i);return t?new de(t,"rgb"):null}function fv(i){const t=i.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(t)return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),ve(parseInt(t[4]+t[4],16),0,255,0,1)];const e=i.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return e?[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),ve(parseInt(e[4],16),0,255,0,1)]:null}function EP(i){const t=fv(i);return t?new de(t,"rgb"):null}function mv(i){const t=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])?null:e}function pm(i){return t=>{const e=mv(t);return e?sp(e,"rgb",i):null}}function _v(i){const t=i.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!t)return null;const e=[parseFloat(t[1]),parseFloat(t[2]),parseFloat(t[3]),parseFloat(t[4])];return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])||isNaN(e[3])?null:e}function fm(i){return t=>{const e=_v(t);return e?sp(e,"rgb",i):null}}const MP=[{parser:pv,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:fv,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:cv,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:uv,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:hv,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:dv,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:mv,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:_v,result:{alpha:!0,mode:"rgb",notation:"object"}}];function SP(i){return MP.reduce((t,{parser:e,result:n})=>t||(e(i)?n:null),null)}function TP(i,t="int"){const e=SP(i);return e?e.notation==="hex"&&t!=="float"?Object.assign(Object.assign({},e),{type:"int"}):e.notation==="func"?Object.assign(Object.assign({},e),{type:t}):null:null}function al(i){const t=[wP,EP,vP,xP,bP,yP];i==="int"&&t.push(pm("int"),fm("int")),i==="float"&&t.push(pm("float"),fm("float"));const e=HC(t);return n=>{const r=e(n);return r?In(r,i):null}}function CP(i){const t=al("int");if(typeof i!="string")return de.black();const e=t(i);return e??de.black()}function gv(i){const t=rn(Math.floor(i),0,255).toString(16);return t.length===1?`0${t}`:t}function op(i,t="#"){const e=ji(i.getComponents("rgb")).map(gv).join("");return`${t}${e}`}function ap(i,t="#"){const e=i.getComponents("rgb"),n=[e[0],e[1],e[2],e[3]*255].map(gv).join("");return`${t}${n}`}function vv(i){const t=qn(0),e=In(i,"int");return`rgb(${ji(e.getComponents("rgb")).map(r=>t(r)).join(", ")})`}function ac(i){const t=qn(2),e=qn(0);return`rgba(${In(i,"int").getComponents("rgb").map((s,o)=>(o===3?t:e)(s)).join(", ")})`}function PP(i){const t=[qn(0),Pc,Pc],e=In(i,"int");return`hsl(${ji(e.getComponents("hsl")).map((r,s)=>t[s](r)).join(", ")})`}function AP(i){const t=[qn(0),Pc,Pc,qn(2)];return`hsla(${In(i,"int").getComponents("hsl").map((r,s)=>t[s](r)).join(", ")})`}function xv(i,t){const e=qn(t==="float"?2:0),n=["r","g","b"],r=In(i,t);return`{${ji(r.getComponents("rgb")).map((o,a)=>`${n[a]}: ${e(o)}`).join(", ")}}`}function RP(i){return t=>xv(t,i)}function bv(i,t){const e=qn(2),n=qn(t==="float"?2:0),r=["r","g","b","a"];return`{${In(i,t).getComponents("rgb").map((a,l)=>{const c=l===3?e:n;return`${r[l]}: ${c(a)}`}).join(", ")}}`}function DP(i){return t=>bv(t,i)}const LP=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:op},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:ap},{format:{alpha:!1,mode:"rgb",notation:"func",type:"int"},stringifier:vv},{format:{alpha:!0,mode:"rgb",notation:"func",type:"int"},stringifier:ac},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:PP},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:AP},...["int","float"].reduce((i,t)=>[...i,{format:{alpha:!1,mode:"rgb",notation:"object",type:t},stringifier:RP(t)},{format:{alpha:!0,mode:"rgb",notation:"object",type:t},stringifier:DP(t)}],[])];function yv(i){return LP.reduce((t,e)=>t||(_P(e.format,i)?e.stringifier:null),null)}const ca=le("apl");class IP{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(ca()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const n=t.createElement("div");n.classList.add(ca("b")),this.element.appendChild(n);const r=t.createElement("div");r.classList.add(ca("c")),n.appendChild(r),this.colorElem_=r;const s=t.createElement("div");s.classList.add(ca("m")),this.element.appendChild(s),this.markerElem_=s;const o=t.createElement("div");o.classList.add(ca("p")),this.markerElem_.appendChild(o),this.previewElem_=o,this.update_()}update_(){const t=this.value.rawValue,e=t.getComponents("rgb"),n=new de([e[0],e[1],e[2],0],"rgb"),r=new de([e[0],e[1],e[2],255],"rgb"),s=["to right",ac(n),ac(r)];this.colorElem_.style.background=`linear-gradient(${s.join(",")})`,this.previewElem_.style.backgroundColor=ac(t);const o=ve(e[3],0,1,0,100);this.markerElem_.style.left=`${o}%`}onValueChange_(){this.update_()}}class UP{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new IP(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const n=t.point.x/t.bounds.width,r=this.value.rawValue,[s,o,a]=r.getComponents("hsv");this.value.setRawValue(new de([s,o,a,n],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Bn(Us(!0),gr(t));if(e===0)return;const n=this.value.rawValue,[r,s,o,a]=n.getComponents("hsv");this.value.setRawValue(new de([r,s,o,a+e],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Bn(Us(!0),gr(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ro=le("coltxt");function OP(i){const t=i.createElement("select"),e=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"},{text:"HEX",value:"hex"}];return t.appendChild(e.reduce((n,r)=>{const s=i.createElement("option");return s.textContent=r.text,s.value=r.value,n.appendChild(s),n},i.createDocumentFragment())),t}class NP{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(ro()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(ro("m")),this.modeElem_=OP(t),this.modeElem_.classList.add(ro("ms")),n.appendChild(this.modeSelectElement),e.viewProps.bindDisabled(this.modeElem_);const r=t.createElement("div");r.classList.add(ro("mm")),r.appendChild(kc(t,"dropdown")),n.appendChild(r),this.element.appendChild(n);const s=t.createElement("div");s.classList.add(ro("w")),this.element.appendChild(s),this.inputsElem_=s,this.inputViews_=e.inputViews,this.applyInputViews_(),hr(e.mode,o=>{this.modeElem_.value=o})}get modeSelectElement(){return this.modeElem_}get inputViews(){return this.inputViews_}set inputViews(t){this.inputViews_=t,this.applyInputViews_()}applyInputViews_(){Vg(this.inputsElem_);const t=this.element.ownerDocument;this.inputViews_.forEach(e=>{const n=t.createElement("div");n.classList.add(ro("c")),n.appendChild(e.element),this.inputsElem_.appendChild(n)})}}function FP(i){return qn(i==="float"?2:0)}function kP(i,t,e){const n=Wo(i,t)[e];return new Qa({min:0,max:n})}function BP(i,t,e){return new sl(i,{arrayPosition:e===0?"fst":e===3-1?"lst":"mid",parser:t.parser,props:Zt.fromObject({formatter:FP(t.colorType),keyScale:Us(!1),pointerScale:t.colorType==="float"?.01:1}),value:Le(0,{constraint:kP(t.colorMode,t.colorType,e)}),viewProps:t.viewProps})}function zP(i,t){const e={colorMode:t.colorMode,colorType:t.colorType,parser:_r,viewProps:t.viewProps};return[0,1,2].map(n=>{const r=BP(i,e,n);return Zo({primary:t.value,secondary:r.value,forward(s){return In(s,t.colorType).getComponents(t.colorMode)[n]},backward(s,o){const a=t.colorMode,c=In(s,t.colorType).getComponents(a);c[n]=o;const u=sp(zc(ji(c),c[3]),a,t.colorType);return In(u,"int")}}),r})}function VP(i,t){const e=new Ya(i,{parser:al("int"),props:Zt.fromObject({formatter:op}),value:Le(de.black()),viewProps:t.viewProps});return Zo({primary:t.value,secondary:e.value,forward:n=>new de(ji(n.getComponents()),n.mode),backward:(n,r)=>new de(zc(ji(r.getComponents(n.mode)),n.getComponents()[3]),n.mode)}),[e]}function HP(i){return i!=="hex"}class GP{constructor(t,e){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=e.colorType,this.value=e.value,this.viewProps=e.viewProps,this.colorMode=Le(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(t),this.view=new NP(t,{mode:this.colorMode,inputViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view],viewProps:this.viewProps}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(t){const e=this.colorMode.rawValue;return HP(e)?zP(t,{colorMode:e,colorType:this.colorType_,value:this.value,viewProps:this.viewProps}):VP(t,{value:this.value,viewProps:this.viewProps})}onModeSelectChange_(t){const e=t.currentTarget;this.colorMode.rawValue=e.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.inputViews=this.ccs_.map(n=>n.view)}}const Fu=le("hpl");class WP{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(Fu()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const n=t.createElement("div");n.classList.add(Fu("c")),this.element.appendChild(n);const r=t.createElement("div");r.classList.add(Fu("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=this.value.rawValue,[e]=t.getComponents("hsv");this.markerElem_.style.backgroundColor=vv(new de([e,100,100],"hsv"));const n=ve(e,0,360,0,100);this.markerElem_.style.left=`${n}%`}onValueChange_(){this.update_()}}class XP{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new WP(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const n=ve(rn(t.point.x,0,t.bounds.width),0,t.bounds.width,0,360),r=this.value.rawValue,[,s,o,a]=r.getComponents("hsv");this.value.setRawValue(new de([n,s,o,a],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){const e=Bn(Us(!1),gr(t));if(e===0)return;const n=this.value.rawValue,[r,s,o,a]=n.getComponents("hsv");this.value.setRawValue(new de([r+e,s,o,a],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){Bn(Us(!1),gr(t))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const ku=le("svp"),mm=64;class YP{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),this.value=e.value,this.value.emitter.on("change",this.onValueChange_),this.element=t.createElement("div"),this.element.classList.add(ku()),e.viewProps.bindClassModifiers(this.element),e.viewProps.bindTabIndex(this.element);const n=t.createElement("canvas");n.height=mm,n.width=mm,n.classList.add(ku("c")),this.element.appendChild(n),this.canvasElement=n;const r=t.createElement("div");r.classList.add(ku("m")),this.element.appendChild(r),this.markerElem_=r,this.update_()}update_(){const t=qT(this.canvasElement);if(!t)return;const n=this.value.rawValue.getComponents("hsv"),r=this.canvasElement.width,s=this.canvasElement.height,o=t.getImageData(0,0,r,s),a=o.data;for(let u=0;u<s;u++)for(let h=0;h<r;h++){const d=ve(h,0,r,0,100),p=ve(u,0,s,100,0),g=rv(n[0],d,p),_=(u*r+h)*4;a[_]=g[0],a[_+1]=g[1],a[_+2]=g[2],a[_+3]=255}t.putImageData(o,0,0);const l=ve(n[1],0,100,0,100);this.markerElem_.style.left=`${l}%`;const c=ve(n[2],0,100,100,0);this.markerElem_.style.top=`${c}%`}onValueChange_(){this.update_()}}class qP{constructor(t,e){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.view=new YP(t,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bs(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const n=ve(t.point.x,0,t.bounds.width,0,100),r=ve(t.point.y,0,t.bounds.height,100,0),[s,,,o]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new de([s,n,r,o],"hsv"),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onKeyDown_(t){tv(t.key)&&t.preventDefault();const[e,n,r,s]=this.value.rawValue.getComponents("hsv"),o=Us(!1),a=Bn(o,gr(t)),l=Bn(o,qa(t));a===0&&l===0||this.value.setRawValue(new de([e,n+a,r+l,s],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(t){const e=Us(!1),n=Bn(e,gr(t)),r=Bn(e,qa(t));n===0&&r===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class jP{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.hPaletteC_=new XP(t,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new qP(t,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=e.supportsAlpha?{palette:new UP(t,{value:this.value,viewProps:this.viewProps}),text:new sl(t,{parser:_r,props:Zt.fromObject({pointerScale:.01,keyScale:.1,formatter:qn(2)}),value:Le(0,{constraint:new Qa({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Zo({primary:this.value,secondary:this.alphaIcs_.text.value,forward:n=>n.getComponents()[3],backward:(n,r)=>{const s=n.getComponents();return s[3]=r,new de(s,n.mode)}}),this.textsC_=new GP(t,{colorType:e.colorType,value:this.value,viewProps:this.viewProps}),this.view=new cP(t,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:e.supportsAlpha,svPaletteView:this.svPaletteC_.view,textsView:this.textsC_.view,viewProps:this.viewProps})}get textsController(){return this.textsC_}}const Bu=le("colsw");class $P{constructor(t,e){this.onValueChange_=this.onValueChange_.bind(this),e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.element=t.createElement("div"),this.element.classList.add(Bu()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(Bu("sw")),this.element.appendChild(n),this.swatchElem_=n;const r=t.createElement("button");r.classList.add(Bu("b")),e.viewProps.bindDisabled(r),this.element.appendChild(r),this.buttonElement=r,this.update_()}update_(){const t=this.value.rawValue;this.swatchElem_.style.backgroundColor=ap(t)}onValueChange_(){this.update_()}}class KP{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new $P(t,{value:this.value,viewProps:this.viewProps})}}class lp{constructor(t,e){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=el.create(e.expanded),this.swatchC_=new KP(t,{value:this.value,viewProps:this.viewProps});const n=this.swatchC_.view.buttonElement;n.addEventListener("blur",this.onButtonBlur_),n.addEventListener("click",this.onButtonClick_),this.textC_=new Ya(t,{parser:e.parser,props:Zt.fromObject({formatter:e.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new eP(t,{foldable:this.foldable_,pickerLayout:e.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=e.pickerLayout==="popup"?new Zg(t,{viewProps:this.viewProps}):null;const r=new jP(t,{colorType:e.colorType,supportsAlpha:e.supportsAlpha,value:this.value,viewProps:this.viewProps});r.view.allFocusableElements.forEach(s=>{s.addEventListener("blur",this.onPopupChildBlur_),s.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=r,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(r.view.element),Zo({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:s=>s,backward:(s,o)=>o})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qd(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,n=t.relatedTarget;(!n||!e.contains(n))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,n=Hg(t);n&&e.contains(n)||n&&n===this.swatchC_.view.buttonElement&&!qd(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function ZP(i){return ji(i.getComponents("rgb")).reduce((t,e)=>t<<8|Math.floor(e)&255,0)}function JP(i){return i.getComponents("rgb").reduce((t,e,n)=>{const r=Math.floor(n===3?e*255:e)&255;return t<<8|r},0)>>>0}function QP(i){return new de([i>>16&255,i>>8&255,i&255],"rgb")}function tA(i){return new de([i>>24&255,i>>16&255,i>>8&255,ve(i&255,0,255,0,1)],"rgb")}function eA(i){return typeof i!="number"?de.black():QP(i)}function nA(i){return typeof i!="number"?de.black():tA(i)}function lc(i,t){return typeof i!="object"||Pe(i)?!1:t in i&&typeof i[t]=="number"}function wv(i){return lc(i,"r")&&lc(i,"g")&&lc(i,"b")}function Ev(i){return wv(i)&&lc(i,"a")}function Mv(i){return wv(i)}function cp(i,t){if(i.mode!==t.mode||i.type!==t.type)return!1;const e=i.getComponents(),n=t.getComponents();for(let r=0;r<e.length;r++)if(e[r]!==n[r])return!1;return!0}function _m(i){return"a"in i?[i.r,i.g,i.b,i.a]:[i.r,i.g,i.b]}function iA(i){const t=yv(i);return t?(e,n)=>{ol(e,t(n))}:null}function rA(i){const t=i?JP:ZP;return(e,n)=>{ol(e,t(n))}}function sA(i,t,e){const r=In(t,e).toRgbaObject();i.writeProperty("r",r.r),i.writeProperty("g",r.g),i.writeProperty("b",r.b),i.writeProperty("a",r.a)}function oA(i,t,e){const r=In(t,e).toRgbaObject();i.writeProperty("r",r.r),i.writeProperty("g",r.g),i.writeProperty("b",r.b)}function aA(i,t){return(e,n)=>{i?sA(e,n,t):oA(e,n,t)}}function lA(i){var t;return!!(!((t=i==null?void 0:i.color)===null||t===void 0)&&t.alpha)}function cA(i){return i?t=>ap(t,"0x"):t=>op(t,"0x")}function uA(i){return"color"in i||i.view==="color"}const hA=Un({id:"input-color-number",type:"input",accept:(i,t)=>{if(typeof i!="number"||!uA(t))return null;const e=ip(t);return e?{initialValue:i,params:Object.assign(Object.assign({},e),{supportsAlpha:lA(t)})}:null},binding:{reader:i=>i.params.supportsAlpha?nA:eA,equals:cp,writer:i=>rA(i.params.supportsAlpha)},controller:i=>{var t,e;return new lp(i.document,{colorType:"int",expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,formatter:cA(i.params.supportsAlpha),parser:al("int"),pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i.params.supportsAlpha,value:i.value,viewProps:i.viewProps})}});function dA(i,t){if(!Mv(i))return In(de.black(),t);if(t==="int"){const e=_m(i);return new de(e,"rgb")}if(t==="float"){const e=_m(i);return new rp(e,"rgb")}return In(de.black(),"int")}function pA(i){return Ev(i)}function fA(i){return t=>{const e=dA(t,i);return In(e,"int")}}function mA(i,t){return e=>i?bv(e,t):xv(e,t)}const _A=Un({id:"input-color-object",type:"input",accept:(i,t)=>{var e;if(!Mv(i))return null;const n=ip(t);return n?{initialValue:i,params:Object.assign(Object.assign({},n),{colorType:(e=av(t))!==null&&e!==void 0?e:"int"})}:null},binding:{reader:i=>fA(i.params.colorType),equals:cp,writer:i=>aA(pA(i.initialValue),i.params.colorType)},controller:i=>{var t,e;const n=Ev(i.initialValue);return new lp(i.document,{colorType:i.params.colorType,expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,formatter:mA(n,i.params.colorType),parser:al("int"),pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:n,value:i.value,viewProps:i.viewProps})}}),gA=Un({id:"input-color-string",type:"input",accept:(i,t)=>{if(typeof i!="string"||t.view==="text")return null;const e=TP(i,av(t));if(!e)return null;const n=yv(e);if(!n)return null;const r=ip(t);return r?{initialValue:i,params:Object.assign(Object.assign({},r),{format:e,stringifier:n})}:null},binding:{reader:()=>CP,equals:cp,writer:i=>{const t=iA(i.params.format);if(!t)throw ke.notBindable();return t}},controller:i=>{var t,e;return new lp(i.document,{colorType:i.params.format.type,expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,formatter:i.params.stringifier,parser:al("int"),pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",supportsAlpha:i.params.format.alpha,value:i.value,viewProps:i.viewProps})}});class up{constructor(t){this.components=t.components,this.asm_=t.assembly}constrain(t){const e=this.asm_.toComponents(t).map((n,r)=>{var s,o;return(o=(s=this.components[r])===null||s===void 0?void 0:s.constrain(n))!==null&&o!==void 0?o:n});return this.asm_.fromComponents(e)}}const gm=le("pndtxt");class vA{constructor(t,e){this.textViews=e.textViews,this.element=t.createElement("div"),this.element.classList.add(gm()),this.textViews.forEach(n=>{const r=t.createElement("div");r.classList.add(gm("a")),r.appendChild(n.element),this.element.appendChild(r)})}}function xA(i,t,e){return new sl(i,{arrayPosition:e===0?"fst":e===t.axes.length-1?"lst":"mid",parser:t.parser,props:t.axes[e].textProps,value:Le(0,{constraint:t.axes[e].constraint}),viewProps:t.viewProps})}class hp{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.acs_=e.axes.map((n,r)=>xA(t,e,r)),this.acs_.forEach((n,r)=>{Zo({primary:this.value,secondary:n.value,forward:s=>e.assembly.toComponents(s)[r],backward:(s,o)=>{const a=e.assembly.toComponents(s);return a[r]=o,e.assembly.fromComponents(a)}})}),this.view=new vA(t,{textViews:this.acs_.map(n=>n.view)})}get textControllers(){return this.acs_}}class bA extends Xa{get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}}function yA(i,t){const e=[],n=Og(i,t);n&&e.push(n);const r=Ng(i);r&&e.push(r);const s=np(i.options);return s&&e.push(s),new nl(e)}const wA=Un({id:"input-number",type:"input",accept:(i,t)=>{if(typeof i!="number")return null;const e=Oe(t,n=>Object.assign(Object.assign({},kg(n)),{options:n.optional.custom(rl),readonly:n.optional.constant(!1)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>Dg,constraint:i=>yA(i.params,i.initialValue),writer:i=>ol},controller:i=>{const t=i.value,e=i.constraint,n=e&&Cc(e,il);if(n)return new $r(i.document,{props:new Zt({options:n.values.value("options")}),value:t,viewProps:i.viewProps});const r=Fg(i.params,t.rawValue),s=e&&Cc(e,Qa);return s?new Ac(i.document,Object.assign(Object.assign({},ev(Object.assign(Object.assign({},r),{keyScale:Le(r.keyScale),max:s.values.value("max"),min:s.values.value("min")}))),{parser:_r,value:t,viewProps:i.viewProps})):new sl(i.document,{parser:_r,props:Zt.fromObject(r),value:t,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="number"?null:i.controller.valueController instanceof Ac?new bA(i.controller):i.controller.valueController instanceof $r?new tp(i.controller):null}});class Gr{constructor(t=0,e=0){this.x=t,this.y=e}getComponents(){return[this.x,this.y]}static isObject(t){if(Pe(t))return!1;const e=t.x,n=t.y;return!(typeof e!="number"||typeof n!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y}toObject(){return{x:this.x,y:this.y}}}const Sv={toComponents:i=>i.getComponents(),fromComponents:i=>new Gr(...i)},so=le("p2d");class EA{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(so()),e.viewProps.bindClassModifiers(this.element),hr(e.expanded,jo(this.element,so(void 0,"expanded")));const n=t.createElement("div");n.classList.add(so("h")),this.element.appendChild(n);const r=t.createElement("button");r.classList.add(so("b")),r.appendChild(kc(t,"p2dpad")),e.viewProps.bindDisabled(r),n.appendChild(r),this.buttonElement=r;const s=t.createElement("div");if(s.classList.add(so("t")),n.appendChild(s),this.textElement=s,e.pickerLayout==="inline"){const o=t.createElement("div");o.classList.add(so("p")),this.element.appendChild(o),this.pickerElement=o}else this.pickerElement=null}}const Cr=le("p2dp");class MA{constructor(t,e){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onPropsChange_=this.onPropsChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.props_=e.props,this.props_.emitter.on("change",this.onPropsChange_),this.element=t.createElement("div"),this.element.classList.add(Cr()),e.layout==="popup"&&this.element.classList.add(Cr(void 0,"p")),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("div");n.classList.add(Cr("p")),e.viewProps.bindTabIndex(n),this.element.appendChild(n),this.padElement=n;const r=t.createElementNS(Vi,"svg");r.classList.add(Cr("g")),this.padElement.appendChild(r),this.svgElem_=r;const s=t.createElementNS(Vi,"line");s.classList.add(Cr("ax")),s.setAttributeNS(null,"x1","0"),s.setAttributeNS(null,"y1","50%"),s.setAttributeNS(null,"x2","100%"),s.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(s);const o=t.createElementNS(Vi,"line");o.classList.add(Cr("ax")),o.setAttributeNS(null,"x1","50%"),o.setAttributeNS(null,"y1","0"),o.setAttributeNS(null,"x2","50%"),o.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(o);const a=t.createElementNS(Vi,"line");a.classList.add(Cr("l")),a.setAttributeNS(null,"x1","50%"),a.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(a),this.lineElem_=a;const l=t.createElement("div");l.classList.add(Cr("m")),this.padElement.appendChild(l),this.markerElem_=l,e.value.emitter.on("change",this.onValueChange_),this.value=e.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[t,e]=this.value.rawValue.getComponents(),n=this.props_.get("max"),r=ve(t,-n,+n,0,100),s=ve(e,-n,+n,0,100),o=this.props_.get("invertsY")?100-s:s;this.lineElem_.setAttributeNS(null,"x2",`${r}%`),this.lineElem_.setAttributeNS(null,"y2",`${o}%`),this.markerElem_.style.left=`${r}%`,this.markerElem_.style.top=`${o}%`}onValueChange_(){this.update_()}onPropsChange_(){this.update_()}onFoldableChange_(){this.update_()}}function vm(i,t,e){return[Bn(t[0],gr(i)),Bn(t[1],qa(i))*(e?1:-1)]}class SA{constructor(t,e){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.view=new MA(t,{layout:e.layout,props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new Bs(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(t,e){if(!t.point)return;const n=this.props.get("max"),r=ve(t.point.x,0,t.bounds.width,-n,+n),s=ve(this.props.get("invertsY")?t.bounds.height-t.point.y:t.point.y,0,t.bounds.height,-n,+n);this.value.setRawValue(new Gr(r,s),e)}onPointerDown_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerMove_(t){this.handlePointerEvent_(t.data,{forceEmit:!1,last:!1})}onPointerUp_(t){this.handlePointerEvent_(t.data,{forceEmit:!0,last:!0})}onPadKeyDown_(t){tv(t.key)&&t.preventDefault();const[e,n]=vm(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&n===0||this.value.setRawValue(new Gr(this.value.rawValue.x+e,this.value.rawValue.y+n),{forceEmit:!1,last:!1})}onPadKeyUp_(t){const[e,n]=vm(t,[this.props.get("xKeyScale"),this.props.get("yKeyScale")],this.props.get("invertsY"));e===0&&n===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class TA{constructor(t,e){var n,r;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=e.value,this.viewProps=e.viewProps,this.foldable_=el.create(e.expanded),this.popC_=e.pickerLayout==="popup"?new Zg(t,{viewProps:this.viewProps}):null;const s=new SA(t,{layout:e.pickerLayout,props:new Zt({invertsY:Le(e.invertsY),max:Le(e.max),xKeyScale:e.axes[0].textProps.value("keyScale"),yKeyScale:e.axes[1].textProps.value("keyScale")}),value:this.value,viewProps:this.viewProps});s.view.allFocusableElements.forEach(o=>{o.addEventListener("blur",this.onPopupChildBlur_),o.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=s,this.textC_=new hp(t,{assembly:Sv,axes:e.axes,parser:e.parser,value:this.value,viewProps:this.viewProps}),this.view=new EA(t,{expanded:this.foldable_.value("expanded"),pickerLayout:e.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(n=this.view.buttonElement)===null||n===void 0||n.addEventListener("blur",this.onPadButtonBlur_),(r=this.view.buttonElement)===null||r===void 0||r.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Zo({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:o=>o,backward:(o,a)=>a})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),Qd(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onPadButtonBlur_(t){if(!this.popC_)return;const e=this.view.element,n=t.relatedTarget;(!n||!e.contains(n))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(t){if(!this.popC_)return;const e=this.popC_.view.element,n=Hg(t);n&&e.contains(n)||n&&n===this.view.buttonElement&&!qd(e.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(t){this.popC_?t.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&t.key==="Escape"&&this.view.buttonElement.focus()}}function CA(i){return Gr.isObject(i)?new Gr(i.x,i.y):new Gr}function PA(i,t){i.writeProperty("x",t.x),i.writeProperty("y",t.y)}function AA(i,t){return new up({assembly:Sv,components:[lr(Object.assign(Object.assign({},i),i.x),t.x),lr(Object.assign(Object.assign({},i),i.y),t.y)]})}function xm(i,t){var e,n;if(!Pe(i.min)||!Pe(i.max))return Math.max(Math.abs((e=i.min)!==null&&e!==void 0?e:0),Math.abs((n=i.max)!==null&&n!==void 0?n:0));const r=Ig(i);return Math.max(Math.abs(r)*10,Math.abs(t)*10)}function RA(i,t){var e,n;const r=xm(Ls(i,(e=i.x)!==null&&e!==void 0?e:{}),t.x),s=xm(Ls(i,(n=i.y)!==null&&n!==void 0?n:{}),t.y);return Math.max(r,s)}function DA(i){if(!("y"in i))return!1;const t=i.y;return t&&"inverted"in t?!!t.inverted:!1}const LA=Un({id:"input-point2d",type:"input",accept:(i,t)=>{if(!Gr.isObject(i))return null;const e=Oe(t,n=>Object.assign(Object.assign({},ja(n)),{expanded:n.optional.boolean,picker:n.optional.custom(iv),readonly:n.optional.constant(!1),x:n.optional.custom(Fr),y:n.optional.object(Object.assign(Object.assign({},ja(n)),{inverted:n.optional.boolean}))}));return e?{initialValue:i,params:e}:null},binding:{reader:()=>CA,constraint:i=>AA(i.params,i.initialValue),equals:Gr.equals,writer:()=>PA},controller:i=>{var t,e;const n=i.document,r=i.value,s=i.constraint,o=[i.params.x,i.params.y];return new TA(n,{axes:r.rawValue.getComponents().map((a,l)=>{var c;return Yd({constraint:s.components[l],initialValue:a,params:Ls(i.params,(c=o[l])!==null&&c!==void 0?c:{})})}),expanded:(t=i.params.expanded)!==null&&t!==void 0?t:!1,invertsY:DA(i.params),max:RA(i.params,r.rawValue),parser:_r,pickerLayout:(e=i.params.picker)!==null&&e!==void 0?e:"popup",value:r,viewProps:i.viewProps})}});class Po{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}getComponents(){return[this.x,this.y,this.z]}static isObject(t){if(Pe(t))return!1;const e=t.x,n=t.y,r=t.z;return!(typeof e!="number"||typeof n!="number"||typeof r!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Tv={toComponents:i=>i.getComponents(),fromComponents:i=>new Po(...i)};function IA(i){return Po.isObject(i)?new Po(i.x,i.y,i.z):new Po}function UA(i,t){i.writeProperty("x",t.x),i.writeProperty("y",t.y),i.writeProperty("z",t.z)}function OA(i,t){return new up({assembly:Tv,components:[lr(Object.assign(Object.assign({},i),i.x),t.x),lr(Object.assign(Object.assign({},i),i.y),t.y),lr(Object.assign(Object.assign({},i),i.z),t.z)]})}const NA=Un({id:"input-point3d",type:"input",accept:(i,t)=>{if(!Po.isObject(i))return null;const e=Oe(t,n=>Object.assign(Object.assign({},ja(n)),{readonly:n.optional.constant(!1),x:n.optional.custom(Fr),y:n.optional.custom(Fr),z:n.optional.custom(Fr)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>IA,constraint:i=>OA(i.params,i.initialValue),equals:Po.equals,writer:i=>UA},controller:i=>{const t=i.value,e=i.constraint,n=[i.params.x,i.params.y,i.params.z];return new hp(i.document,{assembly:Tv,axes:t.rawValue.getComponents().map((r,s)=>{var o;return Yd({constraint:e.components[s],initialValue:r,params:Ls(i.params,(o=n[s])!==null&&o!==void 0?o:{})})}),parser:_r,value:t,viewProps:i.viewProps})}});class Ao{constructor(t=0,e=0,n=0,r=0){this.x=t,this.y=e,this.z=n,this.w=r}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(t){if(Pe(t))return!1;const e=t.x,n=t.y,r=t.z,s=t.w;return!(typeof e!="number"||typeof n!="number"||typeof r!="number"||typeof s!="number")}static equals(t,e){return t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Cv={toComponents:i=>i.getComponents(),fromComponents:i=>new Ao(...i)};function FA(i){return Ao.isObject(i)?new Ao(i.x,i.y,i.z,i.w):new Ao}function kA(i,t){i.writeProperty("x",t.x),i.writeProperty("y",t.y),i.writeProperty("z",t.z),i.writeProperty("w",t.w)}function BA(i,t){return new up({assembly:Cv,components:[lr(Object.assign(Object.assign({},i),i.x),t.x),lr(Object.assign(Object.assign({},i),i.y),t.y),lr(Object.assign(Object.assign({},i),i.z),t.z),lr(Object.assign(Object.assign({},i),i.w),t.w)]})}const zA=Un({id:"input-point4d",type:"input",accept:(i,t)=>{if(!Ao.isObject(i))return null;const e=Oe(t,n=>Object.assign(Object.assign({},ja(n)),{readonly:n.optional.constant(!1),w:n.optional.custom(Fr),x:n.optional.custom(Fr),y:n.optional.custom(Fr),z:n.optional.custom(Fr)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>FA,constraint:i=>BA(i.params,i.initialValue),equals:Ao.equals,writer:i=>kA},controller:i=>{const t=i.value,e=i.constraint,n=[i.params.x,i.params.y,i.params.z,i.params.w];return new hp(i.document,{assembly:Cv,axes:t.rawValue.getComponents().map((r,s)=>{var o;return Yd({constraint:e.components[s],initialValue:r,params:Ls(i.params,(o=n[s])!==null&&o!==void 0?o:{})})}),parser:_r,value:t,viewProps:i.viewProps})}});function VA(i){const t=[],e=np(i.options);return e&&t.push(e),new nl(t)}const HA=Un({id:"input-string",type:"input",accept:(i,t)=>{if(typeof i!="string")return null;const e=Oe(t,n=>({readonly:n.optional.constant(!1),options:n.optional.custom(rl)}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>Qg,constraint:i=>VA(i.params),writer:i=>ol},controller:i=>{const t=i.document,e=i.value,n=i.constraint,r=n&&Cc(n,il);return r?new $r(t,{props:new Zt({options:r.values.value("options")}),value:e,viewProps:i.viewProps}):new Ya(t,{parser:s=>s,props:Zt.fromObject({formatter:id}),value:e,viewProps:i.viewProps})},api(i){return typeof i.controller.value.rawValue!="string"?null:i.controller.valueController instanceof $r?new tp(i.controller):null}}),ll={monitor:{defaultInterval:200,defaultRows:3}},bm=le("mll");class GA{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(bm()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("textarea");n.classList.add(bm("i")),n.style.height=`calc(var(${nv("containerUnitSize")}) * ${e.rows})`,n.readOnly=!0,e.viewProps.bindDisabled(n),this.element.appendChild(n),this.textareaElem_=n,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.textareaElem_,e=t.scrollTop===t.scrollHeight-t.clientHeight,n=[];this.value.rawValue.forEach(r=>{r!==void 0&&n.push(this.formatter_(r))}),t.textContent=n.join(`
`),e&&(t.scrollTop=t.scrollHeight)}onValueUpdate_(){this.update_()}}class dp{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new GA(t,{formatter:e.formatter,rows:e.rows,value:this.value,viewProps:this.viewProps})}}const ym=le("sgl");class WA{constructor(t,e){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=e.formatter,this.element=t.createElement("div"),this.element.classList.add(ym()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("input");n.classList.add(ym("i")),n.readOnly=!0,n.type="text",e.viewProps.bindDisabled(n),this.element.appendChild(n),this.inputElement=n,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}update_(){const t=this.value.rawValue,e=t[t.length-1];this.inputElement.value=e!==void 0?this.formatter_(e):""}onValueUpdate_(){this.update_()}}class pp{constructor(t,e){this.value=e.value,this.viewProps=e.viewProps,this.view=new WA(t,{formatter:e.formatter,value:this.value,viewProps:this.viewProps})}}const XA=Un({id:"monitor-bool",type:"monitor",accept:(i,t)=>{if(typeof i!="boolean")return null;const e=Oe(t,n=>({readonly:n.required.constant(!0),rows:n.optional.number}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>Jg},controller:i=>{var t;return i.value.rawValue.length===1?new pp(i.document,{formatter:hm,value:i.value,viewProps:i.viewProps}):new dp(i.document,{formatter:hm,rows:(t=i.params.rows)!==null&&t!==void 0?t:ll.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}});class YA extends Xa{get max(){return this.controller.valueController.props.get("max")}set max(t){this.controller.valueController.props.set("max",t)}get min(){return this.controller.valueController.props.get("min")}set min(t){this.controller.valueController.props.set("min",t)}}const Pr=le("grl");class qA{constructor(t,e){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=t.createElement("div"),this.element.classList.add(Pr()),e.viewProps.bindClassModifiers(this.element),this.formatter_=e.formatter,this.props_=e.props,this.cursor_=e.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const n=t.createElementNS(Vi,"svg");n.classList.add(Pr("g")),n.style.height=`calc(var(${nv("containerUnitSize")}) * ${e.rows})`,this.element.appendChild(n),this.svgElem_=n;const r=t.createElementNS(Vi,"polyline");this.svgElem_.appendChild(r),this.lineElem_=r;const s=t.createElement("div");s.classList.add(Pr("t"),le("tt")()),this.element.appendChild(s),this.tooltipElem_=s,e.value.emitter.on("change",this.onValueUpdate_),this.value=e.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const{clientWidth:t,clientHeight:e}=this.element,n=this.value.rawValue.length-1,r=this.props_.get("min"),s=this.props_.get("max"),o=[];this.value.rawValue.forEach((h,d)=>{if(h===void 0)return;const p=ve(d,0,n,0,t),g=ve(h,r,s,e,0);o.push([p,g].join(","))}),this.lineElem_.setAttributeNS(null,"points",o.join(" "));const a=this.tooltipElem_,l=this.value.rawValue[this.cursor_.rawValue];if(l===void 0){a.classList.remove(Pr("t","a"));return}const c=ve(this.cursor_.rawValue,0,n,0,t),u=ve(l,r,s,e,0);a.style.left=`${c}px`,a.style.top=`${u}px`,a.textContent=`${this.formatter_(l)}`,a.classList.contains(Pr("t","a"))||(a.classList.add(Pr("t","a"),Pr("t","in")),Tc(a),a.classList.remove(Pr("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Pv{constructor(t,e){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props=e.props,this.value=e.value,this.viewProps=e.viewProps,this.cursor_=Le(-1),this.view=new qA(t,{cursor:this.cursor_,formatter:e.formatter,rows:e.rows,props:this.props,value:this.value,viewProps:this.viewProps}),!qd(t))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const n=new Bs(this.view.element);n.emitter.on("down",this.onGraphPointerDown_),n.emitter.on("move",this.onGraphPointerMove_),n.emitter.on("up",this.onGraphPointerUp_)}}importProps(t){return li(t,null,e=>({max:e.required.number,min:e.required.number}),e=>(this.props.set("max",e.max),this.props.set("min",e.min),!0))}exportProps(){return ci(null,{max:this.props.get("max"),min:this.props.get("min")})}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(t){const{clientWidth:e}=this.view.element;this.cursor_.rawValue=Math.floor(ve(t.offsetX,0,e,0,this.value.rawValue.length))}onGraphPointerDown_(t){this.onGraphPointerMove_(t)}onGraphPointerMove_(t){if(!t.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(ve(t.data.point.x,0,t.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function rd(i){return Pe(i.format)?qn(2):i.format}function jA(i){var t;return i.value.rawValue.length===1?new pp(i.document,{formatter:rd(i.params),value:i.value,viewProps:i.viewProps}):new dp(i.document,{formatter:rd(i.params),rows:(t=i.params.rows)!==null&&t!==void 0?t:ll.monitor.defaultRows,value:i.value,viewProps:i.viewProps})}function $A(i){var t,e,n;return new Pv(i.document,{formatter:rd(i.params),rows:(t=i.params.rows)!==null&&t!==void 0?t:ll.monitor.defaultRows,props:Zt.fromObject({max:(e=i.params.max)!==null&&e!==void 0?e:100,min:(n=i.params.min)!==null&&n!==void 0?n:0}),value:i.value,viewProps:i.viewProps})}function wm(i){return i.view==="graph"}const KA=Un({id:"monitor-number",type:"monitor",accept:(i,t)=>{if(typeof i!="number")return null;const e=Oe(t,n=>({format:n.optional.function,max:n.optional.number,min:n.optional.number,readonly:n.required.constant(!0),rows:n.optional.number,view:n.optional.string}));return e?{initialValue:i,params:e}:null},binding:{defaultBufferSize:i=>wm(i)?64:1,reader:i=>Dg},controller:i=>wm(i.params)?$A(i):jA(i),api:i=>i.controller.valueController instanceof Pv?new YA(i.controller):null}),ZA=Un({id:"monitor-string",type:"monitor",accept:(i,t)=>{if(typeof i!="string")return null;const e=Oe(t,n=>({multiline:n.optional.boolean,readonly:n.required.constant(!0),rows:n.optional.number}));return e?{initialValue:i,params:e}:null},binding:{reader:i=>Qg},controller:i=>{var t;const e=i.value;return e.rawValue.length>1||i.params.multiline?new dp(i.document,{formatter:id,rows:(t=i.params.rows)!==null&&t!==void 0?t:ll.monitor.defaultRows,value:e,viewProps:i.viewProps}):new pp(i.document,{formatter:id,value:e,viewProps:i.viewProps})}});class JA{constructor(){this.map_=new Map}get(t){var e;return(e=this.map_.get(t))!==null&&e!==void 0?e:null}has(t){return this.map_.has(t)}add(t,e){return this.map_.set(t,e),t.viewProps.handleDispose(()=>{this.map_.delete(t)}),e}}class QA{constructor(t){this.target=t.target,this.reader_=t.reader,this.writer_=t.writer}read(){return this.reader_(this.target.read())}write(t){this.writer_(this.target,t)}inject(t){this.write(this.reader_(t))}}function t1(i,t){var e;const n=i.accept(t.target.read(),t.params);if(Pe(n))return null;const r={target:t.target,initialValue:n.initialValue,params:n.params},s=Oe(t.params,h=>({disabled:h.optional.boolean,hidden:h.optional.boolean,label:h.optional.string,tag:h.optional.string})),o=i.binding.reader(r),a=i.binding.constraint?i.binding.constraint(r):void 0,l=new QA({reader:o,target:t.target,writer:i.binding.writer(r)}),c=new BT(Le(o(n.initialValue),{constraint:a,equals:i.binding.equals}),l),u=i.controller({constraint:a,document:t.document,initialValue:n.initialValue,params:n.params,value:c,viewProps:vr.create({disabled:s==null?void 0:s.disabled,hidden:s==null?void 0:s.hidden})});return new tC(t.document,{blade:Ko(),props:Zt.fromObject({label:"label"in t.params?(e=s==null?void 0:s.label)!==null&&e!==void 0?e:null:t.target.key}),tag:s==null?void 0:s.tag,value:c,valueController:u})}class e1{constructor(t){this.target=t.target,this.reader_=t.reader}read(){return this.reader_(this.target.read())}}function n1(i,t){return t===0?new NC:new FC(i,t??ll.monitor.defaultInterval)}function i1(i,t){var e,n,r;const s=i.accept(t.target.read(),t.params);if(Pe(s))return null;const o={target:t.target,initialValue:s.initialValue,params:s.params},a=Oe(t.params,d=>({bufferSize:d.optional.number,disabled:d.optional.boolean,hidden:d.optional.boolean,interval:d.optional.number,label:d.optional.string})),l=i.binding.reader(o),c=(n=(e=a==null?void 0:a.bufferSize)!==null&&e!==void 0?e:i.binding.defaultBufferSize&&i.binding.defaultBufferSize(s.params))!==null&&n!==void 0?n:1,u=new sC({binding:new e1({reader:l,target:t.target}),bufferSize:c,ticker:n1(t.document,a==null?void 0:a.interval)}),h=i.controller({document:t.document,params:s.params,value:u,viewProps:vr.create({disabled:a==null?void 0:a.disabled,hidden:a==null?void 0:a.hidden})});return h.viewProps.bindDisabled(u.ticker),h.viewProps.handleDispose(()=>{u.ticker.dispose()}),new aC(t.document,{blade:Ko(),props:Zt.fromObject({label:"label"in t.params?(r=a==null?void 0:a.label)!==null&&r!==void 0?r:null:t.target.key}),value:u,valueController:h})}class r1{constructor(t){this.pluginsMap_={blades:[],inputs:[],monitors:[]},this.apiCache_=t}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(t,e){if(!KC(e.core))throw ke.notCompatible(t,e.id);e.type==="blade"?this.pluginsMap_.blades.unshift(e):e.type==="input"?this.pluginsMap_.inputs.unshift(e):e.type==="monitor"&&this.pluginsMap_.monitors.unshift(e)}createInput_(t,e,n){return this.pluginsMap_.inputs.reduce((r,s)=>r??t1(s,{document:t,target:e,params:n}),null)}createMonitor_(t,e,n){return this.pluginsMap_.monitors.reduce((r,s)=>r??i1(s,{document:t,params:n,target:e}),null)}createBinding(t,e,n){const r=e.read();if(Pe(r))throw new ke({context:{key:e.key},type:"nomatchingcontroller"});const s=this.createInput_(t,e,n);if(s)return s;const o=this.createMonitor_(t,e,n);if(o)return o;throw new ke({context:{key:e.key},type:"nomatchingcontroller"})}createBlade(t,e){const n=this.pluginsMap_.blades.reduce((r,s)=>r??OC(s,{document:t,params:e}),null);if(!n)throw new ke({type:"nomatchingview",context:{params:e}});return n}createInputBindingApi_(t){const e=this.pluginsMap_.inputs.reduce((n,r)=>{var s,o;return n||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,e??new Xa(t))}createMonitorBindingApi_(t){const e=this.pluginsMap_.monitors.reduce((n,r)=>{var s,o;return n||((o=(s=r.api)===null||s===void 0?void 0:s.call(r,{controller:t}))!==null&&o!==void 0?o:null)},null);return this.apiCache_.add(t,e??new Xa(t))}createBindingApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(eC(t))return this.createInputBindingApi_(t);if(lC(t))return this.createMonitorBindingApi_(t);throw ke.shouldNeverHappen()}createApi(t){if(this.apiCache_.has(t))return this.apiCache_.get(t);if(QT(t))return this.createBindingApi(t);const e=this.pluginsMap_.blades.reduce((n,r)=>n??r.api({controller:t,pool:this}),null);if(!e)throw ke.shouldNeverHappen();return this.apiCache_.add(t,e)}}const s1=new JA;function o1(){const i=new r1(s1);return[LA,NA,zA,HA,wA,gA,_A,hA,tP,XA,ZA,KA,pC,TC,Kg].forEach(t=>{i.register("core",t)}),i}class a1 extends ks{constructor(t){super(t),this.emitter_=new Ke,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new tl(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get options(){return this.controller.valueController.props.get("options")}set options(t){this.controller.valueController.props.set("options",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class l1 extends ks{}class c1 extends ks{constructor(t){super(t),this.emitter_=new Ke,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new tl(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get max(){return this.controller.valueController.sliderController.props.get("max")}set max(t){this.controller.valueController.sliderController.props.set("max",t)}get min(){return this.controller.valueController.sliderController.props.get("min")}set min(t){this.controller.valueController.sliderController.props.set("min",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}class u1 extends ks{constructor(t){super(t),this.emitter_=new Ke,this.controller.value.emitter.on("change",e=>{this.emitter_.emit("change",new tl(this,e.rawValue))})}get label(){return this.controller.labelController.props.get("label")}set label(t){this.controller.labelController.props.set("label",t)}get formatter(){return this.controller.valueController.props.get("formatter")}set formatter(t){this.controller.valueController.props.set("formatter",t)}get value(){return this.controller.value.rawValue}set value(t){this.controller.value.rawValue=t}on(t,e){const n=e.bind(this);return this.emitter_.on(t,r=>{n(r)},{key:e}),this}off(t,e){return this.emitter_.off(t,e),this}}const h1=function(){return{id:"list",type:"blade",core:$o,accept(i){const t=Oe(i,e=>({options:e.required.custom(rl),value:e.required.raw,view:e.required.constant("list"),label:e.optional.string}));return t?{params:t}:null},controller(i){const t=new il(ep(i.params.options)),e=Le(i.params.value,{constraint:t}),n=new $r(i.document,{props:new Zt({options:t.values.value("options")}),value:e,viewProps:i.viewProps});return new Is(i.document,{blade:i.blade,props:Zt.fromObject({label:i.params.label}),value:e,valueController:n})},api(i){return!(i.controller instanceof Is)||!(i.controller.valueController instanceof $r)?null:new a1(i.controller)}}}();class d1 extends jg{constructor(t,e){super(t,e)}get element(){return this.controller.view.element}}class p1 extends ed{constructor(t,e){super(t,{expanded:e.expanded,blade:e.blade,props:e.props,root:!0,viewProps:e.viewProps})}}const Em=le("spr");class f1{constructor(t,e){this.element=t.createElement("div"),this.element.classList.add(Em()),e.viewProps.bindClassModifiers(this.element);const n=t.createElement("hr");n.classList.add(Em("r")),this.element.appendChild(n)}}class Mm extends Bc{constructor(t,e){super(Object.assign(Object.assign({},e),{view:new f1(t,{viewProps:e.viewProps})}))}}const m1={id:"separator",type:"blade",core:$o,accept(i){const t=Oe(i,e=>({view:e.required.constant("separator")}));return t?{params:t}:null},controller(i){return new Mm(i.document,{blade:i.blade,viewProps:i.viewProps})},api(i){return i.controller instanceof Mm?new l1(i.controller):null}},_1={id:"slider",type:"blade",core:$o,accept(i){const t=Oe(i,e=>({max:e.required.number,min:e.required.number,view:e.required.constant("slider"),format:e.optional.function,label:e.optional.string,value:e.optional.number}));return t?{params:t}:null},controller(i){var t,e;const n=(t=i.params.value)!==null&&t!==void 0?t:0,r=new Qa({max:i.params.max,min:i.params.min}),s=Le(n,{constraint:r}),o=new Ac(i.document,Object.assign(Object.assign({},ev({formatter:(e=i.params.format)!==null&&e!==void 0?e:UT,keyScale:Le(1),max:r.values.value("max"),min:r.values.value("min"),pointerScale:Ug(i.params,n)})),{parser:_r,value:s,viewProps:i.viewProps}));return new Is(i.document,{blade:i.blade,props:Zt.fromObject({label:i.params.label}),value:s,valueController:o})},api(i){return!(i.controller instanceof Is)||!(i.controller.valueController instanceof Ac)?null:new c1(i.controller)}},g1=function(){return{id:"text",type:"blade",core:$o,accept(i){const t=Oe(i,e=>({parse:e.required.function,value:e.required.raw,view:e.required.constant("text"),format:e.optional.function,label:e.optional.string}));return t?{params:t}:null},controller(i){var t;const e=Le(i.params.value),n=new Ya(i.document,{parser:i.params.parse,props:Zt.fromObject({formatter:(t=i.params.format)!==null&&t!==void 0?t:r=>String(r)}),value:e,viewProps:i.viewProps});return new Is(i.document,{blade:i.blade,props:Zt.fromObject({label:i.params.label}),value:e,valueController:n})},api(i){return!(i.controller instanceof Is)||!(i.controller.valueController instanceof Ya)?null:new u1(i.controller)}}}();function v1(i){const t=i.createElement("div");return t.classList.add(le("dfw")()),i.body&&i.body.appendChild(t),t}function x1(i,t,e){if(i.querySelector(`style[data-tp-style=${t}]`))return;const n=i.createElement("style");n.dataset.tpStyle=t,n.textContent=e,i.head.appendChild(n)}class b1 extends d1{constructor(t){var e,n;const r=t??{},s=(e=r.document)!==null&&e!==void 0?e:YT(),o=o1(),a=new p1(s,{expanded:r.expanded,blade:Ko(),props:Zt.fromObject({title:r.title}),viewProps:vr.create()});super(a,o),this.pool_=o,this.containerElem_=(n=r.container)!==null&&n!==void 0?n:v1(s),this.containerElem_.appendChild(this.element),this.doc_=s,this.usesDefaultWrapper_=!r.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw ke.alreadyDisposed();return this.doc_}dispose(){const t=this.containerElem_;if(!t)throw ke.alreadyDisposed();if(this.usesDefaultWrapper_){const e=t.parentElement;e&&e.removeChild(t)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(t){t.css&&x1(this.document,`plugin-${t.id}`,t.css),("plugin"in t?[t.plugin]:"plugins"in t?t.plugins:[]).forEach(n=>{this.pool_.register(t.id,n)})}setUpDefaultPlugins_(){this.registerPlugin({id:"default",css:'.tp-tbiv_b,.tp-coltxtv_ms,.tp-colswv_b,.tp-ckbv_i,.tp-sglv_i,.tp-mllv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-rotv_b,.tp-fldv_b,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:rgba(0,0,0,0);border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--bld-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--cnt-usz);line-height:var(--cnt-usz);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tbpv_c>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-vp))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tbpv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tbpv_c>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--cnt-usp)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tbpv_c>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tbpv_c>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tbpv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-vp)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tbpv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tbpv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tbpv_c>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tbpv_c>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--bld-br);border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tbpv_c .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--bld-br)}.tp-tbpv_c>.tp-cntv+.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-cntv+.tp-fldv>.tp-fldv_b{border-top-left-radius:0}.tp-tbpv_c>.tp-cntv+.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-cntv+.tp-tabv>.tp-tabv_t{border-top-left-radius:0}.tp-tbpv_c>.tp-tabv>.tp-tabv_t,.tp-fldv_c>.tp-tabv>.tp-tabv_t{border-top-left-radius:var(--bld-br)}.tp-tbpv_c .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--bld-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);overflow:hidden;padding-left:var(--cnt-hp);padding-right:calc(4px + var(--cnt-usz) + var(--cnt-hp));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-hp) + (var(--cnt-usz) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-vp);padding-top:var(--cnt-vp);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--cnt-usz);line-height:var(--cnt-usz);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-sglv_i,.tp-mllv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--bld-br);box-sizing:border-box;color:var(--mo-fg);height:var(--cnt-usz);scrollbar-color:currentColor rgba(0,0,0,0);scrollbar-width:thin;width:100%}.tp-sglv_i::-webkit-scrollbar,.tp-mllv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-sglv_i::-webkit-scrollbar-corner,.tp-mllv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:rgba(0,0,0,0)}.tp-sglv_i::-webkit-scrollbar-thumb,.tp-mllv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:rgba(0,0,0,0) solid 2px;border-radius:4px}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-rotv{--bs-bg: var(--tp-base-background-color, hsl(230, 7%, 17%));--bs-br: var(--tp-base-border-radius, 6px);--bs-ff: var(--tp-base-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--bld-br: var(--tp-blade-border-radius, 2px);--bld-hp: var(--tp-blade-horizontal-padding, 4px);--bld-vw: var(--tp-blade-value-width, 160px);--btn-bg: var(--tp-button-background-color, hsl(230, 7%, 70%));--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, hsl(230, 7%, 17%));--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, hsl(230, 7%, 75%));--cnt-hp: var(--tp-container-horizontal-padding, 4px);--cnt-vp: var(--tp-container-vertical-padding, 4px);--cnt-usp: var(--tp-container-unit-spacing, 4px);--cnt-usz: var(--tp-container-unit-size, 20px);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, hsl(230, 7%, 75%));--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--bld-br);cursor:pointer;display:block;height:var(--cnt-usz);position:relative;width:var(--cnt-usz)}.tp-ckbv_w svg{display:block;height:16px;inset:0;margin:auto;opacity:0;position:absolute;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--cnt-usz)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-expanded.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--cnt-usp);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--cnt-usp)}.tp-colpv_rgb{display:flex;margin-top:var(--cnt-usp);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-vp);padding-top:calc(var(--cnt-vp) + 2px);position:relative}.tp-colpv_a::before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-hp));position:absolute;right:calc(-1*var(--cnt-hp));top:0}.tp-colpv.tp-v-disabled .tp-colpv_a::before{opacity:.5}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--bld-br);outline:none;overflow:hidden;position:relative}.tp-svpv.tp-v-disabled{opacity:.5}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--cnt-usz)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative}.tp-hplv.tp-v-disabled{opacity:.5}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--cnt-usz);outline:none;position:relative;width:100%}.tp-aplv.tp-v-disabled{opacity:.5}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{inset:0;position:absolute}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--bld-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--bld-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;inset:0;position:absolute}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--bld-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{cursor:pointer;display:block;height:var(--cnt-usz);left:0;position:absolute;top:0;width:var(--cnt-usz)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--bld-br);content:"";display:block;inset:0;position:absolute}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--bld-br);color:var(--lbl-fg);cursor:pointer;height:var(--cnt-usz);line-height:var(--cnt-usz);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv.tp-v-disabled .tp-coltxtv_mm{opacity:.5}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv{position:relative}.tp-fldv_t{padding-left:4px}.tp-fldv_b:disabled .tp-fldv_m{display:none}.tp-fldv_c{padding-left:4px}.tp-fldv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-fldv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-fldv_b:hover+.tp-fldv_i{color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_i{color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_i{color:var(--cnt-bg-a)}.tp-fldv.tp-v-disabled>.tp-fldv_i{opacity:.5}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--cnt-usz)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-hp);padding-right:var(--cnt-hp)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:var(--bld-vw)}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 var(--bld-hp);width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--cnt-usz)*3);line-height:var(--cnt-usz);padding-left:var(--bld-hp);padding-right:var(--bld-hp);resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--cnt-usz);margin-right:4px;position:relative;width:var(--cnt-usz)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--cnt-usp);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-hp));right:calc(-1*var(--cnt-hp));top:var(--cnt-usz)}.tp-p2dpv{padding-left:calc(var(--cnt-usz) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv.tp-v-disabled .tp-p2dpv_p{opacity:.5}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:var(--bld-vw);padding:var(--cnt-vp) var(--cnt-hp);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--cnt-usz);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin:auto;position:absolute}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;content:"";display:block;height:2px;inset:0;margin-bottom:auto;margin-top:auto;position:absolute}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--bld-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv{position:relative}.tp-tabv_t{align-items:flex-end;color:var(--cnt-bg);display:flex;overflow:hidden;position:relative}.tp-tabv_t:hover{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus){color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active){color:var(--cnt-bg-a)}.tp-tabv_t::before{background-color:currentColor;bottom:0;content:"";height:2px;left:0;pointer-events:none;position:absolute;right:0}.tp-tabv.tp-v-disabled .tp-tabv_t::before{opacity:.5}.tp-tabv.tp-tabv-nop .tp-tabv_t{height:calc(var(--cnt-usz) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_t::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_i{bottom:0;color:var(--cnt-bg);left:0;overflow:hidden;position:absolute;top:calc(var(--cnt-usz) + 4px);width:max(var(--bs-br),4px)}.tp-tabv_i::before{background-color:currentColor;bottom:0;content:"";left:0;position:absolute;top:0;width:4px}.tp-tabv_t:hover+.tp-tabv_i{color:var(--cnt-bg-h)}.tp-tabv_t:has(*:focus)+.tp-tabv_i{color:var(--cnt-bg-f)}.tp-tabv_t:has(*:active)+.tp-tabv_i{color:var(--cnt-bg-a)}.tp-tabv.tp-v-disabled>.tp-tabv_i{opacity:.5}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv.tp-v-disabled::before{opacity:.5}.tp-tbiv_b{display:block;padding-left:calc(var(--cnt-hp) + 4px);padding-right:calc(var(--cnt-hp) + 4px);position:relative;width:100%}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_b::before{background-color:var(--cnt-bg);content:"";inset:0 0 2px;pointer-events:none;position:absolute}.tp-tbiv_b:hover::before{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus::before{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active::before{background-color:var(--cnt-bg-a)}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--cnt-usz) + 4px);line-height:calc(var(--cnt-usz) + 4px);opacity:.5;overflow:hidden;position:relative;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-tbpv_c{padding-bottom:var(--cnt-vp);padding-left:4px;padding-top:var(--cnt-vp)}.tp-txtv{position:relative}.tp-txtv_i{padding-left:var(--bld-hp);padding-right:var(--bld-hp)}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:calc(var(--bld-hp) - 5px);position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--cnt-usz) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--bld-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0);border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--bs-ff);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--cnt-usz) + var(--cnt-hp));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0;transition-delay:0s;transition-duration:0s}.tp-rotv.tp-rotv-not>.tp-rotv_b{display:none}.tp-rotv_b:disabled .tp-rotv_m{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst.tp-fldv-expanded>.tp-fldv_b{transition-delay:0s;transition-duration:0s}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_i{border-bottom-left-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-vp))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_t{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sprv.tp-v-disabled .tp-sprv_r{opacity:.5}',plugins:[h1,m1,_1,Kg,g1]})}}new qg("4.0.5");class Av{constructor(t,e,n){this.id=0,this.name=t,this.fg=e,this.bg=n,this.gradient=null,this.PR=Math.round(window.devicePixelRatio||1),this.WIDTH=90*this.PR,this.HEIGHT=48*this.PR,this.TEXT_X=3*this.PR,this.TEXT_Y=2*this.PR,this.GRAPH_X=3*this.PR,this.GRAPH_Y=15*this.PR,this.GRAPH_WIDTH=84*this.PR,this.GRAPH_HEIGHT=30*this.PR,this.canvas=document.createElement("canvas"),this.canvas.width=this.WIDTH,this.canvas.height=this.HEIGHT,this.canvas.style.width="90px",this.canvas.style.height="48px",this.canvas.style.position="absolute",this.canvas.style.cssText="width:90px;height:48px;background-color: transparent !important;",this.context=this.canvas.getContext("2d"),this.initializeCanvas()}createGradient(){if(!this.context)throw new Error("No context");const t=this.context.createLinearGradient(0,this.GRAPH_Y,0,this.GRAPH_Y+this.GRAPH_HEIGHT);let e;const n=this.fg;switch(this.fg.toLowerCase()){case"#0ff":e="#006666";break;case"#0f0":e="#006600";break;case"#ff0":e="#666600";break;case"#e1e1e1":e="#666666";break;default:e=this.bg;break}return t.addColorStop(0,e),t.addColorStop(1,n),t}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.gradient=this.createGradient(),this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.HEIGHT),this.context.fillStyle=this.fg,this.context.fillText(this.name,this.TEXT_X,this.TEXT_Y),this.context.fillStyle=this.bg,this.context.globalAlpha=.9,this.context.fillRect(this.GRAPH_X,this.GRAPH_Y,this.GRAPH_WIDTH,this.GRAPH_HEIGHT))}update(t,e,n=0){if(!this.context||!this.gradient)return;const r=Math.min(1/0,t),s=Math.max(e,t);this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillRect(0,0,this.WIDTH,this.GRAPH_Y),this.context.fillStyle=this.fg,this.context.fillText(`${t.toFixed(n)} ${this.name} (${r.toFixed(n)}-${parseFloat(s.toFixed(n))})`,this.TEXT_X,this.TEXT_Y)}updateGraph(t,e){if(!this.context||!this.gradient)return;t===0&&e===0&&(e=1),e=Math.max(e,t,.1),t=Math.max(t,0);const n=Math.round(this.GRAPH_X),r=Math.round(this.GRAPH_Y),s=Math.round(this.GRAPH_WIDTH),o=Math.round(this.GRAPH_HEIGHT),a=Math.round(this.PR);this.context.drawImage(this.canvas,n+a,r,s-a,o,n,r,s-a,o),this.context.fillStyle=this.bg,this.context.fillRect(n+s-a,r,a,o);const l=Math.min(o,Math.round(t/e*o));l>0&&(this.context.globalAlpha=.9,this.context.fillStyle=this.gradient,this.context.fillRect(n+s-a,r+(o-l),a,l)),this.context.globalAlpha=1}}class y1 extends Av{constructor(t,e,n){super(t,e,n),this.vsyncValue=0,this.SMALL_HEIGHT=9*this.PR,this.HEIGHT=this.SMALL_HEIGHT,this.WIDTH=35*this.PR,this.TEXT_Y=0*this.PR,this.canvas.height=this.HEIGHT,this.canvas.width=this.WIDTH,this.canvas.style.height="9px",this.canvas.style.width="35px",this.canvas.style.cssText=`
            width: 35px;
            height: 9px;
            position: absolute;
            top: 0;
            left: 0;
            background-color: transparent !important;
            pointer-events: none;
        `,this.initializeCanvas()}initializeCanvas(){this.context&&(this.context.imageSmoothingEnabled=!1,this.context.font="bold "+9*this.PR+"px Helvetica,Arial,sans-serif",this.context.textBaseline="top",this.context.globalAlpha=1)}update(t,e,n=0){this.context&&(this.vsyncValue=t,this.context.clearRect(0,0,this.WIDTH,this.HEIGHT),this.context.globalAlpha=1,this.context.fillStyle=this.bg,this.context.fillText(`${t.toFixed(0)}Hz`,this.TEXT_X,this.TEXT_Y))}updateGraph(t,e){}setOffset(t,e){this.canvas.style.transform=`translate(${t}px, ${e}px)`}}const Rv=class uo{constructor({trackGPU:t=!1,trackCPT:e=!1,trackHz:n=!1,logsPerSecond:r=4,graphsPerSecond:s=30,samplesLog:o=40,samplesGraph:a=10,precision:l=2,minimal:c=!1,horizontal:u=!0,mode:h=0}={}){this.gl=null,this.ext=null,this.activeQuery=null,this.gpuQueries=[],this.threeRendererPatched=!1,this.frameTimes=[],this.renderCount=0,this.totalCpuDuration=0,this.totalGpuDuration=0,this.totalGpuDurationCompute=0,this.gpuPanel=null,this.gpuPanelCompute=null,this.vsyncPanel=null,this.averageFps={logs:[],graph:[]},this.averageCpu={logs:[],graph:[]},this.averageGpu={logs:[],graph:[]},this.averageGpuCompute={logs:[],graph:[]},this.updateCounter=0,this.lastMin={},this.lastMax={},this.lastValue={},this.VSYNC_RATES=[{refreshRate:60,frameTime:16.67},{refreshRate:75,frameTime:13.33},{refreshRate:90,frameTime:11.11},{refreshRate:120,frameTime:8.33},{refreshRate:144,frameTime:6.94},{refreshRate:165,frameTime:6.06},{refreshRate:240,frameTime:4.17}],this.detectedVSync=null,this.frameTimeHistory=[],this.HISTORY_SIZE=120,this.VSYNC_THRESHOLD=.05,this.lastFrameTime=0,this.handleClick=p=>{p.preventDefault(),this.showPanel(++this.mode%this.dom.children.length)},this.handleResize=()=>{this.resizePanel(this.fpsPanel),this.resizePanel(this.msPanel),this.gpuPanel&&this.resizePanel(this.gpuPanel),this.gpuPanelCompute&&this.resizePanel(this.gpuPanelCompute)},this.mode=h,this.horizontal=u,this.minimal=c,this.trackGPU=t,this.trackCPT=e,this.trackHz=n,this.samplesLog=o,this.samplesGraph=a,this.precision=l,this.logsPerSecond=r,this.graphsPerSecond=s;const d=performance.now();this.prevGraphTime=d,this.dom=document.createElement("div"),this.initializeDOM(),this.beginTime=performance.now(),this.prevTextTime=this.beginTime,this.prevCpuTime=this.beginTime,this._panelId=0,this.fpsPanel=this.addPanel(new uo.Panel("FPS","#0ff","#002")),this.msPanel=this.addPanel(new uo.Panel("CPU","#0f0","#020")),this.trackHz===!0&&(this.vsyncPanel=new y1("","#f0f","#202"),this.dom.appendChild(this.vsyncPanel.canvas),this.vsyncPanel.setOffset(56,35)),this.setupEventListeners()}initializeDOM(){this.dom.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0.9;
      z-index: 10000;
      ${this.minimal?"cursor: pointer;":""}
    `}setupEventListeners(){this.minimal?(this.dom.addEventListener("click",this.handleClick),this.showPanel(this.mode)):window.addEventListener("resize",this.handleResize)}async init(t){if(!t){console.error('Stats: The "canvas" parameter is undefined.');return}if(!this.handleThreeRenderer(t)&&!await this.handleWebGPURenderer(t))if(this.initializeWebGL(t)){this.trackGPU&&this.initializeGPUTracking();return}else console.error("Stats-gl: Failed to initialize WebGL context")}handleThreeRenderer(t){return t.isWebGLRenderer&&!this.threeRendererPatched?(this.patchThreeRenderer(t),this.gl=t.getContext(),this.trackGPU&&this.initializeGPUTracking(),!0):!1}async handleWebGPURenderer(t){return t.isWebGPURenderer?((this.trackGPU||this.trackCPT)&&(t.backend.trackTimestamp=!0,await t.hasFeatureAsync("timestamp-query")&&this.initializeWebGPUPanels()),this.info=t.info,this.patchThreeWebGPU(t),!0):!1}initializeWebGPUPanels(){this.trackGPU&&(this.gpuPanel=this.addPanel(new uo.Panel("GPU","#ff0","#220"))),this.trackCPT&&(this.gpuPanelCompute=this.addPanel(new uo.Panel("CPT","#e1e1e1","#212121")))}initializeWebGL(t){if(t instanceof WebGL2RenderingContext)this.gl=t;else if(t instanceof HTMLCanvasElement||t instanceof OffscreenCanvas){if(this.gl=t.getContext("webgl2"),!this.gl)return console.error("Stats: Unable to obtain WebGL2 context."),!1}else return console.error("Stats: Invalid input type. Expected WebGL2RenderingContext, HTMLCanvasElement, or OffscreenCanvas."),!1;return!0}initializeGPUTracking(){this.gl&&(this.ext=this.gl.getExtension("EXT_disjoint_timer_query_webgl2"),this.ext&&(this.gpuPanel=this.addPanel(new uo.Panel("GPU","#ff0","#220"))))}begin(){this.beginProfiling("cpu-started"),!(!this.gl||!this.ext)&&(this.activeQuery&&this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.activeQuery=this.gl.createQuery(),this.activeQuery&&this.gl.beginQuery(this.ext.TIME_ELAPSED_EXT,this.activeQuery))}end(){this.renderCount++,this.gl&&this.ext&&this.activeQuery&&(this.gl.endQuery(this.ext.TIME_ELAPSED_EXT),this.gpuQueries.push({query:this.activeQuery}),this.activeQuery=null),this.endProfiling("cpu-started","cpu-finished","cpu-duration")}update(){this.endProfiling("cpu-started","cpu-finished","cpu-duration"),this.info?this.processWebGPUTimestamps():this.processGpuQueries(),this.updateAverages(),this.resetCounters()}processWebGPUTimestamps(){this.totalGpuDuration=this.info.render.timestamp,this.totalGpuDurationCompute=this.info.compute.timestamp}resetCounters(){this.renderCount=0,this.totalCpuDuration=0,this.beginTime=this.endInternal()}resizePanel(t){t.canvas.style.position="absolute",this.minimal?t.canvas.style.display="none":(t.canvas.style.display="block",this.horizontal?(t.canvas.style.top="0px",t.canvas.style.left=t.id*t.WIDTH/t.PR+"px"):(t.canvas.style.left="0px",t.canvas.style.top=t.id*t.HEIGHT/t.PR+"px"))}addPanel(t){return t.canvas&&(this.dom.appendChild(t.canvas),t.id=this._panelId,this.resizePanel(t),this._panelId++),t}showPanel(t){for(let e=0;e<this.dom.children.length;e++){const n=this.dom.children[e];n.style.display=e===t?"block":"none"}this.mode=t}processGpuQueries(){!this.gl||!this.ext||(this.totalGpuDuration=0,this.gpuQueries.forEach((t,e)=>{if(this.gl){const n=this.gl.getQueryParameter(t.query,this.gl.QUERY_RESULT_AVAILABLE),r=this.gl.getParameter(this.ext.GPU_DISJOINT_EXT);if(n&&!r){const o=this.gl.getQueryParameter(t.query,this.gl.QUERY_RESULT)*1e-6;this.totalGpuDuration+=o,this.gl.deleteQuery(t.query),this.gpuQueries.splice(e,1)}}}))}detectVSync(t){if(this.lastFrameTime===0){this.lastFrameTime=t;return}const e=t-this.lastFrameTime;if(this.lastFrameTime=t,this.frameTimeHistory.push(e),this.frameTimeHistory.length>this.HISTORY_SIZE&&this.frameTimeHistory.shift(),this.frameTimeHistory.length<60)return;const n=this.frameTimeHistory.reduce((l,c)=>l+c)/this.frameTimeHistory.length,r=this.frameTimeHistory.reduce((l,c)=>l+Math.pow(c-n,2),0)/this.frameTimeHistory.length;if(Math.sqrt(r)>2){this.detectedVSync=null;return}let o=null,a=1/0;for(const l of this.VSYNC_RATES){const c=Math.abs(n-l.frameTime);c<a&&(a=c,o=l)}o&&a/o.frameTime<=this.VSYNC_THRESHOLD?this.detectedVSync=o:this.detectedVSync=null}endInternal(){var t;const e=performance.now();for(this.frameTimes.push(e);this.frameTimes.length>0&&this.frameTimes[0]<=e-1e3;)this.frameTimes.shift();const n=Math.round(this.frameTimes.length);this.addToAverage(n,this.averageFps);const r=e>=this.prevTextTime+1e3/this.logsPerSecond,s=e>=this.prevGraphTime+1e3/this.graphsPerSecond;if(this.updatePanelComponents(this.fpsPanel,this.averageFps,0,r,s),this.updatePanelComponents(this.msPanel,this.averageCpu,this.precision,r,s),this.gpuPanel&&this.updatePanelComponents(this.gpuPanel,this.averageGpu,this.precision,r,s),this.trackCPT&&this.gpuPanelCompute&&this.updatePanelComponents(this.gpuPanelCompute,this.averageGpuCompute,this.precision,r,s),r&&(this.prevTextTime=e),s&&(this.prevGraphTime=e),this.vsyncPanel!==null){this.detectVSync(e);const o=((t=this.detectedVSync)==null?void 0:t.refreshRate)||0;r&&o>0&&this.vsyncPanel.update(o,o)}return e}updatePanelComponents(t,e,n,r,s){if(!t||e.logs.length===0)return;t.name in this.lastMin||(this.lastMin[t.name]=1/0,this.lastMax[t.name]=0,this.lastValue[t.name]=0);const o=e.logs[e.logs.length-1];this.lastMax[t.name]=Math.max(...e.logs),this.lastMin[t.name]=Math.min(this.lastMin[t.name],o),this.lastValue[t.name]=this.lastValue[t.name]*.7+o*.3;const a=Math.max(Math.max(...e.logs),...e.graph.slice(-this.samplesGraph));this.updateCounter++,r&&t.update(this.lastValue[t.name],this.lastMax[t.name],n),s&&t.updateGraph(o,a)}beginProfiling(t){if(window.performance)try{window.performance.clearMarks(t),window.performance.mark(t)}catch(e){console.debug("Stats: Performance marking failed:",e)}}endProfiling(t,e,n){if(!(!window.performance||!e||!t))try{window.performance.getEntriesByName(t,"mark").length===0&&this.beginProfiling(t),window.performance.clearMarks(e),window.performance.mark(e),window.performance.clearMeasures(n);const s=performance.measure(n,t,e);this.totalCpuDuration+=s.duration,window.performance.clearMarks(t),window.performance.clearMarks(e),window.performance.clearMeasures(n)}catch(r){console.debug("Stats: Performance measurement failed:",r)}}updatePanel(t,e,n=2){if(!t||e.logs.length===0)return;const r=performance.now();t.name in this.lastMin||(this.lastMin[t.name]=1/0,this.lastMax[t.name]=0,this.lastValue[t.name]=0);const s=e.logs[e.logs.length-1],o=Math.max(...e.logs.slice(-30));this.lastMin[t.name]=Math.min(this.lastMin[t.name],s),this.lastMax[t.name]=Math.max(this.lastMax[t.name],s),this.lastValue[t.name]=this.lastValue[t.name]*.7+s*.3;const a=Math.max(o,...e.graph.slice(-this.samplesGraph));this.updateCounter++,this.updateCounter%(this.logsPerSecond*2)===0&&(this.lastMax[t.name]=o,this.lastMin[t.name]=s),t.update&&(r>=this.prevCpuTime+1e3/this.logsPerSecond&&t.update(this.lastValue[t.name],s,this.lastMax[t.name],a,n),r>=this.prevGraphTime+1e3/this.graphsPerSecond&&(t.updateGraph(s,a),this.prevGraphTime=r))}updateAverages(){this.addToAverage(this.totalCpuDuration,this.averageCpu),this.addToAverage(this.totalGpuDuration,this.averageGpu),this.info&&this.totalGpuDurationCompute!==void 0&&this.addToAverage(this.totalGpuDurationCompute,this.averageGpuCompute)}addToAverage(t,e){e.logs.push(t),e.logs.length>this.samplesLog&&(e.logs=e.logs.slice(-this.samplesLog)),e.graph.push(t),e.graph.length>this.samplesGraph&&(e.graph=e.graph.slice(-this.samplesGraph))}get domElement(){return this.dom}patchThreeWebGPU(t){const e=t.info.reset,n=this;t.info.reset=function(){n.beginProfiling("cpu-started"),e.call(this)}}patchThreeRenderer(t){const e=t.render,n=this;t.render=function(r,s){n.begin(),e.call(this,r,s),n.end()},this.threeRendererPatched=!0}};Rv.Panel=Av;let w1=Rv;class E1{constructor(){this.gl=new xr,this.gl.renderer.instance.info.autoReset=!1,this.gui=new b1({title:"Debug Panel"}),this.gui.element.parentElement.style.position="fixed",this.gui.element.parentElement.style.zIndex="1000",this.guiStats={polygons:0,geometries:0,programs:0,textures:0,draw_calls:0},this.guiStatsFolder=this.gui.addFolder({title:"Stats",expanded:!1}),this.guiStatsFolder.addBinding(this.guiStats,"polygons",{readonly:!0}),this.guiStatsFolder.addBinding(this.guiStats,"geometries",{readonly:!0}),this.guiStatsFolder.addBinding(this.guiStats,"programs",{readonly:!0}),this.guiStatsFolder.addBinding(this.guiStats,"textures",{readonly:!0}),this.guiStatsFolder.addBinding(this.guiStats,"draw_calls",{readonly:!0}),this.stats=new w1({trackGPU:!0,trackHz:!0}),this.stats.init(this.gl.renderer.instance),document.body.appendChild(this.stats.dom)}update(){this.stats.update(),this.guiStats.polygons=this.gl.renderer.instance.info.render.triangles,this.guiStats.geometries=this.gl.renderer.instance.info.memory.geometries,this.guiStats.programs=this.gl.renderer.instance.info.programs.length,this.guiStats.textures=this.gl.renderer.instance.info.memory.textures,this.guiStats.draw_calls=this.gl.renderer.instance.info.render.calls,this.gl.renderer.instance.info.reset()}}class M1{constructor(t){this.gl=new xr,this.dom=t||document,this.isMouseHolding=!1,this.isMouseMoved=!1,this.width=this.dom==document?window.innerWidth:this.dom.offsetWidth,this.height=this.dom==document?window.innerHeight:this.dom.offsetHeight,this.default=new Lt,this.normalized={current:new Lt,previous:new Lt},this.direction=new Lt,this.pace={default:0,separated:new Lt},this.pace={default:0,separated:new Lt},this.drag={start:new Lt,distance:{default:0,separated:new Lt},side:"left",pace:{default:0,separated:new Lt}},this.dom.addEventListener("mousemove",this.mousemove.bind(this)),this.dom.addEventListener("touchmove",this.touchmove.bind(this)),this.dom.addEventListener("mousedown",this.down.bind(this)),this.dom.addEventListener("touchstart",this.down.bind(this)),this.dom.addEventListener("mouseup",this.up.bind(this)),this.dom.addEventListener("touchend",this.up.bind(this)),this.dom.addEventListener("mouseleave",this.mouseleave.bind(this)),this.dom.addEventListener("touchleave",this.mouseleave.bind(this))}mouseleave(){this.direction.set(0,0),this.pace.default=0,this.pace.separated.set(0,0)}mousemove(t){if(this.dom==document)this.isMouseMoved=!0,this.default.x=t.clientX,this.default.y=t.clientY,this.normalized.current.x=t.clientX/this.width*2-1,this.normalized.current.y=-(t.clientY/this.height)*2+1,this.isMouseHolding&&(this.drag.distance=this.drag.start.distanceTo(this.default),this.drag.start.x<this.default.x?this.drag.side="right":this.drag.side="left");else{if(t.target!=this.dom)return;this.isMouseMoved=!0,this.default.x=t.offsetX,this.default.y=t.offsetY,this.normalized.current.x=t.offsetX/this.width*2-1,this.normalized.current.y=-(t.offsetY/this.height)*2+1,this.isMouseHolding&&(this.drag.distance.default=this.drag.start.distanceTo(this.default),this.drag.distance.separated.x=this.default.x-this.drag.start.x,this.drag.distance.separated.y=this.default.y-this.drag.start.y,this.drag.start.x<this.default.x?this.drag.side="right":this.drag.side="left")}}touchmove(t){t.touches&&(this.isMouseMoved=!0,this.default.x=t.touches[0].clientX,this.default.y=t.touches[0].clientY,this.normalized.current.x=t.touches[0].clientX/this.width*2-1,this.normalized.current.y=-(t.touches[0].clientY/this.height)*2+1,this.isMouseHolding&&(this.drag.distance.default=this.drag.start.distanceTo(this.default),this.drag.distance.separated.x=this.default.x-this.drag.start.x,this.drag.distance.separated.y=this.default.y-this.drag.start.y,this.drag.start.x<this.default.x?this.drag.side="right":this.drag.side="left"))}down(t){this.isMouseHolding=!0,this.drag.start.copy(this.default),t.touches&&(this.normalized.current.x=t.touches[0].clientX/this.width*2-1,this.normalized.current.y=-(t.touches[0].clientY/this.height)*2+1)}up(t){this.isMouseHolding=!1}resize(){this.width=this.dom==document?window.innerWidth:this.dom.offsetWidth,this.height=this.dom==document?window.innerHeight:this.dom.offsetHeight}update(){this.pace.default=this.normalized.current.distanceTo(this.normalized.previous),this.pace.separated.x=this.normalized.current.x-this.normalized.previous.x,this.pace.separated.y=this.normalized.current.y-this.normalized.previous.y,this.direction.subVectors(this.normalized.current,this.normalized.previous).normalize(),this.isMouseHolding?(this.drag.pace.default=this.normalized.current.distanceTo(this.normalized.previous),this.drag.pace.separated.x=this.normalized.current.x-this.normalized.previous.x,this.drag.pace.separated.y=this.normalized.current.y-this.normalized.previous.y):(this.drag.pace.default=0,this.drag.pace.separated.x=0,this.drag.pace.separated.y=0),this.normalized.previous.copy(this.normalized.current)}createEasedMovement(t){let e=new Lt,n=t;return{value:e,update:o=>{e.x=Fn.damp(e.x,this.default.x,n,o),e.y=Fn.damp(e.y,this.default.y,n,o)},setAmount:o=>{n=o}}}createEasedNormalized(t){let e=new Lt,n=t;return{value:e,update:o=>{e.x=Fn.damp(e.x,this.normalized.current.x,n,o),e.y=Fn.damp(e.y,this.normalized.current.y,n,o)},setAmount:o=>{n=o}}}createEasedDirection(t){let e=new Lt,n=t;return{value:e,update:o=>{e.x=Fn.damp(e.x,this.direction.x,n,o),e.y=Fn.damp(e.y,this.direction.y,n,o)},setAmount:o=>{n=o}}}createEasedPace(t){let e={default:0,separated:new Lt},n=t;return{value:e,update:o=>{e.default=Fn.damp(e.default,this.pace.default,n,o),e.separated.x=Fn.damp(e.separated.x,this.pace.separated.x,n,o),e.separated.y=Fn.damp(e.separated.y,this.pace.separated.y,n,o)},setAmount:o=>{n=o}}}createEasedDrag(t){let e={distance:0,pace:{default:0,separated:new Lt}},n=t;return{value:e,update:s=>{e.distance=Fn.damp(e.distance,this.drag.distance,n,s),e.pace.default=Fn.damp(e.pace.default,this.drag.pace.default,n,s),e.pace.separated.x=Fn.damp(e.pace.separated.x,this.drag.pace.separated.x,n,s),e.pace.separated.y=Fn.damp(e.pace.separated.y,this.drag.pace.separated.y,n,s)}}}}class S1{constructor(){this.gl=new xr,this.models={},this.textures={},this.hdris={},this.fonts={}}customTextureLoader(t,e){return new Promise(n=>{this.textureLoader.load(t,r=>{n(),e(r),this.gl.isDebug&&this.logProgress(t)},void 0,r=>{console.error(r)})})}customModelLoader(t,e){return new Promise(n=>{this.gltfLoader.load(t,r=>{n(),e(r),this.gl.isDebug&&this.logProgress(t)},void 0,r=>{console.error(r)})})}customHdriLoader(t,e){return new Promise(n=>{this.rgbeLoader.load(t,r=>{n(),e(r),this.gl.isDebug&&this.logProgress(t)},void 0,r=>{console.error(r)})})}customFontLoader(t,e){return new Promise(n=>{this.fontLoader.load(t,r=>{n(),e(r),this.gl.isDebug&&this.logProgress(t)},void 0,r=>{console.error(r)})})}logProgress(t){this.promisesProgress++,console.info(`[WebGL] [ ${this.promisesProgress}/${this.promises.length} asset loaded ] -`,t)}load(){return this.promises=[],this.promisesProgress=0,new Promise(async t=>{this.promises.length>0&&await Promise.all(this.promises),t(),console.log("[WebGL] [ █ █ █ █     ] -","Assets loaded")})}}let zu=null;class xr{constructor(t){if(zu)return zu;zu=this,fp.isWebGL2Available()?this.setup(t):(console.log("[WebGL] [   (╯︵╰,)   ] -","WebGL 2.0 is not available - initializing fallback."),document.documentElement.classList.add("webgl-not-available"))}setup(t){this.urlParams=new URLSearchParams(window.location.search),this.isDebug=this.urlParams.has("debug"),this.params=t,this.isLoaded=!1,this.canvas=document.querySelector(this.params.canvas),this.time=new JS,this.sizes=new QS,this.mouse=new M1,this.renderer=new _S,this.scene=new Km,this.camera=new fd,this.assets=new S1,window.addEventListener("resize",()=>{this.resize()})}load(){return new Promise(t=>{fp.isWebGL2Available()?Promise.all([this.loadDOM(),this.assets.load()]).then(()=>{this.init(),this.isLoaded=!0,t()}):t()})}init(){this.isDebug&&(this.debug=new E1),this.world=new ZS,xc.ticker.add(this.update.bind(this)),this.world.add(),console.log("[WebGL] [ █ █ █ █ █ █ ] -","Initialized")}loadDOM(){return new Promise(t=>{document.readyState==="interactive"?(console.log("[WebGL] [ █ █         ] -","DOM loaded"),t()):document.addEventListener("DOMContentLoaded",()=>{console.log("[WebGL] [ █ █         ] -","DOM loaded"),t()})})}update(){this.isLoaded&&(this.time.update(),this.world.update(),this.renderer.update(),this.mouse.update(),this.isDebug&&this.debug.update())}resize(){this.isLoaded&&(this.renderer.resize(),this.world.resize()),this.mouse.resize()}}const T1=new xr({canvas:"[data-gl-canvas]"});T1.load();
//# sourceMappingURL=index-3f530ec7.js.map
