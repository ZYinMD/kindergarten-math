<script lang="ts">
  import { currentQuestion } from '../../questions/$progress';
  export let number: number;
  $: [a, _b, c] = $currentQuestion.question;
</script>

<!-- @component One square in the hint row. -->
<div class="self">
  <div class="square" class:a={number <= a} class:b={number <= c && number > a} />
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
  }
  .a {
    background-color: MediumAquamarine;
  }
  .b {
    background-color: orange;
  }
</style>
