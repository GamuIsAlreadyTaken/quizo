<script lang="ts">
  import { parseQuestion, type Question } from '$lib/question-store.js';
  import type { Writable } from 'svelte/store';
  import QuizMinimap from './quiz-minimap.svelte';
  import QuizStack from './quiz-stack.svelte';
  import QuizSaver from './quiz-saver.svelte';
  import SideMenu from './generic/side-menu.svelte';

  let questions: Question[] = [];

  async function processFile(event: Event) {
    const files = (event.target as HTMLInputElement)?.files;
    if (!files) return;

    for (const file of files) {
      const text = await file.text();
      for (const question_text of text.split(/(\r?\n){2}/)) {
        const q = parseQuestion(question_text);
        if (!q) continue;

        localStorage.setItem(q.question, JSON.stringify(q));
      }
    }

    reload();
    questions = questions;
    opened = false;
  }
  let opened = true;
  let reload: () => void;
  let index: Writable<number>;
</script>

<!--
      TODO group questions by file name
  -->
<SideMenu --width="300px" --bg="var(--color-d)" {opened}>
  <QuizSaver bind:questions bind:reload />
  <input type="file" on:input={processFile} multiple />
</SideMenu>

<div>
  {#if questions.length != 0}
    <QuizMinimap {questions} {index} />
    <QuizStack {questions} bind:index />
  {/if}
</div>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    font-family: Consolas;
  }
  :global(:root) {
    color: white;

    --resume-size: 40px;
    --resume-min-columns: 3;
    --resume-max-columns: 6;
    --resume-gap: 2px;

    --color-a: #2b2d42;
    --color-d: #8d99ae;
    --color-c: #edf2f4;
    --color-b: #ef233c;
  }
  :global(body) {
    background-color: var(--color-a);
  }
  :global(body > div) {
    height: 100vh;
    padding: 8px;
  }
  div {
    margin-top: 40px;
    display: grid;

    grid-template-columns: auto auto;
    gap: 8px;
    max-width: 860px;
  }
</style>
