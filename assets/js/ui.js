// ui.js — small UI helpers: mobile nav toggle, reveal on scroll, smooth scroll
(function(){
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Reveal on scroll
  const revealElems = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window && revealElems.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      })
    },{threshold:0.12});
    revealElems.forEach(el=>io.observe(el));
  } else {
    // fallback
    revealElems.forEach(el=>el.classList.add('visible'));
  }

  // Smooth anchor scrolling for same-page links
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a[href^="#"]');
    if(!a) return;
    const id = a.getAttribute('href');
    if(id.length>1){
      const target = document.querySelector(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
      }
    }
  });

})();
