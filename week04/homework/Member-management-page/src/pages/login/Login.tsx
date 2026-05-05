import { Button, Input } from "@/shared/components";

function Login() {
  return (
    <div className="min-h-screen bg-ivory-300 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col gap-4">
        <h1 className="head1 text-primary-700">SOPT MEMBERS</h1>
        <p className="body2 text-primary-500">아이디를 입력해주세요.</p>
        <label className="sub2 text-primary-700">아이디</label>
        <span className="caption1 text-secondary-500">오류 메시지</span>
        // 기본
        <Input label="아이디" placeholder="아이디를 입력해주세요." />
        // 에러 상태
        <Input
          label="비밀번호"
          type="password"
          variant="error"
          placeholder="비밀번호를 입력해주세요."
        />
        // label 없이
        <Input placeholder="검색어를 입력해주세요." />
        <Button>로그인</Button>
        <Button variant="secondary">회원탈퇴</Button>
        <Button variant="outline" size="small">
          취소
        </Button>
        <Button isDisabled>제출</Button>
        <Button className="w-auto px-8">확인</Button>
      </div>
    </div>
  );
}

export default Login;
