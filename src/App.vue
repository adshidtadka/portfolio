<template>
  <b-container id="app" fluid="md">
    <CycleLoader v-show="loading"></CycleLoader>
    <Header></Header>
    <transition :name="transitionName" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <Footer :route="$route.path"></Footer>
  </b-container>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import CycleLoader from "./components/CycleLoader";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-left",
      loading: true,
    };
  },
  components: {
    Header,
    Footer,
    CycleLoader,
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
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
  transform: translateX(0);
  opacity: 1;
}
.slide-left-leave-to {
  transform: translateX(-1000px);
  opacity: 0;
}
.slide-left-leave-active {
  transition: all 1s 0s ease;
}

.slide-right-leave {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-leave-to {
  transform: translateX(1000px);
  opacity: 0;
}
.slide-right-leave-active {
  transition: all 1s 0s ease;
}
</style>
