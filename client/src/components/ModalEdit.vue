<template>
  <section>
    <b-modal id="modal-edit" title="Edit Task" hide-footer>
      <div>
        <form>
          <div class="mb-3">
            <label for="titleTaskEdit" class="form-label">Title</label>
            <input type="text" class="form-control" v-model="titleTaskEdit">
          </div>
          <div class="mb-3">
            <label for="categoryTaskEdit" class="form-label">Category</label>
            <b-form-select v-model="category" :options="options"></b-form-select>
          </div>
        </form>
      </div>
      <div class="my-3 d-flex justify-content-end">
        <div slot="modal-footer">
          <b-button variant="warning" @click="$bvModal.hide('modal-edit')">Close</b-button>
          <b-button variant="info" @click.prevent="editTask">Save</b-button>
      </div>
      
    </b-modal>
  </section>
</template>

<script>
  export default {
    name: "ModalEdit",
    data() {
      return {
       titleTaskEdit: "",
       categoryTaskEdit: "",
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
    methods: {
      editTask() {
        console.log(this.category)
      }
   
    }
  }
</script>



















