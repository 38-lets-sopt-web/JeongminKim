import { ROUTES_CONFIG } from "@/routers/routesConfig";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";
import StepId from "@pages/signup/steps/StepId";
import StepPassword from "@pages/signup/steps/StepPassword";
import StepInfo from "@pages/signup/steps/StepInfo";
import type { SignupFormValues } from "@pages/signup/typs/type";

function Signup() {
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

  const onSubmit = (data: SignupFormValues) => {
    console.log(data);
    // TODO: 회원가입 API 연동
  };

  return (
    <div className="min-h-screen bg-ivory-300 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl px-32 py-16 shadow-md flex flex-col gap-4 w-[600px]"
      >
        <h1 className="head2 text-primary-900 text-center">회원가입</h1>

        {step === 1 && (
          <StepId
            register={register}
            errors={errors}
            onNext={() => handleNext(["id"])}
          />
        )}
        {step === 2 && (
          <StepPassword
            register={register}
            errors={errors}
            watch={watch}
            onNext={() => handleNext(["password", "passwordConfirm"])}
          />
        )}
        {step === 3 && <StepInfo register={register} errors={errors} />}

        <p
          className="text-center caption1 text-primary-400 cursor-pointer hover:text-primary-600"
          onClick={() => navigate(ROUTES_CONFIG.login.path)}
        >
          이미 계정이 있나요? <span className="underline">로그인</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
