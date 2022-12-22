<template>
  <v-header text="home" :show="true" ></v-header>
  <div>home</div>
  <router-link :to="{name: 'example', params: {id: 100}, query: {q: 'text'}}">example</router-link>
</template>
