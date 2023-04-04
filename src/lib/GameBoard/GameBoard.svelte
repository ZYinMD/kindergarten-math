<script lang="ts">
  import { settings } from '../GameSettings/$settings';
  import { correctCounter, currentQuestion } from '../questions/$progress';
  import AnswerButtons from './AnswerButtons.svelte';
  import NewButton from './NewButton.svelte';
  import Question from './Question.svelte';
  import Score from './Score.svelte';
  import Success from './Success.svelte';
</script>

<div class="self">
  <Score />
  <NewButton />

  {#if $correctCounter >= $settings.numQuestions}
    <Success />
  {:else if !$currentQuestion}
    <div>nothing to display, shouldn't happen</div>
  {:else}
    <Question />
    <AnswerButtons />
  {/if}
</div>

<style>
  .self {
    display: grid;
    grid:
      'score new-button' 40px
      'question question' 100px
      'answer-buttons answer-buttons' 200px
      /
      auto auto;
  }
</style>
