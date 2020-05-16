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

<script>
import GroupCards from '@/components/GroupCards'
import TodoList from '@/components/TodoList'
import AddGroup from '@/components/AddGroup'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'
export default {
  components: {
    TodoList, AddTodo, Loader, GroupCards, AddGroup
  },

  data() {
    return {
      todos: [],
      cards: [],
      loading: true,
      filterStatus: 'all'
    }
  },

  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(response => response.json())
      .then(json => {
          this.todos = json
          this.loading = false
      })
  },

  computed: {
    filteredTodos () {
      if (this.filterStatus === 'all') {
        return this.todos
      }

      if (this.filterStatus === 'completed') {
        return this.todos.filter(i => i.completed)
      }

      if (this.filterStatus === 'not-completed') {
        return this.todos.filter(i => !i.completed)
      }
    }
  },

  methods: {
    removeCard (index) {
        this.$delete(this.cards, index)
        console.log(index)
    },

    removeTodo (index) {
        this.$delete(this.todos, index)
        console.log(index)
    },

    addTask (todo) {
      if (todo.groupName !== '') {
        this.cards.forEach(card => {
          if (card.titleGroup === todo.groupName) {
            card.tasks.push(todo)
          } 
        })
      } else {
        this.todos.push(todo)
      }
    },

    addGroup (newCard) {
      if (this.cards.length === 0) {
        this.cards.push(newCard)
      } else {
        this.cards.forEach(card => {
          if (card.titleGroup !== newCard.titleGroup) {
            this.cards.push(newCard)
          } else {
            alert('Такая группа уже существует!')
          }
        })
      }
    }
  }
}
</script>