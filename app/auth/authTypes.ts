
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