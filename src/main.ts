import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import messages from "./locale";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import VueI18n from "vue-i18n";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "ru",
  messages,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  i18n,
}).$mount("#app");
