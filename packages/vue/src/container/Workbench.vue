<script setup lang="ts">
import Workspace from './Workspace.vue';
import {useWorkbench} from "../hooks/useWorkbench"

const workbench = useWorkbench()
</script>


<template>
  <Workspace :id="workbench.currentWorkspace.id" >
    <slot></slot>
  </Workspace>
</template>


<style scoped>
</style>