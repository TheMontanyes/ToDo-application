<template>
  <li>
    <h3>{{ card.titleGroup }}</h3>
    <select v-model="filterStatus">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select>
    <button @click="$emit('remove-card', index)">remove</button>
    <ul>
      <TodoItem
      v-for="(todo, i) of filteredGroup"
      :todo="todo"
      :index="i"
      :key="i"
      @remove-todo="removeTodo"
    />
    </ul>
  </li>
</template>

<script src="./GroupItem.js"></script>
