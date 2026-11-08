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

// Slider feature
(function () {
  const container = document.querySelector(".slider-feature-container");
  const slides = document.querySelectorAll(".slide-feature");
  const slides_length = slides.length;
  const icons = document.querySelectorAll(".slide-icon-feature");
  const btn_next = document.querySelector(".next-btn");
  const btn_prev = document.querySelector(".prev-btn");
  let index = 0;
  let automatic_slider;

  let automatic = () => {
    automatic_slider = setInterval(function () {
      slides.forEach((slide) => {
        slide.classList.remove("active-feature");
      });
      icons.forEach((icon) => {
        icon.classList.remove("active-feature");
      });

      index++;

      if (index > slides_length - 1) {
        index = 0;
      }

      slides[index].classList.add("active-feature");
      icons[index].classList.add("active-feature");
    }, 6000);
  };
  automatic();

  btn_next.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active-feature");
    });
    icons.forEach((icon) => {
      icon.classList.remove("active-feature");
    });

    index++;

    if (index > slides_length - 1) {
      index = 0;
    }

    slides[index].classList.add("active-feature");
    icons[index].classList.add("active-feature");
  });

  btn_prev.addEventListener("click", () => {
    slides.forEach((slide) => {
      slide.classList.remove("active-feature");
    });
    icons.forEach((icon) => {
      icon.classList.remove("active-feature");
    });

    index--;

    if (index < 0) {
      index = slides_length - 1;
    }

    slides[index].classList.add("active-feature");
    icons[index].classList.add("active-feature");
  });

  container.addEventListener("mouseover", () => {
    clearInterval(automatic_slider);
  });

  container.addEventListener("mouseout", () => {
    automatic();
  });
})();

