<template>
  <swiper-slide class="item">
    <p>
      {{itemComment.text}}
    </p>
    <cite> <strong>{{itemComment.name}}</strong> - {{itemComment.city}} </cite>
  </swiper-slide>
</template>

<script>
export default {
    name: "TheComment",
    props:{
        itemComment:{
            type: Object,
        }
    }
};
</script>

<style>
</style>