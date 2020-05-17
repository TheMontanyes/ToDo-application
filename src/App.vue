<template>
  <div id="app">
    <Todos/>
    <router-view/>
  </div>
</template>

<script>
import Todos from "@/components/Todos/Todos.vue"

export default {
  components: {
    Todos
  }
}
</script>