<template>
  <div class="row isotope isotope-items" id="product-filter">
      <bike-item/>
  </div>
</template>

<script>
import BikeItem from './BikeItem.vue'
export default {
  components: { BikeItem },
    name: "BikeMain",
    data() {
        return {
        }
    }
}
</script>

<style>

</style>