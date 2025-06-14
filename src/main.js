// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

/* router */
import router from "./router";

/* axios */
import axios from "./api";
import api from "./api/api";
Vue.prototype.http = axios;
Vue.prototype.api = api;

/* swiper */
import "swiper/dist/css/swiper.min.css";

import "./assets/css/reset.min.css";

/* jquery */
import "jquery";

/* bootstarp */
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min";

/* animate.css */
import "animate.css";

/* Header */
import Header from "./components/Header";
Vue.component(Header.name, Header);

/* Footer */
import Footer from "./components/Footer";
Vue.component(Footer.name, Footer);

/* Top */
import GoTop from "./components/GoTop";
Vue.component(GoTop.name, GoTop);

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
