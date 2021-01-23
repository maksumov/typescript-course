import { User } from './models/User';

// const user = new User({ id: 1 });
// user.set({ name: "Non-Vasya", age: 9999 });
const user = new User({ name: 'Ivan', age: 0 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.trigger('change');
