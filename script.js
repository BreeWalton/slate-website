// JavaScript source code
//Navigation Bar
function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




//Modal
      // Get the modal
      var modal = document.getElementById("myModal");

      // Get the image and insert it inside the modal - use its "alt" text as a caption
      var img = document.getElementsByClassName("folio");
      var modalImg = document.getElementById("img01");

      // Event listener to bring up image in the modal
      var folios = document.getElementsByClassName("folio");

      for (var index = 0; index < folios.length; index++) {
        console.log(folios[index]);
        folios[index].addEventListener("click", function () {
          console.log("clicked");
          modal.style.display = "block";
          modalImg.src = this.src;
        });
      }

      // modalImg.addEventListener("click",function(){alert("Hello")});

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };
