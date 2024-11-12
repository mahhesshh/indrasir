// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

const menuToggle = document.getElementById("menu-toggle");
const links = document.querySelector(".links");

menuToggle.addEventListener("click", () => {
  if(links.style.display === "block"){
    links.style.display = "none";
  }else{
    links.style.display = "block";
  }
  
});


searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

document.querySelectorAll('.social-media a').forEach(link => {
  link.addEventListener('click', function(event) {
      window.open(this.href, '_blank');
      event.preventDefault();
  });
});


document.querySelectorAll('.social-media a').forEach(link => {
  link.addEventListener('click', function(event) {
      window.open(this.href, '_blank');
      event.preventDefault();
  });
});


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 