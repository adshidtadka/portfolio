import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import animateCss from "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(animateCss);

new Vue({
  router,
  created() {
    AOS.init();
  },
  render: (h) => h(App),
}).$mount("#app");
