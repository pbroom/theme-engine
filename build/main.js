var mi=Object.create;var St=Object.defineProperty,fi=Object.defineProperties,pi=Object.getOwnPropertyDescriptor,di=Object.getOwnPropertyDescriptors,gi=Object.getOwnPropertyNames,xr=Object.getOwnPropertySymbols,yi=Object.getPrototypeOf,Ar=Object.prototype.hasOwnProperty,bi=Object.prototype.propertyIsEnumerable;var Cr=(t,e,r)=>e in t?St(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,ft=(t,e)=>{for(var r in e||(e={}))Ar.call(e,r)&&Cr(t,r,e[r]);if(xr)for(var r of xr(e))bi.call(e,r)&&Cr(t,r,e[r]);return t},Pr=(t,e)=>fi(t,di(e));var C=(t,e)=>()=>(t&&(e=t(t=0)),e);var u=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),xi=(t,e)=>{for(var r in e)St(t,r,{get:e[r],enumerable:!0})},Tr=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of gi(e))!Ar.call(t,o)&&o!==r&&St(t,o,{get:()=>e[o],enumerable:!(n=pi(e,o))||n.enumerable});return t};var Ci=(t,e,r)=>(r=t!=null?mi(yi(t)):{},Tr(e||!t||!t.__esModule?St(r,"default",{value:t,enumerable:!0}):r,t)),Ai=t=>Tr(St({},"__esModule",{value:!0}),t);function we(t,e={}){if(typeof t!="string"||Ii.test(t)||!vi.test(t))throw new TypeError("Expected a valid hex string");t=t.replace(/^#/,"");let r=1;t.length===8&&(r=Number.parseInt(t.slice(6,8),16)/255,t=t.slice(0,6)),t.length===4&&(r=Number.parseInt(t.slice(3,4).repeat(2),16)/255,t=t.slice(0,3)),t.length===3&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]);let n=Number.parseInt(t,16),o=n>>16,s=n>>8&255,a=n&255,c=typeof e.alpha=="number"?e.alpha:r;if(e.format==="array")return[o,s,a,c];if(e.format==="css"){let l=c===1?"":` / ${Number((c*100).toFixed(2))}%`;return`rgb(${o} ${s} ${a}${l})`}return{red:o,green:s,blue:a,alpha:c}}var qt,Pi,Ti,Ii,vi,Ir=C(()=>{qt="a-f\\d",Pi=`#?[${qt}]{3}[${qt}]?`,Ti=`#?[${qt}]{6}([${qt}]{2})?`,Ii=new RegExp(`[^#${qt}]`,"gi"),vi=new RegExp(`^${Pi}$|^${Ti}$`,"i")});function ke(t){if(t.length!==3&&t.length!==6)return null;try{let{red:e,green:r,blue:n}=we(t);return{b:n/255,g:r/255,r:e/255}}catch(e){return null}}var vr=C(()=>{Ir()});function De(t,e){if(typeof __html__=="undefined")throw new Error("No UI defined");let r=`<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command=="undefined"?"":figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof e=="undefined"?{}:e)};${__html__}</script>`;figma.showUI(r,Pr(ft({},t),{themeColors:typeof t.themeColors=="undefined"?!0:t.themeColors}))}var Mr=C(()=>{});var Oe=C(()=>{vr();Mr()});function V(t){return t<0?-1:t===0?0:1}function pt(t,e,r){return(1-r)*t+r*e}function wr(t,e,r){return r<t?t:r>e?e:r}function bt(t,e,r){return r<t?t:r>e?e:r}function ne(t){return t=t%360,t<0&&(t=t+360),t}function et(t){return t=t%360,t<0&&(t=t+360),t}function Fe(t,e){return 180-Math.abs(Math.abs(t-e)-180)}function Bt(t,e){let r=t[0]*e[0][0]+t[1]*e[0][1]+t[2]*e[0][2],n=t[0]*e[1][0]+t[1]*e[1][1]+t[2]*e[1][2],o=t[0]*e[2][0]+t[1]*e[2][1]+t[2]*e[2][2];return[r,n,o]}var z=C(()=>{});function oe(t,e,r){return(255<<24|(t&255)<<16|(e&255)<<8|r&255)>>>0}function Se(t){let e=gt(t[0]),r=gt(t[1]),n=gt(t[2]);return oe(e,r,n)}function kr(t){return t>>24&255}function Rt(t){return t>>16&255}function Et(t){return t>>8&255}function _t(t){return t&255}function Dr(t,e,r){let n=wi,o=n[0][0]*t+n[0][1]*e+n[0][2]*r,s=n[1][0]*t+n[1][1]*e+n[1][2]*r,a=n[2][0]*t+n[2][1]*e+n[2][2]*r,c=gt(o),l=gt(s),h=gt(a);return oe(c,l,h)}function Di(t){let e=dt(Rt(t)),r=dt(Et(t)),n=dt(_t(t));return Bt([e,r,n],Mi)}function Or(t){let e=J(t),r=gt(e);return oe(r,r,r)}function ae(t){let e=Di(t)[1];return 116*Sr(e/100)-16}function J(t){return 100*Oi((t+16)/116)}function jt(t){return Sr(t/100)*116-16}function dt(t){let e=t/255;return e<=.040449936?e/12.92*100:Math.pow((e+.055)/1.055,2.4)*100}function gt(t){let e=t/100,r=0;return e<=.0031308?r=e*12.92:r=1.055*Math.pow(e,1/2.4)-.055,wr(0,255,Math.round(r*255))}function Fr(){return ki}function se(t){let e=Rt(t),r=Et(t),n=_t(t),o=kr(t);return{r:e,g:r,b:n,a:o}}function Sr(t){let e=.008856451679035631,r=24389/27;return t>e?Math.pow(t,1/3):(r*t+16)/116}function Oi(t){let e=.008856451679035631,r=24389/27,n=t*t*t;return n>e?n:(116*t-16)/r}var Mi,wi,ki,K=C(()=>{z();Mi=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],wi=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],ki=[95.047,100,108.883]});var L,xt=C(()=>{K();z();L=class{static make(e=Fr(),r=200/Math.PI*J(50)/100,n=50,o=2,s=!1){let a=e,c=a[0]*.401288+a[1]*.650173+a[2]*-.051461,l=a[0]*-.250268+a[1]*1.204414+a[2]*.045854,h=a[0]*-.002079+a[1]*.048952+a[2]*.953127,f=.8+o/10,p=f>=.9?pt(.59,.69,(f-.9)*10):pt(.525,.59,(f-.8)*10),y=s?1:f*(1-1/3.6*Math.exp((-r-42)/92));y=y>1?1:y<0?0:y;let d=f,x=[y*(100/c)+1-y,y*(100/l)+1-y,y*(100/h)+1-y],b=1/(5*r+1),A=b*b*b*b,v=1-A,O=A*r+.1*v*v*Math.cbrt(5*r),T=J(n)/e[1],U=1.48+Math.sqrt(T),I=.725/Math.pow(T,.2),E=I,k=[Math.pow(O*x[0]*c/100,.42),Math.pow(O*x[1]*l/100,.42),Math.pow(O*x[2]*h/100,.42)],R=[400*k[0]/(k[0]+27.13),400*k[1]/(k[1]+27.13),400*k[2]/(k[2]+27.13)],j=(2*R[0]+R[1]+.05*R[2])*I;return new L(T,j,I,E,p,d,x,O,Math.pow(O,.25),U)}constructor(e,r,n,o,s,a,c,l,h,f){this.n=e,this.aw=r,this.nbb=n,this.ncb=o,this.c=s,this.nc=a,this.rgbD=c,this.fl=l,this.fLRoot=h,this.z=f}};L.DEFAULT=L.make()});var _,Lt=C(()=>{K();z();xt();_=class{constructor(e,r,n,o,s,a,c,l,h){this.hue=e,this.chroma=r,this.j=n,this.q=o,this.m=s,this.s=a,this.jstar=c,this.astar=l,this.bstar=h}distance(e){let r=this.jstar-e.jstar,n=this.astar-e.astar,o=this.bstar-e.bstar,s=Math.sqrt(r*r+n*n+o*o);return 1.41*Math.pow(s,.63)}static fromInt(e){return _.fromIntInViewingConditions(e,L.DEFAULT)}static fromIntInViewingConditions(e,r){let n=(e&16711680)>>16,o=(e&65280)>>8,s=e&255,a=dt(n),c=dt(o),l=dt(s),h=.41233895*a+.35762064*c+.18051042*l,f=.2126*a+.7152*c+.0722*l,p=.01932141*a+.11916382*c+.95034478*l,y=.401288*h+.650173*f-.051461*p,d=-.250268*h+1.204414*f+.045854*p,x=-.002079*h+.048952*f+.953127*p,b=r.rgbD[0]*y,A=r.rgbD[1]*d,v=r.rgbD[2]*x,O=Math.pow(r.fl*Math.abs(b)/100,.42),T=Math.pow(r.fl*Math.abs(A)/100,.42),U=Math.pow(r.fl*Math.abs(v)/100,.42),I=V(b)*400*O/(O+27.13),E=V(A)*400*T/(T+27.13),k=V(v)*400*U/(U+27.13),R=(11*I+-12*E+k)/11,j=(I+E-2*k)/9,S=(20*I+20*E+21*k)/20,at=(40*I+20*E+k)/20,tt=Math.atan2(j,R)*180/Math.PI,Y=tt<0?tt+360:tt>=360?tt-360:tt,Qt=Y*Math.PI/180,te=at*r.nbb,lt=100*Math.pow(te/r.aw,r.c*r.z),ee=4/r.c*Math.sqrt(lt/100)*(r.aw+4)*r.fLRoot,Te=Y<20.14?Y+360:Y,Ie=.25*(Math.cos(Te*Math.PI/180+2)+3.8),Me=5e4/13*Ie*r.nc*r.ncb*Math.sqrt(R*R+j*j)/(S+.305),re=Math.pow(Me,.9)*Math.pow(1.64-Math.pow(.29,r.n),.73),gr=re*Math.sqrt(lt/100),yr=gr*r.fLRoot,ci=50*Math.sqrt(re*r.c/(r.aw+4)),ui=(1+100*.007)*lt/(1+.007*lt),br=1/.0228*Math.log(1+.0228*yr),li=br*Math.cos(Qt),hi=br*Math.sin(Qt);return new _(Y,gr,lt,ee,yr,ci,ui,li,hi)}static fromJch(e,r,n){return _.fromJchInViewingConditions(e,r,n,L.DEFAULT)}static fromJchInViewingConditions(e,r,n,o){let s=4/o.c*Math.sqrt(e/100)*(o.aw+4)*o.fLRoot,a=r*o.fLRoot,c=r/Math.sqrt(e/100),l=50*Math.sqrt(c*o.c/(o.aw+4)),h=n*Math.PI/180,f=(1+100*.007)*e/(1+.007*e),p=1/.0228*Math.log(1+.0228*a),y=p*Math.cos(h),d=p*Math.sin(h);return new _(n,r,e,s,a,l,f,y,d)}static fromUcs(e,r,n){return _.fromUcsInViewingConditions(e,r,n,L.DEFAULT)}static fromUcsInViewingConditions(e,r,n,o){let s=r,a=n,c=Math.sqrt(s*s+a*a),h=(Math.exp(c*.0228)-1)/.0228/o.fLRoot,f=Math.atan2(a,s)*(180/Math.PI);f<0&&(f+=360);let p=e/(1-(e-100)*.007);return _.fromJchInViewingConditions(p,h,f,o)}toInt(){return this.viewed(L.DEFAULT)}viewed(e){let r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),o=this.hue*Math.PI/180,s=.25*(Math.cos(o+2)+3.8),a=e.aw*Math.pow(this.j/100,1/e.c/e.z),c=s*(5e4/13)*e.nc*e.ncb,l=a/e.nbb,h=Math.sin(o),f=Math.cos(o),p=23*(l+.305)*n/(23*c+11*n*f+108*n*h),y=p*f,d=p*h,x=(460*l+451*y+288*d)/1403,b=(460*l-891*y-261*d)/1403,A=(460*l-220*y-6300*d)/1403,v=Math.max(0,27.13*Math.abs(x)/(400-Math.abs(x))),O=V(x)*(100/e.fl)*Math.pow(v,1/.42),T=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),U=V(b)*(100/e.fl)*Math.pow(T,1/.42),I=Math.max(0,27.13*Math.abs(A)/(400-Math.abs(A))),E=V(A)*(100/e.fl)*Math.pow(I,1/.42),k=O/e.rgbD[0],R=U/e.rgbD[1],j=E/e.rgbD[2],S=1.86206786*k-1.01125463*R+.14918677*j,at=.38752654*k+.62144744*R-.00897398*j,ut=-.0158415*k-.03412294*R+1.04996444*j;return Dr(S,at,ut)}static fromXyzInViewingConditions(e,r,n,o){let s=.401288*e+.650173*r-.051461*n,a=-.250268*e+1.204414*r+.045854*n,c=-.002079*e+.048952*r+.953127*n,l=o.rgbD[0]*s,h=o.rgbD[1]*a,f=o.rgbD[2]*c,p=Math.pow(o.fl*Math.abs(l)/100,.42),y=Math.pow(o.fl*Math.abs(h)/100,.42),d=Math.pow(o.fl*Math.abs(f)/100,.42),x=V(l)*400*p/(p+27.13),b=V(h)*400*y/(y+27.13),A=V(f)*400*d/(d+27.13),v=(11*x+-12*b+A)/11,O=(x+b-2*A)/9,T=(20*x+20*b+21*A)/20,U=(40*x+20*b+A)/20,E=Math.atan2(O,v)*180/Math.PI,k=E<0?E+360:E>=360?E-360:E,R=k*Math.PI/180,j=U*o.nbb,S=100*Math.pow(j/o.aw,o.c*o.z),at=4/o.c*Math.sqrt(S/100)*(o.aw+4)*o.fLRoot,ut=k<20.14?k+360:k,tt=1/4*(Math.cos(ut*Math.PI/180+2)+3.8),Qt=5e4/13*tt*o.nc*o.ncb*Math.sqrt(v*v+O*O)/(T+.305),te=Math.pow(Qt,.9)*Math.pow(1.64-Math.pow(.29,o.n),.73),lt=te*Math.sqrt(S/100),ee=lt*o.fLRoot,Te=50*Math.sqrt(te*o.c/(o.aw+4)),Ie=(1+100*.007)*S/(1+.007*S),ve=Math.log(1+.0228*ee)/.0228,Me=ve*Math.cos(R),re=ve*Math.sin(R);return new _(k,lt,S,at,ee,Te,Ie,Me,re)}xyzInViewingConditions(e){let r=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),n=Math.pow(r/Math.pow(1.64-Math.pow(.29,e.n),.73),1/.9),o=this.hue*Math.PI/180,s=.25*(Math.cos(o+2)+3.8),a=e.aw*Math.pow(this.j/100,1/e.c/e.z),c=s*(5e4/13)*e.nc*e.ncb,l=a/e.nbb,h=Math.sin(o),f=Math.cos(o),p=23*(l+.305)*n/(23*c+11*n*f+108*n*h),y=p*f,d=p*h,x=(460*l+451*y+288*d)/1403,b=(460*l-891*y-261*d)/1403,A=(460*l-220*y-6300*d)/1403,v=Math.max(0,27.13*Math.abs(x)/(400-Math.abs(x))),O=V(x)*(100/e.fl)*Math.pow(v,1/.42),T=Math.max(0,27.13*Math.abs(b)/(400-Math.abs(b))),U=V(b)*(100/e.fl)*Math.pow(T,1/.42),I=Math.max(0,27.13*Math.abs(A)/(400-Math.abs(A))),E=V(A)*(100/e.fl)*Math.pow(I,1/.42),k=O/e.rgbD[0],R=U/e.rgbD[1],j=E/e.rgbD[2],S=1.86206786*k-1.01125463*R+.14918677*j,at=.38752654*k+.62144744*R-.00897398*j,ut=-.0158415*k-.03412294*R+1.04996444*j;return[S,at,ut]}}});var g,qr=C(()=>{K();z();Lt();xt();g=class{static sanitizeRadians(e){return(e+Math.PI*8)%(Math.PI*2)}static trueDelinearized(e){let r=e/100,n=0;return r<=.0031308?n=r*12.92:n=1.055*Math.pow(r,1/2.4)-.055,n*255}static chromaticAdaptation(e){let r=Math.pow(Math.abs(e),.42);return V(e)*400*r/(r+27.13)}static hueOf(e){let r=Bt(e,g.SCALED_DISCOUNT_FROM_LINRGB),n=g.chromaticAdaptation(r[0]),o=g.chromaticAdaptation(r[1]),s=g.chromaticAdaptation(r[2]),a=(11*n+-12*o+s)/11,c=(n+o-2*s)/9;return Math.atan2(c,a)}static areInCyclicOrder(e,r,n){let o=g.sanitizeRadians(r-e),s=g.sanitizeRadians(n-e);return o<s}static intercept(e,r,n){return(r-e)/(n-e)}static lerpPoint(e,r,n){return[e[0]+(n[0]-e[0])*r,e[1]+(n[1]-e[1])*r,e[2]+(n[2]-e[2])*r]}static setCoordinate(e,r,n,o){let s=g.intercept(e[o],r,n[o]);return g.lerpPoint(e,s,n)}static isBounded(e){return 0<=e&&e<=100}static nthVertex(e,r){let n=g.Y_FROM_LINRGB[0],o=g.Y_FROM_LINRGB[1],s=g.Y_FROM_LINRGB[2],a=r%4<=1?0:100,c=r%2===0?0:100;if(r<4){let l=a,h=c,f=(e-l*o-h*s)/n;return g.isBounded(f)?[f,l,h]:[-1,-1,-1]}else if(r<8){let l=a,h=c,f=(e-h*n-l*s)/o;return g.isBounded(f)?[h,f,l]:[-1,-1,-1]}else{let l=a,h=c,f=(e-l*n-h*o)/s;return g.isBounded(f)?[l,h,f]:[-1,-1,-1]}}static bisectToSegment(e,r){let n=[-1,-1,-1],o=n,s=0,a=0,c=!1,l=!0;for(let h=0;h<12;h++){let f=g.nthVertex(e,h);if(f[0]<0)continue;let p=g.hueOf(f);if(!c){n=f,o=f,s=p,a=p,c=!0;continue}(l||g.areInCyclicOrder(s,p,a))&&(l=!1,g.areInCyclicOrder(s,r,p)?(o=f,a=p):(n=f,s=p))}return[n,o]}static midpoint(e,r){return[(e[0]+r[0])/2,(e[1]+r[1])/2,(e[2]+r[2])/2]}static criticalPlaneBelow(e){return Math.floor(e-.5)}static criticalPlaneAbove(e){return Math.ceil(e-.5)}static bisectToLimit(e,r){let n=g.bisectToSegment(e,r),o=n[0],s=g.hueOf(o),a=n[1];for(let c=0;c<3;c++)if(o[c]!==a[c]){let l=-1,h=255;o[c]<a[c]?(l=g.criticalPlaneBelow(g.trueDelinearized(o[c])),h=g.criticalPlaneAbove(g.trueDelinearized(a[c]))):(l=g.criticalPlaneAbove(g.trueDelinearized(o[c])),h=g.criticalPlaneBelow(g.trueDelinearized(a[c])));for(let f=0;f<8&&!(Math.abs(h-l)<=1);f++){let p=Math.floor((l+h)/2),y=g.CRITICAL_PLANES[p],d=g.setCoordinate(o,y,a,c),x=g.hueOf(d);g.areInCyclicOrder(s,r,x)?(a=d,h=p):(o=d,s=x,l=p)}}return g.midpoint(o,a)}static inverseChromaticAdaptation(e){let r=Math.abs(e),n=Math.max(0,27.13*r/(400-r));return V(e)*Math.pow(n,1/.42)}static findResultByJ(e,r,n){let o=Math.sqrt(n)*11,s=L.DEFAULT,a=1/Math.pow(1.64-Math.pow(.29,s.n),.73),l=.25*(Math.cos(e+2)+3.8)*(5e4/13)*s.nc*s.ncb,h=Math.sin(e),f=Math.cos(e);for(let p=0;p<5;p++){let y=o/100,d=r===0||o===0?0:r/Math.sqrt(y),x=Math.pow(d*a,1/.9),A=s.aw*Math.pow(y,1/s.c/s.z)/s.nbb,v=23*(A+.305)*x/(23*l+11*x*f+108*x*h),O=v*f,T=v*h,U=(460*A+451*O+288*T)/1403,I=(460*A-891*O-261*T)/1403,E=(460*A-220*O-6300*T)/1403,k=g.inverseChromaticAdaptation(U),R=g.inverseChromaticAdaptation(I),j=g.inverseChromaticAdaptation(E),S=Bt([k,R,j],g.LINRGB_FROM_SCALED_DISCOUNT);if(S[0]<0||S[1]<0||S[2]<0)return 0;let at=g.Y_FROM_LINRGB[0],ut=g.Y_FROM_LINRGB[1],tt=g.Y_FROM_LINRGB[2],Y=at*S[0]+ut*S[1]+tt*S[2];if(Y<=0)return 0;if(p===4||Math.abs(Y-n)<.002)return S[0]>100.01||S[1]>100.01||S[2]>100.01?0:Se(S);o=o-(Y-n)*o/(2*Y)}return 0}static solveToInt(e,r,n){if(r<1e-4||n<1e-4||n>99.9999)return Or(n);e=et(e);let o=e/180*Math.PI,s=J(n),a=g.findResultByJ(o,r,s);if(a!==0)return a;let c=g.bisectToLimit(s,o);return Se(c)}static solveToCam(e,r,n){return _.fromInt(g.solveToInt(e,r,n))}};g.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];g.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];g.Y_FROM_LINRGB=[.2126,.7152,.0722];g.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776]});var M,rt=C(()=>{K();Lt();qr();xt();M=class{static from(e,r,n){return new M(g.solveToInt(e,r,n))}static fromInt(e){return new M(e)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(e){this.setInternalState(g.solveToInt(e,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(e){this.setInternalState(g.solveToInt(this.internalHue,e,this.internalTone))}get tone(){return this.internalTone}set tone(e){this.setInternalState(g.solveToInt(this.internalHue,this.internalChroma,e))}constructor(e){this.argb=e;let r=_.fromInt(e);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=ae(e),this.argb=e}setInternalState(e){let r=_.fromInt(e);this.internalHue=r.hue,this.internalChroma=r.chroma,this.internalTone=ae(e),this.argb=e}inViewingConditions(e){let n=_.fromInt(this.toInt()).xyzInViewingConditions(e),o=_.fromXyzInViewingConditions(n[0],n[1],n[2],L.make());return M.from(o.hue,o.chroma,jt(n[1]))}}});var qe=C(()=>{Lt();rt();K();z();});var q,Be=C(()=>{K();z();q=class{static ratioOfTones(e,r){return e=bt(0,100,e),r=bt(0,100,r),q.ratioOfYs(J(e),J(r))}static ratioOfYs(e,r){let n=e>r?e:r,o=n===r?e:r;return(n+5)/(o+5)}static lighter(e,r){if(e<0||e>100)return-1;let n=J(e),o=r*(n+5)-5,s=q.ratioOfYs(o,n),a=Math.abs(s-r);if(s<r&&a>.04)return-1;let c=jt(o)+.4;return c<0||c>100?-1:c}static darker(e,r){if(e<0||e>100)return-1;let n=J(e),o=(n+5)/r-5,s=q.ratioOfYs(n,o),a=Math.abs(s-r);if(s<r&&a>.04)return-1;let c=jt(o)-.4;return c<0||c>100?-1:c}static lighterUnsafe(e,r){let n=q.lighter(e,r);return n<0?100:n}static darkerUnsafe(e,r){let n=q.darker(e,r);return n<0?0:n}}});var ht,Nt=C(()=>{rt();ht=class{static isDisliked(e){let r=Math.round(e.hue)>=90&&Math.round(e.hue)<=111,n=Math.round(e.chroma)>16,o=Math.round(e.tone)<65;return r&&n&&o}static fixIfDisliked(e){return ht.isDisliked(e)?M.from(e.hue,e.chroma,70):e}}});var m,Re=C(()=>{Be();z();m=class{static fromPalette(e){var r,n;return new m((r=e.name)!=null?r:"",e.palette,e.tone,(n=e.isBackground)!=null?n:!1,e.background,e.secondBackground,e.contrastCurve,e.toneDeltaPair)}constructor(e,r,n,o,s,a,c,l){if(this.name=e,this.palette=r,this.tone=n,this.isBackground=o,this.background=s,this.secondBackground=a,this.contrastCurve=c,this.toneDeltaPair=l,this.hctCache=new Map,!s&&a)throw new Error(`Color ${e} has secondBackgrounddefined, but background is not defined.`);if(!s&&c)throw new Error(`Color ${e} has contrastCurvedefined, but background is not defined.`);if(s&&!c)throw new Error(`Color ${e} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(e){return this.getHct(e).toInt()}getHct(e){let r=this.hctCache.get(e);if(r!=null)return r;let n=this.getTone(e),o=this.palette(e).getHct(n);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(e,o),o}getTone(e){let r=e.contrastLevel<0;if(this.toneDeltaPair){let n=this.toneDeltaPair(e),o=n.roleA,s=n.roleB,a=n.delta,c=n.polarity,l=n.stayTogether,f=this.background(e).getTone(e),p=c==="nearer"||c==="lighter"&&!e.isDark||c==="darker"&&e.isDark,y=p?o:s,d=p?s:o,x=this.name===y.name,b=e.isDark?1:-1,A=y.contrastCurve.getContrast(e.contrastLevel),v=d.contrastCurve.getContrast(e.contrastLevel),O=y.tone(e),T=q.ratioOfTones(f,O)>=A?O:m.foregroundTone(f,A),U=d.tone(e),I=q.ratioOfTones(f,U)>=v?U:m.foregroundTone(f,v);return r&&(T=m.foregroundTone(f,A),I=m.foregroundTone(f,v)),(I-T)*b>=a||(I=bt(0,100,T+a*b),(I-T)*b>=a||(T=bt(0,100,I-a*b))),50<=T&&T<60?b>0?(T=60,I=Math.max(I,T+a*b)):(T=49,I=Math.min(I,T+a*b)):50<=I&&I<60&&(l?b>0?(T=60,I=Math.max(I,T+a*b)):(T=49,I=Math.min(I,T+a*b)):b>0?I=60:I=49),x?T:I}else{let n=this.tone(e);if(this.background==null)return n;let o=this.background(e).getTone(e),s=this.contrastCurve.getContrast(e.contrastLevel);if(q.ratioOfTones(o,n)>=s||(n=m.foregroundTone(o,s)),r&&(n=m.foregroundTone(o,s)),this.isBackground&&50<=n&&n<60&&(q.ratioOfTones(49,o)>=s?n=49:n=60),this.secondBackground){let[a,c]=[this.background,this.secondBackground],[l,h]=[a(e).getTone(e),c(e).getTone(e)],[f,p]=[Math.max(l,h),Math.min(l,h)];if(q.ratioOfTones(f,n)>=s&&q.ratioOfTones(p,n)>=s)return n;let y=q.lighter(f,s),d=q.darker(p,s),x=[];return y!==-1&&x.push(y),d!==-1&&x.push(d),m.tonePrefersLightForeground(l)||m.tonePrefersLightForeground(h)?y<0?100:y:x.length===1?x[0]:d<0?0:d}return n}}static foregroundTone(e,r){let n=q.lighterUnsafe(e,r),o=q.darkerUnsafe(e,r),s=q.ratioOfTones(n,e),a=q.ratioOfTones(o,e);if(m.tonePrefersLightForeground(e)){let l=Math.abs(s-a)<.1&&s<r&&a<r;return s>=r||s>=a||l?n:o}else return a>=r||a>=s?o:n}static tonePrefersLightForeground(e){return Math.round(e)<60}static toneAllowsLightForeground(e){return Math.round(e)<=49}static enableLightForeground(e){return m.tonePrefersLightForeground(e)&&!m.toneAllowsLightForeground(e)?49:e}}});var G,st=C(()=>{(function(t){t[t.MONOCHROME=0]="MONOCHROME",t[t.NEUTRAL=1]="NEUTRAL",t[t.TONAL_SPOT=2]="TONAL_SPOT",t[t.VIBRANT=3]="VIBRANT",t[t.EXPRESSIVE=4]="EXPRESSIVE",t[t.FIDELITY=5]="FIDELITY",t[t.CONTENT=6]="CONTENT",t[t.RAINBOW=7]="RAINBOW",t[t.FRUIT_SALAD=8]="FRUIT_SALAD"})(G||(G={}))});var P,Br=C(()=>{z();P=class{constructor(e,r,n,o){this.low=e,this.normal=r,this.medium=n,this.high=o}getContrast(e){return e<=-1?this.low:e<0?pt(this.low,this.normal,(e- -1)/1):e<.5?pt(this.normal,this.medium,(e-0)/.5):e<1?pt(this.medium,this.high,(e-.5)/.5):this.high}}});var N,Rr=C(()=>{N=class{constructor(e,r,n,o,s){this.roleA=e,this.roleB=r,this.delta=n,this.polarity=o,this.stayTogether=s}}});function Ct(t){return t.variant===G.FIDELITY||t.variant===G.CONTENT}function B(t){return t.variant===G.MONOCHROME}function Fi(t,e,r,n){let o=r,s=M.from(t,e,r);if(s.chroma<e){let a=s.chroma;for(;s.chroma<e;){o+=n?-1:1;let c=M.from(t,e,o);if(a>c.chroma||Math.abs(c.chroma-e)<.4)break;let l=Math.abs(c.chroma-e),h=Math.abs(s.chroma-e);l<h&&(s=c),a=Math.max(a,c.chroma)}}return o}function Si(t){return L.make(void 0,void 0,t.isDark?30:80,void 0,void 0)}function Ee(t,e){let r=t.inViewingConditions(Si(e));return m.tonePrefersLightForeground(t.tone)&&!m.toneAllowsLightForeground(r.tone)?m.enableLightForeground(t.tone):m.enableLightForeground(r.tone)}var i,Er=C(()=>{Nt();rt();xt();st();Br();Re();Rr();i=class{static highestSurface(e){return e.isDark?i.surfaceBright:i.surfaceDim}};i.contentAccentToneDelta=15;i.primaryPaletteKeyColor=m.fromPalette({name:"primary_palette_key_color",palette:t=>t.primaryPalette,tone:t=>t.primaryPalette.keyColor.tone});i.secondaryPaletteKeyColor=m.fromPalette({name:"secondary_palette_key_color",palette:t=>t.secondaryPalette,tone:t=>t.secondaryPalette.keyColor.tone});i.tertiaryPaletteKeyColor=m.fromPalette({name:"tertiary_palette_key_color",palette:t=>t.tertiaryPalette,tone:t=>t.tertiaryPalette.keyColor.tone});i.neutralPaletteKeyColor=m.fromPalette({name:"neutral_palette_key_color",palette:t=>t.neutralPalette,tone:t=>t.neutralPalette.keyColor.tone});i.neutralVariantPaletteKeyColor=m.fromPalette({name:"neutral_variant_palette_key_color",palette:t=>t.neutralVariantPalette,tone:t=>t.neutralVariantPalette.keyColor.tone});i.background=m.fromPalette({name:"background",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0});i.onBackground=m.fromPalette({name:"on_background",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>i.background,contrastCurve:new P(3,3,4.5,7)});i.surface=m.fromPalette({name:"surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:98,isBackground:!0});i.surfaceDim=m.fromPalette({name:"surface_dim",palette:t=>t.neutralPalette,tone:t=>t.isDark?6:87,isBackground:!0});i.surfaceBright=m.fromPalette({name:"surface_bright",palette:t=>t.neutralPalette,tone:t=>t.isDark?24:98,isBackground:!0});i.surfaceContainerLowest=m.fromPalette({name:"surface_container_lowest",palette:t=>t.neutralPalette,tone:t=>t.isDark?4:100,isBackground:!0});i.surfaceContainerLow=m.fromPalette({name:"surface_container_low",palette:t=>t.neutralPalette,tone:t=>t.isDark?10:96,isBackground:!0});i.surfaceContainer=m.fromPalette({name:"surface_container",palette:t=>t.neutralPalette,tone:t=>t.isDark?12:94,isBackground:!0});i.surfaceContainerHigh=m.fromPalette({name:"surface_container_high",palette:t=>t.neutralPalette,tone:t=>t.isDark?17:92,isBackground:!0});i.surfaceContainerHighest=m.fromPalette({name:"surface_container_highest",palette:t=>t.neutralPalette,tone:t=>t.isDark?22:90,isBackground:!0});i.onSurface=m.fromPalette({name:"on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:10,background:t=>i.highestSurface(t),contrastCurve:new P(4.5,7,11,21)});i.surfaceVariant=m.fromPalette({name:"surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:90,isBackground:!0});i.onSurfaceVariant=m.fromPalette({name:"on_surface_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?80:30,background:t=>i.highestSurface(t),contrastCurve:new P(3,4.5,7,11)});i.inverseSurface=m.fromPalette({name:"inverse_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?90:20});i.inverseOnSurface=m.fromPalette({name:"inverse_on_surface",palette:t=>t.neutralPalette,tone:t=>t.isDark?20:95,background:t=>i.inverseSurface,contrastCurve:new P(4.5,7,11,21)});i.outline=m.fromPalette({name:"outline",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?60:50,background:t=>i.highestSurface(t),contrastCurve:new P(1.5,3,4.5,7)});i.outlineVariant=m.fromPalette({name:"outline_variant",palette:t=>t.neutralVariantPalette,tone:t=>t.isDark?30:80,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7)});i.shadow=m.fromPalette({name:"shadow",palette:t=>t.neutralPalette,tone:t=>0});i.scrim=m.fromPalette({name:"scrim",palette:t=>t.neutralPalette,tone:t=>0});i.surfaceTint=m.fromPalette({name:"surface_tint",palette:t=>t.primaryPalette,tone:t=>t.isDark?80:40,isBackground:!0});i.primary=m.fromPalette({name:"primary",palette:t=>t.primaryPalette,tone:t=>B(t)?t.isDark?100:0:t.isDark?80:40,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(3,4.5,7,11),toneDeltaPair:t=>new N(i.primaryContainer,i.primary,15,"nearer",!1)});i.onPrimary=m.fromPalette({name:"on_primary",palette:t=>t.primaryPalette,tone:t=>B(t)?t.isDark?10:90:t.isDark?20:100,background:t=>i.primary,contrastCurve:new P(4.5,7,11,21)});i.primaryContainer=m.fromPalette({name:"primary_container",palette:t=>t.primaryPalette,tone:t=>Ct(t)?Ee(t.sourceColorHct,t):B(t)?t.isDark?85:25:t.isDark?30:90,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7),toneDeltaPair:t=>new N(i.primaryContainer,i.primary,15,"nearer",!1)});i.onPrimaryContainer=m.fromPalette({name:"on_primary_container",palette:t=>t.primaryPalette,tone:t=>Ct(t)?m.foregroundTone(i.primaryContainer.tone(t),4.5):B(t)?t.isDark?0:100:t.isDark?90:10,background:t=>i.primaryContainer,contrastCurve:new P(4.5,7,11,21)});i.inversePrimary=m.fromPalette({name:"inverse_primary",palette:t=>t.primaryPalette,tone:t=>t.isDark?40:80,background:t=>i.inverseSurface,contrastCurve:new P(3,4.5,7,11)});i.secondary=m.fromPalette({name:"secondary",palette:t=>t.secondaryPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(3,4.5,7,11),toneDeltaPair:t=>new N(i.secondaryContainer,i.secondary,15,"nearer",!1)});i.onSecondary=m.fromPalette({name:"on_secondary",palette:t=>t.secondaryPalette,tone:t=>B(t)?t.isDark?10:100:t.isDark?20:100,background:t=>i.secondary,contrastCurve:new P(4.5,7,11,21)});i.secondaryContainer=m.fromPalette({name:"secondary_container",palette:t=>t.secondaryPalette,tone:t=>{let e=t.isDark?30:90;if(B(t))return t.isDark?30:85;if(!Ct(t))return e;let r=Fi(t.secondaryPalette.hue,t.secondaryPalette.chroma,e,!t.isDark);return r=Ee(t.secondaryPalette.getHct(r),t),r},isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7),toneDeltaPair:t=>new N(i.secondaryContainer,i.secondary,15,"nearer",!1)});i.onSecondaryContainer=m.fromPalette({name:"on_secondary_container",palette:t=>t.secondaryPalette,tone:t=>Ct(t)?m.foregroundTone(i.secondaryContainer.tone(t),4.5):t.isDark?90:10,background:t=>i.secondaryContainer,contrastCurve:new P(4.5,7,11,21)});i.tertiary=m.fromPalette({name:"tertiary",palette:t=>t.tertiaryPalette,tone:t=>B(t)?t.isDark?90:25:t.isDark?80:40,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(3,4.5,7,11),toneDeltaPair:t=>new N(i.tertiaryContainer,i.tertiary,15,"nearer",!1)});i.onTertiary=m.fromPalette({name:"on_tertiary",palette:t=>t.tertiaryPalette,tone:t=>B(t)?t.isDark?10:90:t.isDark?20:100,background:t=>i.tertiary,contrastCurve:new P(4.5,7,11,21)});i.tertiaryContainer=m.fromPalette({name:"tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>{if(B(t))return t.isDark?60:49;if(!Ct(t))return t.isDark?30:90;let e=Ee(t.tertiaryPalette.getHct(t.sourceColorHct.tone),t),r=t.tertiaryPalette.getHct(e);return ht.fixIfDisliked(r).tone},isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7),toneDeltaPair:t=>new N(i.tertiaryContainer,i.tertiary,15,"nearer",!1)});i.onTertiaryContainer=m.fromPalette({name:"on_tertiary_container",palette:t=>t.tertiaryPalette,tone:t=>B(t)?t.isDark?0:100:Ct(t)?m.foregroundTone(i.tertiaryContainer.tone(t),4.5):t.isDark?90:10,background:t=>i.tertiaryContainer,contrastCurve:new P(4.5,7,11,21)});i.error=m.fromPalette({name:"error",palette:t=>t.errorPalette,tone:t=>t.isDark?80:40,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(3,4.5,7,11),toneDeltaPair:t=>new N(i.errorContainer,i.error,15,"nearer",!1)});i.onError=m.fromPalette({name:"on_error",palette:t=>t.errorPalette,tone:t=>t.isDark?20:100,background:t=>i.error,contrastCurve:new P(4.5,7,11,21)});i.errorContainer=m.fromPalette({name:"error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?30:90,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7),toneDeltaPair:t=>new N(i.errorContainer,i.error,15,"nearer",!1)});i.onErrorContainer=m.fromPalette({name:"on_error_container",palette:t=>t.errorPalette,tone:t=>t.isDark?90:10,background:t=>i.errorContainer,contrastCurve:new P(4.5,7,11,21)});i.primaryFixed=m.fromPalette({name:"primary_fixed",palette:t=>t.primaryPalette,tone:t=>B(t)?40:90,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7),toneDeltaPair:t=>new N(i.primaryFixed,i.primaryFixedDim,10,"lighter",!0)});i.primaryFixedDim=m.fromPalette({name:"primary_fixed_dim",palette:t=>t.primaryPalette,tone:t=>B(t)?30:80,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7),toneDeltaPair:t=>new N(i.primaryFixed,i.primaryFixedDim,10,"lighter",!0)});i.onPrimaryFixed=m.fromPalette({name:"on_primary_fixed",palette:t=>t.primaryPalette,tone:t=>B(t)?100:10,background:t=>i.primaryFixedDim,secondBackground:t=>i.primaryFixed,contrastCurve:new P(4.5,7,11,21)});i.onPrimaryFixedVariant=m.fromPalette({name:"on_primary_fixed_variant",palette:t=>t.primaryPalette,tone:t=>B(t)?90:30,background:t=>i.primaryFixedDim,secondBackground:t=>i.primaryFixed,contrastCurve:new P(3,4.5,7,11)});i.secondaryFixed=m.fromPalette({name:"secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>B(t)?80:90,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7),toneDeltaPair:t=>new N(i.secondaryFixed,i.secondaryFixedDim,10,"lighter",!0)});i.secondaryFixedDim=m.fromPalette({name:"secondary_fixed_dim",palette:t=>t.secondaryPalette,tone:t=>B(t)?70:80,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7),toneDeltaPair:t=>new N(i.secondaryFixed,i.secondaryFixedDim,10,"lighter",!0)});i.onSecondaryFixed=m.fromPalette({name:"on_secondary_fixed",palette:t=>t.secondaryPalette,tone:t=>10,background:t=>i.secondaryFixedDim,secondBackground:t=>i.secondaryFixed,contrastCurve:new P(4.5,7,11,21)});i.onSecondaryFixedVariant=m.fromPalette({name:"on_secondary_fixed_variant",palette:t=>t.secondaryPalette,tone:t=>B(t)?25:30,background:t=>i.secondaryFixedDim,secondBackground:t=>i.secondaryFixed,contrastCurve:new P(3,4.5,7,11)});i.tertiaryFixed=m.fromPalette({name:"tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>B(t)?40:90,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7),toneDeltaPair:t=>new N(i.tertiaryFixed,i.tertiaryFixedDim,10,"lighter",!0)});i.tertiaryFixedDim=m.fromPalette({name:"tertiary_fixed_dim",palette:t=>t.tertiaryPalette,tone:t=>B(t)?30:80,isBackground:!0,background:t=>i.highestSurface(t),contrastCurve:new P(1,1,3,7),toneDeltaPair:t=>new N(i.tertiaryFixed,i.tertiaryFixedDim,10,"lighter",!0)});i.onTertiaryFixed=m.fromPalette({name:"on_tertiary_fixed",palette:t=>t.tertiaryPalette,tone:t=>B(t)?100:10,background:t=>i.tertiaryFixedDim,secondBackground:t=>i.tertiaryFixed,contrastCurve:new P(4.5,7,11,21)});i.onTertiaryFixedVariant=m.fromPalette({name:"on_tertiary_fixed_variant",palette:t=>t.tertiaryPalette,tone:t=>B(t)?90:30,background:t=>i.tertiaryFixedDim,secondBackground:t=>i.tertiaryFixed,contrastCurve:new P(3,4.5,7,11)})});var w,Z=C(()=>{rt();w=class{static fromInt(e){let r=M.fromInt(e);return w.fromHct(r)}static fromHct(e){return new w(e.hue,e.chroma,e)}static fromHueAndChroma(e,r){return new w(e,r,w.createKeyColor(e,r))}constructor(e,r,n){this.hue=e,this.chroma=r,this.keyColor=n,this.cache=new Map}static createKeyColor(e,r){let o=M.from(e,r,50),s=Math.abs(o.chroma-r);for(let a=1;a<50;a+=1){if(Math.round(r)===Math.round(o.chroma))return o;let c=M.from(e,r,50+a),l=Math.abs(c.chroma-r);l<s&&(s=l,o=c);let h=M.from(e,r,50-a),f=Math.abs(h.chroma-r);f<s&&(s=f,o=h)}return o}tone(e){let r=this.cache.get(e);return r===void 0&&(r=M.from(this.hue,this.chroma,e).toInt(),this.cache.set(e,r)),r}getHct(e){return M.fromInt(this.tone(e))}}});var Ht=C(()=>{rt();Z();});var _r=C(()=>{K();});var _e=C(()=>{_r();});var je=C(()=>{K();});var Le=C(()=>{K();je();});var Ne=C(()=>{_e();Le();});var $,it=C(()=>{rt();Z();z();$=class{constructor(e){this.sourceColorArgb=e.sourceColorArgb,this.variant=e.variant,this.contrastLevel=e.contrastLevel,this.isDark=e.isDark,this.sourceColorHct=M.fromInt(e.sourceColorArgb),this.primaryPalette=e.primaryPalette,this.secondaryPalette=e.secondaryPalette,this.tertiaryPalette=e.tertiaryPalette,this.neutralPalette=e.neutralPalette,this.neutralVariantPalette=e.neutralVariantPalette,this.errorPalette=w.fromHueAndChroma(25,84)}static getRotatedHue(e,r,n){let o=e.hue;if(r.length!==n.length)throw new Error(`mismatch between hue length ${r.length} & rotations ${n.length}`);if(n.length===1)return et(e.hue+n[0]);let s=r.length;for(let a=0;a<=s-2;a++){let c=r[a],l=r[a+1];if(c<o&&o<l)return et(o+n[a])}return o}}});var He=C(()=>{Ht();});var Lr=C(()=>{Ht();});var ie=C(()=>{rt();K();z();});var Nr=C(()=>{Nt();Z();ie();it();st();});var nt,Hr=C(()=>{Z();z();it();st();nt=class extends ${constructor(e,r,n){super({sourceColorArgb:e.toInt(),variant:G.EXPRESSIVE,contrastLevel:n,isDark:r,primaryPalette:w.fromHueAndChroma(et(e.hue+240),40),secondaryPalette:w.fromHueAndChroma($.getRotatedHue(e,nt.hues,nt.secondaryRotations),24),tertiaryPalette:w.fromHueAndChroma($.getRotatedHue(e,nt.hues,nt.tertiaryRotations),32),neutralPalette:w.fromHueAndChroma(e.hue+15,8),neutralVariantPalette:w.fromHueAndChroma(e.hue+15,12)})}};nt.hues=[0,21,51,121,151,191,271,321,360];nt.secondaryRotations=[45,95,45,20,45,90,45,45,45];nt.tertiaryRotations=[120,120,20,45,20,15,20,120,120]});var Vr=C(()=>{Nt();Z();ie();it();st();});var Ur=C(()=>{Z();it();st();});var zr=C(()=>{Z();it();st();});var Gr=C(()=>{Z();z();it();st();});var ot,$r=C(()=>{Z();it();st();ot=class extends ${constructor(e,r,n){super({sourceColorArgb:e.toInt(),variant:G.VIBRANT,contrastLevel:n,isDark:r,primaryPalette:w.fromHueAndChroma(e.hue,200),secondaryPalette:w.fromHueAndChroma($.getRotatedHue(e,ot.hues,ot.secondaryRotations),24),tertiaryPalette:w.fromHueAndChroma($.getRotatedHue(e,ot.hues,ot.tertiaryRotations),32),neutralPalette:w.fromHueAndChroma(e.hue,10),neutralVariantPalette:w.fromHueAndChroma(e.hue,12)})}};ot.hues=[0,41,61,101,131,181,251,301,360];ot.secondaryRotations=[18,15,10,12,15,18,15,12,12];ot.tertiaryRotations=[35,30,20,25,30,35,30,25,25]});function Ei(t,e){return t.score>e.score?-1:t.score<e.score?1:0}var Ri,H,Ve=C(()=>{rt();z();Ri={desired:4,fallbackColorARGB:4282549748,filter:!0};H=class{constructor(){}static score(e,r){let{desired:n,fallbackColorARGB:o,filter:s}=ft(ft({},Ri),r),a=[],c=new Array(360).fill(0),l=0;for(let[d,x]of e.entries()){let b=M.fromInt(d);a.push(b);let A=Math.floor(b.hue);c[A]+=x,l+=x}let h=new Array(360).fill(0);for(let d=0;d<360;d++){let x=c[d]/l;for(let b=d-14;b<d+16;b++){let A=ne(b);h[A]+=x}}let f=new Array;for(let d of a){let x=ne(Math.round(d.hue)),b=h[x];if(s&&(d.chroma<H.CUTOFF_CHROMA||b<=H.CUTOFF_EXCITED_PROPORTION))continue;let A=b*100*H.WEIGHT_PROPORTION,v=d.chroma<H.TARGET_CHROMA?H.WEIGHT_CHROMA_BELOW:H.WEIGHT_CHROMA_ABOVE,O=(d.chroma-H.TARGET_CHROMA)*v,T=A+O;f.push({hct:d,score:T})}f.sort(Ei);let p=[];for(let d=90;d>=15;d--){p.length=0;for(let{hct:x}of f)if(p.find(A=>Fe(x.hue,A.hue)<d)||p.push(x),p.length>=n)break;if(p.length>=n)break}let y=[];p.length===0&&y.push(o);for(let d of p)y.push(d.toInt());return y}};H.TARGET_CHROMA=48;H.WEIGHT_PROPORTION=.7;H.WEIGHT_CHROMA_ABOVE=.3;H.WEIGHT_CHROMA_BELOW=.1;H.CUTOFF_CHROMA=5;H.CUTOFF_EXCITED_PROPORTION=.01});function At(t){let e=Rt(t),r=Et(t),n=_t(t),o=[e.toString(16),r.toString(16),n.toString(16)];for(let[s,a]of o.entries())a.length===1&&(o[s]="0"+a);return"#"+o.join("")}function Kr(t){t=t.replace("#","");let e=t.length===3,r=t.length===6,n=t.length===8;if(!e&&!r&&!n)throw new Error("unexpected hex "+t);let o=0,s=0,a=0;return e?(o=ct(t.slice(0,1).repeat(2)),s=ct(t.slice(1,2).repeat(2)),a=ct(t.slice(2,3).repeat(2))):r?(o=ct(t.slice(0,2)),s=ct(t.slice(2,4)),a=ct(t.slice(4,6))):n&&(o=ct(t.slice(2,4)),s=ct(t.slice(4,6)),a=ct(t.slice(6,8))),(255<<24|(o&255)<<16|(s&255)<<8|a&255)>>>0}function ct(t){return parseInt(t,16)}var Ue=C(()=>{K();});var ze=C(()=>{Ne();Ve();K();});var Wr=C(()=>{qe();Ht();He();ze();Ue();});var Yr=C(()=>{qe();Be();Nt();Re();Er();Lt();rt();xt();Ht();Z();Ne();je();_e();Le();it();He();Lr();Nr();Hr();Vr();Ur();zr();Gr();$r();Ve();ie();K();z();Ue();ze();Wr();});var ce,ue,_i,Ge,le=C(()=>{"use strict";Yr();Oe();ce=class{constructor(e){var c,l,h;let r=e.startsWith("#")?e.slice(1):e,n=ke(r),o=(c=n==null?void 0:n.r)!=null?c:0,s=(l=n==null?void 0:n.g)!=null?l:0,a=(h=n==null?void 0:n.b)!=null?h:0;this.figmaSolidColor={type:"SOLID",color:{r:o,g:s,b:a}},this.hctColor=M.fromInt(Kr(r)),this.hue=this.hctColor.hue,this.chroma=this.hctColor.chroma,this.tone=this.hctColor.tone,this.argb=M.from(this.hue,this.chroma,this.tone).toInt(),this.rgba=se(this.argb),this.hex=At(this.argb)}getHue(e=""){return e==="rounded"?Math.round(this.hue):this.hue}setHue(e){this.hue=e,this.argb=M.from(this.hue,this.chroma,this.tone).toInt(),this.rgba=se(this.argb),this.hex=At(this.argb),this.hctColor=M.fromInt(this.argb)}getChroma(e=""){return e==="rounded"?Math.round(this.chroma):this.chroma}setChroma(e){this.chroma=e,this.argb=M.from(this.hue,this.chroma,this.tone).toInt(),this.rgba=se(this.argb),this.hex=At(this.argb),this.hctColor=M.fromInt(this.argb)}getTone(e=""){return e==="rounded"?Math.round(this.tone):this.tone}getArgb(){return this.argb}getRgba(){return this.rgba}getHex(e){return e?this.hex.slice(1):this.hex}getFigmaSolidColor(){return this.figmaSolidColor}getHctColor(){return this.hctColor}},ue=ce,_i=t=>{let e=[];if(t&&t.length>0)return t;for(let r=0;r<=100;r++)e.push(r);return e},Ge=(t,e)=>{let r=_i(e),o=new ce(t).getHctColor(),s=w.fromHueAndChroma(o.hue,o.chroma),a={};for(let c of r){let l=s.tone(c),h=At(l);a[c]=h}return a}});var ji,Jr,Xr=C(()=>{"use strict";le();ji=(t,e,r)=>{let n=figma.createFrame();n.name=t+"-"+r+": "+e+";";let s=new ue(e).getFigmaSolidColor();return n.fills=[s],n.resize(128,64),n},Jr=(t,e,r)=>{let n=figma.createFrame();return n.name=t+" - (Source hex: #"+e+")",n.layoutMode="VERTICAL",n.primaryAxisSizingMode="AUTO",n.counterAxisSizingMode="AUTO",Object.entries(r).map(([s,a])=>ji(t,String(a),Number(s))).forEach(s=>n.appendChild(s)),n.x=Math.round(figma.viewport.center.x-n.width/2),n.y=Math.round(figma.viewport.center.y-n.height/2),n}});var Qr=u((lg,Zr)=>{function Li(){this.__data__=[],this.size=0}Zr.exports=Li});var $e=u((hg,tn)=>{function Ni(t,e){return t===e||t!==t&&e!==e}tn.exports=Ni});var Vt=u((mg,en)=>{var Hi=$e();function Vi(t,e){for(var r=t.length;r--;)if(Hi(t[r][0],e))return r;return-1}en.exports=Vi});var nn=u((fg,rn)=>{var Ui=Vt(),zi=Array.prototype,Gi=zi.splice;function $i(t){var e=this.__data__,r=Ui(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Gi.call(e,r,1),--this.size,!0}rn.exports=$i});var an=u((pg,on)=>{var Ki=Vt();function Wi(t){var e=this.__data__,r=Ki(e,t);return r<0?void 0:e[r][1]}on.exports=Wi});var cn=u((dg,sn)=>{var Yi=Vt();function Ji(t){return Yi(this.__data__,t)>-1}sn.exports=Ji});var ln=u((gg,un)=>{var Xi=Vt();function Zi(t,e){var r=this.__data__,n=Xi(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}un.exports=Zi});var Ut=u((yg,hn)=>{var Qi=Qr(),t0=nn(),e0=an(),r0=cn(),n0=ln();function Pt(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Pt.prototype.clear=Qi;Pt.prototype.delete=t0;Pt.prototype.get=e0;Pt.prototype.has=r0;Pt.prototype.set=n0;hn.exports=Pt});var fn=u((bg,mn)=>{var o0=Ut();function a0(){this.__data__=new o0,this.size=0}mn.exports=a0});var dn=u((xg,pn)=>{function s0(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}pn.exports=s0});var yn=u((Cg,gn)=>{function i0(t){return this.__data__.get(t)}gn.exports=i0});var xn=u((Ag,bn)=>{function c0(t){return this.__data__.has(t)}bn.exports=c0});var Ke=u((Pg,Cn)=>{var u0=typeof global=="object"&&global&&global.Object===Object&&global;Cn.exports=u0});var Q=u((Tg,An)=>{var l0=Ke(),h0=typeof self=="object"&&self&&self.Object===Object&&self,m0=l0||h0||Function("return this")();An.exports=m0});var he=u((Ig,Pn)=>{var f0=Q(),p0=f0.Symbol;Pn.exports=p0});var Mn=u((vg,vn)=>{var Tn=he(),In=Object.prototype,d0=In.hasOwnProperty,g0=In.toString,zt=Tn?Tn.toStringTag:void 0;function y0(t){var e=d0.call(t,zt),r=t[zt];try{t[zt]=void 0;var n=!0}catch(s){}var o=g0.call(t);return n&&(e?t[zt]=r:delete t[zt]),o}vn.exports=y0});var kn=u((Mg,wn)=>{var b0=Object.prototype,x0=b0.toString;function C0(t){return x0.call(t)}wn.exports=C0});var Gt=u((wg,Fn)=>{var Dn=he(),A0=Mn(),P0=kn(),T0="[object Null]",I0="[object Undefined]",On=Dn?Dn.toStringTag:void 0;function v0(t){return t==null?t===void 0?I0:T0:On&&On in Object(t)?A0(t):P0(t)}Fn.exports=v0});var Tt=u((kg,Sn)=>{function M0(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}Sn.exports=M0});var We=u((Dg,qn)=>{var w0=Gt(),k0=Tt(),D0="[object AsyncFunction]",O0="[object Function]",F0="[object GeneratorFunction]",S0="[object Proxy]";function q0(t){if(!k0(t))return!1;var e=w0(t);return e==O0||e==F0||e==D0||e==S0}qn.exports=q0});var Rn=u((Og,Bn)=>{var B0=Q(),R0=B0["__core-js_shared__"];Bn.exports=R0});var jn=u((Fg,_n)=>{var Ye=Rn(),En=function(){var t=/[^.]+$/.exec(Ye&&Ye.keys&&Ye.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function E0(t){return!!En&&En in t}_n.exports=E0});var Je=u((Sg,Ln)=>{var _0=Function.prototype,j0=_0.toString;function L0(t){if(t!=null){try{return j0.call(t)}catch(e){}try{return t+""}catch(e){}}return""}Ln.exports=L0});var Hn=u((qg,Nn)=>{var N0=We(),H0=jn(),V0=Tt(),U0=Je(),z0=/[\\^$.*+?()[\]{}|]/g,G0=/^\[object .+?Constructor\]$/,$0=Function.prototype,K0=Object.prototype,W0=$0.toString,Y0=K0.hasOwnProperty,J0=RegExp("^"+W0.call(Y0).replace(z0,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function X0(t){if(!V0(t)||H0(t))return!1;var e=N0(t)?J0:G0;return e.test(U0(t))}Nn.exports=X0});var Un=u((Bg,Vn)=>{function Z0(t,e){return t==null?void 0:t[e]}Vn.exports=Z0});var mt=u((Rg,zn)=>{var Q0=Hn(),tc=Un();function ec(t,e){var r=tc(t,e);return Q0(r)?r:void 0}zn.exports=ec});var me=u((Eg,Gn)=>{var rc=mt(),nc=Q(),oc=rc(nc,"Map");Gn.exports=oc});var $t=u((_g,$n)=>{var ac=mt(),sc=ac(Object,"create");$n.exports=sc});var Yn=u((jg,Wn)=>{var Kn=$t();function ic(){this.__data__=Kn?Kn(null):{},this.size=0}Wn.exports=ic});var Xn=u((Lg,Jn)=>{function cc(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}Jn.exports=cc});var Qn=u((Ng,Zn)=>{var uc=$t(),lc="__lodash_hash_undefined__",hc=Object.prototype,mc=hc.hasOwnProperty;function fc(t){var e=this.__data__;if(uc){var r=e[t];return r===lc?void 0:r}return mc.call(e,t)?e[t]:void 0}Zn.exports=fc});var eo=u((Hg,to)=>{var pc=$t(),dc=Object.prototype,gc=dc.hasOwnProperty;function yc(t){var e=this.__data__;return pc?e[t]!==void 0:gc.call(e,t)}to.exports=yc});var no=u((Vg,ro)=>{var bc=$t(),xc="__lodash_hash_undefined__";function Cc(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=bc&&e===void 0?xc:e,this}ro.exports=Cc});var ao=u((Ug,oo)=>{var Ac=Yn(),Pc=Xn(),Tc=Qn(),Ic=eo(),vc=no();function It(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}It.prototype.clear=Ac;It.prototype.delete=Pc;It.prototype.get=Tc;It.prototype.has=Ic;It.prototype.set=vc;oo.exports=It});var co=u((zg,io)=>{var so=ao(),Mc=Ut(),wc=me();function kc(){this.size=0,this.__data__={hash:new so,map:new(wc||Mc),string:new so}}io.exports=kc});var lo=u((Gg,uo)=>{function Dc(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}uo.exports=Dc});var Kt=u(($g,ho)=>{var Oc=lo();function Fc(t,e){var r=t.__data__;return Oc(e)?r[typeof e=="string"?"string":"hash"]:r.map}ho.exports=Fc});var fo=u((Kg,mo)=>{var Sc=Kt();function qc(t){var e=Sc(this,t).delete(t);return this.size-=e?1:0,e}mo.exports=qc});var go=u((Wg,po)=>{var Bc=Kt();function Rc(t){return Bc(this,t).get(t)}po.exports=Rc});var bo=u((Yg,yo)=>{var Ec=Kt();function _c(t){return Ec(this,t).has(t)}yo.exports=_c});var Co=u((Jg,xo)=>{var jc=Kt();function Lc(t,e){var r=jc(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}xo.exports=Lc});var Po=u((Xg,Ao)=>{var Nc=co(),Hc=fo(),Vc=go(),Uc=bo(),zc=Co();function vt(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}vt.prototype.clear=Nc;vt.prototype.delete=Hc;vt.prototype.get=Vc;vt.prototype.has=Uc;vt.prototype.set=zc;Ao.exports=vt});var Io=u((Zg,To)=>{var Gc=Ut(),$c=me(),Kc=Po(),Wc=200;function Yc(t,e){var r=this.__data__;if(r instanceof Gc){var n=r.__data__;if(!$c||n.length<Wc-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Kc(n)}return r.set(t,e),this.size=r.size,this}To.exports=Yc});var Mo=u((Qg,vo)=>{var Jc=Ut(),Xc=fn(),Zc=dn(),Qc=yn(),tu=xn(),eu=Io();function Mt(t){var e=this.__data__=new Jc(t);this.size=e.size}Mt.prototype.clear=Xc;Mt.prototype.delete=Zc;Mt.prototype.get=Qc;Mt.prototype.has=tu;Mt.prototype.set=eu;vo.exports=Mt});var ko=u((t2,wo)=>{function ru(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}wo.exports=ru});var Oo=u((e2,Do)=>{var nu=mt(),ou=function(){try{var t=nu(Object,"defineProperty");return t({},"",{}),t}catch(e){}}();Do.exports=ou});var Xe=u((r2,So)=>{var Fo=Oo();function au(t,e,r){e=="__proto__"&&Fo?Fo(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}So.exports=au});var Ze=u((n2,qo)=>{var su=Xe(),iu=$e(),cu=Object.prototype,uu=cu.hasOwnProperty;function lu(t,e,r){var n=t[e];(!(uu.call(t,e)&&iu(n,r))||r===void 0&&!(e in t))&&su(t,e,r)}qo.exports=lu});var Wt=u((o2,Bo)=>{var hu=Ze(),mu=Xe();function fu(t,e,r,n){var o=!r;r||(r={});for(var s=-1,a=e.length;++s<a;){var c=e[s],l=n?n(r[c],t[c],c,r,t):void 0;l===void 0&&(l=t[c]),o?mu(r,c,l):hu(r,c,l)}return r}Bo.exports=fu});var Eo=u((a2,Ro)=>{function pu(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}Ro.exports=pu});var wt=u((s2,_o)=>{function du(t){return t!=null&&typeof t=="object"}_o.exports=du});var Lo=u((i2,jo)=>{var gu=Gt(),yu=wt(),bu="[object Arguments]";function xu(t){return yu(t)&&gu(t)==bu}jo.exports=xu});var Uo=u((c2,Vo)=>{var No=Lo(),Cu=wt(),Ho=Object.prototype,Au=Ho.hasOwnProperty,Pu=Ho.propertyIsEnumerable,Tu=No(function(){return arguments}())?No:function(t){return Cu(t)&&Au.call(t,"callee")&&!Pu.call(t,"callee")};Vo.exports=Tu});var fe=u((u2,zo)=>{var Iu=Array.isArray;zo.exports=Iu});var $o=u((l2,Go)=>{function vu(){return!1}Go.exports=vu});var Qe=u((Yt,kt)=>{var Mu=Q(),wu=$o(),Yo=typeof Yt=="object"&&Yt&&!Yt.nodeType&&Yt,Ko=Yo&&typeof kt=="object"&&kt&&!kt.nodeType&&kt,ku=Ko&&Ko.exports===Yo,Wo=ku?Mu.Buffer:void 0,Du=Wo?Wo.isBuffer:void 0,Ou=Du||wu;kt.exports=Ou});var Xo=u((h2,Jo)=>{var Fu=9007199254740991,Su=/^(?:0|[1-9]\d*)$/;function qu(t,e){var r=typeof t;return e=e==null?Fu:e,!!e&&(r=="number"||r!="symbol"&&Su.test(t))&&t>-1&&t%1==0&&t<e}Jo.exports=qu});var tr=u((m2,Zo)=>{var Bu=9007199254740991;function Ru(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Bu}Zo.exports=Ru});var ta=u((f2,Qo)=>{var Eu=Gt(),_u=tr(),ju=wt(),Lu="[object Arguments]",Nu="[object Array]",Hu="[object Boolean]",Vu="[object Date]",Uu="[object Error]",zu="[object Function]",Gu="[object Map]",$u="[object Number]",Ku="[object Object]",Wu="[object RegExp]",Yu="[object Set]",Ju="[object String]",Xu="[object WeakMap]",Zu="[object ArrayBuffer]",Qu="[object DataView]",tl="[object Float32Array]",el="[object Float64Array]",rl="[object Int8Array]",nl="[object Int16Array]",ol="[object Int32Array]",al="[object Uint8Array]",sl="[object Uint8ClampedArray]",il="[object Uint16Array]",cl="[object Uint32Array]",F={};F[tl]=F[el]=F[rl]=F[nl]=F[ol]=F[al]=F[sl]=F[il]=F[cl]=!0;F[Lu]=F[Nu]=F[Zu]=F[Hu]=F[Qu]=F[Vu]=F[Uu]=F[zu]=F[Gu]=F[$u]=F[Ku]=F[Wu]=F[Yu]=F[Ju]=F[Xu]=!1;function ul(t){return ju(t)&&_u(t.length)&&!!F[Eu(t)]}Qo.exports=ul});var pe=u((p2,ea)=>{function ll(t){return function(e){return t(e)}}ea.exports=ll});var de=u((Jt,Dt)=>{var hl=Ke(),ra=typeof Jt=="object"&&Jt&&!Jt.nodeType&&Jt,Xt=ra&&typeof Dt=="object"&&Dt&&!Dt.nodeType&&Dt,ml=Xt&&Xt.exports===ra,er=ml&&hl.process,fl=function(){try{var t=Xt&&Xt.require&&Xt.require("util").types;return t||er&&er.binding&&er.binding("util")}catch(e){}}();Dt.exports=fl});var sa=u((d2,aa)=>{var pl=ta(),dl=pe(),na=de(),oa=na&&na.isTypedArray,gl=oa?dl(oa):pl;aa.exports=gl});var rr=u((g2,ia)=>{var yl=Eo(),bl=Uo(),xl=fe(),Cl=Qe(),Al=Xo(),Pl=sa(),Tl=Object.prototype,Il=Tl.hasOwnProperty;function vl(t,e){var r=xl(t),n=!r&&bl(t),o=!r&&!n&&Cl(t),s=!r&&!n&&!o&&Pl(t),a=r||n||o||s,c=a?yl(t.length,String):[],l=c.length;for(var h in t)(e||Il.call(t,h))&&!(a&&(h=="length"||o&&(h=="offset"||h=="parent")||s&&(h=="buffer"||h=="byteLength"||h=="byteOffset")||Al(h,l)))&&c.push(h);return c}ia.exports=vl});var ge=u((y2,ca)=>{var Ml=Object.prototype;function wl(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Ml;return t===r}ca.exports=wl});var nr=u((b2,ua)=>{function kl(t,e){return function(r){return t(e(r))}}ua.exports=kl});var ha=u((x2,la)=>{var Dl=nr(),Ol=Dl(Object.keys,Object);la.exports=Ol});var fa=u((C2,ma)=>{var Fl=ge(),Sl=ha(),ql=Object.prototype,Bl=ql.hasOwnProperty;function Rl(t){if(!Fl(t))return Sl(t);var e=[];for(var r in Object(t))Bl.call(t,r)&&r!="constructor"&&e.push(r);return e}ma.exports=Rl});var or=u((A2,pa)=>{var El=We(),_l=tr();function jl(t){return t!=null&&_l(t.length)&&!El(t)}pa.exports=jl});var ye=u((P2,da)=>{var Ll=rr(),Nl=fa(),Hl=or();function Vl(t){return Hl(t)?Ll(t):Nl(t)}da.exports=Vl});var ya=u((T2,ga)=>{var Ul=Wt(),zl=ye();function Gl(t,e){return t&&Ul(e,zl(e),t)}ga.exports=Gl});var xa=u((I2,ba)=>{function $l(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}ba.exports=$l});var Aa=u((v2,Ca)=>{var Kl=Tt(),Wl=ge(),Yl=xa(),Jl=Object.prototype,Xl=Jl.hasOwnProperty;function Zl(t){if(!Kl(t))return Yl(t);var e=Wl(t),r=[];for(var n in t)n=="constructor"&&(e||!Xl.call(t,n))||r.push(n);return r}Ca.exports=Zl});var be=u((M2,Pa)=>{var Ql=rr(),th=Aa(),eh=or();function rh(t){return eh(t)?Ql(t,!0):th(t)}Pa.exports=rh});var Ia=u((w2,Ta)=>{var nh=Wt(),oh=be();function ah(t,e){return t&&nh(e,oh(e),t)}Ta.exports=ah});var Da=u((Zt,Ot)=>{var sh=Q(),ka=typeof Zt=="object"&&Zt&&!Zt.nodeType&&Zt,va=ka&&typeof Ot=="object"&&Ot&&!Ot.nodeType&&Ot,ih=va&&va.exports===ka,Ma=ih?sh.Buffer:void 0,wa=Ma?Ma.allocUnsafe:void 0;function ch(t,e){if(e)return t.slice();var r=t.length,n=wa?wa(r):new t.constructor(r);return t.copy(n),n}Ot.exports=ch});var Fa=u((k2,Oa)=>{function uh(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}Oa.exports=uh});var qa=u((D2,Sa)=>{function lh(t,e){for(var r=-1,n=t==null?0:t.length,o=0,s=[];++r<n;){var a=t[r];e(a,r,t)&&(s[o++]=a)}return s}Sa.exports=lh});var ar=u((O2,Ba)=>{function hh(){return[]}Ba.exports=hh});var xe=u((F2,Ea)=>{var mh=qa(),fh=ar(),ph=Object.prototype,dh=ph.propertyIsEnumerable,Ra=Object.getOwnPropertySymbols,gh=Ra?function(t){return t==null?[]:(t=Object(t),mh(Ra(t),function(e){return dh.call(t,e)}))}:fh;Ea.exports=gh});var ja=u((S2,_a)=>{var yh=Wt(),bh=xe();function xh(t,e){return yh(t,bh(t),e)}_a.exports=xh});var sr=u((q2,La)=>{function Ch(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}La.exports=Ch});var ir=u((B2,Na)=>{var Ah=nr(),Ph=Ah(Object.getPrototypeOf,Object);Na.exports=Ph});var cr=u((R2,Ha)=>{var Th=sr(),Ih=ir(),vh=xe(),Mh=ar(),wh=Object.getOwnPropertySymbols,kh=wh?function(t){for(var e=[];t;)Th(e,vh(t)),t=Ih(t);return e}:Mh;Ha.exports=kh});var Ua=u((E2,Va)=>{var Dh=Wt(),Oh=cr();function Fh(t,e){return Dh(t,Oh(t),e)}Va.exports=Fh});var ur=u((_2,za)=>{var Sh=sr(),qh=fe();function Bh(t,e,r){var n=e(t);return qh(t)?n:Sh(n,r(t))}za.exports=Bh});var $a=u((j2,Ga)=>{var Rh=ur(),Eh=xe(),_h=ye();function jh(t){return Rh(t,_h,Eh)}Ga.exports=jh});var Wa=u((L2,Ka)=>{var Lh=ur(),Nh=cr(),Hh=be();function Vh(t){return Lh(t,Hh,Nh)}Ka.exports=Vh});var Ja=u((N2,Ya)=>{var Uh=mt(),zh=Q(),Gh=Uh(zh,"DataView");Ya.exports=Gh});var Za=u((H2,Xa)=>{var $h=mt(),Kh=Q(),Wh=$h(Kh,"Promise");Xa.exports=Wh});var ts=u((V2,Qa)=>{var Yh=mt(),Jh=Q(),Xh=Yh(Jh,"Set");Qa.exports=Xh});var rs=u((U2,es)=>{var Zh=mt(),Qh=Q(),tm=Zh(Qh,"WeakMap");es.exports=tm});var Ce=u((z2,us)=>{var lr=Ja(),hr=me(),mr=Za(),fr=ts(),pr=rs(),cs=Gt(),Ft=Je(),ns="[object Map]",em="[object Object]",os="[object Promise]",as="[object Set]",ss="[object WeakMap]",is="[object DataView]",rm=Ft(lr),nm=Ft(hr),om=Ft(mr),am=Ft(fr),sm=Ft(pr),yt=cs;(lr&&yt(new lr(new ArrayBuffer(1)))!=is||hr&&yt(new hr)!=ns||mr&&yt(mr.resolve())!=os||fr&&yt(new fr)!=as||pr&&yt(new pr)!=ss)&&(yt=function(t){var e=cs(t),r=e==em?t.constructor:void 0,n=r?Ft(r):"";if(n)switch(n){case rm:return is;case nm:return ns;case om:return os;case am:return as;case sm:return ss}return e});us.exports=yt});var hs=u((G2,ls)=>{var im=Object.prototype,cm=im.hasOwnProperty;function um(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&cm.call(t,"index")&&(r.index=t.index,r.input=t.input),r}ls.exports=um});var fs=u(($2,ms)=>{var lm=Q(),hm=lm.Uint8Array;ms.exports=hm});var Ae=u((K2,ds)=>{var ps=fs();function mm(t){var e=new t.constructor(t.byteLength);return new ps(e).set(new ps(t)),e}ds.exports=mm});var ys=u((W2,gs)=>{var fm=Ae();function pm(t,e){var r=e?fm(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}gs.exports=pm});var xs=u((Y2,bs)=>{var dm=/\w*$/;function gm(t){var e=new t.constructor(t.source,dm.exec(t));return e.lastIndex=t.lastIndex,e}bs.exports=gm});var Is=u((J2,Ts)=>{var Cs=he(),As=Cs?Cs.prototype:void 0,Ps=As?As.valueOf:void 0;function ym(t){return Ps?Object(Ps.call(t)):{}}Ts.exports=ym});var Ms=u((X2,vs)=>{var bm=Ae();function xm(t,e){var r=e?bm(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}vs.exports=xm});var ks=u((Z2,ws)=>{var Cm=Ae(),Am=ys(),Pm=xs(),Tm=Is(),Im=Ms(),vm="[object Boolean]",Mm="[object Date]",wm="[object Map]",km="[object Number]",Dm="[object RegExp]",Om="[object Set]",Fm="[object String]",Sm="[object Symbol]",qm="[object ArrayBuffer]",Bm="[object DataView]",Rm="[object Float32Array]",Em="[object Float64Array]",_m="[object Int8Array]",jm="[object Int16Array]",Lm="[object Int32Array]",Nm="[object Uint8Array]",Hm="[object Uint8ClampedArray]",Vm="[object Uint16Array]",Um="[object Uint32Array]";function zm(t,e,r){var n=t.constructor;switch(e){case qm:return Cm(t);case vm:case Mm:return new n(+t);case Bm:return Am(t,r);case Rm:case Em:case _m:case jm:case Lm:case Nm:case Hm:case Vm:case Um:return Im(t,r);case wm:return new n;case km:case Fm:return new n(t);case Dm:return Pm(t);case Om:return new n;case Sm:return Tm(t)}}ws.exports=zm});var Fs=u((Q2,Os)=>{var Gm=Tt(),Ds=Object.create,$m=function(){function t(){}return function(e){if(!Gm(e))return{};if(Ds)return Ds(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();Os.exports=$m});var qs=u((t4,Ss)=>{var Km=Fs(),Wm=ir(),Ym=ge();function Jm(t){return typeof t.constructor=="function"&&!Ym(t)?Km(Wm(t)):{}}Ss.exports=Jm});var Rs=u((e4,Bs)=>{var Xm=Ce(),Zm=wt(),Qm="[object Map]";function tf(t){return Zm(t)&&Xm(t)==Qm}Bs.exports=tf});var Ls=u((r4,js)=>{var ef=Rs(),rf=pe(),Es=de(),_s=Es&&Es.isMap,nf=_s?rf(_s):ef;js.exports=nf});var Hs=u((n4,Ns)=>{var of=Ce(),af=wt(),sf="[object Set]";function cf(t){return af(t)&&of(t)==sf}Ns.exports=cf});var Gs=u((o4,zs)=>{var uf=Hs(),lf=pe(),Vs=de(),Us=Vs&&Vs.isSet,hf=Us?lf(Us):uf;zs.exports=hf});var Js=u((a4,Ys)=>{var mf=Mo(),ff=ko(),pf=Ze(),df=ya(),gf=Ia(),yf=Da(),bf=Fa(),xf=ja(),Cf=Ua(),Af=$a(),Pf=Wa(),Tf=Ce(),If=hs(),vf=ks(),Mf=qs(),wf=fe(),kf=Qe(),Df=Ls(),Of=Tt(),Ff=Gs(),Sf=ye(),qf=be(),Bf=1,Rf=2,Ef=4,$s="[object Arguments]",_f="[object Array]",jf="[object Boolean]",Lf="[object Date]",Nf="[object Error]",Ks="[object Function]",Hf="[object GeneratorFunction]",Vf="[object Map]",Uf="[object Number]",Ws="[object Object]",zf="[object RegExp]",Gf="[object Set]",$f="[object String]",Kf="[object Symbol]",Wf="[object WeakMap]",Yf="[object ArrayBuffer]",Jf="[object DataView]",Xf="[object Float32Array]",Zf="[object Float64Array]",Qf="[object Int8Array]",t1="[object Int16Array]",e1="[object Int32Array]",r1="[object Uint8Array]",n1="[object Uint8ClampedArray]",o1="[object Uint16Array]",a1="[object Uint32Array]",D={};D[$s]=D[_f]=D[Yf]=D[Jf]=D[jf]=D[Lf]=D[Xf]=D[Zf]=D[Qf]=D[t1]=D[e1]=D[Vf]=D[Uf]=D[Ws]=D[zf]=D[Gf]=D[$f]=D[Kf]=D[r1]=D[n1]=D[o1]=D[a1]=!0;D[Nf]=D[Ks]=D[Wf]=!1;function Pe(t,e,r,n,o,s){var a,c=e&Bf,l=e&Rf,h=e&Ef;if(r&&(a=o?r(t,n,o,s):r(t)),a!==void 0)return a;if(!Of(t))return t;var f=wf(t);if(f){if(a=If(t),!c)return bf(t,a)}else{var p=Tf(t),y=p==Ks||p==Hf;if(kf(t))return yf(t,c);if(p==Ws||p==$s||y&&!o){if(a=l||y?{}:Mf(t),!c)return l?Cf(t,gf(a,t)):xf(t,df(a,t))}else{if(!D[p])return o?t:{};a=vf(t,p,c)}}s||(s=new mf);var d=s.get(t);if(d)return d;s.set(t,a),Ff(t)?t.forEach(function(A){a.add(Pe(A,e,r,A,t,s))}):Df(t)&&t.forEach(function(A,v){a.set(v,Pe(A,e,r,v,t,s))});var x=h?l?Pf:Af:l?qf:Sf,b=f?void 0:x(t);return ff(b||t,function(A,v){b&&(v=A,A=t[v]),pf(a,v,Pe(A,e,r,v,t,s))}),a}Ys.exports=Pe});var Zs=u((s4,Xs)=>{var s1=Js(),i1=1,c1=4;function u1(t){return s1(t,i1|c1)}Xs.exports=u1});var ti,l1,Qs,h1,ei,ri=C(()=>{"use strict";le();ti=Ci(Zs()),l1=t=>figma.variables.getLocalVariables("COLOR").find(r=>r.name===t),Qs=(t,e="color",r,n,o,s)=>{var v;let a=`${e} - source color/${e}`,c=`${e}${n}`,l=n||n===0?c:a,h=(v=l1(l))==null?void 0:v.id;if(o===!1&&h){console.log(`Variable ${l} already exists`);return}let p=new ue(r).getFigmaSolidColor().color,y=figma.variables.getVariableCollectionById(t),d=h?figma.variables.getVariableById(h):figma.variables.createVariable(l,t,"COLOR");if(!y){figma.notify("Collection not found");return}let x=y.modes[0].modeId,b=y.modes[1]?y.modes[1].modeId:y.addMode("dark");if(!d){figma.notify("Variable not found");return}return d.setValueForMode(x,p),d.setValueForMode(b,p),h1(s?d:void 0,c),console.log(s),d},h1=(t,e)=>{if(!t)return;figma.getLocalPaintStyles().filter(o=>{let a=o.name.split("/");return a[a.length-1]===e}).forEach(o=>{let s=(0,ti.default)(o.paints);s[0]=figma.variables.setBoundVariableForPaint(s[0],"color",t),o.paints=s})},ei=(t,e,r,n,o,s)=>{let a=t,c=e;o===!0&&Qs(a,c,r);let h=Object.entries(n).map(([p,y])=>Qs(a,c,y,Number(p),o,s));return h.filter(p=>p!==void 0).length<Object.keys(n).length&&figma.notify("Some variables didn\u2019t generate. Check console for details",{timeout:5e3,error:!0}),h}});var dr,ni,oi=C(()=>{"use strict";dr=class{constructor(e,r,n,o,s,a,c){this.id=e,this.name=r,this.variableIds=n,this.defaultModeId=o,this.modes=s,this.remote=a,this.key=c}toJSON(){return{id:this.id,name:this.name,variableIds:this.variableIds,defaultModeId:this.defaultModeId,modes:this.modes,remote:this.remote,key:this.key}}},ni=dr});var si={};xi(si,{default:()=>m1});function m1(){De({height:ai(750),width:560,title:"Dynamic Color"})}var ai,ii=C(()=>{"use strict";Oe();le();Xr();ri();oi();ai=t=>t;figma.on("run",()=>{let t=figma.variables.getLocalVariableCollections(),e="localCollections",r=[],n=[],o=[];for(let a=0;a<t.length;a++){let c=new ni(t[a].id,t[a].name,t[a].variableIds,t[a].defaultModeId,t[a].modes,t[a].remote,t[a].key),l=c.name;n.push(c),r.push({value:l}),o.push(c.modes)}let s={type:e,options:r,collections:n,modes:o};figma.ui.postMessage(s)});figma.ui.onmessage=t=>{if(t.type==="windowResize"){let e=t.windowSize;console.log(e),figma.ui.resize(280,ai(e.height))}if(t.type==="build"){let e=t.name?t.name:"color",r=t.toneStops,n=t.color,o=Ge(n,r);return Jr(e,n,o)}if(t.type==="createVariables"){let e=t.name?t.name:"color",r=t.toneStops,n=t.color,o=t.collectionId,s=t.overwriteVariables,a=t.bindStyles,c=Ge(n,r),l=ei(o,e,n,c,s,a);return console.log(l),l}}});var f1={"src/main.ts--default":(ii(),Ai(si)).default},p1="src/main.ts--default";f1[p1]();
/*! Bundled license information:

@material/material-color-utilities/utils/math_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/color_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/viewing_conditions.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/cam16.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct_solver.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/hct/hct.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/blend/blend.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/contrast/contrast.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dislike/dislike_analyzer.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/dynamic_color.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/variant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/contrast_curve.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/tone_delta_pair.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/dynamiccolor/material_dynamic_colors.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/tonal_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/palettes/core_palette.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/lab_point_provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wsmeans.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_wu.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/quantize/quantizer_celebi.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/dynamic_scheme.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_android.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/temperature/temperature_cache.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_content.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_expressive.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_fidelity.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_monochrome.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_neutral.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_tonal_spot.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/scheme/scheme_vibrant.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/score/score.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/string_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/image_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/utils/theme_utils.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@material/material-color-utilities/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
