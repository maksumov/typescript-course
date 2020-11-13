import { User } from "./models/User";

const user = new User({ name: "Вася", age: 22 });

user.set({ name: "Петя" });
user.set({ age: 999 });

console.log(user.get("name"));
console.log(user.get("age"));
