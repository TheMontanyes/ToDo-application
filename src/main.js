import Vue from 'vue'
import 'reset-css'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import GroupCards from '@/components/GroupCards/GroupCards.vue'
import TodoList from '@/components/TodoList/TodoList.vue'
import TodoItem from "@/components/TodoItem/TodoItem.vue"
import AddGroup from '@/components/AddGroup/AddGroup.vue'
import AddTodo from '@/components/AddTodo/AddTodo.vue'
import GroupItem from "@/components/GroupItem/GroupItem.vue"

Vue.component('GroupCards', GroupCards)
Vue.component('GroupItem', GroupItem)
Vue.component('TodoList', TodoList)
Vue.component('TodoItem', TodoItem)
Vue.component('AddGroup', AddGroup)
Vue.component('AddTodo', AddTodo)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
