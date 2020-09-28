type User = {
  name: string;
  email: string;
  password: string;
}

type SigninResponse = {
  check: boolean;
  message: string;
}

type LoggedResponse = {
  logged: boolean;
  name?: string;
}