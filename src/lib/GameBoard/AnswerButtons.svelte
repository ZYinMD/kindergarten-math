<script lang="ts">
  import { settings } from '../GameSettings/$settings';
  import { correctCounter, currentQuestion, questionUtil } from '../questions/$progress';

  $: numButtons = Math.ceil($settings.maxValueAllowed / 10) * 10;
  $: buttonArray = Array(numButtons)
    .fill(null)
    .map((item, index) => index + 1);

  function handleClickAnswerButton(buttonNumber: number) {
    const { question, type } = $currentQuestion;
    let answer = 0;
    if (!type.includes('a')) answer = question[0];
    if (!type.includes('b')) answer = question[1];
    if (!type.includes('c')) answer = question[2];
    if (buttonNumber === answer) {
      correctCounter.update((prev) => prev + 1);
      if ($correctCounter >= $settings.numQuestions) {
        console.log('won!');
        return;
      }
    } else {
      correctCounter.update((prev) => {
        if (prev > 0) return prev - 1;
        return prev;
      });
    }
    questionUtil.next();
  }
</script>

<div class="self">
  {#each buttonArray as buttonNumber (buttonNumber)}
    <button
      on:click={() => {
        handleClickAnswerButton(buttonNumber);
      }}
    >
      {buttonNumber}
    </button>
  {/each}
</div>

<style>
  .self {
    grid-area: answer-buttons;
  }
  button {
    width: 50px;
    height: 50px;
    margin: 5px;
  }
</style>
