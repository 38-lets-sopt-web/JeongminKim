import { instance } from "./instance";

type UserResponse = {
  id: number;
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
};

type UpdateUserRequest = {
  name: string;
  email: string;
  age: number;
};

export const getUserById = async (userId: number) => {
  const response = await instance.get<{ data: UserResponse }>(
    `/api/v1/users/${userId}`
  );
  return response.data.data;
};

export const updateUser = async (userId: number, data: UpdateUserRequest) => {
  const response = await instance.patch(`/api/v1/users/${userId}`, data);
  return response.data;
};

type MemberListResponse = {
  users: {
    id: number;
    name: string;
    part: string;
  }[];
};

export const getUsers = async () => {
  const response = await instance.get<{ data: MemberListResponse }>(
    "/api/v1/users"
  );
  return response.data.data.users;
};
