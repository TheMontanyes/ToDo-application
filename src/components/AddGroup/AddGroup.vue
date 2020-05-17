<template>
  <form @submit.prevent="addGroup">
    <label>Название группы
    <input type="text" v-model="titleGroup" required>
    </label>
    <button type="submit">Create group</button>
  </form>
</template>

<script src="./AddGroup.js"></script>
