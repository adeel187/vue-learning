<script>
import CommonTextField from "../components/CommonTextField.vue";
export default {
  data() {
    return {
      count: 1,
      inputVal: "Testing",
      color: { red: "#FF0000", green: "#228B22" },
    };
  },

  components: { CommonTextField },

  //Way to define the props

  props: ["testProps"],

  //way to define the emits
  emits: ["testEmit"],

  methods: {
    increment() {
      this.count++;
    },
    deccrement() {
      this.count--;
    },
  },

  mounted() {
    this.count++;
    this.$refs.inputRef.focus();
  },

  unmounted() {
    console.log("unmounted Running");
    this.count = 0;
    this.inputVal = "";
  },

  computed: {
    calculateCounterColor() {
      return this.count % 2 === 0 ? this.color.green : this.color.red;
    },
  },

  watch: {
    count(newCount, oldCount) {
      if (newCount === 10) {
        this.count = 0;
      }
    },
  },
};
</script>

<template>
  <div class="flex">
    <div class="flex space-x-2 h-[200px] justify-center items-center">
      <button
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        @click="this.increment"
      >
        increment +
      </button>

      <h1
        :style="{
          color: this.calculateCounterColor,
        }"
        class="text-9xl"
      >
        {{ this.count }}
      </h1>
      <button
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        @click="this.deccrement"
      >
        Decrement -
      </button>
      <div class="flex flex-col">
        <p>{{ inputVal }}</p>
        <input ref="inputRef" class="text-black" v-model="this.inputVal" />
      </div>
    </div>
    <div class="mt-5">
      <CommonTextField
        class="text-black"
        :inputVal="this.inputVal"
        @updateInputVal="(newVal) => (this.inputVal = newVal)"
      />
    </div>
  </div>
</template>
