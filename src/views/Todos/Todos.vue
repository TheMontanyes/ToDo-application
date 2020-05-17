<template>
  <div id="todo-application">
    <header class="header">
      <h2 class="header__title">ToDo</h2>
      <div class="btn-group">
        <AddTodo @add-todo="addTodo"/>
        <AddGroup @add-group="addGroup"/>
      </div>
    </header>  
    <main class="main">
      <GroupCards
        v-if="cards"
        :cards="cards"
      /> 

      <select v-model="filterStatus">
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select> 

      <h3>Нераспределенные задачи:</h3>

      <Loader v-if="loading" />
      <TodoList
        v-else-if="filteredTodos"
        :todos="filteredTodos"
      />
      <p v-else>No todos!</p>
    </main>
  </div>
</template>

<script src="./Todos.js"></script>

<style lang="scss">
  @import './Todos.scss';
</style>