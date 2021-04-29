<template>
  <div>
    <Login @emitLogin="login"></Login>
    <Register></Register>
    <Navbar></Navbar>
    <KanbanBoard></KanbanBoard>
  </div>
  
</template>

<script>
import Login from './views/Login';
import Register from './views/Register';
import Navbar from './components/Navbar';
import KanbanBoard from './views/KanbanBoard.vue';


export default {
  name: 'App',
  components: {
    Navbar,
    Login,
    Register,
    KanbanBoard,
  },
  data () {
    return {
      // isLogin: false,
      // isRegister: false,
      isFormAdd: false,
    }
  },
  created() {},
  methods: {
    login(user) {
      // ini untuk menjalankan perintah emitLogin
      console.log('masuk login App.vue')
    },
  },
};
</script>

<style>
body {
  background-image: url('../assets/bg-1.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

h1, h4 {
  color: rgb(194, 119, 150);
}



nav {
  background-color: rgb(113, 201, 207);
}
</style>

 <!-- <Login v-if="!isLogin && !isRegister"></Login>
  <Register v-else-if="!isLogin && isRegister"></Register>
  <Navbar v-else-if="isLogin"></Navbar> -->