<script setup lang="ts">
import { ScreenType } from '@designable/core';
import { useScreen } from '../../hooks'
import PcSimulators from '../../simulators/PcSimulators.vue';

const getSimulator = function (screen?: ScreenType) {
  if (!screen) screen = useScreen().type
  if (screen === ScreenType.PC) {
    return PcSimulators
  }
}

</script>


<template>
  <component :is="getSimulator()"> 
    <slot></slot>
  </component>
</template>


<style scoped></style>