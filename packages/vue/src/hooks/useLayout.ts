import { inject } from "vue"
import { LAYOUT } from "../provides"
import { LayoutProps } from "../types"

export const useLayout = (): LayoutProps => {
  return inject(LAYOUT)!
}