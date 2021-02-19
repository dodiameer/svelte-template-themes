<!-- svelte-ignore module-script-reactive-declaration -->
<script context="module">
  /**
   * @typedef {import("../types/ButtonCssValues").default} properties
   * @param {properties["input"]}
   * @returns {properties["output"]}
   */
  function makeCssValues({ textColor, backgroundColor, outlined, pill }) {
    const borderRadius = pill ? "9999px" : "6px";
    const cssBackground = `var(--theme-${backgroundColor})`;
    const cssText = `var(--theme-${textColor})`;

    if (outlined) {
      return {
        background: "transparent",
        color: cssText,
        border: `2px solid ${cssBackground}`,
        "border-radius": borderRadius,
        focus: cssBackground,
      };
    } else {
      return {
        background: cssBackground,
        color: cssText,
        border: `2px solid ${cssBackground}`,
        "border-radius": borderRadius,
        focus: cssBackground,
      };
    }
  }
</script>

<!-- svelte-ignore module-script-reactive-declaration -->
<script>
  import varToCss from "../utils/varToCss";
  export let textColor = "contrast";
  export let background = "transparent";
  export let outlined = false;
  export let pill = false;

  $: variables = makeCssValues({
    textColor,
    outlined,
    pill,
    backgroundColor: background,
  });
</script>

<button use:varToCss="{{ prefix: '', variables }}" {...$$restProps} on:click>
  <slot />
</button>

<style>
  button {
    padding: 0.5rem 1rem;
    background: var(--background);
    color: var(--color);
    border: var(--border);
    border-radius: var(--border-radius);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }
  button:focus,
  button:hover {
    filter: brightness(120%);
  }
  button:focus {
    outline: 1px dashed var(--focus);
    outline-offset: 1px;
  }
  button:disabled {
    background: var(--theme-gray-600);
    color: white;
    cursor: not-allowed;
  }
</style>
