<template>
  <div class="modal fade" id="add-task" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLabel">Create Task</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="title-task" class="form-label">Title</label>
                <input type="text" class="form-control" id="title-task">
              </div>
              <div class="mb-3">
                <label for="add-category-task" class="form-label">Category</label>
                <select id="add-category-task" class="form-select" disabled>
                  <option>Backlog</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer m-3">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "FormAdd"
}
</script>

<style>

</style>