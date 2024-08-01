import { useOperation } from '.'

export const useTree = (workspaceId?: string) => {
  const operation = useOperation(workspaceId)
  return operation?.tree
}
