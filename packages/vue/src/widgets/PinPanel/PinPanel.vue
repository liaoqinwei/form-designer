<script setup lang="ts">
import { ref } from 'vue';
import { usePrefix } from '../../hooks';
import { IconWidget } from '../IconWidget';
import { TextWidget } from '..';


const props = defineProps<{ title?: string }>()

const prefix = usePrefix('pin-panel')


const isFixed = ref(false)

function onPinClick() {
  isFixed.value = !isFixed.value
}
</script>


<template>
  <div :class="{ [prefix]: true, [prefix + '-fixed']: isFixed }">
    <slot name="header">
      <div :class="prefix + '-header'">
        <div :class="prefix + '-header-title'">
          <TextWidget>{{ title }}</TextWidget>
        </div>
        <div :class="prefix + '-header-action'">
          <IconWidget :infer="isFixed ? 'Pin' : 'PinOutline'" :size="16" @click="onPinClick"></IconWidget>
          <IconWidget infer="Close" :size="16"></IconWidget>
        </div>
      </div>
    </slot>

    <div :class="prefix + '-container'">
      <slot></slot>
    </div>
  </div>
</template>


<style scoped></style>