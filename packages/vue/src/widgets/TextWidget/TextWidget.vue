<script setup lang="ts">
import { isStr, isPlainObj } from '@designable/shared'
import { GlobalRegistry, IDesignerMiniLocales } from '@designable/core'

defineProps<{ token?: string | IDesignerMiniLocales }>()

const slots = defineSlots<{ default?: () => any }>()

const takeLocale = (
  message: string | IDesignerMiniLocales
): string | undefined => {
  if (isStr(message)) return message
  if (isPlainObj(message)) {
    const lang = GlobalRegistry.getDesignerLanguage()
    for (let key in message) {
      if (key.toLocaleLowerCase() === lang) return message[key]
    }
    return
  }
  return message
}

const takeMessage = (token: any) => {
  if (!token) return
  const message = isStr(token)
    ? GlobalRegistry.getDesignerMessage(token)
    : token
  if (message) return takeLocale(message)
  return token
}

</script>


<template>
  <span> {{ slots.default ? takeMessage(slots.default?.()[0].children) : takeMessage(token) }} </span>
</template>


<style scoped></style>