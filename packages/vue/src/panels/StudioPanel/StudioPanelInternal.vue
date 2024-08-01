<script setup lang="ts">
import { usePrefix } from "../../hooks/usePrefix"
import { defineSlots } from 'vue'
import { StudioPanelSlot } from "../../types";

const slots = defineSlots<StudioPanelSlot>()
const prefix = usePrefix('studio-panel')

</script>


<template>
  <div :class="[prefix + '-container']">
    <div :class="prefix + '-header'" v-if="slots.action || slots.logo">
      <div :class="prefix + '-header-logo'">
        <slot name="logo"></slot>
      </div>
      <div :class="prefix + '-header-action'">
        <slot name="action"></slot>
      </div>
    </div>
    <div :class="`${prefix}-content`">
      <slot></slot>
    </div>
  </div>
</template>


<style scoped></style>