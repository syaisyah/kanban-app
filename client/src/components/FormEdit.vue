<template>
  <div class="modal fade" id="edit-task-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalLabel">Edit Task</h3>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="title-task-edit" class="form-label">Title</label>
              <input type="text" class="form-control" id="title-task-edit">
            </div>
            <div class="mb-3">
              <label for="edit-category-task" class="form-label">Category</label>
              <select id="edit-category-task" class="form-select">
                <option>Backlog</option>
                <option>Todo</option>
                <option>Doing</option>
                <option>Done</option>
              </select>
            </div>
          </form>
        </div>
        <div class="modal-footer m-3">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormEdit"
}
</script>

<style>

</style>