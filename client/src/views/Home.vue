<template>
   <section>
      <Navbar></Navbar>
      <KanbanBoard 
       :dataTasks="dataTasks"
       @emitDestroy="destroy"
      ></KanbanBoard>
      <ModalAdd @emitCreateTask="createTask"></ModalAdd>
   </section>
</template>

<script>
import Navbar from '../components/Navbar';
import KanbanBoard from '../components/KanbanBoard';
import ModalAdd from '../components/ModalAdd'
export default {
  name: "Home",
  components: {
    Navbar,
    KanbanBoard,    
    ModalAdd,
  },
  props: ["dataTasks"],
  methods: {
    createTask(task) {
      this.$emit('emitCreateTask', task)
    },
    destroy(id) {
      this.$emit('emitDestroy', id)
    }
  }
}
</script>

<style scoped>


</style>