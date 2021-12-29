<template>
  <div class="gst-row">
    <div class="fancy-heading text-center spcbtm-15">
      <h3>Special Offers</h3>
      <h5 class="funky-font-2">Special price only this month</h5>
    </div>
    <div class="special-offers row">
      <offers-product-item
        v-for="item in list_product_offers"
        :key="item.id"
        :data_item_offers="item"
      />
    </div>
  </div>
</template>

<script>
// import ProductService from "@/services/product-service.js";

import OffersProductItem from "./OffersProductItem.vue";

export default {
  components: { OffersProductItem },
  name: "OffersProductMain",
  data() {
    return {
      list_product_offers: [
        {
          id: 1,
          link_detail: "#",
          image: "cat-1.png",
          category: "Mountain bike",
          name: "GT SENSOR COMP 27.5",
          price_old: "599.00",
          price_new: "299.00",
        },
        {
          id: 2,
          link_detail: "#",
          image: "cat-2.png",
          category: "Mountain bike",
          name: "GT SENSOR COMP 27.5",
          price_old: "599.00",
          price_new: "299.00",
        },
        {
          id: 3,
          link_detail: "#",
          image: "cat-3.png",
          category: "Mountain bike",
          name: "GT SENSOR COMP 27.5",
          price_old: "599.00",
          price_new: "299.00",
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style>
</style>