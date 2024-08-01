import { defineConfig, mergeConfig } from 'vite'

import config from "../../vite.build"

export default mergeConfig(config, defineConfig({
  build:{
    lib:{
      name:"Designer",
      fileName:'index',
      formats:['umd','es'],
      entry:"./src/index.ts",
    },
    outDir:"./lib"
  }
}))
