import{a as O}from"./chunk-2L5RJU6U.js";import{d as q}from"./chunk-SD6WMKVZ.js";import{a as R}from"./chunk-PW67PQQQ.js";import{Ba as b,Fa as D,Hb as M,J as C,M as p,Oa as v,Qa as _,T as a,Ua as c,Va as l,Wa as y,X as w,Ya as I,ca as S,cb as d,db as j,fb as k,ha as f,hb as U,ua as u,ub as m}from"./chunk-OY6VVFFK.js";function g(n,e){let t=!e?.manualCleanup;t&&!e?.injector&&S(g);let o=t?e?.injector?.get(f)??a(f):null,r=T(e?.equal),s;e?.requireSync?s=b({kind:0},{equal:r}):s=b({kind:1,value:e?.initialValue},{equal:r});let x=n.subscribe({next:i=>s.set({kind:1,value:i}),error:i=>{if(e?.rejectErrors)throw i;s.set({kind:2,error:i})}});if(e?.requireSync&&s().kind===0)throw new p(601,!1);return o?.onDestroy(x.unsubscribe.bind(x)),m(()=>{let i=s();switch(i.kind){case 1:return i.value;case 2:throw i.error;case 0:throw new p(601,!1)}},{equal:e?.equal})}function T(n=Object.is){return(e,t)=>e.kind===1&&t.kind===1&&n(e.value,t.value)}function E(n,e){if(n&1&&(c(0,"section"),y(1,"img",1),c(2,"div")(3,"h3"),d(4),l(),c(5,"p"),d(6),l()()()),n&2){let t,o,r=I();u(),v("srcset",r.user().avatar)("alt",r.user().first_name),u(3),k("",(t=r.user())==null?null:t.first_name," ",(t=r.user())==null?null:t.last_name,""),u(2),j((o=r.user())==null?null:o.email)}}function F(n,e){n&1&&(c(0,"p"),d(1,"Cargando Informacion"),l())}var h=class n{route=a(q);usersService=a(O);user=g(this.route.params.pipe(C(({id:e})=>this.usersService.getUserById(e))));titleLabel=m(()=>this.user()?`Informacion del Usuario: ${this.user()?.first_name} ${this.user()?.last_name}`:"Infomracion del Usuario");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=w({type:n,selectors:[["ng-component"]],standalone:!0,features:[U],decls:3,vars:2,consts:[[3,"title"],[3,"srcset","alt"]],template:function(t,o){t&1&&(y(0,"app-title",0),D(1,E,7,5,"section")(2,F,2,0,"p")),t&2&&(v("title",o.titleLabel()),u(),_(o.user()?1:2))},dependencies:[M,R],encapsulation:2})};export{h as default};