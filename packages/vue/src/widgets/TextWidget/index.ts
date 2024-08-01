import { observer } from "@formily/reactive-vue"
import _TextWidget from './TextWidget.vue'
export const TextWidget = observer(_TextWidget, {
  name: _TextWidget.name
})