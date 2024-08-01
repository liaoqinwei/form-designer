import { mergeConfig, defineConfig } from 'vite';
import config from "../../vite.config"


export default mergeConfig(config, defineConfig({}))