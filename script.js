var modal = document.getElementsByClassName("flex")[0];
modal.style.display="none";

function myBtn() {
  var btn = document.getElementById("btn");
  btn.style.display="none";
  if (btn.style.display="none") {
    modal.style.display="block";    
  }
}

function btnClose() {
  var btnClose = document.getElementById("btn-close");
  var btn = document.getElementById("btn");
  if (btnClose.style.display="block") {
    btn.style.display="block";
    modal.style.display="none";
  }
}
