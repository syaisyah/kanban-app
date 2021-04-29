<template>
  <div>
    <Login></Login>
    <Register></Register>
    <Home></Home>
  </div>
</template>

<script>
import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';

export default {
  name: "App",
  components: {
    Register,
    Login,
    Home
  },
  data () {
    return {}
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