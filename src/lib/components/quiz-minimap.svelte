<script lang="ts">
  import type { Question } from '$lib/question-store.js';
  import type { Writable } from 'svelte/store';
  import QuizQuestionResume from './quiz-question-resume.svelte';

  export let questions: Question[];

  export let index: Writable<number>;
</script>

<div>
  {#each questions as question, i}
    <QuizQuestionResume
      {question}
      index={i + 1}
      on:click={() => index.set(i)}
      current={$index == i}
    />
  {/each}
</div>

<style>
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: start;
    gap: var(--resume-gap);

    --resume-min-width: calc(
      (var(--resume-size) + var(--resume-gap)) * var(--resume-min-columns)
    );
    --resume-max-width: calc(
      (var(--resume-size) + var(--resume-gap)) * var(--resume-max-columns)
    );

    min-width: var(--resume-min-width);
    max-width: var(--resume-max-width);
  }
</style>
