<template>
  <div id="todo-application">
    <header class="header">
      <h2 class="header__title">ToDo</h2>
      <div class="btn-group">
        <AddTodo :groupsName="cards" @add-todo="addTodo" />
        <AddGroup @add-group="addGroup"/>
      </div>
    </header>
    <main class="main">
      <h3 class="title">Количество групп: {{cards.length}}</h3>
      <GroupCards :cards="cards" @add-todo="addTodo" v-if="cards.length"/>
      <TodoList :todos="todos" :groupsName="cards" @add-todo="addTodo" />
    </main>
  </div>
</template>

<script src="./Todos.js"></script>

<style lang="scss">
@import "./Todos.scss";
</style>
