  // Svelte 服务端加载函数：页面渲染前获取数据
export async function load({ fetch, params, url, parent }) {
    // 第一步：请求 /users 接口，获取所有用户的 id + name
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();
// app.get("/users", (req, res) => {
//   const users = retrieveUsers();
//   return res.json(users);  // 👈 就是这里！
// });
// 对应的后端的users数据
    // 第二步：循环每个用户，单独请求详情，拿到 avatar + bio
    // 考试考点：需要多次请求，合并多个接口数据
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        // 根据 id 请求单个用户详情
        const response = await fetch("http://localhost:3000/users/" + user.id);
        const userData = await response.json();
        // 把头像和简介合并到用户对象
        user.avatar = userData.avatar;
        user.bio = userData.bio;
    }

    // 返回数据给页面组件
    return { users: users };
}
// userDao（数据库 / 数据源）里本来就有全部数据
// id、name、avatar、bio 全都有！
// 但是第一个接口 /users 只返回了 id + name
// 老师故意只给你这两个字段！
// 所以你必须再发一次 fetch 请求
// 去 /users/1 /users/2 拿完整数据
// 把头像和 bio 补进去