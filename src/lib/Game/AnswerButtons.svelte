<script lang="ts">
  const buttonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
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
