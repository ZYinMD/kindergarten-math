<script context="module" lang="ts">
  import { writable } from 'svelte/store';
  const buttonsDisabled = writable(false);
</script>

<script lang="ts">
  import {
    correctAnswer,
    correctCounter,
    currentQuestionAnswer,
    questionUtil,
  } from '../../questions/$progress';
  import { ms } from '../../utils/ms';
  import { scoreFlasher } from '../Score/ScoreFlasher.svelte';
  export let buttonNumber: number;
  let ref: HTMLButtonElement;
  function onPointerDown() {
    ref.style.transform = 'scale(1.15)';
    ref.style.opacity = '0.7';
  }
  function onPointerUp() {
    ref.style.transform = '';
    ref.style.opacity = '';
  }
  async function handleClickAnswerButton(buttonNumber: number) {
    const isCorrect = buttonNumber === $correctAnswer;
    $currentQuestionAnswer.value = buttonNumber;
    $currentQuestionAnswer.isCorrect = isCorrect;
    $currentQuestionAnswer.hasTriedTimes++;

    if (isCorrect) {
      console.debug('Correct answer!');
      $currentQuestionAnswer.isCorrect = true;
    } else {
      console.debug('Wrong answer!');
      $currentQuestionAnswer.isCorrect = false;
    }
    $buttonsDisabled = true;
    await ms(1e3);
    $buttonsDisabled = false;
    if (isCorrect) {
      $currentQuestionAnswer.value = NaN;
      $currentQuestionAnswer.hasTriedTimes = 0;
      $correctCounter++;
      scoreFlasher.set('plus');
      questionUtil.next();
    }
    if (!isCorrect && $currentQuestionAnswer.hasTriedTimes === 1) {
      $currentQuestionAnswer.value = NaN;
    }
    if (!isCorrect && $currentQuestionAnswer.hasTriedTimes >= 2) {
      $currentQuestionAnswer.value = NaN;
      $currentQuestionAnswer.hasTriedTimes = 0;
      scoreFlasher.set('minus');
      if ($correctCounter > 0) $correctCounter--;
      questionUtil.next();
    }
  }
</script>

<!-- I could just use pointerdown and pointerup if not for the safari 12 on Nolan's ipad -->
<button
  disabled={$buttonsDisabled}
  bind:this={ref}
  on:click={() => {
    handleClickAnswerButton(buttonNumber);
  }}
  on:mousedown={onPointerDown}
  on:mouseup={onPointerUp}
  on:touchstart={onPointerDown}
  on:touchend={onPointerUp}
>
  <span class="the-number-itself">
    {buttonNumber}
  </span>
</button>

<style>
  button {
    /* remove the grey outline on tap on iOS safari? */
    -webkit-tap-highlight-color: #0000;
    width: var(--number-button-size);
    height: var(--number-button-size);
    margin: 1vw;
    display: grid;
    place-items: center;
    background-color: LightGreen;
    font-size: 2.7vw;
    color: #0008;
    border: none;
    border-radius: var(--number-button-border-radius);
  }
  /* make the numbers not selectable. This is an issue if it's pressed for too long on touch device */
  .the-number-itself {
    -webkit-user-select: none; /* Safari */
    user-select: none;
  }
</style>
