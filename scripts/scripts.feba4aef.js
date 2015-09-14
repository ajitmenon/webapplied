"use strict";angular.module("webappliedApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","sportstore","cart","sportsStoreAdmin","ds.clock","chartview","seatReservationApp","angular-loading-bar"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/login.html",controller:"loginCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/menu",{resolve:{check:["$location","$rootScope",function(a,b){b.loggedIn||a.path("/")}]},templateUrl:"views/menu.html"}).when("/checkout",{templateUrl:"views/checkoutSummary.html",controller:"cartSummaryController"}).when("/chat",{templateUrl:"views/chat.html"}).when("/viewProduct",{templateUrl:"views/viewProduct.html",controller:"ProCtrl"}).when("/tracker",{templateUrl:"views/tracker.html",controller:"trackerCtrl"}).when("/about",{templateUrl:"views/block.html"}).when("/time",{templateUrl:"views/time.html"}).when("/login",{templateUrl:"views/login.html",controller:"loginCtrl"}).when("/complete",{templateUrl:"views/summary.html"}).when("/placeorder",{templateUrl:"views/placeOrder.html",controller:"ProCtrl"}).when("/main",{templateUrl:"views/main.html"}).when("/adminOrders",{templateUrl:"views/adminOrders.html"}).when("/adminProducts",{templateUrl:"views/adminProducts.html"}).when("/newItem",{templateUrl:"views/newItem.html"}).when("/chart",{templateUrl:"views/charts.html"}).when("/barchart",{templateUrl:"views/barchart.html"}).when("/dougchart",{templateUrl:"views/dougchart.html"}).when("/radar",{templateUrl:"views/radar.html"}).when("/pie",{templateUrl:"views/pie.html"}).when("/polar",{templateUrl:"views/polar.html"}).when("/dynamic",{templateUrl:"views/dynamic.html"}).when("/book",{templateUrl:"views/book.html",controller:"BookCtrl"}).when("/databinding",{templateUrl:"views/databinding.html"}).when("/sportstore",{templateUrl:"views/sportstore.html",controller:"ProCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("webappliedApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("webappliedApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),window.Modernizr=function(a,b,c){function d(a){s.cssText=a}function e(a,b){return typeof a===b}function f(a,b){return!!~(""+a).indexOf(b)}function g(a,b){for(var d in a){var e=a[d];if(!f(e,"-")&&s[e]!==c)return"pfx"==b?e:!0}return!1}function h(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function i(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),f=(a+" "+v.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?g(f,b):(f=(a+" "+w.join(d+" ")+d).split(" "),h(f,b,c))}var j,k,l,m="2.6.2",n={},o=!0,p=b.documentElement,q="modernizr",r=b.createElement(q),s=r.style,t=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),u="Webkit Moz O ms",v=u.split(" "),w=u.toLowerCase().split(" "),x={},y=[],z=y.slice,A=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:q+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',q,'">',a,"</style>"].join(""),j.id=q,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=p.style.overflow,p.style.overflow="hidden",p.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),p.style.overflow=i),!!g},B={}.hasOwnProperty;l=e(B,"undefined")||e(B.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return B.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=z.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(z.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(z.call(arguments)))};return d}),x.csstransforms3d=function(){var a=!!i("perspective");return a&&"webkitPerspective"in p.style&&A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=9===b.offsetLeft&&3===b.offsetHeight}),a};for(var C in x)l(x,C)&&(k=C.toLowerCase(),n[k]=x[C](),y.push((n[k]?"":"no-")+k));return n.addTest=function(a,b){if("object"==typeof a)for(var d in a)l(a,d)&&n.addTest(d,a[d]);else{if(a=a.toLowerCase(),n[a]!==c)return n;b="function"==typeof b?b():b,"undefined"!=typeof o&&o&&(p.className+=" "+(b?"":"no-")+a),n[a]=b}return n},d(""),r=j=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=r.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=q[a[o]];return b||(b={},p++,a[o]=p,q[p]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():n.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),f.canHaveChildren&&!m.test(a)?d.frag.appendChild(f):f}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function i(a){a||(a=b);var d=e(a);return r.shivCSS&&!j&&!d.hasCSS&&(d.hasCSS=!!c(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),k||h(a,d),a}var j,k,l=a.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,n=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,o="_html5shiv",p=0,q={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var r={elements:l.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:l.shivCSS!==!1,supportsUnknownElements:k,shivMethods:l.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=r,i(b)}(this,b),n._version=m,n._prefixes=t,n._domPrefixes=w,n._cssomPrefixes=v,n.testProp=function(a){return g([a])},n.testAllProps=i,n.testStyles=A,p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(o?" js "+y.join(" "):""),n}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==q.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=r.shift();s=1,a?a.t?o(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):s=0}function i(a,c,d,e,f,i,j){function k(b){if(!n&&g(l.readyState)&&(t.r=n=1,!s&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&o(function(){v.removeChild(l)},50);for(var d in A[c])A[c].hasOwnProperty(d)&&A[c][d].onload()}}var j=j||m.errorTimeout,l=b.createElement(a),n=0,q=0,t={t:d,s:c,e:f,a:i,x:j};1===A[c]&&(q=1,A[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,q)},r.splice(e,0,t),"img"!=a&&(q||2===A[c]?(v.insertBefore(l,u?null:p),o(k,j)):A[c].push(l))}function j(a,b,c,d,f){return s=0,b=b||"j",e(a)?i("c"==b?x:w,a,b,this.i++,c,d,f):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,n=a.opera&&"[object Opera]"==q.call(a.opera),n=!!b.attachEvent&&!n,w=t?"object":n?"script":"img",x=n?"script":w,y=Array.isArray||function(a){return"[object Array]"==q.call(a)},z=[],A={},B={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,a=a.split("!"),e=z.length,f=a.pop(),g=a.length,f={url:f,origUrl:f,prefixes:a};for(c=0;g>c;c++)d=a[c].split("="),(b=B[d.shift()])&&(f=b(f,d));for(c=0;e>c;c++)f=z[c](f);return f}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(A[i.url]?i.noexec=!0:A[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),A[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}),g(a,l,b,0,j);else if(Object(a)===a)for(i in h=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(i)&&(!c&&!--h&&(d(l)?l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}:l[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),n()}}(m[i])),g(a[i],l,b,i,j))}else!c&&n()}var h,i,j=!!a.test,k=a.load||a.both,l=a.callback||f,m=l,n=a.complete||f;c(j?a.yep:a.nope,!!k),k&&c(k)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(y(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):y(j)?m(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},m.addPrefix=function(a,b){B[a]=b},m.addFilter=function(a){z.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k,l,n=b.createElement("script"),e=e||m.errorTimeout;n.src=a;for(l in d)n.setAttribute(l,d[l]);c=j?h:c||f,n.onreadystatechange=n.onload=function(){!k&&g(n.readyState)&&(k=1,c(),n.onload=n.onreadystatechange=null)},o(function(){k||(k=1,c(1))},e),i?n.onload():p.parentNode.insertBefore(n,p)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(p.parentNode.insertBefore(e,p),o(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},angular.module("sportstore",["customFilters","cart","ds.clock"]).constant("productListActiveClass","btn-primary").constant("dataUrl","http://localhost:5500/products").constant("orderUrl","http://localhost:5500/orders").constant("productListPageCount",3).controller("ProCtrl",["$scope","$resource","productListActiveClass","productListPageCount","$http","$location","dataUrl","orderUrl","$route","cart",function(a,b,c,d,e,f,g,h,i,j){a.data={},e.get(g).success(function(b){a.data.products=b}).error(function(b){a.data.error=b}),a.getProductDetails=function(b){a.data.items=b,console.log("hi"+a.data.items.name)},a.sendOrder=function(b){var c=angular.copy(b);c.products=j.getProducts(),e.post(h,c).success(function(b){a.data.orderId=b.id,j.getProducts().length=0}).error(function(b){a.data.orderError=b})["finally"](function(){f.path("/complete")})};var k=null;a.selectedPage=1,a.pageSize=d,a.selectCategory=function(b){k=b,a.selectedPage=1},a.reloadPage=function(){i.reload()},a.selectPage=function(b){a.selectedPage=b},a.addProductToCart=function(a){j.addProduct(a.id,a.name,a.price)},a.categoryFilterFn=function(a){return null===k||a.category===k},a.getCategoryClass=function(a){return k===a?c:""},a.getPageClass=function(b){return a.selectedPage===b?c:""}}]).controller("cartSummaryController",["$scope","cart",function(a,b){a.cartData=b.getProducts(),a.total=function(){for(var b=0,c=0;c<a.cartData.length;c++)b+=a.cartData[c].price*a.cartData[c].count;return b},a.remove=function(a){b.removeProduct(a)}}]).controller("loginCtrl",["$scope","$location","$rootScope",function(a,b,c){a.submit=function(){"admin"===a.username&&"admin"===a.password&&(c.loggedIn=!0,c.pwd=a.password,b.path("/menu"))}}]),angular.module("customFilters",[]).filter("unique",function(){return function(a,b){if(angular.isArray(a)&&angular.isString(b)){for(var c=[],d={},e=0;e<a.length;e++){var f=a[e][b];angular.isUndefined(d[f])&&(d[f]=!0,c.push(f))}return c}return a}}).filter("range",["$filter",function(a){return function(b,c,d){if(angular.isArray(b)&&angular.isNumber(c)&&angular.isNumber(d)){var e=(c-1)*d;return b.length<e?[]:a("limitTo")(b.splice(e),d)}return b}}]).filter("pageCount",function(){return function(a,b){if(angular.isArray(a)){for(var c=[],d=0;d<Math.ceil(a.length/b);d++)c.push(d);return c}return a}}),angular.module("cart",[]).factory("cart",function(){var a=[];return{addProduct:function(b,c,d){for(var e=!1,f=0;f<a.length;f++)if(a[f].id===b){a[f].count++,e=!0;break}e||a.push({count:1,id:b,price:d,name:c})},removeProduct:function(b){for(var c=0;c<a.length;c++)if(a[c].id===b){a.splice(c,1);break}},getProducts:function(){return a}}}).directive("cartSummary",["cart",function(a){return{restrict:"E",templateUrl:"views/cartSummary.html",controller:["$scope",function(b){var c=a.getProducts();b.total=function(){for(var a=0,b=0;b<c.length;b++)a+=c[b].price*c[b].count;return a},b.itemCount=function(){for(var a=0,b=0;b<c.length;b++)a+=c[b].count;return a}}]}}]),angular.module("sportsStoreAdmin",[]).constant("authUrl","http://localhost:5500/users/login").constant("ordersUrl","http://localhost:5500/orders").constant("productUrl","http://localhost:5500/products/").constant("trackerUrl","http://localhost:5500/tracker/").constant("partrackerUrl","http://localhost:5500/party/").config(["$httpProvider",function(a){a.defaults.withCredentials=!0}]).controller("authCtrl",["$scope","$http","$location","authUrl",function(a,b,c,d){a.authenticate=function(e,f){b.post(d,{username:e,password:f},{withCredentials:!0}).success(function(){c.path("/main")}).error(function(b){a.authenticationError=b})}}]).controller("ordersCtrl",["$scope","$http","ordersUrl",function(a,b,c){b.get(c,{withCredentials:!0}).success(function(b){a.orders=b}).error(function(b){a.error=b}),a.selectedOrder="",a.selectOrder=function(b){a.selectedOrder=b},a.calcTotal=function(a){for(var b=0,c=0;c<a.products.length;c++)b+=a.products[c].count*a.products[c].price;return b}}]).controller("productCtrl",["$scope","$resource","productUrl",function(a,b,c){a.productsResource=b(c+":id",{id:"@id"}),a.listProducts=function(){a.products=a.productsResource.query()},a.deleteProduct=function(b){b.$delete().then(function(){a.products.splice(a.products.indexOf(b),1)})},a.createProduct=function(b){new a.productsResource(b).$save().then(function(b){a.products.push(b),a.editedProduct=null})},a.updateProduct=function(b){b.$save(),a.editedProduct=null},a.startEdit=function(b){a.editedProduct=b},a.cancelEdit=function(){a.editedProduct=null},a.listProducts()}]).controller("trackerCtrl",["$scope","$resource","trackerUrl",function(a,b,c){a.trackerResource=b(c+":id",{id:"@id"}),a.listResources=function(){a.resources=a.trackerResource.query()},a.deleteResource=function(b){b.$delete().then(function(){a.resources.splice(a.resources.indexOf(b),1)})},a.createResource=function(b){new a.trackerResource(b).$save().then(function(b){a.resources.push(b),a.editedResource=null})},a.updateResource=function(b){b.$save(),a.editedResource=null},a.startEditTrack=function(b){a.editedResource=b},a.cancelEdit=function(){a.editedResource=null},a.listResources()}]),angular.module("sportsStore",[]).controller("cartSummaryController",["$scope","cart",function(a,b){a.cartData=b.getProducts(),a.total=function(){for(var b=0,c=0;c<a.cartData.length;c++)b+=a.cartData[c].price*a.cartData[c].count;return b},a.remove=function(a){b.removeProduct(a)}}]),window.Modernizr=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){for(var d in a)if(r[a[d]]!==c)return"pfx"==b?a[d]:!0;return!1}function g(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function h(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),h=(a+" "+u.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?f(h,b):(h=(a+" "+v.join(d+" ")+d).split(" "),g(h,b,c))}var i,j,k,l="2.5.3",m={},n=!0,o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),t="Webkit Moz O ms",u=t.split(" "),v=t.toLowerCase().split(" "),w={},x=[],y=x.slice,z=function(a,c,d,e){var f,g,h,i=b.createElement("div"),j=b.body,k=j?j:b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:p+(d+1),i.appendChild(h);return f=["&#173;","<style>",a,"</style>"].join(""),i.id=p,(j?i:k).innerHTML+=f,k.appendChild(i),j||(k.style.background="",o.appendChild(k)),g=c(i,a),j?i.parentNode.removeChild(i):k.parentNode.removeChild(k),!!g},A={}.hasOwnProperty;k=e(A,"undefined")||e(A.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return A.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=y.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(y.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(y.call(arguments)))};return d});(function(a,c){var d=a.join(""),e=c.length;z(d,function(a,c){for(var d=b.styleSheets[b.styleSheets.length-1],f=(d?d.cssRules&&d.cssRules[0]?d.cssRules[0].cssText:d.cssText||"":"",a.childNodes),g={};e--;)g[f[e].id]=f[e];m.csstransforms3d=9===(g.csstransforms3d&&g.csstransforms3d.offsetLeft)&&3===g.csstransforms3d.offsetHeight},e,c)})([,["@media (",s.join("transform-3d),("),p,")","{#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")],[,"csstransforms3d"]);w.cssanimations=function(){return h("animationName")},w.csstransforms=function(){return!!h("transform")},w.csstransforms3d=function(){var a=!!h("perspective");return a&&"webkitPerspective"in o.style&&(a=m.csstransforms3d),a},w.csstransitions=function(){return h("transition")};for(var B in w)k(w,B)&&(j=B.toLowerCase(),m[j]=w[B](),x.push((m[j]?"":"no-")+j));return d(""),q=i=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=k.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var d=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&d.canHaveChildren&&!j.test(a)?f.appendChild(d):d},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function f(a){var b;return a.documentShived?a:(k.shivCSS&&!g&&(b=!!c(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),h||(b=!e(a)),b&&(a.documentShived=b),a)}var g,h,i=a.html5||{},j=/^<|^(?:button|form|map|select|textarea)$/i;!function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,h=1==a.childNodes.length||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return"undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}()}();var k={elements:i.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:i.shivCSS!==!1,shivMethods:i.shivMethods!==!1,type:"default",shivDocument:f};a.html5=k,f(b)}(this,b),m._version=l,m._prefixes=s,m._domPrefixes=v,m._cssomPrefixes=u,m.testProp=function(a){return f([a])},m.testAllProps=h,m.testStyles=z,o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(n?" js "+x.join(" "):""),m}(this,this.document),window.Modernizr=function(a,b,c){function d(a){r.cssText=a}function e(a,b){return typeof a===b}function f(a,b){for(var d in a)if(r[a[d]]!==c)return"pfx"==b?a[d]:!0;return!1}function g(a,b,d){for(var f in a){var g=b[a[f]];if(g!==c)return d===!1?a[f]:e(g,"function")?g.bind(d||b):g}return!1}function h(a,b,c){var d=a.charAt(0).toUpperCase()+a.substr(1),h=(a+" "+t.join(d+" ")+d).split(" ");return e(b,"string")||e(b,"undefined")?f(h,b):(h=(a+" "+u.join(d+" ")+d).split(" "),g(h,b,c))}var i,j,k,l="2.5.3",m={},n=!0,o=b.documentElement,p="modernizr",q=b.createElement(p),r=q.style,s=({}.toString,"Webkit Moz O ms"),t=s.split(" "),u=s.toLowerCase().split(" "),v={},w=[],x=w.slice,y={}.hasOwnProperty;k=e(y,"undefined")||e(y.call,"undefined")?function(a,b){return b in a&&e(a.constructor.prototype[b],"undefined")}:function(a,b){return y.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=x.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(x.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(x.call(arguments)))};return d}),v.cssanimations=function(){return h("animationName")};for(var z in v)k(v,z)&&(j=z.toLowerCase(),m[j]=v[z](),w.push((m[j]?"":"no-")+j));return d(""),q=i=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=k.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var d=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&d.canHaveChildren&&!j.test(a)?f.appendChild(d):d},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function f(a){var b;return a.documentShived?a:(k.shivCSS&&!g&&(b=!!c(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),h||(b=!e(a)),b&&(a.documentShived=b),a)}var g,h,i=a.html5||{},j=/^<|^(?:button|form|map|select|textarea)$/i;!function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,h=1==a.childNodes.length||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return"undefined"==typeof c.cloneNode||"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}()}();var k={elements:i.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:i.shivCSS!==!1,shivMethods:i.shivMethods!==!1,type:"default",shivDocument:f};a.html5=k,f(b)}(this,b),m._version=l,m._domPrefixes=u,m._cssomPrefixes=t,m.testProp=function(a){return f([a])},m.testAllProps=h,o.className=o.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(n?" js "+w.join(" "):""),m}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==q.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=r.shift();s=1,a?a.t?o(function(){("c"==a.t?m.injectCss:m.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):s=0}function i(a,c,d,e,f,i,j){function k(b){if(!n&&g(l.readyState)&&(t.r=n=1,!s&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&o(function(){v.removeChild(l)},50);for(var d in A[c])A[c].hasOwnProperty(d)&&A[c][d].onload()}}var j=j||m.errorTimeout,l={},n=0,q=0,t={t:d,s:c,e:f,a:i,x:j};1===A[c]&&(q=1,A[c]=[],l=b.createElement(a)),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,q)},r.splice(e,0,t),"img"!=a&&(q||2===A[c]?(v.insertBefore(l,u?null:p),o(k,j)):A[c].push(l))}function j(a,b,c,d,f){return s=0,b=b||"j",e(a)?i("c"==b?x:w,a,b,this.i++,c,d,f):(r.splice(this.i++,0,a),1==r.length&&h()),this}function k(){var a=m;return a.loader={load:j,i:0},a}var l,m,n=b.documentElement,o=a.setTimeout,p=b.getElementsByTagName("script")[0],q={}.toString,r=[],s=0,t="MozAppearance"in n.style,u=t&&!!b.createRange().compareNode,v=u?n:p.parentNode,n=a.opera&&"[object Opera]"==q.call(a.opera),n=!!b.attachEvent&&!n,w=t?"object":n?"script":"img",x=n?"script":w,y=Array.isArray||function(a){return"[object Array]"==q.call(a)},z=[],A={},B={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}};m=function(a){function b(a){var b,c,d,a=a.split("!"),e=z.length,f=a.pop(),g=a.length,f={url:f,origUrl:f,prefixes:a};for(c=0;g>c;c++)d=a[c].split("="),(b=B[d.shift()])&&(f=b(f,d));for(c=0;e>c;c++)f=z[c](f);return f}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(A[j.url]?j.noexec=!0:A[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),A[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}),g(a,l,b,0,j);else if(Object(a)===a)for(i in h=function(){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c}(),a)a.hasOwnProperty(i)&&(!c&&!--h&&(d(l)?l=function(){var a=[].slice.call(arguments);m.apply(this,a),n()}:l[i]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),n()}}(m[i])),g(a[i],l,b,i,j))}else!c&&n()}var h,i,j=!!a.test,k=a.load||a.both,l=a.callback||f,m=l,n=a.complete||f;c(j?a.yep:a.nope,!!k),k&&c(k)}var j,l,n=this.yepnope.loader;if(e(a))g(a,0,n,0);else if(y(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,n,0):y(l)?m(l):Object(l)===l&&i(l,n);else Object(a)===a&&i(a,n)},m.addPrefix=function(a,b){B[a]=b},m.addFilter=function(a){z.push(a)},m.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",l=function(){b.removeEventListener("DOMContentLoaded",l,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k,l,n=b.createElement("script"),e=e||m.errorTimeout;n.src=a;for(l in d)n.setAttribute(l,d[l]);c=j?h:c||f,n.onreadystatechange=n.onload=function(){!k&&g(n.readyState)&&(k=1,c(),n.onload=n.onreadystatechange=null)},o(function(){k||(k=1,c(1))},e),i?n.onload():p.parentNode.insertBefore(n,p)},a.yepnope.injectCss=function(a,c,d,e,g,i){var j,e=b.createElement("link"),c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(p.parentNode.insertBefore(e,p),o(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},angular.module("chartview",["chart.js"]).controller("LineCtrl",["$scope",function(a){a.colours=["Blue","white"],a.labels=["January","February","March","April","May","June","July"],a.series=["Product A","Product B"],a.data=[[65,59,80,81,56,65,40],[28,48,40,19,86,27,90]],a.onClick=function(a,b){console.log(a,b)}}]).controller("BarCtrl",["$scope",function(a){a.labels=["2006","2007","2008","2009","2010","2011","2012"],a.series=["Product A","Product B"],a.colours=["yellow","green"],a.data=[[65,59,80,81,56,55,40],[28,48,40,19,86,27,90]]}]).controller("DoughnutCtrl",["$scope",function(a){a.labels=["Download Sales","In-Store Sales","Mail-Order Sales"],a.data=[300,500,100],a.colours=["Blue","white","red"]}]).controller("RadarCtrl",["$scope",function(a){a.labels=["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],a.data=[[65,59,90,81,56,55,40],[28,48,40,19,96,27,100]]}]).controller("PieCtrl",["$scope",function(a){a.labels=["Download Sales","In-Store Sales","Mail-Order Sales"],a.data=[300,500,100]}]).controller("PolarAreaCtrl",["$scope",function(a){a.labels=["Download Sales","In-Store Sales","Mail-Order Sales","Tele Sales","Corporate Sales"],a.data=[300,500,100,40,120]}]).controller("BaseCtrl",["$scope",function(a){a.labels=["Download Sales","In-Store Sales","Mail-Order Sales","Tele Sales","Corporate Sales"],a.data=[300,500,100,40,120],a.type="PolarArea",a.toggle=function(){a.type="PolarArea"===a.type?"Pie":"PolarArea"}}]),angular.module("seatReservationApp",[]).constant("reserveUrl","http://localhost:5500/reserved").controller("BookCtrl",["$scope","$http","reserveUrl",function(a,b,c){a.data={},b.get(c).success(function(b){a.data.seats=b;for(var c=0;c<a.data.length;c++)d.push(a.data[c].seat)}),a.rows=["A","B","C","D","E","F","G","H","I","J"],a.cols=[1,2,3,4,5,6,7,8];var d=[],e=[];a.seatClicked=function(a){console.log("Selected Seat: "+a);var b=e.indexOf(a);-1!==b?e.splice(b,1):e.push(a)},a.getStatus=function(a){return d.indexOf(a)>-1?"reserved":e.indexOf(a)>-1?"selected":void 0},a.clearSelected=function(){e=[]},a.showSelected=function(){e.length>0?console.log("Selected Seats: \n"+e):console.log("No seats")}}]);