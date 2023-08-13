<script lang="ts">
  import Tile from './Tile.svelte';
  const array1to20 = Array(20)
    .fill(0)
    .map((_item, index) => index + 1);
</script>

<!-- @component a hint row of 10 boxes -->
<div class="container">
  <div class="tiles">
    {#each array1to20 as number (number)}
      <Tile {number} />
    {/each}
  </div>
  <div class="divider" />
</div>

<style>
  .container {
    display: grid;
    grid:
      'only' 5vw
      /
      auto;
    place-items: center;
  }
  .tiles {
    grid-area: only;
    display: flex;
  }
  .divider {
    grid-area: only;
    width: 1px;
    height: 5vw;
    background-color: silver;
  }
</style>
