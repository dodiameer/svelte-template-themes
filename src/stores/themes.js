import { writable } from "svelte/store";
import themeConfig from "../../ui-theme.config"

export const themes = writable({ ...themeConfig, selected: "light" })

export default themes