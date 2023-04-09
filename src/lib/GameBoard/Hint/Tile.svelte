<script lang="ts">
  import { currentQuestion } from '../../questions/$progress';

  export let number: number;
  $: [a, b, c] = $currentQuestion.question;
  $: color = number <= a ? 'Orange' : number <= c ? 'LightSkyBlue' : 'transparent';
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
