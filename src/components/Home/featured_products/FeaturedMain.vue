<template>
  <section class="box-content">
    <div class="fancy-heading text-center spcbtm-15">
      <h3>Featured Products</h3>
      <h5 class="funky-font-2">Our featured products here</h5>
    </div>
    <div class="featured-products diblock">
      <featured-item v-for="item in listFeatureProduct" :key="item.id" :dataProduct="item" />
    </div>
  </section>
</template>

<script>
import FeaturedItem from "./FeaturedItem.vue";
export default {
  components: { FeaturedItem },
  name: "FeaturedMain",
  data() {
    return {
      listFeatureProduct: [
        {
          id: 0,
          image: "featured-product-1.png",
          link: "#",
          category: "Cycling Shoes",
          name: "Sidebike m065 pro",
          price: 250.00,
          star: 0,
        },
        {
          id: 1,
          image: "featured-product-2.png",
          link: "#",
          category: "Cycling Shoes",
          name: "Sidebike m065 pro",
          price: 250.00,
          star: 0,
        },
        {
          id: 2,
          image: "featured-product-3.png",
          link: "#",
          category: "Cycling Shoes",
          name: "Sidebike m065 pro",
          price: 250.00,
          star: 0,
        },
        {
          id: 3,
          image: "featured-product-4.png",
          link: "#",
          category: "Cycling Shoes",
          name: "Sidebike m065 pro",
          price: 250.00,
          star: 0,
        },
        {
          id: 4,
          image: "featured-product-5.png",
          link: "#",
          category: "Cycling Shoes",
          name: "Sidebike m065 pro",
          price: 250.00,
          star: 0,
        },
        {
          id: 5,
          image: "featured-product-6.png",
          link: "#",
          category: "Cycling Shoes",
          name: "Sidebike m065 pro",
          price: 250.00,
          star: 0,
        },
        {
          id: 6,
          image: "featured-product-7.png",
          link: "#",
          category: "Cycling Shoes",
          name: "Sidebike m065 pro",
          price: 250.00,
          star: 0,
        },
      ],
    };
  },
};
</script>

<style>
</style>