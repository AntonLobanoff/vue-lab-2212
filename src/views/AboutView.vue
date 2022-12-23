<template>
  <layout>
    <promo :promo="promo"></promo>
    <div class="container">about</div>
  </layout>
</template>
<script>
export default {
  data() {
    return {
      promo: {
        title: 'About',
        image: 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg'
      }
    }
  }
}
</script>