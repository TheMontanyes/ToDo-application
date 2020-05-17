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

<script src="./TodoList.js"></script>