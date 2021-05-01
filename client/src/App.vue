<template>
  <div>
    <Login v-if="page === 'login'" @emitLogin="login" @emitFormRegister="showFormRegister"></Login>
    <Register v-else-if="page === 'register'" @emitRegister="register" @emitFormLogin="showFormLogin"></Register>
    <Home 
      v-else-if="page === 'home'"
      :dataTasks="tasks"
    ></Home>
  </div>
</template>

<script>
import axios from 'axios';
import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';

const baseUrl = `http://localhost:3000`

export default {
  name: "app",
  components: {
    Register,
    Login,
    Home,

  },
  data () {
    return {
     page: 'login',
     tasks: []
    
    }
  },

  created() {
    this.checkLocalStroge();
  },

  methods: {

    checkLocalStroge() {
      if (localStorage.getItem("access_token")) {
        this.page = 'home';
        this.fetchTasks()
      } else {
        this.page = 'login'
      }
    },
    showFormRegister() {
      this.page = 'register'
    },
    showFormLogin() {
      this.page = 'login'
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
         Swal.fire(
          'Login success!',
          'You clicked the button!',
          'success'
        )
        this.checkLocalStroge()
      })
      .catch(err => {
        console.log(err, 'err login >>>>>')
      })
      .finally(_ => {
        this.email = "";
        this.password = "";
      })
    },
    register(user) {
      const { full_name, email, password } = user;
      const newUser = { full_name, email, password };
      
      axios({
        url: baseUrl + '/users/register',
        method: "POST",
        data: newUser
      })
      .then(response => {
        Swal.fire(
          'Register success! Login please',
          'You clicked the button!',
          'success'
        )
        this.page = 'login'
      })
      .catch(err => console.log(err))
      .finally(_ => {
        this.full_name = ''; 
        this.email= '';
        this.password = '';
      })
    },

    fetchTasks() {
      axios({
        url: baseUrl + '/tasks',
        method: "GET",
        headers: {access_token: localStorage.getItem('access_token')}
      })
      .then(({data}) => {
       this.tasks = data
       console.log(this.tasks, '>>>>>>> fetchTasks')
      })
      .catch(err => console.log(err, 'from fetchTasks'))
    },
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