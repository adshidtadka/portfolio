<template>
  <b-container id="app">
    <Header></Header>
    <transition :name="transitionName" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <!-- <transition :name="transitionName" mode="out&#45;in"> -->
    <!--   <Footer :route="$route.path"></Footer> -->
    <!-- </transition> -->
  </b-container>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-left",
    };
  },
  components: {
    Header,
    // Footer,
  },
  watch: {
    $route(to, from) {
      const routes = { "/": 1, "/about": 2, "/works": 3, "/contact": 4 };
      if (routes[to.path] > routes[from.path]) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    },
  },
};
</script>

<style lang="scss">
html,
body {
  font-family: "M PLUS 1p", sans-serif;
  background: radial-gradient(circle, #222, #0e0e0e);
  height: 100%;
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    margin: 0 auto;
    color: #e5e5e5;
    width: 85%;
    height: auto;
    min-height: 100%;
    position: relative;
    .view {
      padding-bottom: 80px;
    }
  }
}
a,
a:hover {
  background-color: transparent;
  text-decoration: none;
  color: inherit;
}

.slide-left-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.slide-left-leave-to {
  transform: translate(-1000px, 0);
  opacity: 0;
}
.slide-left-leave-active {
  transition: all 1s 0s ease;
}

.slide-right-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.slide-right-leave-to {
  transform: translate(1000px, 0);
  opacity: 0;
}
.slide-right-leave-active {
  transition: all 1s 0s ease;
}
</style>
