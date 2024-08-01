<script setup lang="ts">
import { type IResourceLike, type IResource, type IResourceHost, isResourceList, isResourceHost } from '@designable/core';
import { usePrefix } from '../../hooks'
import { computed, getCurrentInstance, ref } from 'vue'
import { IconWidget } from '../IconWidget';
import { TextWidget } from '../TextWidget';

const props = withDefaults(defineProps<{ title: string, defaultExpand?: boolean, sources?: IResourceLike[] }>(), { sources: [] })

const prefix = usePrefix('resource')

const expand = ref(props.defaultExpand ?? false)


const iSources = computed(() => props.sources.reduce<IResource[]>((buf, source) => {
  if (isResourceList(source)) {
    return buf.concat(source)
  } else if (isResourceHost(source)) {
    return buf.concat((source as IResourceHost).Resource!)
  }
  return buf
}, []))

console.log(iSources)

</script>


<template>
  <div :class="prefix">
    <div :class="prefix + '-expand-wrap'">

      <div :class="prefix + '-expand-head'">
        <IconWidget infer="ChevronRight" :size="16"></IconWidget>
        <TextWidget>{{ title }}</TextWidget>
      </div>

      <div :class="prefix + '-expand-content'">
        <div v-for="item in iSources">
          <IconWidget :infer="item.icon"></IconWidget>
          <TextWidget :token="item.title"></TextWidget>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped></style>