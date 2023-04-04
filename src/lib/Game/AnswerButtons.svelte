<script lang="ts">
  import { settings } from '../GameSettings/$settings';

  $: numButtons = Math.ceil($settings.maxNumberAllowed / 10) * 10;
  $: buttonArray = Array(numButtons)
    .fill(null)
    .map((item, index) => index + 1);
</script>

<section>
  {#each buttonArray as button (button)}
    <button
      on:click={() => {
        console.log(`button ${button} clicked`);
      }}
    >
      {button}
    </button>
  {/each}
</section>

<style>
</style>
