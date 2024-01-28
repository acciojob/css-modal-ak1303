//your JS code here. If required.
var openBtn = document.querySelector('.open');
var model = document.querySelector('.model');
openBtn.addEventListener("click", function () {
  model.style.display = "block";
  model.classList.add("loaded");
  document.body.style.backgroundColor = "lightgrey";
});
var closeBtn = document.querySelector('.close-modal');
closeBtn.addEventListener("click", function () {
  model.style.display = "none";
  document.body.style.backgroundColor = "white";
});


