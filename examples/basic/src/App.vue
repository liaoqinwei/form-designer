<script setup lang="ts">
//@ts-ignore
import {
  TextWidget, Designer, StudioPanel, IconWidget, PinPanel,
  CompositePanel, CompositePanelItem, WorkspacePanel, ToolbarPanel,
  DesignerToolsWidget, ViewToolsWidget,
  ResourceWidget,
  ViewportPanel, ViewPanel
} from "@designer/vue/src/index"
import { createDesigner, createResource } from "@designable/core"
import { shallowRef } from "vue";
import Actions from "./components/Actions.vue"


const engine = shallowRef(createDesigner())

const Input = createResource({
  title: {
    'zh-CN': '输入框',
    'en-US': 'Input',
    'ko-KR': '입력 상자',
  },
  icon: 'InputSource',
  elements: [
    {
      componentName: 'Field',
      props: {
        title: '输入框',
        type: 'string',
        'x-decorator': 'FormItem',
        'x-component': 'Input',
      },
    },
  ],
})

const Card = createResource({
  title: {
    'zh-CN': '卡片',
    'en-US': 'Card',
    'ko-KR': '카드 상자',
  },
  icon: 'CardSource',
  elements: [
    {
      componentName: 'Card',
      props: {
        title: '卡片',
      },
    },
  ],
})

</script>


<template>
  <Designer :engine="engine">
    <StudioPanel>
      <CompositePanel>
        <CompositePanelItem title="panels.Component" icon="WidgetsOutline">
          <ResourceWidget title="Inputs" :sources="[Input, Card]"></ResourceWidget>
        </CompositePanelItem>
        <CompositePanelItem title="panels.OutlinedTree" icon="FileTreeOutline">
          <span> content2 </span>
        </CompositePanelItem>
        <CompositePanelItem title="panels.History" icon="History">
          <span> content3 </span>
        </CompositePanelItem>
      </CompositePanel>

      <WorkspacePanel>
        <ToolbarPanel>
          <DesignerToolsWidget></DesignerToolsWidget>
          <ViewToolsWidget></ViewToolsWidget>
        </ToolbarPanel>
        <ViewportPanel>
          <ViewPanel type="DESIGNABLE">
          </ViewPanel>
        </ViewportPanel>
      </WorkspacePanel>
      <template #action>
        <Actions></Actions>
      </template>
    </StudioPanel>
  </Designer>
</template>


<style scoped></style>