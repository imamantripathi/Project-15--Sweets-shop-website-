let NavHoverEffects = document.querySelectorAll("nav ul li a");
NavHoverEffects.forEach(function (NavHoverEffect) {
  NavHoverEffect.addEventListener("mouseover", () => {
    event.target.style.color = "yellow";
  });
  NavHoverEffect.addEventListener("mouseout", () => {
    event.target.style.color = "white";
  });
  
});
