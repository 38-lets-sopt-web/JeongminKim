import { instance } from "@shared/api/instance";

type SignInRequest = {
  loginId: string;
  password: string;
};

type SignInResponse = {
  success: boolean;
  status: number;
  message: string;
  data: {
    userId: number;
  };
};

export const postSignin = async (data: SignInRequest) => {
  const response = await instance.post<SignInResponse>(
    "/api/v1/auth/signin",
    data
  );
  return response.data;
};
