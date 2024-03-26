<script setup>
const { type, className, text } = defineProps({
  type: { type: String },
  className: { type: String },
  text: { type: String }
})
</script>

<template>
  <button
    :class="`${className} disabled:opacity-[0.01] flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded`"
    :type="type ?? 'button'"
    v-bind="$attrs"
  >
    {{ text }}
  </button>
</template>
