const swiper1 = new Swiper('.main-slider', {
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
  },
  autoplay: {
      delay: 4000,
    },
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
})
const czkPriceSpan = document.querySelectorAll('.czk-price');
const usdPriceSpan = document.querySelectorAll('.usd-price');
console.log(czkPriceSpan,usdPriceSpan)

// Fetch the latest exchange rate from an API
for (let i = 0; i < czkPriceSpan.length; i++) {
  fetch('https://api.exchangerate-api.com/v4/latest/CZK')
  .then(response => response.json())
  .then(data => {
    const exchangeRate = data.rates.USD;
    const czkPrice = parseFloat(czkPriceSpan[i].textContent);
    const usdPrice = czkPrice * exchangeRate;

    usdPriceSpan[i].textContent = usdPrice.toFixed(2);
  });

}
const swiper2 = new Swiper('.clothes-slider', {
  navigation: {
      nextEl: '.clothes-slider .swiper-button-next',
      prevEl: '.clothes-slider .swiper-button-prev',
  },
  pagination: {
      el: '.clothes-slider .swiper-pagination',
      type: 'bullets',
      clickable: true,
  },
    speed: 1000,
    effect: 'slide',
    fadeEffect: {
      crossFade: true
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.20 ,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2.4,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3.6,
        spaceBetween: 20
      },
      800: {
        slidesPerView: 4.2,
        spaceBetween: 20
      }
    }
})

