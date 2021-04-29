<template>
   <section>
     <Navbar></Navbar>
   </section>
</template>

<script>
import Navbar from '../components/Navbar';

export default {
  name: "Home",
  components: {
    Navbar
  }
}
</script>

<style scoped>
nav {
  background-color: rgb(113, 201, 207);
}

</style>