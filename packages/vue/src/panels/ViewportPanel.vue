<script setup lang="ts">
import { usePrefix } from '..';
import { Simulator } from '../container/Simulator';

const prefix = usePrefix('viewport-panel')

</script>


<template>
  <div :class="prefix">
    <Simulator>
      <slot></slot>
    </Simulator>
  </div>
</template>


<style scoped></style>