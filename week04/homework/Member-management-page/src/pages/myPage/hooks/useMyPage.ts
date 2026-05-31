import { getUserById, updateUser } from "@/shared/api/user";
import type { UserInfo } from "@/shared/types/user";
import { useEffect, useState } from "react";

export function useMyPage() {
  const userId = Number(localStorage.getItem("userId"));
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUserById(userId);
        setUserInfo(data);
        setName(data.name);
        setEmail(data.email);
        setAge(String(data.age));
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo();
  }, [userId]);

  const handleEditInfo = async () => {
    try {
      await updateUser(userId, { name, email, age: Number(age) });
      alert("정보가 수정되었습니다.");
    } catch (error) {
      alert("정보 수정에 실패했습니다.");
      console.error(error);
    }
  };

  const isDisabled = !name || !email || !age;

  return {
    userInfo,
    form: {
      name,
      email,
      age,
      setName,
      setEmail,
      setAge,
    },
    handlers: { handleEditInfo },
    formState: { isDisabled },
  };
}
