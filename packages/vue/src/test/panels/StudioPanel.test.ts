// @vitest-environment happy-dom
import { mount } from "@vue/test-utils"
import { describe, test, expect } from 'vitest'
import { StudioPanel } from "../../panels"

describe("test panel 'StduioPanel'", () => {
  test('slots function', () => {
    const wrapper = mount(StudioPanel,
      {
        slots: {
          action: () => 'aaaa',
          default:() => 'bbb'
        }
      }
    )

    expect( wrapper.get('.lq-studio-header-action').text()).toBe('aaaa')


  })
})