export interface IUser {
  name: string;
  surname?: string;
  username: string;
  password: string;
}

export type TokenPayload = Omit<IUser, "password"> & { id: number };
