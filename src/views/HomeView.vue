<template>
  <layout>
    <promo :promo="promo"/>
  </layout>
</template>
<script>
export default {
  data() {
    return {
      promo: {
        title: 'Home',
        image: 'https://static-cse.canva.com/blob/572026/removingbackgroundimages_Unsplash.jpeg'
      }
    }
  }
}
</script>
