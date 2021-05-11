<template>
  <section>
    <b-modal id="modal-add" title="Add Task" hide-footer>
      <div>
        <form>
          <div class="mb-3">
            <label for="titleTask" class="form-label">Title</label>
            <input type="text" class="form-control" v-model="titleTask">
          </div>
          <div class="mb-3">
            <label for="categoryTask" class="form-label">Category</label>
             <b-form-select v-model="categoryTask" :options="options"></b-form-select>
          </div>
        </form>
      </div>
      <div class="my-3 d-flex justify-content-end">
        <div slot="modal-footer">
          <b-button variant="warning" @click="$bvModal.hide('modal-add')">Close</b-button>
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
        titleTask: '',
        categoryTask: null,
         options: [
          { value: null, text: 'Please select an option' },
          { value: 'Backlog', text: 'Backlog' },
          { value: 'Todo', text: 'Todo' },
          { value: 'Doing', text: 'Doing' },
          { value: 'Done', text: 'Done' },
        ]
      }
    },
    methods: {
     createTask() {
       const newTask = { title: this.titleTask, category: this.categoryTask}
       this.$emit('emitCreateTask', newTask)
     },
   
    }
  }
</script>



















