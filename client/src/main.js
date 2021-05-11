import Vue from 'vue';
import App from './App.vue';
import Swal from 'sweetalert2';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BButton } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { LoaderPlugin } from 'vue-google-login';
import GoogleSignInButton from 'vue-google-signin-button-directive'



Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ModalPlugin)
Vue.component('b-button', BButton)



new Vue({
  GoogleSignInButton,
  render: h => h(App),
}).$mount('#app');

