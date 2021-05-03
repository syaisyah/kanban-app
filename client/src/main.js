import Vue from 'vue';
import App from './App.vue';
import Swal from 'sweetalert2';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import GoogleLogin from 'vue-google-login';
import { LoaderPlugin } from 'vue-google-login';

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)
import { BButton } from 'bootstrap-vue'
Vue.component('b-button', BButton)



// Vue.use(LoaderPlugin, {
//   client_id: "548578318715-aqeoe0ivf9jo9pub2o9tjo3pn34hhnd9.apps.googleusercontent.com"
// });

// Vue.GoogleAuth.then(auth2 => {
//   console.log(auth2.isSignedIn.get());
// })


new Vue({
  render: h => h(App),
}).$mount('#app');