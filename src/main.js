import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import animateCss from "animate.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(animateCss);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
