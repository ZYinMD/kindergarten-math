<script lang="ts">
  import { currentView } from '../../$app';
</script>

<!-- @component the "new" button on the top right -->
<button
  class="container"
  on:click={() => {
    currentView.set('gameSettings');
  }}>New</button
>

<style>
  .container {
    grid-area: the-new-button;
    justify-self: end;
    font-size: 1.4vw;
    border: 1px solid #aaa;
    border-radius: 0.3vw;
    padding: 0.4vw 0.8vw 0.3vw;
    color: #aaa;
    margin-right: 4vw;
    background-color: transparent;
  }
</style>
