// 导入原始用户数据
import { teamRocket } from "./teamRocket.js"

// ================================================================================
// Task 1 对应函数：retrieveUsers()
// 考试要求：只返回 id + name，隐藏敏感/多余信息
// 实现：遍历数组，只保留需要的字段
// ================================================================================
export function retrieveUsers() {
    // 方法1：forEach 循环拼接（老师写法）
    const users = [];
    teamRocket.forEach((user) => users.push({ id: user.id, name: user.name }));
    return users;

    // 方法2：map 一行简化写法（等价效果）
    // return teamRocket.map((user) => ({ id: user.id, name: user.name }));
}

// ================================================================================
// 根据 ID 查询单个用户（完整信息：id, name, avatar, bio）
// 使用 array.find() 匹配 ID
// ================================================================================
export function retrieveUserById(id) {
    // == 兼容字符串 / 数字类型
    const user = teamRocket.find((user) => user.id == id);

    if (user) {
        // 返回完整公开信息
        return { id: user.id, name: user.name, avatar: user.avatar, bio: user.bio };
    } else {
        // 未找到 → 返回 undefined
        return undefined;
    }
}

// ================================================================================
// 添加双向好友关系
// 互相把对方 ID 加入 friends 数组
// ================================================================================
export function addFriend(id_1, id_2) {
    const user_1 = teamRocket.find((user) => user.id == id_1);
    const user_2 = teamRocket.find((user) => user.id == id_2);

    // 两个用户都有效才执行添加
    if (user_1 && user_2) {
        user_1.friends.push(user_2.id);
        user_2.friends.push(user_1.id);
        return user_1.friends;
    } else {
        // 无效用户 → 返回 null
        return null;
    }
}