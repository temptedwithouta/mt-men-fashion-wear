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

// Ganti-Ganti halaman top dan bottom
(function () {
  let atas = document.querySelector("#btn-atas");
  let bawah = document.querySelector("#btn-bawah");
  let halaman_atas = document.querySelector("#atas");
  let halaman_bawah = document.querySelector("#bawah");

  bawah.addEventListener("click", () => {
    atas.classList.remove("active-btn");
    bawah.classList.add("active-btn");
    halaman_bawah.classList.add("active");
    halaman_atas.classList.remove("active");
  });

  atas.addEventListener("click", () => {
    atas.classList.add("active-btn");
    bawah.classList.remove("active-btn");
    halaman_atas.classList.add("active");
    halaman_bawah.classList.remove("active");
  });
})();

// Membuka dan menutup halaman details (untuk pakaian atas)
// (function () {
//   let container = document.querySelector("#product-details");
//   let box = container.querySelectorAll(".preview-atas");

//   document.querySelectorAll("#atas #product1 .pro-container .pro").forEach((product) => {
//     product.onclick = () => {
//       container.style.display = "flex";
//       let name = product.getAttribute("data-name-atas");
//       box.forEach((preview) => {
//         let target = preview.getAttribute("data-target-atas");
//         if (name == target) {
//           preview.classList.add("active");
//         }
//       });
//     };
//   });

//   box.forEach((close) => {
//     close.querySelector(".fa-times").onclick = () => {
//       close.classList.remove("active");
//       container.style.display = "none";
//     };
//   });
// })();

// Membuka dan menutup halaman details (untuk pakaian bawah)
// (function () {
//   let container = document.querySelector("#product-details");
//   let box = container.querySelectorAll(".preview-bawah");

//   document.querySelectorAll("#bawah #product1 .pro-container .pro").forEach((product) => {
//     product.onclick = () => {
//       container.style.display = "flex";
//       let name = product.getAttribute("data-name-bawah");
//       box.forEach((preview) => {
//         let target = preview.getAttribute("data-target-bawah");
//         if (name == target) {
//           preview.classList.add("active");
//         }
//       });
//     };
//   });

//   box.forEach((close) => {
//     close.querySelector(".fa-times").onclick = () => {
//       close.classList.remove("active");
//       container.style.display = "none";
//     };
//   });
// })();

// Slider image di details
// (function () {
//   let container = document.getElementsByClassName("big-img");
//   for (let j = 0; j < container.length; j++) {
//     let slides = container[j].querySelectorAll(".big-img-slide");
//     let time = container[j].dataset.time;
//     let dots = container[j].querySelectorAll(".small-img-col");
//     let slide_Index = 0;
//     showSlides(slides, time, dots, slide_Index);
//   }

//   function showSlides(slides, time, dots, slide_Index) {
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//     }
//     slide_Index++;
//     if (slide_Index > slides.length) {
//       slide_Index = 1;
//     }
//     for (k = 0; k < dots.length; k++) {
//       dots[k].className = dots[k].className.replace(" active10", "");
//     }
//     slides[slide_Index - 1].style.display = "initial";
//     dots[slide_Index - 1].className += " active10";
//     setTimeout(function () {
//       showSlides(slides, time, dots, slide_Index);
//     }, time);
//   }
// })();

// Membuka dan menutup halaman details
(function () {
  let container = document.querySelector("#product-details");
  let box = container.querySelectorAll(".preview");

  document.querySelectorAll(".pro").forEach((product) => {
    product.onclick = () => {
      container.style.display = "flex";
      let name = product.getAttribute("data-name");
      box.forEach((preview) => {
        let target = preview.getAttribute("data-target");
        if (name == target) {
          preview.classList.add("active");
          const dots = preview.querySelectorAll(".small-img-col");
          const slides = preview.querySelectorAll(".big-img-slide");
          sliderbaju(dots, slides);
        }
      });
    };
  });

  box.forEach((close) => {
    close.querySelector(".x-man").onclick = () => {
      close.classList.remove("active");
      container.style.display = "none";
    };
  });
})();

// Manual slider
function sliderNav(manual, dots, slides) {
  dots.forEach((btn) => {
    btn.classList.remove("active10");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active10");
  });

  dots[manual].classList.add("active10");
  slides[manual].classList.add("active10");
}

function sliderbaju(dots, slides) {
  dots.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sliderNav(i, dots, slides);
    });
  });
}
