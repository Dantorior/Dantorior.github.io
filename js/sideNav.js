function openNav() {
  document.getElementById("sideNav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("footer").style.marginLeft = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("footer").style.minWidth = "100%";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "";
  document.getElementById("main").style.marginLeft = "";
  document.getElementById("footer").style.marginLeft = "";
  document.getElementById("main").style.marginLeft = "";
  document.getElementById("footer").style.minWidth = "";
}
