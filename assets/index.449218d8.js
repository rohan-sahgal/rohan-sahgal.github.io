import{S as t,P as o,W as n,T as a,M as e,a as i,b as s,A as r,c as d,G as c,O as w,d as h,e as A,f as l,D as I,C as g,g as p,h as m}from"./vendor.f132b20b.js";var M=document.querySelector("link[rel~='icon']");M||((M=document.createElement("link")).rel="icon",document.getElementsByTagName("head")[0].appendChild(M)),M.href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADKUlEQVRYR+2XbUhTYRTH/xtTLDQrfNdU1BbYQIlqJjLUPihI8wUVCQbOhhviKhRkitPAVELDFGfmZiN04DuoBCZOSdEMDETBFCR8yUzUyNRapS7uExk6d3UR6oc9Xy733uc553f+zznn3ocBgAkgC0AKAGcczpgHUAGggAEgG0De4fg18CKnAD4cYuS7CeYpAP0RRU/cmgHMChxvBWzs7JDe1ASlRIK58XGSte4cDqIyM+Hk7Y2XNTV4oVDsKCIra2uEikS4EhkJlqUlGnJyMKrVGi00WgV8uFwUDA7iTXs7HvD54MbEQKrRwNLKCt9WV1GRmIjXLS3bxq/FxUFYVobTTk7bz37odMjicjEzMrInBC2Ah58fioaH8XFyEo+TkiDv6iJRaVUq1GVnY2Vh4XctMxgQlpYiXCol97q1NQw2NZErTyDAcEcHHiUkmA7gzGajdGICn+bmyOKzrq54lpaG5yUlO4xFyWS4WVhInnWrVNDIZFhdXib3du7u8PT3x1Bbm+kA5zgcPBwd3V7YW1uLcoHAwJBiagr2Hh4Y6ezE/bAwkxor7Rb4BgfjXk8PMfh1ZQW3fXzwZWnJwEFudzcuhoRgcXoauTwelmZmDgxBCxCcmIgUtZoYaysqQm1Gxp6GHb28kKPVwt7TkwCqJBIMNjcfCIIWQFBcjBvp6dDr9bjDZpNkNDZOOTggubISV6OjyZRXjY2oEArxfX2dFoQWIK+/HxcCAzHR3w95UNCBIqJKUVJdjRM2NqT+C8LDsbmxYXStUYCTtrZQLS6CZWGB6tRUg4ZDR3M+IAB5fX1gslioEovRVVVlOkBgfDzu1tdDv7UFsZsbPs9Tf1F/B9UjqO2pk8uxND294x2DyUTl7CzOuLjAWOX8WWBUAbFSiesikVH52VSUAwP4qdOhT6PB295est+2jo4IiI0FJzSU+HiSnAytUmm6AhmtrbjM5+OpVIqO8vI9DVBd7pZCQfZ799ja3ERLfj4acnP/LQkvRUQQialvANVS6bKfKldfHo9ET819NzSEHrUa78fG9k3c4/053hf/P0wwK2BW4FgczY78cHqkx/NfvDEr3gwtulQAAAAASUVORK5CYII=";const P=new t,y=new o(75,window.innerWidth/window.innerHeight,.1,1e3),z=new n({canvas:document.querySelector("#bg")});z.setPixelRatio(window.devicePixelRatio),z.setSize(window.innerWidth,window.innerHeight);const f=new a(10,2,100,16),u=new e({color:43775,wireframe:!0});new i(f,u);const x=new s(16777215);x.position.set(20,20,20),P.add(x);const U=new r(16777215);P.add(U),new d(x),new c(200,50);const C=new w(y,z.domElement);Array(500).fill().forEach((function(){const t=new p(.12,24,24),o=new e({color:15658734}),n=new i(t,o),[a,s,r]=Array(3).fill().map((()=>m.randFloatSpread(100,50)));n.position.set(a,s,r),P.add(n)})),(new h).load("/assets/space.ca17ac07.jpg");const b=(new h).load("/assets/rohan.6a0de960.jpg"),D=new i(new A(.75,.75,1),new l({map:b,side:I}));P.add(D),D.position.x+=.75,D.position.z-=1;const R=(new h).load("/assets/halo-ring-texture.1fc14833.jpg"),V=(new h).load("/assets/normal.8e277ece.jpg"),B=new g(8,8,1,50,1,!0),E=new l({map:R,side:I}),j=new l({map:(new h).load("/assets/ring.4ad4c78c.png")});var S=new i(B,E),k=new i(B,j);S.add(k),P.add(S),P.add(S),S.position.z=-20,S.position.x=-10,S.position.y=-5;const T=(new h).load("/assets/moon.b246064f.jpg"),H=new i(new p(3,32,32),new e({map:T,normalMap:V}));P.add(H),H.position.z=30,H.position.setX(-10),document.body.onscroll=function(){const t=document.body.getBoundingClientRect().top;H.rotation.y+=.075,D.rotation.z+=Math.PI/16,D.rotation.y+=Math.PI/8,D.rotation.x+=Math.PI/16,t<=0?(y.position.z=-.01*t,y.position.x=-2e-4*t,y.rotation.y=-2e-4*t):(y.position.z=.01*t,y.position.x=2e-4*t,y.rotation.y=2e-4*t)},function t(){requestAnimationFrame(t);const o=z.domElement;y.aspect=o.clientWidth/o.clientHeight,y.updateProjectionMatrix(),D.rotation.z%(2*Math.PI)>.001&&D.rotation.z%(2*Math.PI)<=Math.PI?D.rotation.z-=.005:D.rotation.z%(2*Math.PI)>Math.PI&&D.rotation.z%(2*Math.PI)<2*Math.PI&&(D.rotation.z+=.005),D.rotation.x%(2*Math.PI)>.001&&D.rotation.x%(2*Math.PI)<=Math.PI?D.rotation.x-=.005:D.rotation.x%(2*Math.PI)>Math.PI&&D.rotation.x%(2*Math.PI)<2*Math.PI&&(D.rotation.x+=.005),D.rotation.y%(2*Math.PI)>.001&&D.rotation.y%(2*Math.PI)<=Math.PI?D.rotation.y-=.005:D.rotation.y%(2*Math.PI)>Math.PI&&D.rotation.y%(2*Math.PI)<2*Math.PI&&(D.rotation.y+=.005),console.log(D.rotation),S.rotation.y+=.0035,S.rotation.z+=5e-4,H.rotation.y+=.0025,C.update(),z.render(P,y)}();
