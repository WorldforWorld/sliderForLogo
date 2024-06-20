document.addEventListener("DOMContentLoaded", () => {
  const pathImg = "./assets/img/";
  const count = 70;
  const nameImg = "img-";
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  // const gallery = document.querySelector('.gallery');
  const slides = generateImg(count, pathImg, nameImg);
  // const slidesGallery = generateImg(count, pathImg, nameImg, 'gallery__item');
  slides.forEach((slide) => swiperWrapper?.appendChild(slide));
  // slidesGallery.forEach(slide => gallery?.appendChild(slide));
  if (!!swiperWrapper) {
    const swiper = new Swiper(".swiper", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});

function generateImg(count, path, img, nameWrap = "swiper-slide") {
  let arrSwipeImg = [];
  for (let i = 0; i < count; i++) {
    const tagImg = document.createElement("img");
    const swiperslideImg = document.createElement("div");

    swiperslideImg.setAttribute("class", nameWrap);
    tagImg.setAttribute("src", `${path}${img}${i + 1}.jpg`);
    swiperslideImg.append(tagImg);
    arrSwipeImg.push(swiperslideImg);
  }
  return arrSwipeImg;
}
