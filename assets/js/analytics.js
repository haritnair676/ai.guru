// analytics.js
// Lightweight loader: supports GA4 (G-XXXXXXX) and Plausible (self-hosted or cloud)
(function(){
  const metaGA = document.querySelector('meta[name="ga-measurement-id"]')?.content?.trim();
  const plausibleDomain = document.querySelector('meta[name="plausible-domain"]')?.content?.trim();

  // Privacy friendly: do not load unless configured
  if(plausibleDomain){
    // Plausible recommended snippet
    (function(p,l,a,u,s,i){
      p['plausible']=p['plausible']||function(){(p.plausible.q=p.plausible.q||[]).push(arguments)};
      s=l.createElement(a);s.async=1;s.src=u;i=l.getElementsByTagName(a)[0];i.parentNode.insertBefore(s,i);
    })(window,document,'script','https://plausible.io/js/plausible.js');
    // init with domain
    window.plausible && window.plausible('pageview',{props:{domain:plausibleDomain}});
  }

  if(metaGA){
    // Load GA4 snippet
    const s = document.createElement('script');
    s.src = `https://www.googletagmanager.com/gtag/js?id=${metaGA}`;
    s.async = true;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments)}
    gtag('js', new Date());
    gtag('config', metaGA, {anonymize_ip: true});
  }

  // Simple no-script fallback ping for privacy-preserving counts (optional)
})();
