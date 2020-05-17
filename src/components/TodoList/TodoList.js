
import TodoItem from "@/components/TodoItem/TodoItem.vue"
export default {
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  components: {
    TodoItem
  },
  methods: {
    removeTodo (index) {
      this.$delete(this.todos, index)
      console.log(index)
    }
  }
};