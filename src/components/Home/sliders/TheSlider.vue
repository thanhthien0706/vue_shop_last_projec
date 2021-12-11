<template>
  <swiper :options="swiperOptionsSliderMain" class="nav-1">
    <swiper-slide>
      <div class="gst-slide">
        <img src="@/assets/img/slides/1.jpg" alt="" />
        <div class="gst-caption container theme-container">
          <div>
            <div class="caption-center">
              <p class="slider-title">
                <span class="fsz-220 funky-font">Bikes</span>
                <span class="funky-font-2 fsz-28"
                  >Slim, Strong, and Fun Anytime</span
                >
              </p>
              <a class="fancy-btn fsz-16" href="#">Find Your Bike</a>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="gst-slide">
        <img src="@/assets/img/slides/2.jpg" alt="" />
        <div class="gst-caption container theme-container">
          <div>
            <div class="caption-center">
              <p class="slider-title">
                <span class="fsz-220 funky-font">Riding</span>
                <span class="funky-font-2 fsz-28"
                  >our bikes stronger <br />
                  than you ever imagined
                </span>
              </p>
              <a class="fancy-btn fsz-16" href="#">Find Your Bike</a>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="gst-slide">
        <img src="@/assets/img/slides/3.jpg" alt="" />
        <div class="gst-caption container theme-container">
          <div>
            <div class="caption-right">
              <h3 class="fsz-40 wht-clr funky-font-2">Waterproof Jacket</h3>
              <h2 class="text_slide">
                Goshop <span class="thm-clr">Big Sale</span>
              </h2>
              <p class="lgt-gry hidden-xs">
                Cycling is a healthy, fun and exciting way to travel. No matter
                what type of cycling you're into, we've got a bike for you.
              </p>
              <a class="fancy-btn-alt fsz-16" href="#">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div
      class="swiper-button-customer swiper-button-prev swiper-button-white"
      slot="button-prev"
    ></div>
    <div
      class="swiper-button-customer swiper-button-next swiper-button-white"
      slot="button-next"
    ></div>
  </swiper>
</template>

<script>
export default {
  name: "TheSlider",
  data() {
    return {
      swiperOptionsSliderMain: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
      },
    };
  },
};
</script>

<style scoped>
.swiper-slide-active .caption-center {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

.caption-right {
  display: table-cell;
  height: 100%;
  width: 100%;
  padding-left: 47%;
  padding-right: 7%;
  vertical-align: middle;
  visibility: visible;
  opacity: 0;
  transform: translateX(50px);
}

.swiper-slide-active .caption-right {
  visibility: visible;
  opacity: 1;
  transform: translateX(0);
}

.swiper-slide-active .caption-center .slider-title {
  margin-top: 20px;
  margin-bottom: 50px;
  opacity: 1;
  color: white;
}

.swiper-slide-active .gst-caption .text_slide {
  color: white;
  font-size: 64px;
  font-weight: 900;
  margin: 10px 0;
  text-transform: uppercase;
}
</style>