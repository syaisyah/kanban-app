<template>
   <section>
     <Navbar></Navbar>
     <KanbanBoard :dataTasks="dataTasks"></KanbanBoard>
     <FormAdd></FormAdd>
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
  props: ["dataTasks"],
  methods: {
   
  }
}
</script>

<style scoped>
nav {
  background-color: rgb(113, 201, 207);
}

</style>