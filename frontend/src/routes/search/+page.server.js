export async function load({ fetch, url }) {
  // 拿到 ?name=xxx 里的关键词
  const searchName = url.searchParams.get("name") || "";

  // 发请求给后端
  const res = await fetch(`http://localhost:3000/search?name=${searchName}`);
  const users = await res.json();

  return { users };
}