<template>
  <div id="home_screen" class="main-wrapper clearfix">
    <!-- main slider -->
    <swiper :options="swiperOptionsHome" class="">
      <swiper-slide>
        <div class="">
          <img src="../assets/img/slides/1.jpg" alt="" />
          <div class="">
            <div>
              <div class="">
                <p class="">
                  <span class="">Bikes</span>
                  <span class=""
                    >Slim, Strong, and Fun Anytime</span
                  >
                </p>
                <a class="" href="#">Find Your Bike</a>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="gst-slide">
          <img src="../assets/img/slides/1.jpg" alt="" />
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
          <img src="../assets/img/slides/1.jpg" alt="" />
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
      <div
            class="
              swiper-button-customer swiper-button-prev swiper-button-white
            "
            slot="button-prev"
          ></div>
          <div
            class="
              swiper-button-customer swiper-button-next swiper-button-white
            "
            slot="button-next"
          ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeScreen",
  data(){
    return {
      swiperOptionsHome: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        loop: true,
        // autoplay: {
        //   delay: 3500,
        //   disableOnInteraction: false,
        // },
      },
    }
  }
};
</script>

<style>
</style>