import Vue from 'vue';
import App from './App.vue';
import Swal from 'sweetalert2';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)
import { BButton } from 'bootstrap-vue'
Vue.component('b-button', BButton)



new Vue({
  render: h => h(App),
}).$mount('#app');