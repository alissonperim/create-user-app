import { BaseModel } from "./BaseModel";

class User extends BaseModel {
  name: string;
  admin: boolean;
  email: string;

  constructor() {
    super();
    if (!this.admin) {
      this.admin = false;
    }
  }
}

export { User };
