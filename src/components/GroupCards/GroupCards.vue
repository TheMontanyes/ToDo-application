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

<script src="./GroupCards.js"></script>
