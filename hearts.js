// Ambient floating hearts in the background
function initFloatingHearts(count){
  count = count || 14;
  var bg = document.getElementById('heartsBg');
  if(!bg) return;
  var symbols = ['❤','♥'];
  for(var i=0;i<count;i++){
    var h = document.createElement('span');
    h.className = 'heart-particle';
    h.textContent = symbols[Math.floor(Math.random()*symbols.length)];
    var size = 12 + Math.random()*20;
    h.style.left = (Math.random()*100) + 'vw';
    h.style.fontSize = size + 'px';
    h.style.animationDuration = (14 + Math.random()*14) + 's';
    h.style.animationDelay = (Math.random()*18) + 's';
    bg.appendChild(h);
  }
}

// Burst of hearts from a click point
function burstHeartsAt(x, y){
  var count = 10;
  for(var i=0;i<count;i++){
    var h = document.createElement('span');
    h.className = 'heart-burst';
    h.textContent = '❤';
    var angle = Math.random()*Math.PI*2;
    var dist = 60 + Math.random()*70;
    var dx = Math.cos(angle)*dist;
    var dy = Math.sin(angle)*dist - 40;
    h.style.setProperty('--burst-end', 'translate(' + dx + 'px,' + dy + 'px)');
    h.style.left = x + 'px';
    h.style.top = y + 'px';
    h.style.fontSize = (14 + Math.random()*14) + 'px';
    h.style.animationDuration = (0.9 + Math.random()*0.5) + 's';
    document.body.appendChild(h);
    (function(el){ setTimeout(function(){ el.remove(); }, 1600); })(h);
  }
}

// Falling heart confetti across the whole screen (e.g. quiz completion)
function celebrateWithHearts(count){
  count = count || 26;
  for(var i=0;i<count;i++){
    (function(idx){
      setTimeout(function(){
        var h = document.createElement('span');
        h.className = 'heart-confetti';
        h.textContent = Math.random() > 0.5 ? '❤' : '♥';
        h.style.left = (Math.random()*100) + 'vw';
        h.style.fontSize = (14 + Math.random()*18) + 'px';
        h.style.animationDuration = (2.2 + Math.random()*1.6) + 's';
        document.body.appendChild(h);
        setTimeout(function(){ h.remove(); }, 4200);
      }, idx*40);
    })(i);
  }
}

document.addEventListener('DOMContentLoaded', function(){
  initFloatingHearts();
});
