<template>
  <div class="p-3">
    <div class="card col-12 shadow-lg my-2 p-3 bg-light"  
      v-for="task in filteredTask"
      :key="task.id">  
    <div class="card-body p-0">
      <h5 class="card-title">{{ task.title }}</h5>
      <h6 class="card-subtitle text-muted">by: {{ task.User.email }} </h6>
      <h6 class="card-subtitle text-muted">last Updated: {{ task.update }}</h6>
      <div class="d-flex justify-content-end mt-1">
         <b-button v-b-modal.modal-edit class="btn btn-light" @click.prevent="getDetailTask(task.id)"><i class="fas fa-marker"></i></b-button>
        <button type="button" class="btn btn-primary-outline" @click.prevent="destroy(task.id)"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KanbanCard",
  props: ["filteredTask"],
  methods: {
    destroy(id) {
      this.$emit('emitDestroy', id)
    },
    getDetailTask(id) {
      this.$emit('emitGetDetailTask', id)
    }
  }
}
</script>

<style scoped>
.card-title {
  color: rgb(250, 42, 146);
}

</style>