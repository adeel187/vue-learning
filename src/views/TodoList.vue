<script setup>
import { ref } from "vue";
import TaskList from "../components/TaskList.vue";
import { useTodoList } from "@/store/useTodoList";
import { storeToRefs } from "pinia";

const selectedIndex = ref(null);

const { inputVal, todoList } = storeToRefs(useTodoList());
const { addItem, handleStatus, deleteTask, updateTask } = useTodoList();
const store = useTodoList();

const handleFormSubmit = () => {
  // In a future we will impelement form Validation
  if (!inputVal.value.trim()) return;
  if (selectedIndex.value !== null) {
    handleSave();
  } else {
    onSubmit();
  }
};

const onSubmit = () => {
  addItem();
};

const handleSave = () => {
  updateTask(selectedIndex.value);
  handleCancel();
};

const updateClick = (name, index) => {
  selectedIndex.value = index;
  store.inputVal = name;
};

const handleCancel = () => {
  selectedIndex.value = null;
  store.inputVal = "";
};

const handleDelete = (index) => {
  const confirmDelete = confirm("Are you sure you want to delete this item?");
  if (confirmDelete) {
    deleteTask(index);
  }
};
</script>

<template>
  <div
    class="max-w-md w-[500px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16"
  >
    <div class="px-4 py-2">
      <h1 class="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
    </div>
    <form
      @submit.prevent="handleFormSubmit"
      class="w-full max-w-md mx-auto px-4 py-2"
    >
      <div class="flex items-center border-b-2 border-teal-500 py-2">
        <input
          class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add a task"
          v-model="inputVal"
        />
        <common-button
          v-if="selectedIndex === null"
          :disabled="inputVal === ''"
          text="Add"
          type="'submit'"
        />
        <div v-else :class="`flex space-x-2 ${!inputVal ? 'hidden' : 'block'}`">
          <span
            @click="handleSave"
            class="w-8 p-2 hover:bg-gray-200 rounded-full cursor-pointer"
            ><svg viewBox="0 0 448 512">
              <path
                d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
              /></svg
          ></span>
          <span
            @click="handleCancel"
            class="w-8 p-2 hover:bg-gray-200 rounded-full cursor-pointer"
            ><svg viewBox="0 0 384 512">
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              /></svg
          ></span>
        </div>
        <input :disabled="!inputVal" class="hidden" type="submit" />
      </div>
    </form>
    <TaskList
      :todoList="todoList"
      @handleStatus="handleStatus"
      @updateClick="updateClick"
      @handleDelete="handleDelete"
    />
  </div>
</template>
