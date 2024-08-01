<script setup lang="ts">
import { usePrefix } from '../hooks';

const prefix = usePrefix('pc-simulator')
</script>


<template>
  <div :class="prefix">
    <slot></slot>
  </div>
</template>


<style scoped></style>