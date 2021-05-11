<template>
  <div class="p-3">
    <draggable :list="filteredTask" group="task" :move="onMove" @start="drag=true" @end="updateCategory">
      <div class="card col-12 shadow-lg p-3 bg-light border border-warning"  
        v-for="task in filteredTask"
        :key="task.id"
        :task="task"
        :id="task.id"
        >  
      <div class="card-body p-0">
        <h5 class="card-title">{{ task.title }}</h5>
        <h6 class="card-subtitle text-muted">by: {{ task.User.email }} </h6>
        <h6 class="card-subtitle text-muted">last Updated: {{ task.update }}</h6>
        <div class="d-flex justify-content-end mt-1">
           <b-button v-b-modal.modal-edit class="btn btn-light" @click.prevent="getDetailTask(task.id)"><i class="fas fa-marker"></i></b-button>
          <button type="button" class="btn btn-primary-outline" @click.prevent="destroy(task.id)"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: "KanbanCard",
  props: ["filteredTask"],
  components: {
    draggable,
  },
  data () {
    return {
      idTask: null,
      categoryAfter: null,
    }
  },
  methods: {
    destroy(id) {
      this.$emit('emitDestroy', id)
    },
    getDetailTask(id) {
      this.$emit('emitGetDetailTask', id)
    },
    onMove(e) {
      this.idTask = e.draggedContext.element.id;
      this.categoryAfter = e.relatedContext.element.category;
    },
    updateCategory() {
      const task = { id: this.idTask, category: this.categoryAfter }
      this.$emit('emitUpdateCategory', task)
    }
  }
}
</script>

<style scoped>
.card-title {
  color: rgb(250, 42, 146);
}

</style>