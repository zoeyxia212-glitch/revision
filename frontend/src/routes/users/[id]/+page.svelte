<script>
  // 接收后台传过来的单个用户数据
  let { data } = $props();
  let user = data.user;
</script>

<!-- 显示单个用户的所有信息 -->
<div class="user-detail">
  <h1>{user.name}</h1>
  
  <img src="/avatars/{user.avatar}" alt="avatar" class="avatar" />

  <p class="bio">{user.bio}</p>

  <a href="/users">← Back to all users</a>
</div>

<style>
  .avatar {
    width: 120px;
    height: 120px;
  }
  .user-detail {
    padding: 30px;
  }
  .bio {
    font-size: 1.2em;
    margin: 20px 0;
  }
</style>