var tasks=document.querySelectorAll('.task'),count=document.getElementById('count');
tasks.forEach(function(t){t.addEventListener('click',function(){
  t.setAttribute('aria-pressed',t.getAttribute('aria-pressed')==='true'?'false':'true');
  var n=document.querySelectorAll('.task[aria-pressed="true"]').length;
  count.textContent=n===tasks.length?'Everything handled. What’s next on your list?':n+' of '+tasks.length+' handled';
});});
var lb=document.getElementById('lb'),lbImg=lb.querySelector('img');
document.querySelectorAll('.shot').forEach(function(b){b.addEventListener('click',function(){
  var im=b.querySelector('img');lbImg.src=im.src;lbImg.alt=im.alt;lb.showModal();lb.scrollTop=0;
});});
lb.querySelector('.lb-close').addEventListener('click',function(){lb.close();});
lb.addEventListener('click',function(e){if(e.target===lb)lb.close();});
document.getElementById('yr').textContent=new Date().getFullYear();
