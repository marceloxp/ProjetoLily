// document.addEventListener("DOMContentLoaded", function () {
//   var template = document.getElementById("item-template");
//   var compiled = _.template(template.innerHTML);
//   var images = [];
//   for (let i = 1; i <= 1000; i++) {
//     let image = `images/image-${i.toString().padStart(4, "0")}.jpg`;
//     images.push({
//       src: image,
//     });
//   }
//   const data = {
//     images: images,
//   };
//   var html = compiled(data);
//   var container = document.querySelector("#grid-lily");
//   container.innerHTML = html;

//   lightboxImages();
// });


document.addEventListener("DOMContentLoaded", function () {
  let template = document.getElementById("item-template");
  let compiled = _.template(template.innerHTML);
  let images = [];
  for (let i = 1; i <= 1000; i++) {
    let image = `images/thumbs/image-${i.toString().padStart(4, "0")}.jpg`;
    images.push({
      src: image,
    });
  }
  let container = document.querySelector("#grid-lily");
  const totalPages = 10;
  const imagesPerPage = 100;
  let page = 1;
  function showPage(page) {
    let startIndex = (page - 1) * imagesPerPage;
    let endIndex = startIndex + imagesPerPage;
    let pageImages = images.slice(startIndex, endIndex);
    var data = {
      images: pageImages,
    };
    var html = compiled(data);
    container.innerHTML = html;
    lightboxImages();
  }
  showPage(1);
  // Previous and next buttons
  const prevBtn = document.createElement("button");
  prevBtn.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
  prevBtn.classList.add("lightbox-btn", "previous-btn", "btn-pag-prev");
  prevBtn.disabled = true;
  prevBtn.addEventListener("click", () => {
    page--;
    showPage(page);
    prevBtn.disabled = page === 1;
    nextBtn.disabled = false;
    smoothlyScrollToTop();
  });
  const nextBtn = document.createElement("button");
  nextBtn.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
  nextBtn.classList.add("lightbox-btn", "next-btn", "btn-pag-next");
  if (totalPages === 1) {
    nextBtn.disabled = true;
  }
  nextBtn.addEventListener("click", () => {
    page++;
    showPage(page);
    nextBtn.disabled = page === totalPages;
    prevBtn.disabled = page === 1;
    smoothlyScrollToTop();
  });
  const pagination = document.createElement("div");
  pagination.classList.add("pagination");
  pagination.appendChild(prevBtn);
  pagination.appendChild(nextBtn);
  document.querySelector(".gallery__wrapper").appendChild(pagination);

  // Smooth scroll to top function
  function smoothlyScrollToTop() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollStep = scrollHeight / 3;
    let scrollInterval = setInterval(() => {
      if (window.scrollY <= 0) {
        clearInterval(scrollInterval);
      }
      window.requestAnimationFrame(() => {
        window.scrollTo(0, window.scrollY - scrollStep);
        if (window.scrollY + window.innerHeight < scrollHeight - 1) {
          clearInterval(scrollInterval);
          window.scrollTo(0, 0);
        }
      });
    }, 5);
  }
});
