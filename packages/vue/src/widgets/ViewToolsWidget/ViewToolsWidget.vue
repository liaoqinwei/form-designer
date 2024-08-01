<script setup lang="ts">
import { ElButton, ElButtonGroup } from 'element-plus';
import { IconWidget } from "../IconWidget"

</script>


<template>
  <div>
    <ElButtonGroup>
      <ElButton size="small">
        <IconWidget infer="Palette"></IconWidget>
      </ElButton>
      <ElButton size="small">
        <IconWidget infer="CodeJson"></IconWidget>
      </ElButton>
      <ElButton size="small">
        <IconWidget infer="PlayOutline"></IconWidget>
      </ElButton>
    </ElButtonGroup>
  </div>
</template>


<style scoped></style>