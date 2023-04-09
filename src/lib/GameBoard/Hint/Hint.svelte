<script lang="ts">
  import Tiles from './Tiles.svelte';
</script>

<div class="self">
  <div class="button">
    <button> 提示 </button>
  </div>
  <Tiles />
</div>

<style>
  .self {
    grid-area: hint;
    display: grid;
    grid:
      'button' 4vw
      'tiles' auto
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
