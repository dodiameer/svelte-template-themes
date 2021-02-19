import { derived } from "svelte/store";
import themes from "./themes";

export const currentTheme = derived(themes, ($themes) => {
  return $themes[$themes.selected]
})

export default currentTheme