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