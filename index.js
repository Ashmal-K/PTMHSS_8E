window.onscroll = function () { myFunction() };
var header = document.getElementById('header')
var sticky = header.offsetTop;
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add('bgc')
        header.classList.add('sticky');
    } else {
        header.classList.remove("sticky");
        header.classList.remove("bgc");
    }
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}