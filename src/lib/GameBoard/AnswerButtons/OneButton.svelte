<script lang="ts">
  import { settings } from '../../GameSettings/$settings';
  import { correctCounter, currentQuestion, questionUtil } from '../../questions/$progress';
  export let buttonNumber: number;
  let ref;
  function handleClickAnswerButton(buttonNumber: number) {
    const { question, type } = $currentQuestion;
    let answer = 0;
    if (!type.includes('a')) answer = question[0];
    if (!type.includes('b')) answer = question[1];
    if (!type.includes('c')) answer = question[2];
    if (buttonNumber === answer) {
      correctCounter.update((prev) => prev + 1);
      if ($correctCounter >= $settings.numQuestions) {
        console.debug('You won!');
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

<button
  bind:this={ref}
  on:click={() => {
    handleClickAnswerButton(buttonNumber);
  }}
  on:pointerdown={() => {
    ref.style.transform = 'scale(1.1)';
    ref.style.opacity = '0.8';
  }}
  on:pointerup={() => {
    ref.style.transform = '';
    ref.style.opacity = '';
  }}
>
  {buttonNumber}
</button>

<style>
  button {
    width: var(--number-button-size);
    height: var(--number-button-size);
    margin: 1vw;
    background-color: LightGreen;
    font-size: 2.5vw;
    color: #0008;
    border: none;
    border-radius: var(--number-button-border-radius);
  }
</style>
