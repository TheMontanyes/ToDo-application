
export default {
  props: {
    todos: {
      type: Array,
      required: true
    },
    groupsName: {
      type: Array,
      required: true
    }
  },
  data() {
    return {      
      filterStatus: 'all',
      filterName: ''
    }
  },
  methods: {
    deleteTodo (index) {
      this.$delete(this.todos, index)
    },
    addTodo (todo) {
      this.$emit('add-todo', todo)
    }
  },
  computed: {
    // Фильтрация нераспределенных задач    
    filteredTodos () {
      if (this.filterStatus === 'all') {
        return this.todos.filter(i => {
          return (i.titleTask).toLowerCase().indexOf(this.filterName.toLowerCase()) !== -1
        })
      }

      if (this.filterStatus === 'completed') {
        return this.todos.filter(i => i.completed).filter(i => {
          return (i.titleTask).toLowerCase().indexOf(this.filterName.toLowerCase()) !== -1
        })
      }

      if (this.filterStatus === 'not-completed') {
        return this.todos.filter(i => !i.completed).filter(i => {
          return (i.titleTask).toLowerCase().indexOf(this.filterName.toLowerCase()) !== -1
        })
      }
    }
  }
};