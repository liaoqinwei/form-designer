<script setup lang="ts">
import { ElButton, ElButtonGroup } from 'element-plus';
import { IconWidget } from "../IconWidget"
import { usePrefix } from '../../hooks';


const prefix = usePrefix('designer-tools')

</script>


<template>
  <div :class="prefix">
    <ElButtonGroup>
      <ElButton size="small">
        <IconWidget infer="Undo"></IconWidget>
      </ElButton>
      <ElButton size="small">
        <IconWidget infer="Redo"></IconWidget>
      </ElButton>
    </ElButtonGroup>

    <ElButtonGroup>
      <ElButton size="small">
        <IconWidget infer="CursorMove"></IconWidget>
      </ElButton>
      <ElButton size="small">
        <IconWidget infer="SelectDrag"></IconWidget>
      </ElButton>
    </ElButtonGroup>

    <ElButtonGroup>
      <ElButton size="small">
        <IconWidget infer="Laptop"></IconWidget>
      </ElButton>
      <ElButton size="small">
        <IconWidget infer="Phone"></IconWidget>
      </ElButton>
      <ElButton size="small">
        <IconWidget infer="Responsive"></IconWidget>
      </ElButton>
    </ElButtonGroup>
  </div>
</template>


<style scoped></style>