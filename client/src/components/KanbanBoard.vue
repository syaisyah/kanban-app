<template>
  <section>
    <div class="row">
        <div class="my-4 text-center w-100">
          <h1><b>Kanban Application</b></h1>
          </div>
      </div>
      <div class="d-flex justify-content-start" style="margin: 0px 250px 100px; height: 70vh">
        <div class="col-3 category mx-1 overflow-auto p-3">
          <h4 class="text-center">Backlog</h4>
          <!--Card-->
          <KanbanCard></KanbanCard>
          <!--End Card-->
        </div>
        <div class="col-3 category mx-1 overflow-auto p-3">
          <h4 class="text-center">Todo</h4>
          <div class="col-12 p-2"></div>
        </div>
        <div class="col-3 category mx-1 overflow-auto p-3">
          <h4 class="text-center">Doing</h4>
          <div class="col-12 p-2"></div>
        </div>
        <div class="col-3 category mx-1 overflow-auto p-3">
          <h4 class="text-center">Done</h4>
          <div class="col-12 p-2"></div>
        </div>
        <!---->
      </div>
  </section>
</template>

<script>
import KanbanCard from './KanbanCard'
export default {
  name: "KanbanBoard",
  components: {
    KanbanCard
  }
}
</script>

<style scoped>
.category {
  border: 4px solid rgb(230, 225, 225);
  border-radius: 15px;
  background-color: white;
}

h1, h4 {
  color: rgb(194, 119, 150);
}

</style>