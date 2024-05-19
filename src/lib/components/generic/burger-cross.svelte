<script lang="ts">
  export let opened: boolean;
</script>

<div class:opened></div>

<style>
  div,
  div::after,
  div::before {
    width: 25px;
    height: 5px;
    background-color: white;
    border-radius: 5px;
    content: '';
    display: block;

    transition: transform 100ms ease, rotate 100ms ease;
  }

  div::after {
    transform: translateY(60%);
  }
  div::before {
    transform: translateY(-160%);
  }

  .opened {
    transform: rotate(45deg);
  }
  .opened::after {
    transform: translateY(-100%);
  }

  .opened::before {
    transform: rotate(-90deg);
  }
</style>
