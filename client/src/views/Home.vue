<template>
   <section>
      <Navbar></Navbar>
      <KanbanBoard 
       :dataTasks="dataTasks"
       @emitDestroy="destroy"
       @emitGetDetailTask="getDetailTask"
       @emitUpdateCategory="updateCategory"
      ></KanbanBoard>
      <ModalAdd 
        @emitCreateTask="createTask"
      ></ModalAdd>
      <ModalEdit  
        :detailTask="detailTask"
        @emitEditTask="editTask"
      ></ModalEdit>
   </section>
</template>

<script>
import Navbar from '../components/Navbar';
import KanbanBoard from '../components/KanbanBoard';
import ModalAdd from '../components/ModalAdd'
import ModalEdit from '../components/ModalEdit'

export default {
  name: "Home",
  components: {
    Navbar,
    KanbanBoard,    
    ModalAdd,
    ModalEdit
  },
  props: ["dataTasks", "detailTask"],
  methods: {
    createTask(task) {
      this.$emit('emitCreateTask', task)
    },
    destroy(id) {
      this.$emit('emitDestroy', id)
    },
    getDetailTask(id) {
      this.$emit('emitGetDetailTask', id)
    },
    editTask(task) {
      this.$emit('emitEditTask', task)
    },
    updateCategory(task) {
      this.$emit('emitUpdateCategory', task)
    }
  }
}
</script>

<style scoped>


</style>