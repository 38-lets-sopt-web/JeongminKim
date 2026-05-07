import { ROUTES_CONFIG } from "@/routers/routesConfig";
import { Button, Input } from "@/shared/components";
import { postSignin } from "@/shared/api/login";
import { useState } from "react";
import { useNavigate } from "react-router";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const ERROR_TEXT = "아이디 또는 비밀번호를 확인해주세요.";
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate(ROUTES_CONFIG.signup.path);
  };

  const handleLogin = async () => {
    try {
      const response = await postSignin({ loginId: id, password });
      localStorage.setItem("userId", String(response.data.userId));
      navigate(ROUTES_CONFIG.members.path);
    } catch {
      setIsError(true);
    }
  };

  const isDisabled = !id || !password;

  return (
    <div className="min-h-screen bg-ivory-300 flex items-center justify-center">
      <div className="bg-white rounded-2xl px-32 py-16 shadow-md flex flex-col gap-4">
        <h1 className="head1 text-primary-900">SOPT MEMBERS</h1>

        <Input
          label="아이디"
          placeholder="아이디를 입력해주세요."
          variant="default"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
            setIsError(false);
          }}
        />

        <Input
          label="비밀번호"
          type={showPassword ? "text" : "password"}
          variant="default"
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsError(false);
          }}
        />

        <label className="flex items-center gap-2 cursor-pointer w-fit">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword((prev) => !prev)}
            className="w-4 h-4 accent-primary-400 outline-primary-500"
          />
          <span className="body3 text-primary-700">비밀번호 표시</span>
        </label>

        <div className="flex flex-col gap-2">
          {isError && <p className="text-secondary-400 sub3">{ERROR_TEXT}</p>}
          <Button disabled={isDisabled} onClick={handleLogin}>
            로그인
          </Button>
          <Button variant="outline" onClick={handleSignUp}>
            회원 가입
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
