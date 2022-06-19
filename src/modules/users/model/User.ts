import { v4 as uuidV4 } from "uuid";

class User {
  readonly created_at: Date;
  readonly id: string;
  name: string;
  email: string;
  admin: boolean;
  updated_at: Date;

  constructor() {
    if (this.id) return;

    this.id = uuidV4();
    this.created_at = new Date();
    this.updated_at = new Date();
    this.admin = false;
  }

  public turnAdmin(): void {
    this.admin = true;
    this.updated_at = new Date();
  }
}

export { User };
