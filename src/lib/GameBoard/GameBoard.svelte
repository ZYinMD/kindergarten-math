<script lang="ts">
  import { settings } from '../GameSettings/$settings';
  import { correctCounter, currentQuestion } from '../questions/$progress';
  import AllAnswerButtons from './AnswerButtons/AllAnswerButtons.svelte';
  import Question from './Question/Question.svelte';
  import Score from './Score/ScoreCounter.svelte';
  import Victory from './Victory.svelte';
  import TheNewButton from './TheNewButton.svelte';
  import Hint from './Hint/Hint.svelte';
</script>

<div class="self">
  <Score />
  <TheNewButton />

  {#if $correctCounter >= $settings.numQuestions}
    <Victory />
  {:else if !$currentQuestion}
    <div>nothing to display, shouldn't happen</div>
  {:else}
    <Question />
    <AllAnswerButtons />
    <Hint />
  {/if}
</div>

<style>
  .self {
    display: grid;
    padding-top: min(2vw, 2vh);
    grid:
      'score the-new-button' min(7vw, 12vh)
      'question question' min(14vw, 20vh)
      'answer-buttons answer-buttons' min(23vw, 42vh)
      'hint hint' min(14vw, 40vh)
      /
      auto auto;
    place-items: center;
  }
</style>
