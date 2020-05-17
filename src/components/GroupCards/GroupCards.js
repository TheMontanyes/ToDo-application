import GroupItem from "@/components/GroupItem/GroupItem.vue"
export default {
  props: {
    cards: {
      type: Array,
      required: true
    }
  },
  components: {
    GroupItem
  },
  methods: {
    removeСard (id) {
      this.$emit("remove-card", id);
    }
  }
};