<script setup>
import { formatDate } from '../utils'
import { defineProps } from 'vue'

const { todoList } = defineProps(['todoList'])
</script>

<template>
  <p v-if="todoList.length === 0" class="text-black flex justify-center items-center h-5 py-5">
    No Task Found!
  </p>
  <ul v-else class="divide-y divide-gray-200 px-4">
    <li v-for="(item, index) in todoList" :key="index" class="py-4">
      <div class="flex items-center">
        <input
          :id="index"
          :name="index"
          type="checkbox"
          class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          :checked="item.isCompleted"
          @change="$emit('handleStatus', index)"
        />
        <label
          :for="index"
          :class="`ml-3 ${item.isCompleted ? 'line-through' : ''} flex justify-between w-full text-gray-900 items-center`"
        >
          <div
            class="mr-2 whitespace-nowrap overflow-hidden overflow-ellipsis inline-block max-w-[250px]"
          >
            <span class="text-lg font-medium">{{ item.name }}</span>
          </div>

          <div class="flex justify-center items-center">
            <span class="mr-1 text-sm font-light text-gray-500">{{
              formatDate(item.createdAt)
            }}</span>
            <span
              @click.prevent="$emit('updateClick', item.name, index)"
              class="w-8 p-2 hover:bg-gray-200 rounded-full cursor-pointer"
            >
              <svg viewBox="0 0 512 512">
                <path
                  d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                />
              </svg>
            </span>
            <span
              @click.prevent="$emit('handleDelete', index)"
              class="w-8 p-2 hover:bg-gray-200 rounded-full cursor-pointer"
            >
              <svg viewBox="0 0 448 512">
                <path
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </span>
          </div>
        </label>
      </div>
    </li>
  </ul>
</template>
