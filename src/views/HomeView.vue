<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import UsersList from '../components/UsersList.vue'
import TwoWayBinding from '../components/TwoWayBinding.vue'
import { ref } from 'vue'

const handleUpdate = (data) => console.log(data, 'datafromchild')

const title = ref('Data from the Parent Component')
</script>

<template>
  <main>
    <TheWelcome :title="title" @liftingstate="handleUpdate" />
    <UsersList />
    <TwoWayBinding />
  </main>
</template>
