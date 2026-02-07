// carousel.js
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const images = carousel.querySelectorAll("img");
  let index = 0;

  function showImage(i) {
    carousel.scrollTo({
      left: images[i].offsetLeft,
      behavior: "smooth"
    });
  }

  function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
  }

  // Auto-slide every 3 seconds
  setInterval(nextImage, 3000);

  // Optional: allow manual navigation with arrows
  const leftArrow = document.createElement("button");
  const rightArrow = document.createElement("button");
  leftArrow.textContent = "◀";
  rightArrow.textContent = "▶";
  leftArrow.style.position = rightArrow.style.position = "absolute";
  leftArrow.style.top = rightArrow.style.top = "50%";
  leftArrow.style.left = "10px";
  rightArrow.style.right = "10px";
  leftArrow.style.transform = rightArrow.style.transform = "translateY(-50%)";
  leftArrow.style.background = rightArrow.style.background = "#d4af37";
  leftArrow.style.color = rightArrow.style.color = "white";
  leftArrow.style.border = rightArrow.style.border = "none";
  leftArrow.style.padding = rightArrow.style.padding = "10px";
  leftArrow.style.cursor = rightArrow.style.cursor = "pointer";

  carousel.parentElement.style.position = "relative";
  carousel.parentElement.appendChild(leftArrow);
  carousel.parentElement.appendChild(rightArrow);

  leftArrow.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
  });
  rightArrow.addEventListener("click", nextImage);
});
