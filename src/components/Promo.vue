<template>
  <section class="promo" v-if="promo">
    <img :src="promo.image" alt="">
    <div class="content">
      <h1>{{ promo.title }}</h1>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    promo: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss">
.promo {
  width: 100%;
  position: relative;
  height: calc(100vh - 58.89px);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .content {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    h1 {
      font-size: 30px;
      font-weight: 600;
      color: white;
    }
  }
}
</style>