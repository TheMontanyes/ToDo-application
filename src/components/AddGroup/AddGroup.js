export default {
  data() {
    return {
      titleGroup: '',
      showModal: false
    }
  },

  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    },
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