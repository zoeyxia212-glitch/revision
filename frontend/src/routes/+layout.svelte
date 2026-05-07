<script>
  let { children } = $props();
</script>

<div class="container">
  {@render children()}
</div>

<style>
  .container {
    width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
</style>
