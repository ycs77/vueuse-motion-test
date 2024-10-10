<template>
  <div class="p-10">
    <button type="button" @click="runMotion" class="px-3.5 py-1 bg-indigo-500 text-white text-sm rounded">
      Run Motion
    </button>

    <div class="mt-8">
      <MotionDemo v-if="showDemo" />
    </div>
  </div>
</template>

<script setup lang="ts">
const showDemo = ref(true)

function runMotion() {
  showDemo.value = false
  setTimeout(() => {
    showDemo.value = true
  }, 100)
}
</script>
