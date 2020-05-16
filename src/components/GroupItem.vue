<template>
  <li>
    <h3>
		{{ card.titleGroup }}
    </h3>
    <button @click="$emit('remove-card', index)">remove</button>
  </li>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
};
</script>
