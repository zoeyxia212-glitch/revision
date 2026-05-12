import { teamRocket } from "./teamRocket.js"


export function retrieveUsers() {
    const users = [];
    teamRocket.forEach((user) => users.push({ id: user.id, name: user.name }));
    return users;

    // return teamRocket.map((user) => ({ id: user.id, name: user.name }));
}


export function retrieveUserById(id) {
    const user = teamRocket.find((user) => user.id == id);
    if (user) {
        // user is found
        return { id: user.id, name: user.name, avatar: user.avatar, bio: user.bio };
    } else {
        // no user found
        return undefined;
    }
}


export function addFriend(id_1, id_2) {
    const user_1 = teamRocket.find((user) => user.id == id_1);
    const user_2 = teamRocket.find((user) => user.id == id_2);
    if (user_1 && user_2) {
        // both are valid
        user_1.friends.push(user_2.id);
        user_2.friends.push(user_1.id);
        return user_1.friends;
    } else {
        // one is invalid
        return null;
    }
}
