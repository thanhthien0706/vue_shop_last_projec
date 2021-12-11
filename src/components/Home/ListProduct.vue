<template>
  <swiper-slide class="product">
    <div class="product-media">
      <img src="@/assets/img/products/slid-prod-2.png" alt="" />
    </div>
    <div class="product-content">
      <h3>
        <a href="single-product.html" class="title-2">ROAD BIKES</a>
      </h3>
      <p class="font-2">Start from <span class="thm-clr"> $299.00 </span></p>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  name: "ListProduct",
};
</script>

<style lang="css" scoped>

#product_slider .product-media img{
  transition: 0.5s;
  width: 212px;
  height: 140px;
}

#product_slider .swiper-slide-active .product-media img{
  transform: scale(1.8);
}

</style>
