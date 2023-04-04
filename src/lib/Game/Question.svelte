<script lang="ts">
  import { currentQuestion } from '../stores/$progress';
  $: [a, b, c] = $currentQuestion.question;
  $: type = $currentQuestion.type;
</script>

{#if type === '1+2=_'}
  <div>{a} + {b} = _</div>
{/if}
{#if type === '1+_=3'}
  <div>{a} + _ = {c}</div>
{/if}
{#if type === '_+2=3'}
  <div>_ + {b} = {c}</div>
{/if}
{#if type === '3-2=_'}
  <div>{c} - {b} = _</div>
{/if}
{#if type === '3-_=1'}
  <div>{c} - _ = {a}</div>
{/if}
{#if type === '_-2=1'}
  <div>_ - {b} = {a}</div>
{/if}

<style>
</style>
