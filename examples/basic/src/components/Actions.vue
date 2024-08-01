<script setup lang="ts">
import { GlobalRegistry } from '@designable/core';
import { ref } from 'vue';

const supportLocales = ['zh-cn', 'en-us', 'ko-kr']

if (!supportLocales.includes(GlobalRegistry.getDesignerLanguage())) {
  GlobalRegistry.setDesignerLanguage('zh-cn')
}

const langurage = ref(GlobalRegistry.getDesignerLanguage())

function onLanguageChange(val:unknown){
  GlobalRegistry.setDesignerLanguage(val as string)
}
</script>


<template>
  <ElRadioGroup v-model="langurage" @change="onLanguageChange">
    <ElRadioButton label="中文" value="zh-cn"></ElRadioButton>
    <ElRadioButton label="英文" value="en-us"></ElRadioButton>
    <ElRadioButton label="韩文" value="ko-kr"></ElRadioButton>
  </ElRadioGroup>
</template>


<style scoped></style>