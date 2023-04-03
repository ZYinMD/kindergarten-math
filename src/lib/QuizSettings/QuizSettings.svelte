<script lang="ts">
  console.log('\x1b[35m', 'hello world', '\x1b[0m');
  let maxAllowed = 10;
</script>

<div>
  最大数值不超过: {maxAllowed}

  <label>
    <input type="range" bind:value={maxAllowed} min="5" max="20" />
  </label>
</div>

<style>
</style>
