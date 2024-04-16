<script>
export default {
  props: ["inputVal"],
  emits: ["updateInputVal"],
  data() {
    return {};
  },
};
</script>

<template>
  <div>
    <label class="text-white" for="childInput">Child Input: </label>
    <input
      id="childInput"
      :value="this.inputVal"
      @input="$emit('updateInputVal', $event.target.value)"
    />
  </div>
</template>
