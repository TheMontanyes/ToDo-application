export default {

  data() {
    return {
      description: '',
      titleTask: '',
      groupName: ''
    }
  },

  methods: {
    addTask() {
      const newTask = {
        id: Date.now(),
        titleTask: this.titleTask,
        description: this.description,
        groupName: this.groupName,
        completed: false
      }

      
      this.$emit('add-task', newTask)

      this.description = ''
      this.titleTask = ''
      this.groupName = ''
    }
  }
}
