<script lang="ts">
  import { settings } from '../GameSettings/$settings';
  import { correctCounter } from '../questions/$progress';
</script>

<div>Score: {$correctCounter} / {$settings.numQuestions}</div>

<style>
</style>
