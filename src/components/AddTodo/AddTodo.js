export default {
  data() {
    return {
      description: '',
      titleTask: '',
      groupName: '',
      showModal: false
    }
  },

  methods: {
    addTodo() {
      const newTask = {
        id: Date.now(),
        titleTask: this.titleTask,
        description: this.description,
        groupName: this.groupName,
        completed: false
      }

      
      this.$emit('add-todo', newTask)

      this.description = ''
      this.titleTask = ''
      this.groupName = ''
    }
  }
}
