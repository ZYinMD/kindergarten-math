<script lang="ts">
  import { currentView } from '../../$app';
</script>

<div class="self">
  <button
    on:click={() => {
      currentView.set('gameSettings');
    }}>New</button
  >
</div>

<style>
  .self {
    grid-area: new-button;
    align-self: center;
    justify-self: end;
  }
</style>