// Validation
(function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", (e) => {
    const name_error1 = document.getElementById("error-name1");
    const name_error2 = document.getElementById("error-name2");
    const email_error1 = document.getElementById("error-email1");
    const email_error2 = document.getElementById("error-email2");
    const phone_error1 = document.getElementById("error-phone1");
    const phone_error2 = document.getElementById("error-phone2");
    const country_error1 = document.getElementById("error-country1");
    const country_error2 = document.getElementById("error-country2");
    // const terms_error1 = document.getElementById("error-terms1");
    const terms_error2 = document.getElementById("error-terms2");

    validate_name();
    validate_email();
    validate_phone();
    validate_country();
    validate_terms();

    function validate_name() {
      let name = document.getElementById("nama").value;
      let name2 = document.getElementById("nama");
      let result_name = name.trim();

      if (result_name === "") {
        name_error2.style.display = "inline-block";
        name_error2.style.paddingTop = "10px";
        name2.style.border = "2px solid red";
        // name2.style.background = "rgb(255, 241, 241)";
        name2.style.background = "#fff8f8";
        name_error2.innerHTML = "Name is required";
        name_error1.style.display = "none";
        return false;
      }

      name_error1.style.display = "flex";
      name_error1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      name_error2.style.display = "none";
      name_error2.style.paddingTop = "0";
      name2.style.border = "2px solid seagreen";
      // name2.style.background = "rgb(248, 255, 251)";
      name2.style.background = "rgb(251, 255, 253)";

      return true;
    }

    function validate_email() {
      let email = document.getElementById("email").value;
      let email2 = document.getElementById("email");
      let result_email = email.trim();
      let check1 = 0;
      let check3 = 0;
      let dotcom = ".com";

      if (result_email === "") {
        email_error2.style.display = "inline-block";
        email_error2.style.paddingTop = "10px";
        email2.style.border = "2px solid red";
        email2.style.background = "#fff8f8";
        email_error2.innerHTML = "E-mail is required";
        email_error1.style.display = "none";
        return false;
      }

      // if (!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      //   email_error2.style.display = "inline-block";
      //   email_error2.style.paddingTop = "10px";
      //   email2.style.border = "2px solid red";
      //   email2.style.background = "#fff8f8";
      //   email_error2.innerHTML = "E-mail is invalid";
      //   email_error1.style.display = "none";
      //   return false;
      // }

      // for (let z = 0; z < result_email.length; z++) {
      //   if (result_email[z] === "@") {
      //     check1++;
      //   }
      // }

      for (let q = 1; q <= dotcom.length; q++) {
        if (result_email[result_email.length - q] != dotcom[dotcom.length - q]) {
          check3++;
        }
      }

      // if (check1 < 1) {
      //   email_error2.style.display = "inline-block";
      //   email_error2.style.paddingTop = "10px";
      //   email2.style.border = "2px solid red";
      //   email2.style.background = "#fff8f8";
      //   email_error2.innerHTML = "E-mail must contain @";
      //   email_error1.style.display = "none";
      //   return false;
      // }

      // if (check1 > 1) {
      //   email_error2.style.display = "inline-block";
      //   email_error2.style.paddingTop = "10px";
      //   email2.style.border = "2px solid red";
      //   email2.style.background = "#fff8f8";
      //   email_error2.innerHTML = "E-mail must contain only one @";
      //   email_error1.style.display = "none";
      //   return false;
      // }

      if (check3 != 0) {
        email_error2.style.display = "inline-block";
        email_error2.style.paddingTop = "10px";
        email2.style.border = "2px solid red";
        email2.style.background = "#fff8f8";
        email_error2.innerHTML = "E-mail must contain .com at the end";
        email_error1.style.display = "none";
        return false;
      }

      email_error1.style.display = "flex";
      email_error1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      email_error2.style.display = "none";
      email_error2.style.paddingTop = "0";
      email2.style.border = "2px solid seagreen";
      email2.style.background = "rgb(251, 255, 253)";

      return true;
    }

    function validate_phone() {
      let phone = document.getElementById("phone").value;
      let phone2 = document.getElementById("phone");
      let result_phone = phone.trim();
      let check2 = 0;

      if (result_phone === "") {
        phone_error2.style.display = "inline-block";
        phone_error2.style.paddingTop = "10px";
        phone2.style.border = "2px solid red";
        phone2.style.background = "#fff8f8";
        phone_error2.innerHTML = "Phone number is required";
        phone_error1.style.display = "none";
        return false;
      }

      for (let x = 0; x < result_phone.length; x++) {
        if (result_phone[x] >= "0" && result_phone[x] <= "9") {
          check2 = 1;
        } else {
          check2 = 0;
          break;
        }
      }

      if (check2 === 0) {
        phone_error2.style.display = "inline-block";
        phone_error2.style.paddingTop = "10px";
        phone2.style.border = "2px solid red";
        phone2.style.background = "#fff8f8";
        phone_error2.innerHTML = "Phone number must be digits";
        phone_error1.style.display = "none";
        return false;
      }

      if (result_phone.length != 0 && (result_phone.length < 10 || result_phone.length > 20)) {
        phone_error2.style.display = "inline-block";
        phone_error2.style.paddingTop = "10px";
        phone2.style.border = "2px solid red";
        phone2.style.background = "#fff8f8";
        phone_error2.innerHTML = "Phone number must be between 10 digits and 20 digits";
        phone_error1.style.display = "none";
        return false;
      }

      // if (!phone.match(/^[0-9]*$/)) {
      //   phone_error2.style.display = "inline-block";
      //   phone_error2.style.paddingTop = "10px";
      //   phone2.style.border = "2px solid red";
      //   phone2.style.background = "#fff8f8";
      //   phone_error2.innerHTML = "Phone number must be digits";
      //   phone_error1.style.display = "none";
      //   return false;
      // }

      phone_error1.style.display = "flex";
      phone_error1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      phone_error2.style.display = "none";
      phone_error2.style.paddingTop = "0";
      phone2.style.border = "2px solid seagreen";
      phone2.style.background = "rgb(251, 255, 253)";

      return true;
    }

    function validate_country() {
      let country = document.getElementById("country").value;
      let country2 = document.getElementById("country");
      let result_country = country.trim();

      if (result_country === "") {
        country_error2.style.display = "inline-block";
        country_error2.style.paddingTop = "10px";
        country2.style.border = "2px solid red";
        country2.style.backgroundColor = "#fff8f8";
        country_error2.innerHTML = "Country is required";
        country_error1.style.display = "none";
        return false;
      }

      country_error1.style.display = "flex";
      country_error1.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      country_error2.style.display = "none";
      country_error2.style.paddingTop = "0";
      country2.style.border = "2px solid seagreen";
      country2.style.backgroundColor = "rgb(251, 255, 253)";

      return true;
    }

    function validate_terms() {
      let terms = document.getElementById("terms");

      if (!terms.checked) {
        terms_error2.style.display = "inline-block";
        terms_error2.style.paddingTop = "10px";
        terms_error2.innerHTML = "You must agree with all terms and conditions";
        return false;
      }

      terms_error2.style.display = "none";
      terms_error2.style.paddingTop = "0";

      return true;
    }

    e.preventDefault();
  });
})();
