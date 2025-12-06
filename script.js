// script.js - interactions, animations, mobile menu, gallery lazy load
document.addEventListener('DOMContentLoaded', function(){
  // Loader hide
  const loader = document.getElementById('loader');
  setTimeout(()=>{ loader.style.opacity='0'; setTimeout(()=>loader.style.display='none',400); }, 800);

  // Smooth anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const t = document.querySelector(this.getAttribute('href'));
      if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const nav = document.getElementById('nav');
  menuBtn.addEventListener('click', ()=>{
    if(nav.style.display === 'flex'){ nav.style.display = 'none'; }
    else{ nav.style.display = 'flex'; nav.style.flexDirection='column'; nav.style.position='absolute'; nav.style.top='72px'; nav.style.right='24px'; nav.style.background='rgba(10,10,10,0.96)'; nav.style.padding='12px'; nav.style.borderRadius='8px'; }
  });

  // Fade-up animations on scroll
  const faders = document.querySelectorAll('.fade-up');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en => { if(en.isIntersecting){ en.target.classList.add('show'); } });
  }, {threshold: 0.15});
  faders.forEach(f => io.observe(f));

  // Light hover effect on work cards to slightly scale image
  document.querySelectorAll('.work-card').forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const thumb = card.querySelector('.thumb');
      if(thumb) thumb.style.transform = 'scale(1.03)';
    });
    card.addEventListener('mouseleave', ()=>{
      const thumb = card.querySelector('.thumb');
      if(thumb) thumb.style.transform = 'scale(1)';
    });
  });

  // Ensure hero video plays (mobile gesture policies)
  const hv = document.getElementById('heroVideo');
  if(hv){ hv.muted = true; hv.setAttribute('playsinline',''); hv.play().catch(()=>{}); }

  // Simple gallery slider on small screens
  let grid = document.querySelector('.work-grid');
  if(window.innerWidth < 700 && grid){
    grid.style.display = 'flex'; grid.style.overflowX = 'auto'; grid.style.scrollSnapType = 'x mandatory';
    document.querySelectorAll('.work-card').forEach(w=>{ w.style.minWidth = '82%'; w.style.scrollSnapAlign = 'center'; w.style.marginRight='18px'; });
  }
});