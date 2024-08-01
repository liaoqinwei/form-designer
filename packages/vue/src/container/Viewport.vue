<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWorkspace } from "../hooks/useWorkspace"
import { globalThisPolyfill } from '@designable/shared'
import { usePrefix } from "../hooks/usePrefix"
import AuxToolWidget from '../widgets/AuxToolWidget.vue';
import { EmptyWidget } from '../widgets/EmptyWidget';

const props = defineProps<{ hasContent?: boolean }>()

const viewportEl = ref<HTMLDivElement>(null!)
const worksapce = useWorkspace()
const prefix = usePrefix('viewport')

onMounted(() => {
  worksapce?.viewport.onMount(viewportEl.value, globalThisPolyfill)
})

</script>


<template>
  <div ref="viewportEl" :class="prefix">
    <slot></slot>
    <AuxToolWidget />
    <EmptyWidget v-if="!hasContent" />
  </div>
</template>


<style scoped></style>