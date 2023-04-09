<script lang="ts">
  import { currentQuestion } from '../../questions/$progress';
  export let number: number;
  let color: string;
  $: {
    const [a, _b, c] = $currentQuestion.question;
    if (number <= a) color = 'SkyBlue';
    else if (number <= c) color = 'Orange';
    else color = 'transparent';
  }
</script>

<div class="self">
  <div class="square" style:background-color={color} />
</div>

<style>
  .self {
    width: 2vw;
    height: 2.7vw;
    border: 1px solid silver;
    display: grid;
    place-items: center;
  }
  .square {
    width: 1.2vw;
    height: 2vw;
    opacity: 0.8;
  }
</style>
