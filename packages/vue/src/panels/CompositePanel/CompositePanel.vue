<script setup lang="ts">
import { usePrefix } from '../..';
import PinPanel from '../../widgets/PinPanel/PinPanel.vue';
import IconWidget from '../../widgets/IconWidget/IconWidget.vue';
import { ref } from 'vue';

const prefix = usePrefix('composite-panel')

const slots = defineSlots<{ default: () => any[] }>()
const tabItems = slots.default()

const activeVal = ref(0)

</script>


<template>
  <section :class="prefix">
    <div :class="prefix + '-tabs'">
      <div :class="{ [prefix + '-tab']: true, [prefix + '-tab-active']: activeVal === index }"
        @click="activeVal = index" v-for="(item, index) in tabItems">
        <IconWidget :size="24" :infer="item.props.icon as string"></IconWidget>
      </div>
    </div>
    <div :class="prefix + '-content'">
      <PinPanel :title="tabItems[activeVal].props.title as string">
        <component :is="tabItems[activeVal]"></component>
      </PinPanel>
    </div>
  </section>
</template>


<style scoped></style>