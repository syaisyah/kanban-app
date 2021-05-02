<template>
  <section>
    <b-modal id="modal-edit" title="Edit Task" hide-footer>
      <div>
        <form>
          <div class="mb-3">
            <label for="titleTaskEdit" class="form-label">Title</label>
            <input type="text" class="form-control" v-model="detailTask.title" :placeholder="detailTask.title">
          </div>
          <div class="mb-3">
            <label for="categoryTaskEdit" class="form-label">Category</label>
            <b-form-select v-model="detailTask.category" :options="options"></b-form-select>
          </div>
        </form>
      </div>
      <div class="my-3 d-flex justify-content-end">
        <div slot="modal-footer">
          <b-button variant="warning" @click="$bvModal.hide('modal-edit')">Close</b-button>
          <b-button variant="info" @click.prevent="editTask(detailTask.id)">Save</b-button>
      </div>
      
    </b-modal>
  </section>
</template>

<script>
  export default {
    name: "ModalEdit",
    data() {
      return {
       category: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'Backlog', text: 'Backlog' },
          { value: 'Todo', text: 'Todo' },
          { value: 'Doing', text: 'Doing' },
          { value: 'Done', text: 'Done' },
        ]
      }
    },
    props: ["detailTask", "detailTask"],
    methods: {
      editTask(id) {
        const task = { id, title: this.detailTask.title, category: this.detailTask.category }
        this.$emit('emitEditTask', task)
      }
    },
  
  }
</script>



















