export type CakeSliceInitialState = {
  numberOfCakes: number;
};
export type IceSliceInitialState = {
  numberOfIces: number;
};
export type User = {
  id: number;
  name: string;
};
export type UsersInitialState = {
  loading: boolean;
  users: User[];
  error: string;
};
