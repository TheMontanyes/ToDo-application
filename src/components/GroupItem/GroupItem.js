export default {
  props: {
    card: {
      type: Object,
      required: true
    },    
    groupsName: {
      type: Array,
      required: false
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      filterStatus: 'all',
      filterName: '',
      showModal: false,
      showDialog: false
    }
  },
  methods: {
    deleteTodo (index) {
      this.$delete(this.card.tasks, index)
    },
    addTodo (todo) {
      this.$emit('add-todo', todo)
    }
  },
  computed: {
    filteredGroup () {
      if (this.filterStatus === 'all') {
        return this.card.tasks.filter(i => {
          return (i.title || i.titleTask).toLowerCase().indexOf(this.filterName.toLowerCase()) !== -1;
        })
      }

      if (this.filterStatus === 'completed') {
        return this.card.tasks.filter(i => i.completed).filter(i => {
          return (i.title || i.titleTask).toLowerCase().indexOf(this.filterName.toLowerCase()) !== -1;
        })
      }

      if (this.filterStatus === 'not-completed') {
        return this.card.tasks.filter(i => !i.completed).filter(i => {
          return (i.title || i.titleTask).toLowerCase().indexOf(this.filterName.toLowerCase()) !== -1;
        })
      }
    }
  }
}