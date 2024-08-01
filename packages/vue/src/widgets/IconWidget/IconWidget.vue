<script setup lang="ts">
import { GlobalRegistry } from '@designable/core';
import { computed, defineCustomElement, h, nextTick, ref } from 'vue';
import { useLayout, usePrefix } from '../..';
const prefix = usePrefix('icon-widget')
const layout = useLayout()!

interface IconProps {
  infer?: string
  size?: number;
  color?: string,
  shadow?: boolean
}

const defaultSize = 16
const props = withDefaults(defineProps<IconProps>(), {
  size: defaultSize,
  shadow: false
})

const hyphenateRE = /\B([A-Z])/g
const hyphenate = (str: string) =>
  str.replace(hyphenateRE, '-$1').toLowerCase()



const iconEl = ref(null)

const Icon = computed(() => {
  const infer = props.infer ? GlobalRegistry.getDesignerIcon(props.infer) : null
  if (!props.shadow) return h('svg', { width: props.size, height: props.size, style: `fill:currentColor;`, viewBox: '0 0 24 24' }, [h('path', { d: infer })])

  let content: string
  const hyphenateInfer = hyphenate(props.infer!)

  if (content = infer[layout.theme!].shadow) {
    nextTick(() => {
      const customElement = document.querySelector(hyphenateInfer)
      const shadowRoot = customElement?.attachShadow({ mode: 'open' })
      shadowRoot!.innerHTML = `<svg viewBox="0 0 1024 1024" style="width:${props.size};height:${props.size}">${content}</svg>`
    })
  }

  return hyphenateInfer

})

</script>


<template>
  <span :class="prefix" :style="{ color: color }" ref="iconEl">
    <component :is="Icon"></component>
  </span>

</template>


<style scoped></style>