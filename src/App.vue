<script setup>
import { RouterView } from "vue-router";
import { provide, reactive } from "vue";

const userData = reactive({
  name: "Adeel",
  designation: "SSE",
  location: "Remote",
});
provide("userData", userData);
</script>

<template>
  <router-view name="header"> </router-view>
  <div class="flex space-x-2 justify-center">
    <router-view class="w-[20%]" name="sidebar"> </router-view>
    <router-view class="w-full" />
  </div>
  <router-view name="footer"> </router-view>
</template>
