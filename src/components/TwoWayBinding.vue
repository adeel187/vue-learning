<script setup>
import { ref, reactive } from 'vue'

const inputVal = ref('John')
const checkedNames = ref()

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})
</script>

<template>
  <p>{{ inputVal }}</p>
  <input
    v-model="inputVal"
    class="styled-input"
    :style="{ border: 'none', backgroundColor: 'GrayText', color: 'red' }"
  />
  <ul>
    <li v-for="(value, key, index) in myObject" :key="index">{{ key }} - {{ value }}</li>
  </ul>

  <h1>{{ checkedNames }}</h1>
</template>

<style>
.styled-input {
  border: none;
  background-color: aqua;
  padding: 10px;
  color: chocolate !important;
}
</style>
