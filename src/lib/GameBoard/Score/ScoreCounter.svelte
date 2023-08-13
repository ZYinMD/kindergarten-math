<script lang="ts">
  import { settings } from '../../GameSettings/$settings';
  import { correctCounter } from '../../questions/$progress';
  import ScoreFlasher from './ScoreFlasher.svelte';
</script>

<!-- @component the score shown on the top left -->
<div class="container">
  <div class="counter">Progress: {$correctCounter} / {$settings.numQuestions}</div>
  <ScoreFlasher />
</div>

<style>
  .container {
    grid-area: score;
    font-size: 2.3vw;
    color: grey;
    margin-left: 4vw;
    display: grid;
    justify-self: start;
    align-items: center;
    grid:
      'counter flasher' 5vw
      /
      auto auto;
    column-gap: 2vw;
  }
  .counter {
    grid-area: counter;
    justify-self: start;
  }
</style>
