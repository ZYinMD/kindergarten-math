<script lang="ts">
  import { settings } from '../GameSettings/$settings';
  import { correctCounter } from '../questions/$progress';
</script>

<div class="self">
  进度: {$correctCounter} / {$settings.numQuestions}
</div>

<style>
  .self {
    grid-area: score;
    font-size: 2.3vw;
    color: grey;
    margin-left: 4vw;
  }
</style>
