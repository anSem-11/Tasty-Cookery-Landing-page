$(function() {
  var $window = $(window);
  var $slider = $('.slider');
  var hasInitSlider = false;
  
  function initSlider() {
    if ($window.width() <= 425 && !hasInitSlider) {
      $slider.slick({
        speed:500,
        autoplay:true,
        arrows:false,
        dots: true,
      });
      hasInitSlider = true;
    } else if ($window.width() > 425 && hasInitSlider) {
      $slider.slick('unslick');
      hasInitSlider = false;
    }
  }
  
  initSlider();
  
  $window.on('resize', function() {
    initSlider();
  });
});

// // Validation form
function validation() {
  const signform = document.getElementById("signform");
  const email = document.getElementById("email").value;
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } 
  else {
    form.classList.remove("valid");
    form.classList.add("invalid");
  }
}







