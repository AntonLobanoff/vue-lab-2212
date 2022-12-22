<template>
  <div>
    <v-header :show="true" text="example" @privet="renderHello"></v-header>
    <p>example</p>
    <p v-html="text"></p>
    <input type="text" v-model="value">
    <p v-if="value.length">{{ value }}</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      text: '',
      value: ''
    }
  },
  components: {

  },
  methods: {
    renderHello(value) {
      this.text = value
    }
  },
  mounted() {
    console.log(++this.$route.params.id)
    console.log(this.$route.query.q)
  }
}

</script>

<style lang="css">
  p {
    color: red;
  }
</style>