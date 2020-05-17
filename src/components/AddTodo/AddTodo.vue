<template>
  <div class="new-task">
    <button class="btn new-task__btn" @click="showModal = !showModal">Добавить новую задачу</button>
    <div :class="{'overlay': showModal}" v-if="showModal">
      <form @submit.prevent="addTodo" class="new-task__form modal">
        <label class="label">Название задачи:
        <input class="input" type="text" v-model="titleTask" required>
        </label>
        <label class="label">Добавить к группе задач:
        <input class="input" type="text" v-model="groupName">
        </label>
        <textarea name="description" v-model="description"></textarea>
        <div class="btn-group">
          <button class="btn" type="submit">Создать</button>
          <button class="btn" @click="showModal = false">Отменить</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script src="./AddTodo.js"></script>

<style lang="scss">
  @import './AddTodo.scss';
</style>
