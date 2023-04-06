<script lang="ts">
  import { settings } from '../GameSettings/$settings';
  import { correctCounter } from '../questions/$progress';
</script>

<div class="self">
  Score: {$correctCounter} / {$settings.numQuestions}
</div>

<style>
  .self {
    grid-area: score;
  }
</style>
