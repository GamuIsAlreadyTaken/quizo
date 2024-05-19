<script>export let data;
</script>

<div class="container">
  <div class="question">
    <slot />
    <h2>{$data.question}</h2>
  </div>
  <div class="options">
    {#each $data.options as option, id}
      <button
        class:selected={$data.selected == id}
        on:click={() => data.answer(id)}
      >
        {option}
      </button>
    {/each}
  </div>
</div>

<style>
  .container {
    background-color: var(--color-a);
    display: grid;
    grid-template-rows: auto auto;
    border-radius: 15px;
    max-width: 600px;
    min-width: 300px;
    height: fit-content;

    box-shadow: 0 0 0 4px inset var(--color-b);
    padding-bottom: 5px;
  }

  .question {
    background-color: var(--color-b);
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr auto 1fr;
    place-content: center;
    text-align: center;
    border-radius: 15px;
    padding: 10px;
  }

  .question h2 {
    grid-column: 1 / 4;
  }

  .options {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-evenly;
    padding: 10px;
  }

  button {
    background-color: var(--color-c);
    border: none;
    height: 60px;
    min-height: 60px;
    min-width: max(30%, 190px);
    font-size: medium;
    border-radius: 10px;
  }
  .selected {
    background-color: var(--color-d);
  }
</style>
