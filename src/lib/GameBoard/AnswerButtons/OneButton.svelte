<script lang="ts">
  import { settings } from '../../GameSettings/$settings';
  import { correctAnswer, correctCounter } from '../../questions/$progress';
  export let buttonNumber: number;
  let ref;
  function onPointerDown() {
    ref.style.transform = 'scale(1.15)';
    ref.style.opacity = '0.7';
  }
  function onPointerUp() {
    ref.style.transform = '';
    ref.style.opacity = '';
  }
  function handleClickAnswerButton(buttonNumber: number) {
    if (buttonNumber === $correctAnswer) {
      console.debug('Correct answer!');
      correctCounter.update((prev) => prev + 1);
      if ($correctCounter >= $settings.numQuestions) {
        console.debug('You won!');
        return;
      }
    } else {
      console.debug('Wrong answer!');
      correctCounter.update((prev) => {
        if (prev > 0) return prev - 1;
        return prev;
      });
    }
    // questionUtil.next();
  }
</script>

<!-- I could just use pointerdown and pointerup if not for the safari 12 on Nolan's ipad -->
<button
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
    background-color: LightGreen;
    font-size: 2.5vw;
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
