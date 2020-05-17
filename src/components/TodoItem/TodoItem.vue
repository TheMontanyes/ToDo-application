<template>
  <li>
    <span>
      <input type="checkbox" @change="todo.completed = !todo.completed" :checked="todo.completed">
      <strong>{{index + 1}}.</strong>
      {{ todo.titleTask || todo.title }}
    </span>
    <p v-if="todo.description">
      {{ todo.description }}
    </p>
    <button @click="$emit('remove-todo', index)">remove</button>
  </li>
</template>

<script src="./TodoItem.js"></script>
