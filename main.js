const images = document.querySelectorAll(".lightbox-image");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const previousButton = document.querySelector(".previous-btn");
const nextButton = document.querySelector(".next-btn");
let currentImageIndex = 0;

images.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    lightbox.classList.add("active");
    lightboxImg.src = image.src;
    currentImageIndex = index;
  });
});

previousButton.addEventListener("click", (e) => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  lightboxImg.src = images[currentImageIndex].src;
});

nextButton.addEventListener("click", (e) => {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  lightboxImg.src = images[currentImageIndex].src;
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
});
