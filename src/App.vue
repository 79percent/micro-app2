<template>
  <div id="app">
    <img alt="Vue logo" :src="`${url}/static/img/logo.png`" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="handleClick">{{count}}</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  computed: {
    url() {
      return this.$store.state.url;
    },
    count(){
      return this.$store.state.count
    }
  },
  created() {
    console.log(this);
  },
  methods: {
    handleClick(){
      this.$store.commit('updateState', {count: 5})
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
