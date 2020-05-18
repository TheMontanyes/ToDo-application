<template>
<div class="new-group">
  <button class="btn btn-new-group" @click="showModal = !showModal">Создать группу задач</button>
  <div :class="{'overlay': showModal}" v-if="showModal">
    <form @submit.prevent="addGroup" class="new-task__group modal">
      <label class="label">Название группы:
      <input class="input" type="text" v-model="titleGroup" required v-focus maxlength="60">
      </label>
      <div class="btn-group">
        <button class="btn" type="submit">Создать</button>
        <button class="btn" @click="showModal = false">Закрыть</button>
      </div>
    </form>
  </div>
</div>
</template>

<script src="./AddGroup.js"></script>

<style lang="scss">
  @import './AddGroup.scss';
</style>
