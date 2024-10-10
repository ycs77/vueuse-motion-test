<template>
  <div ref="block1" class="size-10 bg-rose-500 rounded-md"></div>

  <div class="mt-20 flex gap-x-4">
    <div ref="motionItem1" class="size-10 bg-rose-500 rounded-md"></div>
    <div ref="motionItem2" class="size-10 bg-rose-500 rounded-md"></div>
    <div ref="motionItem3" class="size-10 bg-rose-500 rounded-md"></div>
  </div>
</template>

<script setup lang="ts">
import { useMotion } from '@vueuse/motion'

const block1 = ref() as Ref<HTMLElement>
const motionItem1 = ref() as Ref<HTMLElement>
const motionItem2 = ref() as Ref<HTMLElement>
const motionItem3 = ref() as Ref<HTMLElement>

const { variant } = useMotion(block1, {
  initial: {
    opacity: 0,
    'transform-origin': 'top left',
  },
  visibleOnce: {
    opacity: 1,
    scale: 1,
    transition: {
      onComplete: () => (variant.value = 'custom'),
    },
  },
  custom: {
    scale: 2,
  },
})

;[
  motionItem1,
  motionItem2,
  motionItem3,
].forEach((item, i) => {
  useMotion(item, {
    initial: {
      y: 30,
      opacity: 0,
    },
    visibleOnce: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        delay: 75 * i,
      },
    },
  })
})
</script>
