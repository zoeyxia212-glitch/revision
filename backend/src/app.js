// 加载环境变量配置
import dotenv from "dotenv";
dotenv.config();

// 导入 Express 核心依赖
import express from "express";
import cors from "cors";        // 解决跨域，允许前端访问
import morgan from "morgan";    // 日志打印，方便调试

// 创建 Express 应用实例
const app = express();

// 配置 Express 中间件（必须）
app.use(express.json());        // 解析 JSON 格式的请求体 req.body
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // 允许前后端端口跨域
    credentials: true
  })
);
app.use(morgan("combined"));   // 日志中间件


/*
 * 根路由测试
 * 访问：GET http://localhost:3000
 * 返回：{ "message": "Hello world!" }
 */
app.get("/", (req, res) => {
  return res.json({ "message": "Hello world!" })
});


// ================================================================================
// Task 1 - Retrieve users（考试核心任务）
// 要求：创建 GET /users 路由，返回所有用户（只包含 id 和 name）
// 调用：retrieveUsers() 方法获取精简用户列表
// 返回：200 状态码 + JSON 数组
// ================================================================================

// 导入数据访问层函数（用户 CRUD）
import { retrieveUsers, retrieveUserById, addFriend } from "./data/users-dao.js";

// Task 1 ✅ 实现：获取所有用户
app.get("/users", (req, res) => {
  // 调用 DAO 函数，获取只包含 id + name 的用户数组
  const users = retrieveUsers();
  // 返回 JSON 数据，状态码默认 200
  return res.json(users);
})

// ================================================================================
// 附加路由 1：根据 ID 获取单个用户
// 路由：GET /users/:id
// 逻辑：
// 1. 从 req.params 读取动态 id
// 2. 调用 retrieveUserById 查询用户
// 3. 找不到 → 返回 404
// 4. 找到 → 返回完整用户信息（id, name, avatar, bio）
// ================================================================================
app.get("/users/:id", (req, res) => {
  const id = req.params.id; // 读取路径参数 ✅ req.params
  const user = retrieveUserById(id);

  // 用户不存在，返回 404
  if (!user) {
    return res.sendStatus(404);
  }

  // 用户存在，返回 JSON
  return res.json(user);
});

// ================================================================================
// 附加路由 2：添加好友关系
// 路由：POST /users/:id/friends
// 逻辑：
// 1. req.params.id → 当前用户 ID
// 2. req.body.id → 要添加的好友 ID
// 3. 双向添加好友关系
// 4. 成功 → 返回好友列表；失败 → 404
// ================================================================================
app.post("/users/:id/friends", (req, res) => {
  const id_1 = req.params.id;    // 路径参数：当前用户
  const id_2 = req.body.id;      // 请求体：好友 ID ✅ req.body
  const friendsList = addFriend(id_1, id_2);

  if (friendsList) {
    return res.json(friendsList);
  } else {
    return res.sendStatus(404);
  }
})

// 启动服务器，监听端口
const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});