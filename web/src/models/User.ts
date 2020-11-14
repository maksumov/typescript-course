import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User {
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public events: Eventing = new Eventing();
}
