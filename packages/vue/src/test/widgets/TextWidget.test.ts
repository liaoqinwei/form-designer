// @vitest-environment happy-dom
import { mount } from "@vue/test-utils"
import { describe, test, expect } from 'vitest'
import {TextWidget} from "../../index"

import { GlobalRegistry } from "@designable/core"
import { nextTick } from "vue"

GlobalRegistry.setDesignerLanguage('zh-cn')

GlobalRegistry.registerDesignerLocales({
  'zh-CN': {
    sources: {
      Inputs: '输入控件',
      Displays: '展示控件',
      Feedbacks: '反馈控件',
    },
  },
  'en-US': {
    sources: {
      Inputs: 'Inputs',
      Displays: 'Displays',
      Feedbacks: 'Feedbacks',
    },
  },
  'ko-KR': {
    sources: {
      Inputs: '입력',
      Displays: '디스플레이',
      Feedbacks: '피드백',
    },
  },
})

describe("test widget 'TextWidget'", () => {
  test("'TextWidget' slot test", async () => {
    const wrapper = mount(TextWidget, {
      slots: {
        default:
          'sources.Inputs'
      }
    })

    expect(wrapper.get('span').text()).toBe('输入控件')
    
    GlobalRegistry.setDesignerLanguage('en-us')

   await  nextTick()

   expect(wrapper.get('span').text()).toBe('Inputs')


  
  })
})