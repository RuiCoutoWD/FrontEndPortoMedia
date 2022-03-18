import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue} from 'bootstrap-vue'
import { Plugin } from 'vue-responsive-video-background-player'


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Plugin);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
