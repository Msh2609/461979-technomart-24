var modalform = document.querySelector(".js-modal-form");
var modalwrightus = document.querySelector(".js-modal-wright-us");
var modalclose = document.querySelector(".modal-close-btn");

var modalcart = document.querySelector(".modal-cart-js");
var modalclose = document.querySelector(".modal-close-btn");

document.body.addEventListener("click", function(e) {
  if (e.target.classList.contains("buy")) {
    modalcart.classList.add("show");
  }
});

modalclose.addEventListener("click", function() {
  modalcart.classList.remove("show");
});

modalwrightus.addEventListener("click", function() {
  modalform.classList.add("show");
});

modalclose.addEventListener("click", function() {
  modalform.classList.remove("show");
});


var slides = document.querySelectorAll(".slider-input");
var arrowLeft = document.querySelector(".slider-arrows-left");
var arrowRight = document.querySelector(".slider-arrows-right");

arrowLeft.addEventListener("click", function() {
  slides.forEach(function(slide, index) {
    if (slide.checked && index === 0) return;
    if (slide.checked) {
      slides[index - 1].checked = true;
    }
  });
});

arrowRight.addEventListener("click", function() {
  slides.forEach(function(slide, index) {
    if (slide.checked && slides.length - 1 === index) return;
    if (slide.checked) {
      slides[index + 1].checked = true;
    }
  });
});

document
  .querySelector(".wright-us-form")
  .addEventListener("submit", function(e) {
    var form = this;

    form.querySelectorAll("input").forEach(function(input) {
      if (input.value === "") {
        e.preventDefault();
        form.classList.add("formError");
        setTimeout(function() {
          form.classList.remove("formError");
        }, 1000);
      }
    });
  });
