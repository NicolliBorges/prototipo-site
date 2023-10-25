
var buttonOfertas = document.querySelector(".button-ofertas");
var closeModalBtn = document.getElementById("closeModalBtn");
var modal = document.getElementById("myModal");

buttonOfertas.addEventListener("click", function() {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
