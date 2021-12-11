<template>
  <div class="col-sm-6 col-lg-3 no-lr-padding">
    <div class="image">
      <img :src="`${require('@/assets/img/products/'+dataProduct.image)}`" alt="Product" />
    </div>
    <div class="description">
      <div class="text">
        <a :href="dataProduct.link" class="add-to-cart cart-icn2"></a>
        <div class="brand funky-font-2">{{dataProduct.category}}</div>
        <div class="name"><a href="#">{{dataProduct.name}}</a></div>
        <div class="price font-3">${{dataProduct.price}}</div>
        <div class="rating">
          <span class="star active"></span>
          <span class="star active"></span>
          <span class="star active"></span>
          <span class="star"></span>
          <span class="star"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "FeaturedItem",
    props:{
      dataProduct:{
        type: Object,
      }
    }
};
</script>

<style>
</style>
