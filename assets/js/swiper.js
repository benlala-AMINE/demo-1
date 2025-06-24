  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 600,
    spaceBetween: 20,

    // If you use navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // If you use pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Responsive breakpoints (optional)
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

