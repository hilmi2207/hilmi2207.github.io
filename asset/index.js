window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (
      document.body.scrollTop > 150 ||
      document.documentElement.scrollTop > 150
    ) {
      document.getElementById("navbar").style.backgroundColor = "white";
    } else {
      var x = document.getElementById("navbar");
      x.style.background = "black";
      document.getElementById("title").style.color = "red";
      document.getElementById("nav-name1").style.color = "red";
      document.getElementById("nav-name2").style.color = "red";
      document.getElementById("nav-name3").style.color = "red";
      document.getElementById("nav-name4").style.color = "red";
    }
  }
  