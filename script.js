var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "mylinks") {
      x.className += " responsive";
    } else {
      x.className = "mylinks";
    }
  }