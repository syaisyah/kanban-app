<template>
  <section>
    <b-modal id="modal-1" title="Add Task" hide-footer>
      <div>
        <form>
          <div class="mb-3">
            <label for="title-task" class="form-label">Title</label>
            <input type="text" class="form-control" v-model="titleTask">
          </div>
          <div class="mb-3">
            <label for="add-category-task" class="form-label">Category</label>
            <select id="add-category-task" class="form-select w-100" style="height: 40px" disabled>
              <option>Backlog</option>
            </select>
          </div>
        </form>
      </div>
      <div class="my-3 d-flex justify-content-end">
        <div slot="modal-footer">
        <b-button variant="info" @click.prevent="createTask">Submit</b-button>
      </div>
      
    </b-modal>
  </section>
</template>

<script>
  export default {
    name: "ModalAdd",
    data() {
      return {
        category: 'Backlog',
        titleTask: ''
      }
    },
    methods: {
     createTask() {
       const newTask = { title: this.titleTask, category: this.category}
       console.log(this.category, 'hit submit modal>>>>>>>')
       this.$emit('emitCreateTask', newTask)
     },
   
    }
  }
</script>



















