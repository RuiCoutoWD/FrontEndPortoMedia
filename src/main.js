import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue } from "bootstrap-vue";
import { Plugin } from "vue-responsive-video-background-player";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Plugin);
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
