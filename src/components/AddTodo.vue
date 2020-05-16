<template>
  <form @submit.prevent="addTask">
    <label>Название задачи
    <input type="text" v-model="titleTask" required>
    </label>
    <label>Добавить к группе задач
    <input type="text" v-model="groupName">
    </label>
    <textarea name="description" v-model="description" cols="50" rows="10"></textarea>
    <button type="submit">Create task</button>
  </form>
</template>

<script>
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
</script>
