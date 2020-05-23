export default {
  data() {
    return {
      todos: [
        {
          id: Math.random(),
          titleTask: 'Разобраться в комнате',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quidem placeat maiores sunt enim odio possimus magni optio voluptates ad voluptate iure dolore consequatur, harum aliquid qui facilis blanditiis provident nulla et doloremque. Harum soluta illo numquam unde iste assumenda nesciunt facilis repudiandae enim totam architecto odit itaque, dolore cum nulla laudantium nemo quas. Dolore, quo laborum! Expedita quae natus fugit optio cupiditate, fuga, excepturi dolorum ipsum iusto consectetur totam, reprehenderit blanditiis in. Laudantium iste illum error magnam eligendi consequatur accusantium, nostrum sed impedit voluptatum commodi mollitia possimus ratione est assumenda id autem? Nam quod quidem possimus, ipsa illo quia.',
          groupName: 'all',
          completed: false
        },
        {
          id: Math.random(),
          titleTask: 'Купить хлеб',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quidem placeat maiores sunt enim odio possimus magni optio voluptates ad voluptate iure dolore consequatur, harum aliquid qui facilis blanditiis provident nulla et doloremque. Harum soluta illo numquam unde iste assumenda nesciunt facilis repudiandae enim totam architecto odit itaque, dolore cum nulla laudantium nemo quas. Dolore, quo laborum! Expedita quae natus fugit optio cupiditate, fuga, excepturi dolorum ipsum iusto consectetur totam, reprehenderit blanditiis in. Laudantium iste illum error magnam eligendi consequatur accusantium, nostrum sed impedit voluptatum commodi mollitia possimus ratione est assumenda id autem? Nam quod quidem possimus, ipsa illo quia.',
          groupName: 'all',
          completed: true
        },
        {
          id: Math.random(),
          titleTask: 'Прочитать книгу',
          description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quidem placeat maiores sunt enim odio possimus magni optio voluptates ad voluptate iure dolore consequatur, harum aliquid qui facilis blanditiis provident nulla et doloremque. Harum soluta illo numquam unde iste assumenda nesciunt facilis repudiandae enim totam architecto odit itaque, dolore cum nulla laudantium nemo quas. Dolore, quo laborum! Expedita quae natus fugit optio cupiditate, fuga, excepturi dolorum ipsum iusto consectetur totam, reprehenderit blanditiis in. Laudantium iste illum error magnam eligendi consequatur accusantium, nostrum sed impedit voluptatum commodi mollitia possimus ratione est assumenda id autem? Nam quod quidem possimus, ipsa illo quia.',
          groupName: 'all',
          completed: false
        }
      ],
      cards: []
    }
  },

  methods: {
    // Метод создания/перемещения новых задач
    addTodo (todo) {
      if (todo.groupName === 'all') {
        let result = false

        this.todos.forEach(i => {
          if (i.groupName !== todo.groupName) {
            return result = true
          }
        })

        this.cards.forEach(el => {
          el.tasks.forEach((k) => {
            if (k.groupName === todo.groupName) {
              el.tasks.splice(k, 1)
              return result = true
            }
          })
        })

        if (result == true) {
          this.todos.push(todo)
        }

      } else if (todo.groupName !== 'all') {
        this.cards.forEach(i => {
          if (i.titleGroup === todo.groupName) {
            return i.tasks.push(todo)
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
