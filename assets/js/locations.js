//Navbar
(function () {
  window.addEventListener("scroll", function () {
    let header = document.querySelector("#header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
})();

// Navigation menu responsive
(function () {
  const menuBtn = document.querySelector("#bar");
  const navigation = document.querySelector(".navbar");
  const close = document.querySelector("#close");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navigation.classList.add("active");
    });
  }

  if (close) {
    close.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  }
})();

// Location details content
(function () {
  const btns = document.querySelectorAll(".pro");
  const slides = document.querySelectorAll(".location-details-content");

  let sliderNav = function (manual) {
    btns.forEach((btn) => {
      btn.classList.remove("active_location_details");
    });

    slides.forEach((slide) => {
      slide.classList.remove("active_location_details");
    });

    btns[manual].classList.add("active_location_details");
    slides[manual].classList.add("active_location_details");
  };

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sliderNav(i);
    });
  });
})();

// Photo and map
(function () {
  const slider_location_details_atas = document.querySelectorAll("#btn-atas");
  const slider_location_details_bawah = document.querySelectorAll("#btn-bawah");
  const map = document.querySelectorAll(".map-content");
  const image = document.querySelectorAll(".image");

  let for_atas = function (manual) {
    slider_location_details_atas[manual].classList.add("active-btn");
    slider_location_details_bawah[manual].classList.remove("active-btn");
    map[manual].classList.add("active-content");
    image[manual].classList.remove("active-content");
  };

  let for_bawah = function (manual2) {
    slider_location_details_atas[manual2].classList.remove("active-btn");
    slider_location_details_bawah[manual2].classList.add("active-btn");
    map[manual2].classList.remove("active-content");
    image[manual2].classList.add("active-content");
  };

  slider_location_details_atas.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      for_atas(i);
    });
  });

  slider_location_details_bawah.forEach((btn2, j) => {
    btn2.addEventListener("click", () => {
      for_bawah(j);
    });
  });
})();
