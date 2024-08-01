import { useWorkspace } from "./useWorkspace"

export const useViewport = () => {
  return useWorkspace()?.viewport
}