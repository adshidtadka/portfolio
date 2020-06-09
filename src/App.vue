<template>
  <div id="app">
    <Header></Header>
    <transition :name="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  components: {
    Header
  },
  watch: {
    $route(to, from) {
      const routes = { "/": 1, "/about": 2, "/works": 3, "/contact": 4 };
      if (routes[to.path] > routes[from.path]) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style lang="scss">
body {
  font-family: "Archivo", sans-serif;
  background: radial-gradient(circle, #222, #0e0e0e);
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    margin: 0 auto;
    color: #e5e5e5;
    width: 80%;
  }
}
.slide-left-enter {
  transform: translate(1000px, 0);
  opacity: 0;
}
.slide-left-enter-to {
  opacity: 1;
}
.slide-left-enter-active {
  transition: all 1s 0s ease;
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
.slide-right-enter {
  transform: translate(-1000px, 0);
  opacity: 0;
}
.slide-right-enter-to {
  opacity: 1;
}
.slide-right-enter-active {
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
