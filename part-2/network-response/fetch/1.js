// Создайте асинхронную функцию getUsers(names),
// которая получает на вход массив логинов пользователей GitHub,
//  запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

async function getUsers(names) {
  let users = [];

  for (let name of names) {
    let user = fetch(`https://api.github.com/users/${name}`).then(
      (res) => {
        if (res.status != 200) {
          return null;
        } else {
          return res.json();
        }
      },
      (err) => {
        return null;
      }
    );
    users.push(user);
  }

  let results = await Promise.all(users);

  return results;
}
