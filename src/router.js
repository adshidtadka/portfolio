import Vue from "vue";
import Router from "vue-router";
import App from "./App";
import Home from "./views/Home";
import About from "./views/About";
import Works from "./views/Works";
import Contact from "./views/Contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/about",
      component: About,
      beforeEnter(to, from, next) {
        if (from.path == "/") {
          App.data().transitionName = "slide-right";
        }
        next();
      }
    },
    {
      path: "/works",
      component: Works
    },
    {
      path: "/contact",
      component: Contact
    },
    {
      path: "*",
      redirect: { path: "/" }
    }
  ]
});
