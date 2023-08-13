<script lang="ts">
  import Tile from './Tile.svelte';
  const array1to10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<!-- @component a hint row of 10 boxes -->
<div class="self">
  {#each array1to10 as number (number)}
    <Tile {number} />
  {/each}
</div>

<style>
  .self {
    display: flex;
  }
</style>
