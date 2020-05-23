export default {
  props: {
    groupsName: {
      type: Array,
      required: false
    }
  },

  data () {
    return {
      description: '',
      titleTask: '',
      groupName: 'new-task',
      showModal: false
    }
  },

  methods: {
    addTodo () {
      const newTodo = {
        id: Date.now(),
        titleTask: this.titleTask,
        description: this.description,
        groupName: this.groupName,
        completed: false
      }
      this.$emit('add-todo', newTodo)
      this.description = ''
      this.titleTask = ''
      this.groupName = 'new-task'
      this.showModal = false
    }
  }
}
