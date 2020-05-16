<template>
  <form @submit.prevent="addGroup">
    <label>Название группы
    <input type="text" v-model="titleGroup" required>
    </label>
    <button type="submit">Create group</button>
  </form>
</template>

<script>
export default {

  data() {
    return {
      titleGroup: ''
    }
  },

  methods: {
    addGroup () {
      const newGroup = {
        id: Date.now(),
        titleGroup: this.titleGroup,
				tasks: []
      }

      this.$emit('add-group', newGroup)

      this.titleGroup = ''
    }
  }
}
</script>
