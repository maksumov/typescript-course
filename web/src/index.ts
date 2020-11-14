import { User } from "./models/User";

// const user = new User({ id: 1 });
// user.set({ name: "Non-Vasya", age: 9999 });
const user = new User({ name: "Ivan", age: 0 });

user.events.on("change", () => {
  console.log("User changed");
});

user.events.trigger("change");
