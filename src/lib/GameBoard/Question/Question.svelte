<script lang="ts">
  import { currentQuestion } from '../../questions/$progress';
  import EmptySquare from './EmptySquare.svelte';
  $: [a, b, c] = $currentQuestion.question;
  $: type = $currentQuestion.type;
</script>

<div class="self">
  {#if type === 'a+b=_'}
    <code>{a} + {b} = <EmptySquare /></code>
  {/if}
  {#if type === 'a+_=c'}
    <code>{a} + <EmptySquare /> = {c}</code>
  {/if}
  {#if type === '_+b=c'}
    <code><EmptySquare /> + {b} = {c}</code>
  {/if}
  {#if type === 'c-b=_'}
    <code>{c} - {b} = <EmptySquare /></code>
  {/if}
  {#if type === 'c-_=a'}
    <code>{c} - <EmptySquare /> = {a}</code>
  {/if}
  {#if type === '_-b=a'}
    <code><EmptySquare /> - {b} = {a}</code>
  {/if}
</div>

<style>
  .self {
    grid-area: question;
    place-self: center;
  }
  code {
    font-size: 4.5vw;
    font-family: Consolas, monospace;
    display: flex;
    align-items: center;
  }
</style>
