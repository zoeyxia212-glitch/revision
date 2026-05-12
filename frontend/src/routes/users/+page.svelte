<script>
  let { data } = $props();
</script>

{#each data.users as user}
  <div class="user">
    <img src="/avatars/{user.avatar}" alt="" />
    <div>
      <p>{user.name}</p>
    </div>
  </div>
{/each}

<style>
  img {
    width: 64px;
    height: 64px;
  }
  div.user {
    border: 1px solid black;
    padding: 20px;
    margin: 20px;

    display: flex;
    flex-direction: row;
    gap: 50px;
  }
  p {
    font-size: 2em;
  }
</style>
