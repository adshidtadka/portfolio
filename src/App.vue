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
  font-family: "Archivo", sans-serif;
  background-color: #343a40;
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
