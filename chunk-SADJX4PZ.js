import{a as y}from"./chunk-2L5RJU6U.js";import{f as x,j as S}from"./chunk-SD6WMKVZ.js";import{a as g}from"./chunk-PW67PQQQ.js";import{Hb as _,Oa as s,Sa as u,T as c,Ta as d,Ua as i,Va as o,Wa as a,X as l,cb as m,fb as f,hb as v,ib as C,ua as r}from"./chunk-OY6VVFFK.js";var b=(e,n)=>n.id,F=e=>["/dashboard/user",e];function T(e,n){if(e&1&&(i(0,"li",1),a(1,"img",2),i(2,"a",3),m(3),o()()),e&2){let t=n.$implicit;r(),s("srcset",t.avatar)("alt",t.first_name),r(),s("routerLink",C(5,F,t.id)),r(),f(" ",t.first_name," ",t.last_name," ")}}function h(e,n){e&1&&(i(0,"p"),m(1,"Cargando..."),o())}var p=class e{usersService=c(y);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["ng-component"]],standalone:!0,features:[v],decls:5,vars:1,consts:[["title","Lista de Usuarios"],[1,"flex","item-center","my-2","cursor-pointer"],[1,"rounded","w-14",3,"srcset","alt"],[1,"mx-5","hover:underline",3,"routerLink"]],template:function(t,U){t&1&&(a(0,"app-title",0),i(1,"ul"),u(2,T,4,7,"li",1,b,!1,h,2,0,"p"),o()),t&2&&(r(2),d(U.usersService.users()))},dependencies:[_,g,S,x]})};export{p as default};