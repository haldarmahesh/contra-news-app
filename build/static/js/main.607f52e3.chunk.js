(this["webpackJsonpcontra-news-app"]=this["webpackJsonpcontra-news-app"]||[]).push([[0],{42:function(e){e.exports=JSON.parse('{"API_KEY":"2732c97587da4acea1c3e181c2421de2","timeout":30000,"baseURL":"https://newsapi.org/v2/"}')},45:function(e,t,a){e.exports=a(75)},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),s=a.n(c),i=a(17),o=a(14),l=a(7),u={loading:!1,newsItems:[]};var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(t.type){case"NEWS_LIST_LOAD_REQUEST":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"NEWS_LIST_LOAD_FAILURE":return Object(l.a)(Object(l.a)({},e),{},{loading:!1});case"NEWS_LIST_LOAD_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{newsItems:t.payload,loading:!1});default:return e}},p={loading:!1,newsItems:[]};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;switch(t.type){case"HEADLINES_LOAD_REQUEST":return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case"HEADLINES_LOAD_FAILURE":return Object(l.a)(Object(l.a)({},e),{},{loading:!1});case"HEADLINES_LOAD_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{newsItems:t.payload,loading:!1});default:return e}},v=Object(o.combineReducers)({newsItems:m,headlines:h}),d=a(39),f=a(40),b=Object(o.createStore)(v,Object(d.composeWithDevTools)(Object(o.applyMiddleware)(f.a))),E=a(3),g=a(4),w=a(23),y=a(22),O=a(6),j=a.n(O),N=a(13),_=function(){function e(t){Object(E.a)(this,e),this.newsListRepository=t}return Object(g.a)(e,[{key:"getNewsUseCase",value:function(e){return this.newsListRepository.getList(e)}}]),e}(),L=function e(t,a,n,r,c,s,i,o,l){Object(E.a)(this,e),this.id=t,this.source=a,this.author=n,this.title=r,this.description=c,this.url=s,this.urlToImage=i,this.publishedAt=o,this.content=l},S=a(18),I=a(12),k=a(41),A=a.n(k),T=a(42);var D=new(function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(){var e;return Object(E.a)(this,a),(e=t.call(this,T.baseURL))._API_KEY=T.API_KEY,e._QUERY_START_KEY="?",e}return Object(g.a)(a,[{key:"get",value:function(e,t){var n=function(e){var t="";return e&&(t+=e.map((function(e){return"".concat(e.key).concat("=").concat(e.value)})).join("&")),t}(t),r=this.getAPIKey(),c=this.joinQueries(n,r);return Object(S.a)(Object(I.a)(a.prototype),"get",this).call(this,e+c)}},{key:"post",value:function(e,t){return Object(S.a)(Object(I.a)(a.prototype),"post",this).call(this,e,t)}},{key:"put",value:function(e,t){return Object(S.a)(Object(I.a)(a.prototype),"put",this).call(this,e,t)}},{key:"patch",value:function(e,t){return Object(S.a)(Object(I.a)(a.prototype),"patch",this).call(this,e,t)}},{key:"delete",value:function(e){return Object(S.a)(Object(I.a)(a.prototype),"delete",this).call(this,e)}},{key:"getAPIKey",value:function(){return"apiKey=".concat(this._API_KEY)}},{key:"joinQueries",value:function(e,t){return"".concat(this._QUERY_START_KEY).concat(e.length>0?e+"&":"").concat(t)}}]),a}(function(){function e(t,a){Object(E.a)(this,e),this.baseUrl=t,this.timeout=a,this._defaultTimeout=3e3,this.client=void 0,this.client=A.a.create({baseURL:T.baseURL,timeout:a||this._defaultTimeout})}return Object(g.a)(e,[{key:"get",value:function(e){return this.client.get(e)}},{key:"post",value:function(e,t){return this.client.post(e,t)}},{key:"put",value:function(e,t){return this.client.put(e,t)}},{key:"patch",value:function(e,t){return this.client.patch(e,t)}},{key:"delete",value:function(e){return this.client.delete(e)}}]),e}())),R=function e(t,a){Object(E.a)(this,e),this.id=t,this.name=a};function x(e){var t=1;return e.data.articles.map((function(e){return e.urlToImage?new L(t++,new R(e.source.id,e.source.name),e.author,e.title,e.description,e.url,e.urlToImage,e.publishedAt,e.content):null}))}var U=new(function(){function e(){Object(E.a)(this,e)}return Object(g.a)(e,[{key:"getList",value:function(){var e=Object(N.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("/everything",[{key:"q",value:t}]);case 3:return a=e.sent,e.abrupt("return",x(a));case 7:throw e.prev=7,e.t0=e.catch(0),console.log("Caught error while calling /everything API",e.t0),Error("Http call failed");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getHeadlines",value:function(){var e=Object(N.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("/top-headlines",[{key:"country",value:"us"}]);case 3:return t=e.sent,e.abrupt("return",x(t));case 7:throw e.prev=7,e.t0=e.catch(0),console.log("Caught error while calling /healines API",e.t0),Error("Http call failed");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}]),e}()),H=function(){function e(){Object(E.a)(this,e)}return Object(g.a)(e,[{key:"getHeadlines",value:function(){return U.getHeadlines()}},{key:"getList",value:function(){var e=Object(N.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",U.getList(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),C=function(){var e=Object(N.a)(j.a.mark((function e(t,a){var n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"NEWS_LIST_LOAD_REQUEST"}),e.prev=1,n=new H,r=new _(n),e.next=6,r.getNewsUseCase(a);case 6:c=e.sent,t(K(c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t({type:"NEWS_LIST_LOAD_FAILURE",error:e.t0});case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,a){return e.apply(this,arguments)}}();function K(e){return{type:"NEWS_LIST_LOAD_SUCCESS",payload:e}}var W=function(){function e(t){Object(E.a)(this,e),this.newsListRepository=t}return Object(g.a)(e,[{key:"getHeadlines",value:function(){return this.newsListRepository.getHeadlines()}}]),e}(),P=function(){var e=Object(N.a)(j.a.mark((function e(t){var a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(">> 11",t),t({type:"HEADLINES_LOAD_REQUEST"}),e.prev=2,a=new H,n=new W(a),e.next=7,n.getHeadlines();case 7:r=e.sent,console.log("HEA",r),t(Q(r)),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.log("err",e.t0),t({type:"HEADLINES_LOAD_FAILURE",error:e.t0});case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();function Q(e){return{type:"HEADLINES_LOAD_SUCCESS",payload:e}}var Y=a(43),F=a.n(Y);a(73);var J=function(e){return e.news?r.a.createElement("div",{className:"card "},r.a.createElement("img",{className:"card-img-top",src:e.news.urlToImage,alt:"Article news"}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.news.title),r.a.createElement("p",{className:"card-text"},e.news.content),r.a.createElement("p",{className:"card-text"},r.a.createElement("small",{className:"text-muted"},e.news.author,", ",e.news.source.name)),r.a.createElement("a",{href:e.news.url,target:"_blank",rel:"noopener noreferrer"},"Read full story")),r.a.createElement("div",{className:"card-footer"},r.a.createElement("small",{className:"text-muted"},(t=e.news.publishedAt,F.a.utc(t).fromNow())))):null;var t};var M=function(e){var t=e.list.map((function(e,t){return r.a.createElement(J,{news:e,key:"".concat(t)})}));return r.a.createElement("div",{className:"card-columns"},t)},B=function(e){Object(w.a)(a,e);var t=Object(y.a)(a);function a(){return Object(E.a)(this,a),t.apply(this,arguments)}return Object(g.a)(a,[{key:"handleSearch",value:function(e){this.props.getNewsList(e)}},{key:"componentDidMount",value:function(){this.props.getHeadlines()}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(M,{list:this.props.headlines}))}}]),a}(r.a.Component),q=Object(i.b)((function(e){return{newsItems:e.newsItems.newsItems,headlines:e.headlines.newsItems}}),(function(e){return{getNewsList:function(t){return C(e,t)},getHeadlines:function(){return P(e)}}}))(B),$=a(15),z=a(2);var G=Object(i.b)((function(e){return{newsItems:e.newsItems.newsItems}}),(function(e){return{getNewsList:function(t){return C(e,t)}}}))((function(e){var t=Object(z.g)().id;return Object(n.useEffect)((function(){e.getNewsList(t)}),[t]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(M,{list:e.newsItems})))})),V=a(44);function X(){var e=Object(n.useState)(""),t=Object(V.a)(e,2),a=t[0],c=t[1];return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark sticky-top"},r.a.createElement($.c,{to:"/"},r.a.createElement("span",{className:"navbar-brand"},"Contra Newss")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement($.c,{to:"/headlines",activeClassName:"active",className:"nav-link"},"Headlines ",r.a.createElement("span",{className:"sr-only"},"(current)")))),r.a.createElement("div",{className:"form-inline my-2 my-lg-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search",onChange:function(e){return c(e.target.value)}}),r.a.createElement($.b,{to:"/search/".concat(a)},r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0"},"Search")))))}var Z=function(e){return r.a.createElement($.a,null,r.a.createElement(X,null),r.a.createElement(z.d,null,r.a.createElement(z.b,{path:"/search/:id"},r.a.createElement(G,e)),r.a.createElement(z.b,{path:"/headlines",exact:!0},r.a.createElement(q,e)),r.a.createElement(z.b,{exact:!0,path:"/"},r.a.createElement(z.a,{to:"/headlines"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(i.a,{store:b},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.607f52e3.chunk.js.map