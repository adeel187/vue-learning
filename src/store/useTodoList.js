import { defineStore } from "pinia";
import { reactive } from "vue";

const initialState = {
  todoList: [],
  inputVal: "",
};

export const useTodoList = defineStore("todoList", {
  state: () => initialState,
  getters: {},
  actions: {
    addItem() {
      const prev = [...this.todoList];
      const newItem = {
        name: this.inputVal,
        createdAt: new Date(),
        isCompleted: false,
      };
      this.todoList = [...prev, newItem];
      this.inputVal = "";
    },
    handleStatus(index) {
      this.todoList[index].isCompleted = !this.todoList[index].isCompleted;
    },
    deleteTask(index) {
      this.todoList.splice(index, 1);
    },
    updateTask(index) {
      this.todoList[index].name = this.inputVal;
    },
  },
});
