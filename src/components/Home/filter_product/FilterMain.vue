<template>
  <div class="row isotope isotope-items" id="product-filter">
      <filter-item v-for="item in data_product_item" :key="item.id" :data_item_product="item" />
  </div>
</template>

<script>
import FilterItem from './FilterItem.vue'
export default {
  name: "FilterMain",
  components: { FilterItem },
  props: ['id_category_filter'],
  data() {
      return {
        data_product_item: [
          {
            id:0,
            image: "prod-1.jpg",
            name: "GT SENSOR COMP 27.5",
            price : 299.00,
          },
          {
            id:3,
            image: "prod-1.jpg",
            name: "GT SENSOR COMP 27.5",
            price : 299.00,
          },
          {
            id:2,
            image: "prod-1.jpg",
            name: "GT SENSOR COMP 27.5",
            price : 299.00,
          },
        ]
      }
  }
}
</script>

<style>

</style>