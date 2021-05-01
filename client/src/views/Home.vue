<template>
   <section>
     <Navbar @emitModalAdd="showModalAdd"></Navbar>
     <KanbanBoard :dataTasks="dataTasks"></KanbanBoard>
     <FormAdd v-if="isAddForm" ></FormAdd>
     <FormEdit></FormEdit>
   </section>
</template>

<script>
import Navbar from '../components/Navbar';
import KanbanBoard from '../components/KanbanBoard';
import FormAdd from '../components/FormAdd';
import FormEdit from '../components/FormEdit';
export default {
  name: "Home",
  components: {
    Navbar,
    KanbanBoard,
    FormAdd,
    FormEdit
  },
  data () {
    return {
      isAddForm: false
    }
  },
  // created() {console.log(this.dataTasks, '>>>>>>>>>>>>created Home ')},
  props: ["dataTasks"],
  methods: {
    showModalAdd() {
      console.log(this.isAddForm, 'before hit showModalAdd Home ')
      this.isAddForm = true
      console.log(this.isAddForm, 'after hit showModalAdd Home ')
    }
  }
}
</script>

<style scoped>
nav {
  background-color: rgb(113, 201, 207);
}

</style>