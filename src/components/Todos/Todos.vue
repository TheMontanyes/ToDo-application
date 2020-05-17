<template>
  <div>
    <h2>Todo application</h2>

    <AddTodo @add-task="addTask"/>
    <AddGroup @add-group="addGroup"/>
    <GroupCards
      v-if="cards"
      :cards="cards"
      @remove-card="removeСard"
    /> 

    <hr>
    
    <select v-model="filterStatus">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not Completed</option>
    </select> 
    <h3>Нераспределенные задачи:</h3>
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      :todos="filteredTodos"
      @remove-todo="removeTodo"
    />

    <p v-else>No todos!</p>
  </div>
</template>

<script src="./Todos.js"></script>