var modalform = document.querySelector(".js-modal-form");
var modalwrightus = document.querySelector(".js-modal-wright-us");
var modalclose = document.querySelector(".modal-close-btn");

modalwrightus.addEventListener('click', function(){
  modalform.classList.add('show')
})

modalclose.addEventListener('click', function(){
  modalform.classList.remove('show') 
})



//slider

var slides = document.querySelectorAll('.slider-input');
var arrowLeft = document.querySelector('.slider-arrows-left');
var arrowRight = document.querySelector('.slider-arrows-right');

//var activeSlide = document.querySelector('.slider-input').checked

arrowLeft.addEventListener('click', function(){
  slides.forEach((slide, index) => {
    if(slide.checked && index === 0) return
    if(slide.checked) {
      slides[index - 1].checked = true
    }
  })  
})

arrowRight.addEventListener('click', function(){
  slides.forEach((slide, index) => {
    if(slide.checked && slides.length - 1 === index) return
    if(slide.checked) {
      slides[index + 1].checked = true
    }
  })  
})

slides.forEach((slide, index) => {
  console.log(slide.checked)
})











