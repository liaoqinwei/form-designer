<script setup lang="ts">
import { Engine, GlobalRegistry } from "@designable/core"
import { provide } from "vue";
import { ENGINE_SYMBOL } from "../provides"

import * as icons from "../icons"

GlobalRegistry.registerDesignerIcons(icons)

const props = defineProps<{ engine: Engine }>()

provide(ENGINE_SYMBOL, props.engine)

</script>


<template>
  <slot></slot>
</template>


<style scoped></style>