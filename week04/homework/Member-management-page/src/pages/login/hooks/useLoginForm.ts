import { ROUTES_CONFIG } from "@/routers/routesConfig";
import { postSignin } from "@/shared/api/login";
import { useState } from "react";
import { useNavigate } from "react-router";

const ERROR_TEXT = "아이디 또는 비밀번호를 확인해주세요.";

export function useLoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setIsError(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsError(false);
  };

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

  return {
    id,
    password,
    showPassword,
    setShowPassword,
    isError,
    isDisabled,
    ERROR_TEXT,
    handleIdChange,
    handlePasswordChange,
    handleLogin,
    handleSignUp,
  };
}
