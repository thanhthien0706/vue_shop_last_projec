<template>
  <div class="col-sm-6 col-lg-4" :id="`product-${data_item_offers.id}`">
    <div class="product">
      <div class="image">
        <a :href="data_item_offers.link_detail"
          ><img
            :src="`${require('@/assets/img/products/' +
              data_item_offers.image)}`"
            alt="Product"
            class="image_offers"
        /></a>
      </div>
      <div class="right">
        <p class="funky-font-2">{{ data_item_offers.category }}</p>
        <div class="name">
          <a :href="data_item_offers.link_detail">{{
            data_item_offers.name
          }}</a>
        </div>
        <div class="price font-2">
          Price:
          <span class="price-new">${{ data_item_offers.price_new }}</span>
          <span
            class="price-old"
            v-if="
              data_item_offers.price_old != null &&
              data_item_offers.price_old != ''
            "
            >${{ data_item_offers.price_old }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OffersProductItem",
  props: ["data_item_offers"],
};
</script>

<style scoped>
.image_offers {
  width: 150px;
  height: 130px;
  object-fit: contain;
}
</style>
