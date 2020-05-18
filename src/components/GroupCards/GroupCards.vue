<template>
  <div class="group-cards">
    <GroupItem
      v-for="(card, i) of cards"
      :card="card"
      :index="i"
      :groupsName="cards"
      :key="i"
      @add-todo="addTodo"
      @delete-card="deleteCard"
    />
  </div>
</template>

<script src="./GroupCards.js"></script>

<style lang="scss">
  @import './GroupCards.scss';
</style>
