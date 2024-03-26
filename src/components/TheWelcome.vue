<script setup>
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  watch,
  watchEffect,
  defineProps,
  defineEmits,
  inject
} from 'vue'

const count = ref(0)
const nameRef = ref(null)

onMounted(() => {
  console.log('componente mounted')
  nameRef.value.focus()
})

onUpdated(() => {
  console.log('component updated ')
})

onUnmounted(() => {
  console.log('component unmounted ')
})

// watch(
//   [count],
//   ([nextCount, prevCount]) => {
//     console.log({ nextCount, prevCount })
//   },
//   { immediate: true, once: true }
// )

watchEffect(() => {
  const testA = count.value
  console.log(count.value)
})

const objectOfAttrs = {
  id: 'container',
  class: 'wrapper'
}

const handleCLick = (event) => console.log(event, 'event')
const handleFormSubmit = (event) => {
  event.preventDefault()
  console.log('submitted')
  sendMessagetoParent()
}

const handleIncrement = () => {
  count.value++
}

const { title } = defineProps({ title: String })
const emits = defineEmits(['update:title'])

const sendMessagetoParent = () => {
  emits('update:title', 'Data from the chils')
}

const userData = inject('userData')
console.log(userData, 'userData')
</script>

<template>
  <form @submit="handleFormSubmit">
    <p v-bind="objectOfAttrs" @click="handleCLick('test')">{{ title }}</p>
    <button @click="handleIncrement" type="button">Total Count {{ count }}</button>
    <input placeholder="Enter your Name" ref="nameRef" />
    <input
      @input="$emit('update:title', 'datafrom the child')"
      type="submit"
      class="focus:outline-none cursor-pointer text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
    />
  </form>
</template>
