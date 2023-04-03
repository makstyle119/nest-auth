export interface User {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  created_by: number;
  updated_by: number;
}

export interface AuthSubQuery {
  where: Partial<User>[];
}

export interface GetUser {
  id?: number;
  email?: string;
}

export interface LoginInterface {
  email: string;
  password: string;
}

export interface LoginReturnInterface {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  created_by: number;
  updated_by: number;
  token: string;
}

export interface RegisterInterface {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  created_by: number;
  token: string;
}

export interface UpdateInterface {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
  updated_by: number;
}
