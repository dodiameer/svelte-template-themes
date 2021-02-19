<script>
  import varToCss from "./utils/varToCss";
  import { currentTheme } from "./stores/currentTheme";
  import flattenTheme from "./utils/flattenTheme";
</script>

<div
  use:varToCss="{{
    prefix: 'theme',
    variables: { ...flattenTheme($currentTheme) },
  }}">
  <slot />
</div>
