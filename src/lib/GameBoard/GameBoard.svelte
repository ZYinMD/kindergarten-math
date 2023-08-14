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

<div class="container">
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
  <footer>Please rotate your phone to landscape mode</footer>
</div>

<style>
  .container {
    display: grid;
    padding-top: min(2vw, 1vh);
    grid:
      'score the-new-button' min(7vw, 10vh)
      'question question' min(14vw, 17vh)
      'answer-buttons answer-buttons' min(23vw, 44vh)
      'hint hint' min(14vw, 20vh)
      'footer footer' 50px
      /
      auto auto;
    place-items: center;
  }
  footer {
    color: orange;
    grid-area: footer;
    margin: 0 20px;
    font-size: 20px;
    text-align: center;
  }
  @media (min-width: 600px) {
    footer {
      display: none;
    }
  }
</style>
