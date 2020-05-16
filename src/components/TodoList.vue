<template>
  <ul>
    <TodoItem
      v-for="(todo, i) of todos"
      :todo="todo"
      :index="i"
      :key="i"
      @remove-todo="removeTodo"
    />
  </ul>
</template>

<script>
import TodoItem from "@/components/TodoItem";
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
</script>