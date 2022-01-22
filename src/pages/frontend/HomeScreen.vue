<template>
  <div id="home_screen" class="main-wrapper clearfix">
    <!-- main slider start -->
    <the-slider />
    <!-- main slider end -->

    <!-- Banner -->
    <section class="banner clear">
      <div class="col-lg-4 col-md-4 col-sm-12 no-padding promo-wrap">
        <div class="gst-promo gst-color-white">
          <img src="@/assets/img/banner/promo1.jpg" alt="" />
          <div class="vertical-align-div gst-promo-text col-lg-6 right">
            <div>
              <div class="vertical-align-text">
                <h2>
                  <span class="sec-title fsz-40 wht-clr"> Men </span>
                  <span class="light-font-3 fsz-33 lght-ylw"> $350 </span>
                </h2>
                <p class="fsz-18">Bikes, clothing and many more...</p>
                <a href="#" class="fancy-btn fancy-btn-small">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-6 no-padding promo-wrap">
        <div class="gst-promo gst-color-white">
          <img src="@/assets/img/banner/promo2.jpg" alt="" />

          <div class="vertical-align-div gst-promo-text col-lg-8 right">
            <div>
              <div class="vertical-align-text">
                <h2>
                  <span class="sec-title fsz-40 wht-clr"> Women </span>
                  <span class="light-font-3 fsz-33 thm-clr"> $250 </span>
                </h2>
                <p class="fsz-18">
                  Bikes, clothing, accessories and much more...
                </p>
                <a href="#" class="fancy-btn fancy-btn-small">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-6 no-padding promo-wrap">
        <div class="gst-promo gst-color-white">
          <img src="@/assets/img/banner/promo3.jpg" alt="" />
          <div
            class="vertical-align-div gst-promo-text col-lg-7 col-xs-offset-1"
          >
            <div>
              <div class="vertical-align-text">
                <h2>
                  <span class="sec-title fsz-40 blklt-clr"> Bike's </span>
                  <span class="light-font-3 fsz-33 lght-ylw"> $550 </span>
                </h2>
                <p class="fsz-18">All famous bike brands only for you...</p>
                <a href="#" class="fancy-btn fancy-btn-small">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- / Banner -->

    <!-- Product Slider -->
    <section id="product_slider" class="gst-row row-bikes clear">
      <div class="products-wrap text-center">
        <div class="fancy-heading text-center">
          <h3>Choose Your <span class="thm-clr">Bike</span></h3>
          <h5 class="funky-font-2">Search by type of bike</h5>
          <i class="thm-clr fsz-20 fa fa-angle-double-down"></i>
        </div>

        <!-- Portfolio items -->
        <swiper
          :options="swiperOptionsSliderProduct"
          class="products-slider nav-2"
        >
          <list-product />

          <div
            class="swiper-button-customer swiper-button-prev swiper-button-black"
            slot="button-prev"
          ></div>
          <div
            class="swiper-button-customer swiper-button-next swiper-button-black"
            slot="button-next"
          ></div>
        </swiper>

        <a href="#" class="fancy-btn fancy-btn-small fsz-15">View all Bikes</a>
      </div>
    </section>
    <!-- / Product Slider -->

    <!-- Product Compare -->
    <section class="gst-compare">
      <div
        class="gst-column col-lg-6 col-md-6 col-sm-12 col-xs-12 gst-compare-men"
      >
        <div class="col-lg-6 right">
          <h5 class="title-1">Waterproof Jacket</h5>

          <h3>
            <span class="sec-title fsz-45"> Men </span>
            <span class="thin-font-3 fsz-40 thm-clr"> $350 </span>
          </h3>

          <ul>
            <li>Integrated i-Lume LED rear light</li>
            <li>Optional hood available separately</li>
            <li>Breathability rating 15,000</li>
          </ul>

          <p class="gst-compare-actions">
            <a href="#">Detail</a>
            <a class="compare-add-to-cart" href="#">Add to Cart</a>
          </p>
        </div>
      </div>

      <div
        class="gst-column col-lg-6 col-md-6 col-sm-12 col-xs-12 gst-compare-women"
      >
        <div class="col-lg-7">
          <h5 class="title-1">Waterproof Jacket</h5>

          <h3>
            <span class="sec-title fsz-45"> Women </span>
            <span class="thin-font-3 fsz-40 thm-clr"> $250 </span>
          </h3>

          <ul>
            <li>Integrated i-Lume LED rear light</li>
            <li>Optional hood available separately</li>
            <li>Breathability rating 15,000</li>
          </ul>

          <p class="gst-compare-actions">
            <a href="#">Detail</a>
            <a class="compare-add-to-cart" href="#">Add to Cart</a>
          </p>
        </div>
      </div>

      <div class="descount bold-font-2">
        <div class="rel-div">
          <p>DISCOUNT UP TO 75%</p>
        </div>
      </div>
    </section>
    <!-- / Product Compare -->

    <!-- New Arrivals -->
    <section class="gst-row row-arrivals woocommerce ovh">
      <div class="container theme-container">
        <div class="gst-column col-lg-12 no-padding text-center">
          <div class="fancy-heading text-center">
            <h3><span class="thm-clr">New</span> Arrivals</h3>
            <h5 class="funky-font-2">Trending Products</h5>
          </div>

          <!-- Filter for items -->
          <div class="clearfix tabs space-15">
            <ul class="filtrable products_filter">
              <li
                v-for="item_filter in list_products_filter"
                :key="item_filter.id"
                :class="{ active: filterCurrent == item_filter.id }"
              >
                <a
                  href="#"
                  data-filter=".tab-1"
                  @click.prevent="onChangeFilter(item_filter.id)"
                  >{{ item_filter.name }}</a
                >
              </li>
            </ul>
          </div>

          <!-- Portfolio items -->
          <filter-main :id_category_filter="filterCurrent" />
        </div>
      </div>
    </section>
    <!-- / New Arrivals -->

    <!-- Featured Products -->
    <featured-main />
    <!-- / Featured Products -->

    <!-- Product Slider -->
    <section class="gst-row wht-clr gst-cta row-cta ovh">
      <div class="container theme-container">
        <div class="row">
          <div class="col-md-7 col-sm-12 col-xs-12">
            <h2>
              Found your <span class="thm-clr extbold-font-4">Dream Bike</span>?
              Why wait
            </h2>
            <p class="gry-clr fsz-16">
              Get it now with a 0% finance deal from GoShop Fashion..
            </p>
          </div>

          <div class="col-md-5 col-sm-12 col-xs-12 text-right gst-cta-buttons">
            <a href="#" class="fancy-btn-alt fancy-btn-small">Discover</a>
            <a href="#" class="fancy-btn fancy-btn-small">Purchase</a>
          </div>
        </div>
      </div>
    </section>
    <!-- / Product Slider -->

    <!-- Carbon Fiber -->
    <section class="gst-row row-carbon-fiber ovh">
      <div class="container theme-container">
        <div class="gst-column col-lg-12 no-padding text-center">
          <div class="fancy-heading text-center">
            <h3>Carbon Fiber <span class="thm-clr">Cervelo</span></h3>
            <h5 class="funky-font-2">Limited time offer only on GoShop</h5>
          </div>

          <div class="row">
            <div class="col-lg-8 col-sm-8">
              <div class="gst-empty-space clearfix"></div>
              <div class="gst-empty-space clearfix"></div>
              <div id="countdown-timer1" class="gst-countdown"></div>
              <div class="gst-empty-space clearfix"></div>
              <div class="gst-empty-space clearfix"></div>
              <img
                class="right"
                src="@/assets/img/products/bike-1.png"
                alt=""
              />
            </div>

            <div class="col-lg-4 col-sm-4">
              <img src="@/assets/img/extra/person.png" alt="" />
            </div>
          </div>

          <div class="price-tag">
            <span> <b class="fsz-25 blk-clr"> PRICE: </b> </span>
            <span class="thm-clr fsz-40 light-font-3"> $<b>1150</b> </span>
            <span class="discnt fsz-40 light-font-3"> $<b>1850</b> </span>
          </div>
          <div class="gst-empty-space clearfix"></div>
          <a href="single-product.html" class="fancy-btn fancy-btn-small"
            >Add to Cart</a
          >
        </div>
      </div>
    </section>
    <!-- / Carbon Fiber -->

    <!-- Testimonials Slider -->
    <section
      class="gst-row gst-color-white row-they-say ovh"
      id="they-say-carousel"
    >
      <div class="container theme-container">
        <div class="gst-column col-lg-12 no-padding text-center">
          <div class="fancy-heading text-center wht-clr">
            <h3>They Says</h3>
            <h5 class="funky-font-2">Happy Clients</h5>
          </div>

          <div class="quotes-carousel">
            <swiper :options="optionsTestimonials" class="they-say nav-2">
              <the-comment
                v-for="item in dataComment"
                :key="item.id"
                :itemComment="item"
              />
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </section>
    <!-- / Testimonials Slider -->

    <!-- Special Offers -->
    <section class="container theme-container">
      <offers-product-main />
    </section>
    <!-- / Special Offers -->

    <!-- Latest News -->
    <section class="gst-row row-latest-news ovh">
      <div class="container theme-container">
        <div class="gst-column col-lg-12 no-padding">
          <div class="fancy-heading text-center">
            <h3>Latest <span class="thm-clr">News</span></h3>
            <h5 class="funky-font-2">News from our blog</h5>
          </div>

          <div class="row gst-post-list">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <a href="single.html">
                <img src="@/assets/img/blog/blog-1.jpg" alt="" />
              </a>
              <div class="media clearfix">
                <div class="entry-meta media-left">
                  <div class="entry-time meta-date">
                    <time datetime="2015-12-09T21:10:20+00:00">
                      <span class="entry-time-date dblock">26</span>
                      Dec
                    </time>
                  </div>
                  <div class="entry-reply">
                    <a href="single.html#comments" class="comments-link">
                      <i class="fa fa-comment dblock"></i> 125
                    </a>
                  </div>
                </div>
                <div class="media-body">
                  <header class="entry-header">
                    <span class="vcard author entry-author">
                      <a class="url fn n" rel="author" href="single.html">
                        Scott Williams
                      </a>
                    </span>
                    <span class="entry-categories">
                      <a href="category.html">Bike Tours</a>
                    </span>
                    <h3 class="entry-title">
                      <a class="blk-clr" href="single.html" rel="bookmark"
                        >Bike injuries are on the rise, but there's still reason
                        to ride</a
                      >
                    </h3>

                    <a href="single.html" class="read-more-link thm-clr"
                      >Read More <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </header>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
              <a href="single.html">
                <img src="@/assets/img/blog/blog-2.jpg" alt="" />
              </a>
              <div class="media clearfix">
                <div class="entry-meta media-left">
                  <div class="entry-time meta-date">
                    <time datetime="2015-12-09T21:10:20+00:00">
                      <span class="entry-time-date dblock">26</span>
                      Dec
                    </time>
                  </div>
                  <div class="entry-reply">
                    <a href="single.html#comments" class="comments-link">
                      <i class="fa fa-comment dblock"></i> 125
                    </a>
                  </div>
                </div>
                <div class="media-body">
                  <header class="entry-header">
                    <span class="vcard author entry-author">
                      <a class="url fn n" rel="author" href="single.html">
                        Scott Williams
                      </a>
                    </span>
                    <span class="entry-categories">
                      <a href="category.html">Bike Tours</a>
                    </span>
                    <h3 class="entry-title">
                      <a class="blk-clr" href="single.html" rel="bookmark"
                        >Bike injuries are on the rise, but there's still reason
                        to ride</a
                      >
                    </h3>

                    <a href="single.html" class="read-more-link thm-clr"
                      >Read More <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </header>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6">
              <a href="single.html">
                <img src="@/assets/img/blog/blog-3.jpg" alt="" />
              </a>
              <div class="media clearfix">
                <div class="entry-meta media-left">
                  <div class="entry-time meta-date">
                    <time datetime="2015-12-09T21:10:20+00:00">
                      <span class="entry-time-date dblock">26</span>
                      Dec
                    </time>
                  </div>
                  <div class="entry-reply">
                    <a href="single.html#comments" class="comments-link">
                      <i class="fa fa-comment dblock"></i> 125
                    </a>
                  </div>
                </div>
                <div class="media-body">
                  <header class="entry-header">
                    <span class="vcard author entry-author">
                      <a class="url fn n" rel="author" href="single.html">
                        Scott Williams
                      </a>
                    </span>
                    <span class="entry-categories">
                      <a href="category.html">Bike Tours</a>
                    </span>
                    <h3 class="entry-title">
                      <a class="blk-clr" href="single.html" rel="bookmark"
                        >Bike injuries are on the rise, but there's still reason
                        to ride</a
                      >
                    </h3>

                    <a href="single.html" class="read-more-link thm-clr"
                      >Read More <i class="fa fa-long-arrow-right"></i>
                    </a>
                  </header>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Latest News -->

    <!-- OPENING HOURS -->
    <section class="gst-row our-address">
      <div class="container theme-container">
        <div
          class="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 add-wrap"
        >
          <div class="text-center">
            <h2 class="fsz-35">
              <span class="bold-font-3 wht-clr">GoShop</span>
              <span class="thm-clr funky-font">bikes</span>
            </h2>
            <p>
              148 Parramatta Road Stanmore NSW 2048, New York City <br />
              Call Sales & Workshop : (02) 9567 1999
            </p>
            <div class="fancy-heading text-center">
              <h2 class="title-2">OPENING HOURS</h2>
            </div>
            <p>Monday to Wednesday from 10.00AM - 17.00PM</p>
            <p>Thursday to Sunday from 11.00AM - 19.00PM</p>
          </div>
        </div>
      </div>
    </section>
    <!-- / OPENING HOURS -->
  </div>
