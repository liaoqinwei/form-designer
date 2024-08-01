<script setup lang="ts">
import { defineComponent, h } from "vue";
import Layout from "../../container/Layout.vue"
import { LayoutProps, StudioPanelSlot } from "../../types";
import _StudioPanelInternal from "./StudioPanelInternal.vue";

const props = defineProps<{ theme?: LayoutProps }>()

const slots = defineSlots<StudioPanelSlot>()

const StudioPanelInternal = defineComponent({
  setup() {
    return () => h(_StudioPanelInternal, null, { ...slots })
  }
})
</script>


<template>
  <Layout :thme="theme">
    <StudioPanelInternal></StudioPanelInternal>
  </Layout>

</template>


<style scoped></style>