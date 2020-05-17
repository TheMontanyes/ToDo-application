import TodoItem from "@/components/TodoItem/TodoItem.vue"
export default {
  components: {
    TodoItem
  },
  props: {
    card: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    removeTodo (index) {
      this.$delete(this.card.tasks, index)
      console.log(index)
    }
  },
  data() {
    return {
      filterStatus: 'all'
    }
  },
  computed: {
    filteredGroup () {
      if (this.filterStatus === 'all') {
        return this.card.tasks
      }

      if (this.filterStatus === 'completed') {
        return this.card.tasks.filter(i => i.completed)
      }

      if (this.filterStatus === 'not-completed') {
        return this.card.tasks.filter(i => !i.completed)
      }
    }
  }
}