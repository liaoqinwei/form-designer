<script setup lang="ts">
import { provide } from 'vue'
import { LAYOUT } from '../provides'
import type { LayoutProps } from "../types"


const props = withDefaults(defineProps<LayoutProps>(), {
  theme: 'light',
  prefixCls: 'lq'
})

provide(LAYOUT, props)
</script>


<template>
  <div :class="[prefixCls + '-layout', prefixCls + '-light']">
    <slot></slot>

  </div>
</template>


<style scoped></style>