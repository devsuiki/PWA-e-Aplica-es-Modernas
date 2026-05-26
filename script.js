window.onscroll = function () { moveProgress(); };

function moveProgress() {
  var winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  
  // Aplica a porcentagem dinamicamente na largura da linha azul
  document.getElementById("myBar").style.width = scrolled + "%";
}
