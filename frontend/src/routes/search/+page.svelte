<script>
  let { data } = $props();
  let searchTerm = ""; // 搜索框内容
</script>

<!-- 搜索框 -->
<input bind:value={searchTerm} placeholder="输入名字搜索" />

<!-- 搜索按钮 -->
<a href="/search?name={searchTerm}">搜索</a>

<!-- 显示搜索结果 -->
{#if data.users}
  {#each data.users as user}
    <div>
      <p>{user.name}</p>
      <a href="/users/{user.id}">查看资料</a>
    </div>
  {/each}
{/if}