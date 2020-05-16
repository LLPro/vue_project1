import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router/router";
import Vuelidate from "vuelidate";
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial);
Vue.use(Vuelidate);


new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
});
