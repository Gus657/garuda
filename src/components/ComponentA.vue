<script setup lang="ts">
interface Props {
  msg: string
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    Hello Gus! <span class="icon-heart" style="color:tomato"></span>
  </div>
</template>
