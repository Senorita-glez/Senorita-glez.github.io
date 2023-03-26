
var mediaqueryList = window.matchMedia("(max-width: 500px)");
var y = document.getElementById("links");
function myFunction() {
  var logo = document.getElementById("logo");
  var nav = document.getElementById("navi");
  if(mediaqueryList.matches) {
      if (y.style.display === "flex") {
        y.style.display = "none";
        y.style.flexDirection = "row";  
        logo.style.display = "block"  
        navi.style.backgroundColor = "initial";
      } else {
        y.style.display = "flex";
        y.style.flexDirection = "column";
        y.style.zIndex="5"
        logo.style.display = "none";
        navi.style.backgroundColor = "rgba(9, 40, 17, 0.66)";
      }
  }
  else{
    y.style.display = "initial";
  }
}

go();
window.addEventListener('resize', go);

function go(){
  if(mediaqueryList.matches){
    y.style.display = "none";
  }  
  else{
    y.style.display = "initial";
    navi.style.backgroundColor = "initial";
  }
}

