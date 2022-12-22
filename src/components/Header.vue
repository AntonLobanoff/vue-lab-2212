<template>
  <div>
    <header ref="header" v-if="show">
      <p>Logo</p>
      <p>мы находимся на странице - {{ text }}</p>
      <input type="text" v-model="value">
      <button @click="hello" :class="{'active': value.length > 4}"
              :disabled="value.length < 5">вывести привет</button>
      <div class="nav">
        <router-link :to="{name: 'home'}">home</router-link>
        <router-link :to="{name: 'about'}">about</router-link>
        <button @click="toExample">example</button>
      </div>
    </header>
    <p v-else>Хедер загулял</p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      value: '',
      dis: true

    }
  },
  methods: {
    hello() {
      this.$emit('privet', `Привет ${this.value}`)
    },
    toExample() {
      this.$router.push({name: 'example', params: {id: 20}})
      // console.log(this.$route)
      // console.log(this.$router)
    }
  },
  mounted() {
    console.log(this.$refs.header.offsetHeight)
    // this.value = 'Арлен'
  },
  created() {
    console.log(this.$refs.header)
    // this.value = 'Калыбек'
  }
}
</script>

<style lang="css">
header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #6e6e6e;
  align-items: center;
}
button.active {
  background: red ;
}
.nav a {
  margin-left: 15px;
  text-decoration: none;
  font-size: 20px;
  color: #000;
  outline: none;
}
</style>