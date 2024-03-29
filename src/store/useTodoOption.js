import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoOption = defineStore("todoListOption", () => {
  const todoList = ref([]);
  const inputVal = ref("");

  function addItem() {
    const prev = [...todoList.value];
    const newItem = {
      name: inputVal.value,
      createdAt: new Date(),
      isCompleted: false,
    };
    todoList.value = [...prev, newItem];
    inputVal.value = "";
  }
  function handleStatus(index) {
    todoList.value[index].isCompleted = !todoList.value[index].isCompleted;
  }
  function deleteTask(index) {
    todoList.value.splice(index, 1);
  }
  function updateTask(index) {
    todoList.value[index].name = inputVal.value;
  }

  return { todoList, inputVal, addItem, handleStatus, deleteTask, updateTask };
});
