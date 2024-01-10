<script context="module" lang="ts">
  import { writable } from 'svelte/store';
  const buttonsDisabled = writable(false); // all buttons are disabled for 1 second after hitting any one of them, animation happens in this second
</script>

<script lang="ts">
  import {
    correctAnswer,
    correctCounter,
    currentQuestionAnswer,
    questionUtil,
  } from '../../questions/$progress';
  import { sleep } from '../../utils/sleep';
  import { correctSound, wrongSound } from '../../utils/sounds';
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
    $currentQuestionAnswer.isCorrect = isCorrect;
    $currentQuestionAnswer.value = buttonNumber;
    $currentQuestionAnswer.hasTriedTimes++;

    if (isCorrect) {
      console.debug('Correct answer!');
      correctSound.play();
      $currentQuestionAnswer.isCorrect = true;
    } else {
      console.debug('Wrong answer!');
      wrongSound.play();
      $currentQuestionAnswer.isCorrect = false;
    }
    $buttonsDisabled = true;
    await sleep(1e3);
    $buttonsDisabled = false;
    $currentQuestionAnswer.value = NaN;
    if (isCorrect) {
      $currentQuestionAnswer.hasTriedTimes = 0;
      $correctCounter++;
      scoreFlasher.set('plus');
      questionUtil.next();
    }
    if (!isCorrect && $currentQuestionAnswer.hasTriedTimes >= 2) {
      $currentQuestionAnswer.hasTriedTimes = 0;
      scoreFlasher.set('minus');
      if ($correctCounter > 0) $correctCounter--;
      questionUtil.next();
    }
  }
</script>

<!-- I could just use pointerdown and pointerup if not for the safari 12 on my son's old ipad -->
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
    padding: 0;
    display: grid;
    place-items: center;
    background-color: LightGreen;
    opacity: 0.9;
    font-size: 2.7vw;
    color: #0008;
    border: none;
    border-radius: var(--number-button-border-radius);
    cursor: pointer;
  }
  /* make the numbers not selectable. This is an issue if it's pressed for too long on touch device */
  .the-number-itself {
    -webkit-user-select: none; /* Safari */
    user-select: none;
  }
</style>
