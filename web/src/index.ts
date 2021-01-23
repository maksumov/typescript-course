import { User } from './models/User';

// const user = new User({ id: 1 });
// user.set({ name: "Non-Vasya", age: 9999 });
const user = new User({ id: 1 });

console.log(user.get('name'));

user.on('change', () => {
  console.log(user);
});

user.fetch();
