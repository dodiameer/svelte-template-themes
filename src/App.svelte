<script>
  import ThemeProvider from "./ThemeProvider.svelte";
  import themes from "./stores/themes";

  export let name;
</script>

<ThemeProvider>
  <main>
    <select bind:value="{$themes.selected}">
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <h1>Hello {name}!</h1>
    <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
    </p>
  </main>
</ThemeProvider>

<style>
  main {
    padding: 1em;
    background: var(--theme-background);
    color: var(--theme-text);
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
  }

  h1 {
    color: var(--theme-green-500);
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
</style>
