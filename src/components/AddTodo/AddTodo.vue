<template>
  <div class="new-task">
    <button class="btn new-task__btn" @click="showModal = !showModal">
      Добавить новую задачу
    </button>
    <transition name="fade">
      <div :class="{ overlay: showModal }" v-if="showModal">
        <form @submit.prevent="addTodo" class="new-task__form modal">
          <label class="label"
            >Название задачи:
            <input class="input" type="text" v-model="titleTask" required />
          </label>
          <label class="label" v-if="groupsName.length">Добавить в группу:
            <select class="new-task__group-name select"  v-model.trim="groupName">
              <option value="new-task">Нераспределенные задачи</option>
              <option
                :value="name.titleGroup"
                :key="i"
                v-for="(name, i) in groupsName"
                >{{name.titleGroup}}
              </option>
            </select>
          </label>
          <div v-else class="new-task__no-groups">
              (Группы отсутствуют, пожалуйста создайте новую)
            </div>
          <label class="label">Описание задачи:
            <textarea name="description" v-model="description"></textarea>
          </label>
          <div class="btn-group">
            <button class="btn" type="submit">Добавить задачу</button>
            <button class="btn" @click="showModal = false">Закрыть</button>
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script src="./AddTodo.js"></script>

<style lang="scss">
@import "./AddTodo.scss";
</style>
