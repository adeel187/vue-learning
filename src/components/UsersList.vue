<template>
  <div>
    <ul>
      <li v-for="(todo, index) in todoList" :key="index">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const todoList = ref([
      { text: 'Learn Vue.js', done: false },
      { text: 'Build a project', done: false },
      { text: 'Celebrate success', done: false }
    ])
    return { todoList }
  }
}
</script>
