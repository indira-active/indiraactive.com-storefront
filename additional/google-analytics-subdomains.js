<!-- Universal Analyics (analyics.js) - Google Analytics -->
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84828000-1', 'auto');
ga('send', 'pageview');
ga('require', 'displayfeatures');
ga('require', 'linkid');
ga('require', 'linker');
ga('linker:autoLink', ['indiraactive.com', 'www.indiraactive.com', 'blog.indiraactive.com', 'returns.indiraactive.com', 'track.indiraactive.com']);
if(__st["cid"]) ga('set', '&uid', __st["cid"]);

<!-- OR -->
<!-- NOT BOTH -->

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-84828000-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-84828000-1', {
  'linker': {
    'domains': ['indiraactive.com', 'www.indiraactive.com', 'blog.indiraactive.com', 'returns.indiraactive.com', 'track.indiraactive.com']
  },
  'link_attribution': true,
  'allow_display_features': true,
  'send_page_view': true
});
</script>
