<template>
  <div>
    <div class="card col-12 my-3 shadow rounded">
      <div class="card-body px-0">
        <h5 class="card-title">Title</h5>
        <h6 class="card-subtitle my-2 text-muted">by: username</h6>
        <h6 class="card-subtitle my-2 text-muted">last Updated:</h6>
        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-primary-outline" data-bs-toggle="modal" data-bs-target="#edit-task-modal"> <i class="fas fa-marker"></i></button>
          <button type="button" class="btn btn-primary-outline"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KanbanCard',
}
</script>

<style scoped>


</style>