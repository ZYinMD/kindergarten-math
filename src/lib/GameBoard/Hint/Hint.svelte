<script lang="ts">
  import Tiles from './Tiles.svelte';
</script>

<div class="container">
  <Tiles />
  <div class="button">
    <button> 提示 </button>
  </div>
</div>

<style>
  .container {
    grid-area: hint;
    display: grid;
    grid:
      'tiles' auto
      'button' 3vw
      /
      auto;
  }
  .button {
    grid-area: button;
    display: grid;
    place-items: center;
  }
  button {
    font-size: 1.4vw;
    border: none;
    padding: 0.4vw 0.8vw 0.3vw;
    color: #aaa;
    background-color: transparent;
  }
</style>
