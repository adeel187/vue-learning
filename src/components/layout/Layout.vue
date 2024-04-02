<template>
  <div>
    <Header v-if="layout.header" />
    <div class="flex space-x-2">
      <div v-if="layout.sidebar" class="w-[200px]">
        <SideBar />
      </div>
      <router-view />
    </div>
    <Footer v-if="layout.footer" />
  </div>
</template>

<script setup>
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";

const { layout } = defineProps(["layout"]);
</script>
