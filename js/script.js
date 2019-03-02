var modalform = document.querySelector(".js-modal-form");
var modalwrightus = document.querySelector(".js-modal-wright-us");
var modalclose = document.querySelector(".modal-close-btn");

modalwrightus.addEventListener('click', function(){
  modalform.classList.add('show')
})

modalclose.addEventListener('click', function(){
  modalform.classList.remove('show') 
})




//remove





