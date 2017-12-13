ga('require', 'displayfeatures');
ga('require', 'linkid');
ga('require', 'linker');
ga('linker:autoLink', ['indiraactive.com', 'blog.indiraactive.com', 'returns.indiraactive.com', 'track.indiraactive.com']);
if(__st["cid"]) ga('set', '&uid', __st["cid"]);

/* DataFeedWatch tracker */
__dfwTracker = { dimension: 4 };
!function(e){function t(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return"dfwt"+e()+e()+e()+e()+e()+e()}function n(e,t){function n(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e.replace(/\+/g," ")}catch(t){}return""}if(r(t)){var o=new Date;return o.setTime(o.getTime()+63072e6),i.cookie=e+"="+t+("; expires="+o.toUTCString())+"; path=/"}for(var c,a,f,u=e?void 0:{},d=i.cookie?i.cookie.split("; "):[],s=0,l=d.length;l>s;s++){if(c=d[s].split("="),a=c.shift(),f=c.join("="),e&&e===a){u=n(f);break}!e&&r(f=n(f))&&(u[a]=f)}return u}function r(e){return null===e?!1:void 0!==e}var i=e.document,o="_dfwt",c=/dfw_tracker=([0-9a-zA-Z\-\_]+)/.exec(location.href),a=e.__dfwTracker||{};if(a.dimension=a.dimension||1,null!==c&&r(c[1])&&(c=c[1]),"string"==typeof c){var f=n(o);r(f)||(f=t(),n(o,f));try{ga("set","dimension"+a.dimension,f+"-"+c)}catch(u){}}}(window);
/* DataFeedWatch tracker end */
