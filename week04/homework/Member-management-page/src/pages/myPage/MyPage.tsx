import { Button, Input } from "@/shared/components";
import { getUserById, updateUser } from "@/shared/api/user";
import { useEffect, useState } from "react";

type UserInfo = {
  id: number;
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
};

function MyPage() {
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
      await updateUser(userId, {
        name,
        email,
        age: Number(age),
      });
      alert("정보가 수정되었습니다.");
    } catch (error) {
      alert("정보 수정에 실패했습니다.");
      console.error(error);
    }
  };

  const isDisabled = !name || !email || !age;

  return (
    <div className="py-8 flex flex-col gap-8 justify-center items-center">
      <h1 className="head2 text-secondary-600">내 정보</h1>

      {/* 조회 정보 */}
      <div className="sub2 flex flex-col gap-2 max-w-[320px] w-full bg-white p-8 rounded-lg shadow-md">
        {userInfo ? (
          <>
            <div className="flex justify-between">
              <p className="text-primary-800">아이디</p>
              <p>{userInfo.loginId}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-primary-800">파트</p>
              <p>{userInfo.part}</p>
            </div>
          </>
        ) : (
          <p className="body2 text-primary-300">불러오는 중...</p>
        )}
      </div>

      {/* 수정 폼 */}
      <div className="flex flex-col gap-4 w-full max-w-[420px]">
        <Input
          label="이름"
          placeholder="이름을 입력해주세요."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="이메일"
          placeholder="이메일을 입력해주세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="나이"
          placeholder="나이를 입력해주세요."
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Button type="button" isDisabled={isDisabled} onClick={handleEditInfo}>
          정보 수정
        </Button>
      </div>
    </div>
  );
}

export default MyPage;
