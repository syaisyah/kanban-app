import Vue from 'vue';
import App from './App.vue';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import Swal from 'sweetalert2';
// import { ModalPlugin } from 'bootstrap-vue'
// Vue.use(ModalPlugin)
// import { VBModal } from 'bootstrap-vue'
// Vue.directive('b-modal', VBModal)
// import { BModal } from 'bootstrap-vue'
// Vue.component('b-modal', BModal)
// import { VBModal } from 'bootstrap-vue'
// // Note: Vue automatically prefixes the directive name with 'v-'
// Vue.directive('b-modal', VBModal)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
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