</template>

<script>
import ListProduct from "@/components/Home/ListProduct.vue";
import TheSlider from "@/components/Home/sliders/TheSlider.vue";
import FeaturedMain from "@/components/Home/featured_products/FeaturedMain.vue";
import TheComment from "@/components/Home/testimonials/TheComment.vue";
import FilterMain from "@/components/Home/filter_product/FilterMain.vue";
import OffersProductMain from "@/components/Home/offers/OffersProductMain.vue";

export default {
  name: "HomeScreen",
  components: {
    ListProduct,
    TheSlider,
    FeaturedMain,
    TheComment,
    FilterMain,
    OffersProductMain,
  },
  data() {
    return {
      filterCurrent: 1,
      list_main_products: [
        {
          id: 0,
          name_category: "",
          price: 0,
        },
      ],
      list_products_filter: [
        {
          id: 0,
          name: "CLOTHING",
        },
        {
          id: 1,
          name: "BIKES",
        },
        {
          id: 2,
          name: "COMPONENTS",
        },
        {
          id: 3,
          name: "ACCESSORIES",
        },
        {
          id: 4,
          name: "PROTECTIONS",
        },
      ],
      dataComment: [
        {
          id: 1,
          text: "Cycling is a healthy, fun and exciting way to travel. No matter what type of cycling you're into, we;ve gota bike for you. We stock one of the larget bicycle ranges everywhere.",
          name: "JESSICA WILSON",
          city: "France",
        },
        {
          id: 2,
          text: "Cycling is a healthy, fun and exciting way to travel. No matter what type of cycling you're into, we;ve gota bike for you. We stock one of the larget bicycle ranges everywhere.",
          name: "JESSICA WILSON",
          city: "France",
        },
        {
          id: 3,
          text: "Cycling is a healthy, fun and exciting way to travel. No matter what type of cycling you're into, we;ve gota bike for you. We stock one of the larget bicycle ranges everywhere.",
          name: "JESSICA WILSON",
          city: "France",
        },
      ],
      swiperOptionsSliderProduct: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 5,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
      },
      optionsTestimonials: {
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
      },
    };
  },
  methods: {
    onChangeFilter(componentFilter) {
      return (this.filterCurrent = componentFilter);
    },
  },
  computed: {
    changFilterCurrent() {
      return this.filterCurrent;
    },
  },
};
</script>

<style scoped>
.swiper-pagination-bullet {
  width: 16px;
  height: 16px;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  display: inline-block;
  background: #2b2d2f;
  cursor: pointer;
  transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  margin: 15px 3px 0px 4px;
}

.swiper-pagination-bullet-active {
  background: #ed5126;
}
</style>
