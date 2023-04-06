<script lang="ts">
  import { currentQuestionAnswer } from '../../questions/$progress';

  let background = 'grey';
  $: {
    if (isNaN($currentQuestionAnswer.value)) background = '#eee';
    else if ($currentQuestionAnswer.isCorrect) background = 'LightGreen';
    else background = 'Pink';
  }
</script>

<div class="self" style:background>{$currentQuestionAnswer.value || ''}</div>

<style>
  .self {
    display: grid;
    place-items: center;
    margin: 0.5em;
    font-size: 0.7em;
    font-family: var(--base-font-family);
    color: #0008;
    width: var(--number-button-size);
    height: var(--number-button-size);
    border-radius: var(--number-button-border-radius);
  }
</style>
