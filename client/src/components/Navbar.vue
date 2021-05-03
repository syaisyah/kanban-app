<template>
  <section>
    <nav class="navbar navbar-expand-lg w-100 fixed-top">
      <div class="d-flex justify-content-between w-100 px-2">
        <button class="btn btn-light" @click.prevent="logout">Log out</button>
        <b-button v-b-modal.modal-add class="btn btn-warning">Add Task</b-button>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Navbar",
  components: {

  },
  data () {
   return {}
  },
  methods: {
    logout() {
      console.log('logout hit')
      localStorage.removeItem("access_token");
      window.location.reload();
      
    },

  }
}
</script>

<style scoped>
nav {
  background-color: rgb(113, 201, 207);
}

</style>