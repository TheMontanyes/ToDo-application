<template>
  <form @submit.prevent="addTask">
    <label>Название задачи
    <input type="text" v-model="titleTask" required>
    </label>
    <label>Добавить к группе задач
    <input type="text" v-model="groupName">
    </label>
    <textarea name="description" v-model="description" cols="50" rows="10"></textarea>
    <button type="submit">Create task</button>
  </form>
</template>

<script src="./AddTodo.js"></script>
