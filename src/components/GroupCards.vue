<template>
  <ul>
    <GroupItem
      v-for="(card, i) of cards"
      :card="card"
      :index="i"
      :key="i"
      @remove-card="removeСard"
    />
  </ul>
</template>

<script>
import GroupItem from "@/components/GroupItem";
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
</script>