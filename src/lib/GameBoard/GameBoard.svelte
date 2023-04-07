<script lang="ts">
  import { settings } from '../GameSettings/$settings';
  import { correctCounter, currentQuestion } from '../questions/$progress';
  import AllAnswerButtons from './AnswerButtons/AllAnswerButtons.svelte';
  import Question from './Question/Question.svelte';
  import Score from './Score.svelte';
  import Success from './Success.svelte';
  import TheNewButton from './TheNewButton.svelte';
</script>

<div class="self">
  <Score />
  <TheNewButton />

  {#if $correctCounter >= $settings.numQuestions}
    <Success />
  {:else if !$currentQuestion}
    <div>nothing to display, shouldn't happen</div>
  {:else}
    <Question />
    <AllAnswerButtons />
  {/if}
</div>

<style>
  .self {
    display: grid;
    grid:
      'score the-new-button' min(7vw, 12vh)
      'question question' min(14vw, 20vh)
      'answer-buttons answer-buttons' min(23vw, 40vh)
      /
      auto auto;
    align-items: end;
  }
</style>
