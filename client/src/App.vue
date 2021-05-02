<template>
  <div>
    <Login v-if="page === 'login'" @emitLogin="login" @emitFormRegister="showFormRegister"></Login>
    <Register v-else-if="page === 'register'" @emitRegister="register" @emitFormLogin="showFormLogin"></Register>
    <Home 
      v-else-if="page === 'home'"
      :dataTasks="tasks"
      @emitCreateTask="createTask"
      @emitDestroy="destroy"
      @emitGetDetailTask="getDetailTask"
      :detailTask="objTask"
      @emitEditTask="editTask"
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
     tasks: [],
     objTask: {}
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
        const {status, message } = err.response.data
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${status} (${err.response.statusText}) - ${message}`
        })
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
      .catch(err => {
        const {status, message } = err.response.data
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${status} (${err.response.statusText}) - ${message}`
        })
      })
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
        const listDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        const listMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
        let update;
        const allTasks = data.map(task => {
          let updateDate = new Date(task.updatedAt)
          const day = listDay[updateDate.getDay()]
          const year = updateDate.getFullYear();
          let month = listMonth[updateDate.getMonth()]
          let date = updateDate.getDate();
          (date < 10) ? date = `0${date}` : date;
          update = `${day}, ${date} ${month} ${year}`
          task.update = update
        })
       this.tasks = data
      })
      .catch(err => {
         const { status, message } = err.response.data
         let errorMessage = `${status} (${err.response.statusText}) - ${message}`
         console.log(errorMessage)
      })
    },

    createTask(task) {
      axios({
        url: baseUrl + '/tasks',
        method: "POST",
        data: task,
        headers: {access_token: localStorage.getItem('access_token')}
      })
      .then(response => {
          Swal.fire(
            'Create Task Success'
          )
        this.checkLocalStroge()
        })
      .catch(err => {
        const {status, message } = err.response.data
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${status} (${err.response.statusText}) - ${message}`
        })
      })
    },

    destroy(id) {
      Swal.fire({
        title: 'Are you sure?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios({
            url: baseUrl + '/tasks/' + id,
            method: "DELETE",
            headers: {access_token: localStorage.getItem('access_token')}
          })
          .then(response => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
          )
          this.checkLocalStroge()
          })
          .catch(err => {
            const {status, message } = err.response.data
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${status} - ${message}`
            })
          })
        }
      })
    },

    getDetailTask(id) {
      axios({
        url: baseUrl + '/tasks/' + id,
        method: "GET",
        headers: { access_token: localStorage.getItem("access_token") },
      })
      .then(({ data }) => {
        this.objTask = data;
      })
      .catch(err => {
         const { status, message } = err.response.data
         let errorMessage = `${status} (${err.response.statusText}) - ${message}`
         console.log(errorMessage)
      })
    },
    editTask(task) {
      const { id, title, category } = task;
      axios({
        url: baseUrl + '/tasks/' + id,
        method: "PUT",
        data: { title, category },
        headers: { access_token: localStorage.getItem("access_token") }
      })
      .then(({data}) => {
        this.checkLocalStroge()
      })
      .catch(err => {
        const {status, message } = err.response.data
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${status} (${err.response.statusText}) - ${message}`
          })
      })
    }
  }
}
</script>

<style>
body {
  background-image: url('../assets/bg-2.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100vh
}

</style>