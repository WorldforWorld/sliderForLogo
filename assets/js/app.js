document.addEventListener("DOMContentLoaded", () => {
  const settingsImg = {
    count: 70,
    pathImg: "./assets/img/",
    nameImg: "img-",
  };
  const swiperImage = document.querySelector(".swiper-image");
  const slides = generateImg(
    settingsImg.count,
    settingsImg.pathImg,
    settingsImg.nameImg
  );
  slides.forEach((slide) => swiperImage?.appendChild(slide));

  if (!!swiperImage) {
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

  const settingsLogo = {
    count: 5,
    pathImg: "./assets/logo/",
    nameImg: "logo-",
  };
  const swiperLogo = document.querySelector(".swiper-logo");
  const slides2 = generateImg(
    settingsLogo.count,
    settingsLogo.pathImg,
    settingsLogo.nameImg
  );
  slides2.forEach((slide) => swiperLogo?.appendChild(slide));

  if (!!swiperLogo) {
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
