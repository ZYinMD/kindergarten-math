<script lang="ts">
  import { currentQuestionAnswer } from '../../questions/$progress';
</script>

{#if isNaN($currentQuestionAnswer.value)}
  <div class="self empty">{$currentQuestionAnswer.value || ''}</div>
{:else if $currentQuestionAnswer.isCorrect}
  <div class="self correct">{$currentQuestionAnswer.value || ''}</div>
{:else}
  <div class="self wrong">{$currentQuestionAnswer.value || ''}</div>
{/if}

<style>
  @keyframes rollout {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: none;
    }
  }
  @keyframes shake {
    0% {
      transform: translateX(0.1em);
    }
    33% {
      transform: translateX(-0.1em);
    }
    66% {
      transform: translateX(0.1em);
    }
    100% {
      transform: none;
    }
  }
  .self {
    display: grid;
    place-items: center;
    font-size: 0.7em;
    font-family: var(--base-font-family);
    color: #0008;
    opacity: 0.9;
    width: var(--number-button-size);
    height: var(--number-button-size);
    border-radius: var(--number-button-border-radius);
  }
  .empty {
    background-color: #eee;
  }
  .correct {
    background-color: lightgreen;
    animation: rollout 0.05s;
  }
  .wrong {
    background-color: pink;
    animation: shake 0.15s;
  }
</style>
