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

</style>