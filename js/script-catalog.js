var modalcart = document.querySelector(".modal-cart-js");
var modalclose = document.querySelector(".modal-close-btn");

document.body.addEventListener('click', function(e){
  if(e.target.classList.contains('buy')) {
    modalcart.classList.add('show')
  }

})

modalclose.addEventListener('click', function() {
  modalcart.classList.remove("show")
})
