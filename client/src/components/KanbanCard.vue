<template>
  <div>
    <div class="card col-12 my-3 shadow-lg"  
      v-for="task in filteredTask"
      :key="task.id">  
    <div class="card-body px-0">
      <h5 class="card-title">{{ task.title }}</h5>
      <h6 class="card-subtitle my-2 text-muted">by: {{ task.User.email }} </h6>
      <h6 class="card-subtitle my-2 text-muted">last Updated: {{ task.updatedAt.split("T")[0] }}</h6>
      <div class="d-flex justify-content-end my-0">
        <button type="button" class="btn btn-primary-outline" data-bs-toggle="modal" data-bs-target="#edit-task-modal"> <i class="fas fa-marker"></i></button>
        <button type="button" class="btn btn-primary-outline"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KanbanCard",
  props: ["filteredTask"],
}
</script>

<style scoped>
.card-title {
  color: rgb(250, 42, 146);
}

</style>