<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button @click="handleClick">{{count}}</button>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { mapGetters } from 'vuex';

export default {
  name: "App",
  components: {
    HelloWorld
  },
  computed: {
    ...mapGetters('b',[
      'count',
    ])
  },
  created() {
    console.log(this);
  },
  methods: {
    handleClick(){
      this.$store.commit('b/updateState', {count: 5})
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
