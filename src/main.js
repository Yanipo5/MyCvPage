import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import "./main.css";
import App from "./App.vue";
import VueParticles from "vue-particles";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(VueParticles);

new Vue({
  render: h => h(App)
}).$mount("#app");
