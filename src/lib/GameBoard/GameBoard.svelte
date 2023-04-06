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
      'score new-button' 60px
      'question question' 150px
      'answer-buttons answer-buttons' 250px
      /
      auto auto;
    align-items: end;
  }
</style>
