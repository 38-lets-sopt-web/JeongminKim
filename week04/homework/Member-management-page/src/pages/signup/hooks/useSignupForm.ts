import { ROUTES_CONFIG } from "@/routers/routesConfig";
import { postSignup } from "@/shared/api/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { SignupFormValues } from "@pages/signup/typs/type";

export function useSignupForm() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<SignupFormValues>({ mode: "onChange" });

  const handleNext = async (fields: (keyof SignupFormValues)[]) => {
    const isValid = await trigger(fields);
    if (isValid) setStep((prev) => prev + 1);
  };

  const onSubmit = async (data: SignupFormValues) => {
    try {
      await postSignup(data);
      alert("회원가입이 완료되었습니다!");
      navigate(ROUTES_CONFIG.login.path);
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      console.error(error);
    }
  };

  const handleGoLogin = () => navigate(ROUTES_CONFIG.login.path);

  return {
    step: { current: step },
    form: { register, handleSubmit, watch, errors },
    handlers: { handleNext, onSubmit, handleGoLogin },
  };
}
