
import GroupCards from '@/components/GroupCards/GroupCards.vue'
import TodoList from '@/components/TodoList/TodoList.vue'
import AddGroup from '@/components/AddGroup/AddGroup.vue'
import AddTodo from '@/components/AddTodo/AddTodo.vue'
import Loader from '@/components/Loader/Loader.vue'

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
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .then(response => response.json())
      .then(arr => {
          this.todos = arr
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
    addTodo (todo) {
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
