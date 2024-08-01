import { WORKSPACE } from './../provides';
import { inject } from "vue"
import { Workspace } from '@designable/core';
import { useDesigner } from '.';

export const useWorkspace = (id?: string): Workspace | undefined => {
  const designer = useDesigner()

  const workspaceId = id || (inject(WORKSPACE, {}) as Workspace)?.id

  if (workspaceId) {
    return designer.workbench.findWorkspaceById(workspaceId)
  }

  return designer.workbench.currentWorkspace
}