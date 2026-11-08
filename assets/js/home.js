//Navbar
(function () {
  window.addEventListener("scroll", function () {
    let header = document.querySelector("#header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
})();

//Navigation menu responsive
(function responsive() {
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

//Slider header
(function () {
  let slideIndex = 0;
  const buttons = document.querySelectorAll(".btn-slider");
  const slides = document.querySelectorAll(".img-slide");
  const contents = document.querySelectorAll(".content");

  showSlides();

  let sliderNav = function (manual) {
    buttons.forEach((button) => {
      button.classList.remove("active-slider");
    });

    slides.forEach((slide) => {
      slide.classList.remove("active-slider");
    });

    contents.forEach((content) => {
      content.classList.remove("active-slider");
    });

    buttons[manual].classList.add("active-slider");
    slides[manual].classList.add("active-slider");
    contents[manual].classList.add("active-slider");
  };

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      sliderNav(i);
      slideIndex = i + 1;
      slideIndex = i;
    });
  });

  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("img-slide");
    const contents1 = document.querySelectorAll(".content");
    let dots = document.getElementsByClassName("btn-slider");
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active-slider");
      contents1[i].classList.remove("active-slider");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-slider", "");
    }
    slides[slideIndex - 1].className += " active-slider";
    contents1[slideIndex - 1].className += " active-slider";
    dots[slideIndex - 1].className += " active-slider";
    setTimeout(showSlides, 6000);
  }
})();

// Play video
// (function () {
//   let options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 1.0,
//   };
//   let callback = (entries, observer) => {
//     entries.forEach(function (entry) {
//       if (entry.target.id == "video-feature") {
//         if (entry.isIntersecting) {
//           entry.target.play();
//         } else {
//           entry.target.pause();
//         }
//       }
//     });
//   };
//   let observer = new IntersectionObserver(callback, options);
//   observer.observe(document.querySelector("#video-feature"));
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

// Play video
// (function () {
//   $(document).ready(function () {
//     $("#video-feature video").on("click", function () {
//       $(this).get(0).play();
//     });
//   });
// })();

(function () {
  let video = document.getElementById("video-feature");
  let thumbnail = document.querySelector(".thumbnail");
  video.addEventListener("click", function () {
    thumbnail.style.display = "none";
    document.getElementById("video").innerHTML =
      '<iframe src="https://www.youtube.com/embed/aTWCN2uFhPE?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  });
})();

// Slider feature
// (function () {
//   const container = document.querySelector(".slider-feature-container");
//   const slides = document.querySelectorAll(".slide-feature");
//   const slides_length = slides.length;
//   const icons = document.querySelectorAll(".slide-icon-feature");
//   const btn_next = document.querySelector(".next-btn");
//   const btn_prev = document.querySelector(".prev-btn");
//   let index = 0;
//   let automatic_slider;

//   let automatic = () => {
//     automatic_slider = setInterval(function () {
//       slides.forEach((slide) => {
//         slide.classList.remove("active-feature");
//       });
//       icons.forEach((icon) => {
//         icon.classList.remove("active-feature");
//       });

//       index++;

//       if (index > slides_length - 1) {
//         index = 0;
//       }

//       slides[index].classList.add("active-feature");
//       icons[index].classList.add("active-feature");
//     }, 2000);
//   };
//   automatic();

//   btn_next.addEventListener("click", () => {
//     slides.forEach((slide) => {
//       slide.classList.remove("active-feature");
//     });
//     icons.forEach((icon) => {
//       icon.classList.remove("active-feature");
//     });

//     index++;

//     if (index > slides_length - 1) {
//       index = 0;
//     }

//     slides[index].classList.add("active-feature");
//     icons[index].classList.add("active-feature");
//   });

//   btn_prev.addEventListener("click", () => {
//     slides.forEach((slide) => {
//       slide.classList.remove("active-feature");
//     });
//     icons.forEach((icon) => {
//       icon.classList.remove("active-feature");
//     });

//     index--;

//     if (index < 0) {
//       index = slides_length - 1;
//     }

//     slides[index].classList.add("active-feature");
//     icons[index].classList.add("active-feature");
//   });

//   container.addEventListener("mouseover", () => {
//     clearInterval(automatic_slider);
//   });

//   container.addEventListener("mouseout", () => {
//     automatic();
//   });
// })();
