import { instance } from "@shared/api/instance";
import type { SignupFormValues } from "@pages/signup/typs/type";

type SignupRequest = {
  loginId: string;
  password: string;
  name: string;
  email: string;
  age: number;
  part: string;
};

export const postSignup = async (data: SignupFormValues) => {
  const body: SignupRequest = {
    loginId: data.id,
    password: data.password,
    name: data.name,
    email: data.email,
    age: Number(data.age),
    part: data.part,
  };
  const response = await instance.post("/api/v1/auth/signup", body);
  return response.data;
};
