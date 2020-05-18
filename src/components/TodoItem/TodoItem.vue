<template>
  <transition name="fade">
    <div class="todo-item">
      <h3 class="todo-title">
        {{ index + 1 }}. {{ todo.titleTask }}
      </h3>
      <p v-if="todo.description" class="todo-descripion">
        {{ todo.description }}
      </p>
      <div class="btn-group">
        <label
          class="btn-small label-status"
          :class="todo.completed ? 'todo-completed' : 'todo-not-completed'"
        >
        {{ todo.completed ? "Выполнено" : "Не выполнено" }}
        <input
          type="checkbox"
          @change="todo.completed = !todo.completed"
          :checked="todo.completed"
          class="checkbox"
        />
        </label>
        <button class="btn btn-small" @click="showDialog = !showDialog">Удалить задачу</button>
      </div>
      <div class="btn-group" v-if="groupsName.length">
        <button class="btn btn-small"
        @click="$emit('add-todo', todo), todo.groupName !== 'all' ? $emit('delete-todo', index) : false">
        Переместить в выбранную группу</button>
        <select class="select move-todo" @change="moveTodo" v-model.trim="groupName">
          <option value="all" selected>Нераспределенные задачи</option>
          <option
            :value="name.titleGroup"
            :key="i"
            v-for="(name, i) in groupsName"
            >{{name.titleGroup.trim()}}
          </option>
        </select>
      </div>
      <transition name="fade">
        <div class="overlay" v-if="showDialog">
          <div class="modal modal-dialog">
            <h3 class="modal-dialog-title title">Вы действительно хотите удалить задачу?</h3>
            <p class="description">- {{ todo.titleTask || todo.title }}</p>
            <div class="btn-group justify">
              <button class="btn" @click="$emit('delete-todo', index), showDialog = false">Да</button>
              <button class="btn" @click="showDialog = false">Нет</button>
            </div>
          </div>
        </div>      
      </transition>
    </div>
  </transition>
</template>

<script src="./TodoItem.js"></script>

<style lang="scss">
@import "./TodoItem.scss";
</style>
