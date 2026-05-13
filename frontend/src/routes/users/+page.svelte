<!-- 前端Svelte页面：展示所有用户的名字和头像 -->
<!-- 对应题目要求：Once you have fetched the list of users, you should display the name and avatar of each user on the page. -->

<script>
  // 接收从 +page.server.js 传递过来的用户数据（包含 name 和 avatar）
  // data 就是后台获取并处理好的用户列表
  let { data } = $props();
</script>
<!-- 1. for 循环 = 后台补数据（拿头像）
2. {#each} = 页面显示数据（展示名字 + 头像） -->
<!-- 循环渲染每一个用户：对应题目中的 display each user（展示每个用户） -->
<!-- Svelte 专用循环语法 {#each}，作用是遍历用户数组，逐个显示 -->
{#each data.users as user}
  <div class="user">
    <!-- 显示用户头像：从 public/avatars 文件夹读取对应图片 -->
    <!-- 对应题目要求：display avatar（展示头像） -->
    <img src="/avatars/{user.avatar}" alt="" />

    <div>
      <!-- 显示用户名：对应题目要求 display name（展示名字） -->
      <p>{user.name}</p>
      <a href="/users/{user.id}">View Profile</a>

    </div>
  </div>
{/each}

<style>
  /* 统一设置头像宽高，满足题目要求：图片大小必须一致 */
  img {
    width: 64px;
    height: 64px;
  }

  /* 用户卡片样式 */
  div.user {
    border: 1px solid black;
    padding: 20px;
    margin: 20px;

    /* 横向布局：头像 + 名字并排显示 */
    display: flex;
    flex-direction: row;
    gap: 50px;
  }

  /* 用户名字体大小 */
  p {
    font-size: 2em;
  }
</style>



<!-- 前端Svelte页面：展示所有用户的名字和头像 -->
<!-- 对应题目要求：Once you have fetched the list of users, you should display the name and avatar of each user on the page. -->

<script>
  // 接收从 +page.server.js 传递过来的用户数据（包含 name 和 avatar）
  // data 就是后台获取并处理好的用户列表
  let { data } = $props();
</script>

<!-- 1. for 循环 = 后台补数据（拿头像）
2. {#each} = 页面显示数据（展示名字 + 头像） -->
<!-- 循环渲染每一个用户：对应题目中的 display each user（展示每个用户） -->
<!-- Svelte 专用循环语法 {#each}，作用是遍历用户数组，逐个显示 -->
{#each data.users as user}
  <div class="user">
    <!-- 显示用户头像：从 public/avatars 文件夹读取对应图片 -->
    <!-- 对应题目要求：display avatar（展示头像） -->
    <img 
      src="/avatars/{user.avatar}" 
      alt="" 
      on:error={(e) => {
        // 图片加载失败 → 隐藏图片，显示灰色方块
        e.target.style.display = 'none';
        e.target.nextElementSibling.style.display = 'block';
      }}
    />

    <!-- 灰色方块：图片找不到时显示（题目要求） -->
    <div class="gray-square"></div>

    <div>
      <!-- 显示用户名：对应题目要求 display name（展示名字） -->
      <p>{user.name}</p>
      <a href="/users/{user.id}">View Profile</a>
    </div>
  </div>
{/each}

<style>
  /* 统一设置头像宽高，满足题目要求：图片大小必须一致 */
  img {
    width: 64px;
    height: 64px;
  }

  /* 灰色方块样式：图片加载失败时显示 */
  .gray-square {
    width: 64px;
    height: 64px;
    background-color: #cccccc; /* 灰色 */
    display: none; /* 默认隐藏 */
  }

  /* 用户卡片样式 */
  div.user {
    border: 1px solid black;
    padding: 20px;
    margin: 20px;

    /* 横向布局：头像 + 名字并排显示 */
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
  }

  /* 用户名字体大小 */
  p {
    font-size: 2em;
  }
</style>