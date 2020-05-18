export default {
  data() {
    return {
      todos: [
        {
          id: Math.random(),
          titleTask: 'sdadasdsadasdasdasdasdsadas',
          description: 'ut nam facilis et officia qui',
          groupName: 'all',
          completed: false
        },
        {
          id: Math.random(),
          titleTask: 'minus quis ut nam facilis et officia qui',
          description: 'sdadasdsadasdasdasdasdsadas',
          groupName: 'all',
          completed: true
        },
        {
          id: Math.random(),
          titleTask: 'minus quis ut nam facilis et officia qui',
          description: 'sdadasdsadasdasdasdasdsadas',
          groupName: 'all',
          completed: false
        }
      ],
      cards: []
    }
  },

  methods: {
    // Метод создания новых задач
    addTodo (todo) {
      if (todo.groupName === 'all') {
        this.todos.forEach(i => {
          if (i.groupName !== todo.groupName) {
            this.todos.push(todo)
          }
        })
      } else {
        this.cards.forEach(i => {
          if (i.titleGroup === todo.groupName) {
            i.tasks.push(todo)
          }
        })
      }

      if (todo.groupName === 'new-task') {
        todo.groupName = 'all'
        this.todos.push(todo)
      }
    },

    // Метод создания группы задач
    addGroup (newCard) {
      if (this.cards.length === 0) {
        this.cards.push(newCard)
      } else {
        this.cards.forEach(card => {
          if (card.titleGroup === newCard.titleGroup) {
            alert('Введенная группа уже существует!')
            newCard = false
          }
        })
        if (newCard !== false) {
          this.cards.push(newCard)
        }
      }      
    }
  }
}
