function clickMenu(n) {
    var num = n
    document.getElementById("dropdw" + num).classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdws = document.getElementsByClassName("dropdw-content");
    var i;
    for (i = 0; i < dropdws.length; i++) {
      var opendropdw = dropdws[i];
      if (opendropdw.classList.contains('show')) {
        opendropdw.classList.remove('show');
      }
    }
  }
}
