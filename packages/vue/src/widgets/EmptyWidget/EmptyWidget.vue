<script setup lang="ts">
import { usePrefix } from '../../hooks';
import { IconWidget } from '../IconWidget/';

const prefix = usePrefix('empty-widget')


</script>


<template>
  <div :class="prefix">
    <div :class="prefix + '-animations'">
      <IconWidget infer="DragLeftSourceAnimation" shadow :size="220"></IconWidget>
      <IconWidget infer="BatchDragAnimation" shadow :size="220"></IconWidget>
    </div>
    <div :class="prefix + '-hotkeys-list'">
      <div>
        Selection
        <IconWidget infer="Command" /> + Click /
        <IconWidget infer="Shift" /> + Click /
        <IconWidget infer="Command" /> + A
      </div>
      <div>
        Copy
        <IconWidget infer="Command" /> + C / Paste
        <IconWidget infer="Command" /> + V
      </div>
      <div>
        Delete
        <IconWidget infer="BackspaceOutline" />
      </div>
    </div>
  </div>
</template>


<style scoped></style>