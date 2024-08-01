import { useLayout } from "./useLayout"

export const usePrefix = (after:string):string => {
  return useLayout().prefixCls + '-' + after
}