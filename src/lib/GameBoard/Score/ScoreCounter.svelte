<script lang="ts">
  import { settings } from '../../GameSettings/$settings';
  import { correctCounter } from '../../questions/$progress';
  import ScoreFlasher from './ScoreFlasher.svelte';
</script>

<div class="self">
  <div class="counter">进度: {$correctCounter} / {$settings.numQuestions}</div>
  <ScoreFlasher />
</div>

<style>
  .self {
    grid-area: score;
    font-size: 2.3vw;
    color: grey;
    margin-left: 4vw;
    display: grid;
    justify-self: start;
    grid:
      'counter flasher' 5vw
      /
      auto auto;
    column-gap: 2vw;
  }
  .counter {
    grid-area: counter;
    justify-self: start;
    align-self: end;
  }
</style>
