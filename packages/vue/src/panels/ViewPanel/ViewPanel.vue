<script setup lang="ts">
import { ITreeNode, WorkbenchTypes } from '@designable/core'
import { useWorkbench, useTree, usePrefix } from '../../hooks'
import { Viewport } from '../../container'

const prefix = usePrefix('view-panel')
const props = defineProps<{ type?: WorkbenchTypes }>()
const workbench = useWorkbench()
const tree = useTree()!

const getVisible = () => {
  return workbench.type === props.type
}
const hasContent = () => {
  return !!tree?.firstChild
}

const fromTree = (payload: ITreeNode) => {
  tree.from(payload)
  tree.takeSnapshot()
}
</script>


<template>
  <div :class="prefix" v-if="props.type === 'DESIGNABLE'">
    <Viewport :hasContent="hasContent()">
      <slot :tree="tree" :fromTree="fromTree"></slot>
    </Viewport>
  </div>
  <div v-else :class="prefix">
    <slot v-if="getVisible()" :tree="tree" :fromTree="fromTree"></slot>
  </div>

</template>


<style scoped></style>