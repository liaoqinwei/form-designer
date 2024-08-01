import { inject } from "vue"
import { ENGINE_SYMBOL } from "../provides"
import { Engine } from "@designable/core"

export const useDesigner = (): Engine => {
  return inject<Engine>(ENGINE_SYMBOL)!
}