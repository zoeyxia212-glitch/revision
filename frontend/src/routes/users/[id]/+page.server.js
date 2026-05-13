export async function load({ params }) {
  // params.id 就是地址栏里的数字，比如 /users/3 → id=3
  const userId = params.id;

  // 请求后端接口，拿单个用户信息
  const res = await fetch(`http://xxxxxxxxx/users/${userId}`);
  const user = await res.json();

  return { user };
}