<script setup lang="ts">
import { computed, provide } from 'vue'
import { WORKSPACE } from '../provides';
import { useWorkbench } from '../hooks/useWorkbench';

const props = defineProps<{
  id?: string,
  title?: string,
  description?: string
}>()

const workbench = useWorkbench()

const workspace = computed(() => {
  if (!workbench) return
  const workspace = {
    id: props.id || 'index',
    title: props.title,
    description: props.description
  }

  return workbench.ensureWorkspace(workspace)
})

provide(WORKSPACE, workspace)
</script>


<template>
  <slot></slot>
</template>


<style scoped></style>