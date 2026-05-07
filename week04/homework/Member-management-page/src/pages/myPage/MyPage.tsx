import { Button, Input } from "@/shared/components";
import { useMyPage } from "@pages/myPage/hooks/useMyPage";
import UserInfoCard from "@pages/myPage/components/UserInfoCard";

function MyPage() {
  const { userInfo, form, handlers, formState } = useMyPage();
  const { name, email, age, setName, setEmail, setAge } = form;

  return (
    <div className="py-8 flex flex-col gap-8 justify-center items-center">
      <h1 className="head2 text-secondary-600">내 정보</h1>

      <UserInfoCard userInfo={userInfo} />

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
        <Button
          type="button"
          isDisabled={formState.isDisabled}
          onClick={handlers.handleEditInfo}
        >
          정보 수정
        </Button>
      </div>
    </div>
  );
}

export default MyPage;
