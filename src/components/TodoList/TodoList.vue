<template>
  <div class="todos">
    <h3 class="title">Нераспределенные задачи: {{filteredTodos.length}}</h3>
    <div class="filters">
      <select class="filter-select select" v-model="filterStatus">
        <option value="all">Все задачи</option>
        <option value="completed">Выполненые</option>
        <option value="not-completed">Не выполненые</option>
      </select>
      <input type="text" class="input filter-name" v-model.trim="filterName" placeholder="Потерялась задача?">
    </div>
    <div class="todo-list" v-if="filteredTodos.length">
      <TodoItem
        v-for="(todo, i) of filteredTodos"
        :todo="todo"
        :index="i"
        :key="i"
        :groupsName="groupsName"
        @delete-todo="deleteTodo"
        @add-todo="addTodo"
      />
    </div>
    <p class="title" v-else>Нет задач!</p>
  </div>
</template>

<script src="./TodoList.js"></script>

<style lang="scss">
@import "./TodoList.scss";
</style>
