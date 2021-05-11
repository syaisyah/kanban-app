<template>
  <section>
    <div class="row" style="margin-top: 50px">
        <div class="my-4 text-center w-100">
          <h1><b>Kanban Application</b></h1>
        </div>
      </div>
      <div class="d-flex justify-content-start" style="margin: 0px 250px 100px; height: 70vh">
        <div class="col-3 category overflow-auto p-0 mx-1">
          <div class="sticky-top bg-warning">
            <h4 class="text-center py-1 mb-0">Backlog</h4>
          </div>
          <KanbanCard 
            :filteredTask="filteredBackLog"
            @emitDestroy="destroy"
            @emitGetDetailTask="getDetailTask"
            @emitUpdateCategory="updateCategory"
          ></KanbanCard>
        </div>
        <div class="col-3 category overflow-auto p-0 mx-1">
          <div class="sticky-top bg-warning">
            <h4 class="text-center py-1 mb-0">Todo</h4>
          </div>
          <KanbanCard 
            :filteredTask="filteredTodo"
            @emitDestroy="destroy"
            @emitGetDetailTask="getDetailTask"
            @emitUpdateCategory="updateCategory"
          ></KanbanCard>
        </div>
        <div class="col-3 category overflow-auto p-0 mx-1">
          <div class="sticky-top bg-warning">
            <h4 class="text-center py-1 mb-0">Doing</h4>
          </div>
          <KanbanCard 
            :filteredTask="filteredDoing"
            @emitDestroy="destroy"
            @emitGetDetailTask="getDetailTask"
            @emitUpdateCategory="updateCategory"
          ></KanbanCard>
        </div>
        <div class="col-3 category overflow-auto p-0 mx-1">
          <div class="sticky-top bg-warning">
            <h4 class="text-center py-1 mb-0">Done</h4>
          </div>
          <KanbanCard 
            :filteredTask="filteredDone"
            @emitDestroy="destroy"
            @emitGetDetailTask="getDetailTask"
            @emitUpdateCategory="updateCategory"
          ></KanbanCard>
     
        </div>
      </div>
  </section>
</template>

<script>
import KanbanCard from './KanbanCard'

export default {
  name: "KanbanBoard",
  components: {
    KanbanCard,
  },
  props: ["dataTasks"],
  computed: {
    filteredBackLog() {
      return this.dataTasks.filter((task) => task.category.toLowerCase() === "backlog");
    },
    filteredTodo() {
      return this.dataTasks.filter((task) => task.category.toLowerCase() === "todo");
    },
    filteredDoing() {
      return this.dataTasks.filter((task) => task.category.toLowerCase() === "doing");
    },
    filteredDone() {
      return this.dataTasks.filter((task) => task.category.toLowerCase() === "done");
    },
  },
  methods: {
    destroy(id) {
      this.$emit('emitDestroy', id)
    },
    getDetailTask(id) {
      this.$emit('emitGetDetailTask', id)
    },
    updateCategory(task) {
      this.$emit('emitUpdateCategory', task)
    }
  }
}
</script>

<style scoped>
.category {
  border: 4px solid rgb(230, 225, 225);
  border-radius: 15px;
  background-color: white;
}

h1 {
  color: rgb(194, 119, 150);
}




</style>