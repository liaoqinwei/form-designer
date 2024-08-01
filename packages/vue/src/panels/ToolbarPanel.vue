<script setup lang="ts">
import { usePrefix } from '../hooks/usePrefix'

const prefix = usePrefix('toolbar-panel')
</script>



<template>
  <div :class="prefix">
    <slot></slot>
  </div>
</template>


<style scoped></style>