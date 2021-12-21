<template>
  <div class="col-md-3 col-sm-6 col-xs-12 isotope-item tab-1 tab-3 tab-5">
    <div class="portfolio-wrapper">
      <div class="portfolio-thumb">
        <img  :src="`${require('@/assets/img/products/'+data_item_product.image)}`" alt="" />
        <div class="portfolio-content">
          <div class="pop-up-icon">
            <a class="center-link" href="#product-preview" data-toggle="modal"
              ><i class="fa fa-search"></i
            ></a>
            <a class="left-link" href="#"><i class="fa fa-heart"></i></a>
            <a class="right-link" href="#"><i class="cart-icn"> </i></a>
          </div>
        </div>
      </div>
      <div class="product-content">
        <h3>
          <a class="title-3 fsz-18" :href="data_item_product.id">{{data_item_product.name}}</a>
        </h3>
        <!-- Start from -->
        <p class="font-2"> Price <span class="thm-clr"> ${{data_item_product.price}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterItem",
  props: ['data_item_product'],
};
</script>

<style>
</style>