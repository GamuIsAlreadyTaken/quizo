<script lang="ts">
  import type { Question } from '$lib/question-store.js';
  import { writable } from 'svelte/store';
  import QuizQuestion from './quiz-question.svelte';
  export let questions: Question[];

  export const index = writable(0);

  const min = 0;
  const max = questions.length - 1;

  const stackLimit = (v: number) => clamp(v, min, max);

  const prev = () => index.update((i) => stackLimit(i - 1));
  const next = () => index.update((i) => stackLimit(i + 1));
  const set = (e: Event) =>
    index.set(stackLimit(+(e.target as HTMLInputElement).value - 1));

  const clamp = (a: number, min: number, max: number) =>
    a > max ? max : a < min ? min : a;
</script>

<QuizQuestion data={questions[$index]}>
  <svelte:fragment>
    <button on:click={prev}>{'<'}</button>
    <input
      type="number"
      on:input={set}
      min={min + 1}
      max={max + 1}
      value={$index + 1}
    />
    <button on:click={next}>{'>'}</button>
  </svelte:fragment>
</QuizQuestion>

<style>
  button,
  input {
    background-color: var(--color-a);
    color: white;
    font-size: larger;
  }
  input {
    width: 60px;
    border: none;
    text-align: center;
    appearance: textfield;
    font-size: 30px;
  }
  input:focus {
    outline: none;
  }

  button {
    border: none;
    height: 40px;
    font-size: 30pt;
    font-weight: bolder;
    line-height: 10pt;
  }
  button:first-of-type {
    border-radius: 15px 0 0 15px;
  }
  button:last-of-type {
    border-radius: 0 15px 15px 0;
  }

  button:active {
    background-color: color-mix(
      in hsl shorter hue,
      var(--color-a) 40%,
      var(--color-c) 60%
    );
  }
</style>
