<template>
  <div class="group-item">
    <div class="group" @click="showModal = !showModal">
      <h3 class="group-title title">{{ card.titleGroup }}</h3>
      <p class="description">Задач в группе: {{filteredGroup.length}}</p>
      <button class="btn">Открыть группу</button>
    </div>
    <div :class="{'overlay': showModal}" v-if="showModal">
      <div class="modal">
          <h3 class="modal-title title">{{ card.titleGroup }}</h3>
          <select class="select" v-model="filterStatus">
            <option value="all">Все задачи</option>
            <option value="completed">Выполненые</option>
            <option value="not-completed">Не выполненые</option>
          </select>
          <input type="text" class="input filter-name" v-model.trim="filterName" placeholder="Потерялась задача?">
          <ul class="group-item__todos" v-if="filteredGroup.length">
            <TodoItem
              v-for="(todo, i) of filteredGroup"
              :todo="todo"
              :index="i"
              :groupsName="groupsName"              
              :key="i"
              @delete-todo="deleteTodo"
              @add-todo="addTodo"
              class="todo-item-modal"
            />
          </ul>
          <p class="title" v-else>Нет задач!</p>
          <div class="btn-group justify">
            <button class="btn" @click="showDialog = !showDialog">Удалить группу</button>
            <button class="btn" @click="showModal = false">Закрыть</button>
          </div>
          <transition name="fade">
            <div class="overlay" v-if="showDialog">
              <div class="modal modal-dialog">
                <h3 class="modal-dialog-title title">Вы действительно хотите удалить группу?</h3>
                <p class="description">- {{card.titleGroup}}</p>
                <div class="btn-group justify">
                  <button class="btn" @click="$emit('delete-card', index), showDialog = false">Да</button>
                  <button class="btn" @click="showDialog = false">Нет</button>
                </div>
              </div>
            </div>      
          </transition>
        </div>
    </div>
  </div>
</template>

<script src="./GroupItem.js"></script>

<style lang="scss">
  @import './GroupItem.scss';
</style>
