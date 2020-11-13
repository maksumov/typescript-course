import { User } from "./models/User";

const user = new User({ name: "Вася", age: 22 });

user.on("change", () => {
  console.log("Пу-ру-ру-ру");
});
user.on("change", () => {
  console.log("Трам-пам-пам");
});
user.on("click", () => {
  console.log("Тру-ля-ля");
});

console.log(user);
