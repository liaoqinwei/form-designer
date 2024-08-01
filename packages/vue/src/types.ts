export interface LayoutProps {
  theme?: 'light' | 'dark',
  prefixCls?: string
}


export interface StudioPanelSlot {
  logo?: () => any
  action?: () => any
  default: () => any
}

