<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    Header
  }
};
</script>

<style lang="scss">
body {
  font-family: "Inconsolata", sans-serif;
  background: radial-gradient(circle, #222, #0e0e0e);
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: white;
    margin: 0 auto;
    width: 80%;
  }
}
</style>
