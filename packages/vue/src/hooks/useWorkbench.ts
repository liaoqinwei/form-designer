import { Workbench } from "@designable/core";
import { useDesigner } from "./useDesigner";

export const useWorkbench = ():Workbench=>{
  return useDesigner().workbench
}