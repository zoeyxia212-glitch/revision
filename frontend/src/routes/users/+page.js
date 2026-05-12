export async function load({ fetch, params, url, parent }) {
    // first request: get all ids
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    // loop through the ids
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        // get one request for each user (this gets us the avatar/bio)
        const response = await fetch("http://localhost:3000/users/" + user.id);
        const userData = await response.json();
        user.avatar = userData.avatar;
        user.bio = userData.bio;
    }

    return { users: users };
}
