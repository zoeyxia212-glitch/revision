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

<img 
  src="/avatars/{user.avatar}" 
  alt="avatar" 
  class="avatar"
  on:error={(e) => {
    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Crect width='120' height='120' fill='%23cccccc'/%3E%3C/svg%3E";
  }}
<!-- />你可以给头像加上 on:error 事件，和列表页一样处理不存在的头像： -->
