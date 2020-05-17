
import TodoItem from "@/components/TodoItem/TodoItem.vue";
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
    removeTodo(id) {
      this.$emit("remove-todo", id);
    }
  }
};