export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    groupsName: {
      type: Array,
      required: false
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showDialog: false,
      groupName: 'all'
    }
  },
  methods: {
    moveTodo () {
      if (this.todo.groupName !== this.groupName) {
        this.todo.groupName = this.groupName
      }
    }
  }
};