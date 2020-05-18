export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteCard (index) {
      this.$delete(this.cards, index)
    },
    addTodo (todo) {
      this.$emit('add-todo', todo)
    }
  }
}