let images;
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const previousButton = document.querySelector(".previous-btn");
const nextButton = document.querySelector(".next-btn");
let currentImageIndex = 0;

function lightboxImages() {
  images = document.querySelectorAll(".lightbox-image");
  images.forEach((image, index) => {
    image.addEventListener("click", (e) => {
      lightbox.classList.add("active");
      lightboxImg.src = image.src;
      currentImageIndex = index;
    });
  });
}

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

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-                 S C R O L L                 -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const arrowIcon = document.querySelector(".arrow");
const aboutSection = document.querySelector(".about");

arrowIcon.addEventListener("click", () => {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-              G O   T O   T O P              -=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
