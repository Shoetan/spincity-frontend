
export type RegisterUserType = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
}

export type RegisterUserResponse = {
  message: string;
  user:{
    ID: number;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string;
    name: string;
    email: string;
    password: string;
    confirm_passwords: string
  }
}

export type LoginUserType = {
  email: string;
  password: string;
}

export type LoginUserResponse = {
  message: string;
  token: string;
}