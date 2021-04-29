<template>
   <section>
      <div class="row">
        <div class="col-12 text-center mt-5 mb-3">
          <h1><b>Kanban Application</b></h1>
        </div>
      </div>
      <div class="d-flex justify-content-start" style="margin: 0px 250px 100px; height: 70vh">
        <div class="col-3 overflow-auto px-0 mx-0 category">
          <div class="col-12">
          <h4 class="text-center pt-3 pb-2">Backlog</h4>
          </div>
          <div class="col-12">
            <KanbanCard></KanbanCard>
          </div>
        </div>
         <!---->
        <div class="col-3 overflow-auto px-0 mx-0 category">
          <div class="col-12">
          <h4 class="text-center pt-3 pb-2">Todo</h4>
          </div>
          <div class="col-12">
            <!-- <KanbanCard></KanbanCard> -->
          </div>
        </div>
       <div class="col-3 overflow-auto px-0 mx-0 category">
          <div class="col-12">
          <h4 class="text-center pt-3 pb-2">Doing</h4>
          </div>
          <div class="col-12">
            <!-- <KanbanCard></KanbanCard> -->
          </div>
        </div>
        <div class="col-3 overflow-auto px-0 mx-0 category">
          <div class="col-12">
          <h4 class="text-center pt-3 pb-2">Done</h4>
          </div>
          <div class="col-12">
            <!-- <KanbanCard></KanbanCard> -->
          </div>
        </div>
         <!---->
      </div>
    </section>
</template>

<script>
import KanbanCard from '../components/KanbanCard.vue';

export default {
  name: 'KanbanBoard',
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

</style>