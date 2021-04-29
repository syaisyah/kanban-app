<template>
  <div>
    <Login v-if="!isLogin && !isRegister" @emitLogin="login"></Login>
    <Register v-else-if="isRegister && !isLogin"></Register>
    <Home v-else-if="isLogin"></Home>
  </div>
</template>

<script>
import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';
import axios from 'axios';
const baseUrl = `http://localhost:3000`

export default {
  name: "app",
  components: {
    Register,
    Login,
    Home
  },
  data () {
    return {
      isLogin: false,
      isRegister: false
    }
  },

  created() {
    this.checkLocalStroge();
  },

  methods: {
    checkLocalStroge() {
      if (localStorage.getItem("access_token")) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    },
    login(user) {
      console.log(user, 'masuk login')
      axios({
        url: baseUrl + '/users/login',
        method: "POST",
        data: { email: user.email, password: user.password}
      })
      .then(({data}) => {
        localStorage.setItem('access_token', data.access_token)
        this.checkLocalStroge()
      })
      .catch(err => {
        console.log(err, 'err login >>>>>')
      })
      .finally(_ => {
        this.email = "";
        this.password = "";
      })
      
    }
  }
}
</script>

<style>
body {
  background-image: url('../assets/bg-1.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>