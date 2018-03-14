// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84828000-1', 'auto');
ga('send', 'pageview');
ga('require', 'displayfeatures');
ga('require', 'linkid');
ga('require', 'linker');
ga('linker:autoLink', ['indiraactive.com', 'blog.indiraactive.com', 'returns.indiraactive.com', 'track.indiraactive.com']);
// if(__st["cid"]) ga('set', '&uid', __st["cid"]);
// END Google Analytics


// Bing Ads Universal tag
(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"5708096"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");
// End Bing Ads Universal tag 

// Smooch Head
!function(e,n,t,r){
        function o(){try{var e;if((e="string"==typeof this.response?JSON.parse(this.response):this.response).url){var t=n.getElementsByTagName("script")[0],r=n.createElement("script");r.async=!0,r.src=e.url,t.parentNode.insertBefore(r,t)}}catch(e){}}var s,p,a,i=[],c=[];e[t]={init:function(){s=arguments;var e={then:function(n){return c.push({type:"t",next:n}),e},catch:function(n){return c.push({type:"c",next:n}),e}};return e},on:function(){i.push(arguments)},render:function(){p=arguments},destroy:function(){a=arguments}},e.__onWebMessengerHostReady__=function(n){if(delete e.__onWebMessengerHostReady__,e[t]=n,s)for(var r=n.init.apply(n,s),o=0;o<c.length;o++){var u=c[o];r="t"===u.type?r.then(u.next):r.catch(u.next)}p&&n.render.apply(n,p),a&&n.destroy.apply(n,a);for(o=0;o<i.length;o++)n.on.apply(n,i[o])};var u=new XMLHttpRequest;u.addEventListener("load",o),u.open("GET","https://"+r+".webloader.smooch.io/",!0),u.responseType="json",u.send()
}(window,document,"Smooch","5892a9a16c77636e014b54f3");
// End Smooch Head

// BEGIN GCR Language Code
 window.___gcfg = {
  lang: 'en_US'
 };
// END GCR Language Code


// Hotjar Tracking Code for https://www.indiraactive.com/ 
(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:584375,hjsv:5};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
// END Hotjar Tracking Code for https://www.indiraactive.com/ 


// Smooch body
var skPromise = Smooch.init({
        appId: "5892a9a16c77636e014b54f3",
        customText: {
                introductionText: 'We try to be quick, so ask us anything!',
                introAppText: 'Chat with us below or from your favorite app, email, or SMS.',
                inputPlaceholder: 'Type a message....'                       
        }
});
// END Smooch body


// Twitter universal website tag code
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','nxxxp');
twq('track','PageView');
// End Twitter universal website tag code


// Klaviyo Tracking code for email markerting
var _learnq = _learnq || [];
_learnq.push(['account', 'Fr2zbh']);
(function () {
var b = document.createElement('script'); b.type = 'text/javascript'; b.async = true;
b.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'a.klaviyo.com/media/js/analytics/analytics.js';
var a = document.getElementsByTagName('script')[0]; a.parentNode.insertBefore(b, a);
})();
// End Klaviyo Tracking code for email markerting 
