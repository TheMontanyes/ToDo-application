import GroupItem from "@/components/GroupItem/GroupItem.vue"
export default {
  components: {
    GroupItem
  },
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeCard (index) {
      this.$delete(this.cards, index)
      console.log(this.cards)
    }
  }
}