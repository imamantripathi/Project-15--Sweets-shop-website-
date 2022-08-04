// let NavHoverEffects = document.querySelectorAll("nav ul li a");
// NavHoverEffects.forEach(function (NavHoverEffect) {
//     NavHoverEffect.addEventListener("mouseover", () => {
//         event.target.style.color = "#d5fefd";
//     });
//     NavHoverEffect.addEventListener("mouseout", () => {
//         event.target.style.color = "#fffcff";
//     });
// });
let navBtn = document.querySelector(".navbar-toggle");
let navbar = document.querySelector("#navbar");
navBtn.addEventListener("click", () => {
  //   navbar.style.display = "block";

  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

