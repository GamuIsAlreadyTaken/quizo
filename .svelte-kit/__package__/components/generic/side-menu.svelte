<script>import BurgerCross from "./burger-cross.svelte";
export let opened = true;
const flip = () => opened = !opened;
</script>

<div class:opened>
  <button on:click={flip}> <BurgerCross {opened} /></button>
  <slot />
</div>

<style>
  div,
  button {
    transition: transform 250ms ease;
  }
  div {
    background-color: var(--bg);
    height: 100%;
    width: var(--width);
    transform: translateX(-100%);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  button {
    transform: translateX(var(--width));
    background-color: transparent;
    border: none;
    padding: 20px 10px;
  }
  .opened {
    transform: translateX(0%);
  }
  .opened button {
    transform: translateX(calc(var(--width) - 100%));
  }
</style>
