function checkLogin(){
    if(localStorage.getItem("userLogged")=="")
        window.location.replace("login.html");
  }
  function changeSlide() {
const carouselInner = document.querySelector('.carousel-inner');
const firstSlide = carouselInner.firstElementChild;
const slideWidth = firstSlide.offsetWidth;

carouselInner.style.transform = `translateX(-${slideWidth}px)`;

setTimeout(function() {
  carouselInner.appendChild(firstSlide);
  carouselInner.style.transform = 'translateX(0)';
}, 300);
}