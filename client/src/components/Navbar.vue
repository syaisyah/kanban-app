<template>
  <nav class="navbar navbar-expand-lg w-100">
    <div class="d-flex justify-content-between w-100 px-2">
      <button class="btn btn-light" @click.prevent="logout">Log out</button>
      <button type="button" 
      class="btn btn-warning" 
      data-bs-toggle="modal" 
      data-bs-target="#add-task"
      @click.prevent="showModalAdd"
      >+ Create Task
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data () {
    return {}
  },
  methods: {
    logout() {
      console.log('logout hit')
      localStorage.removeItem("access_token");
      window.location.reload();
    },

    showModalAdd() {
      console.log('Navbar modal hit')
      this.$emit('emitModalAdd')
    }
  }
}
</script>

<style>

</style>