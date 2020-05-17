<template>
  <li>
    <h3>
		{{ card.titleGroup }}
    </h3>
    <button @click="$emit('remove-card', index)">remove</button>
  </li>
</template>

<script src="./GroupItem.js"></script>
