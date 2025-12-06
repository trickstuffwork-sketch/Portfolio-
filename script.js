// basic interactions
document.addEventListener('DOMContentLoaded', function(){
  // play hero video (mobile gestures)
  const hv = document.getElementById('heroVideo');
  if(hv){ hv.muted=true; hv.setAttribute('playsinline',''); hv.play().catch(()=>{}); }
});
