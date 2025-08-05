var acc = document.getElementsByClassName("a_accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;

    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      
    } 
  });
}


function myFunction() {
  const x = document.getElementById("myTopnav");

  if (x.style.display === "flex") {
    x.style.display = "none"; // Hide
  } else {
    x.style.display = "flex"; // Show
  }
}

