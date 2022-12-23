<template>
  <layout>
    <promo :promo="promo"></promo>
    <div class="container">example</div>
  </layout>
</template>
<script>
export default {
  data() {
    return {
      promo: {
        title: 'Example',
        image: 'https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg?fit=fill&w=800&h=300'
      }
    }
  }
}
</script>
