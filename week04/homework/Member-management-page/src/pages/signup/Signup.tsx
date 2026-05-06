import { Button, Input } from "@/shared/components";
import { ROUTES_CONFIG } from "@/routers/routesConfig";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

interface SignupFormValues {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  age: string;
  part: string;
}

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

        {/* Step 1: 아이디 */}
        {step === 1 && (
          <>
            <Input
              label="아이디"
              placeholder="사용할 아이디를 입력해주세요."
              {...register("id", { required: "아이디를 입력해주세요." })}
            />
            {errors.id && (
              <p className="text-secondary-500 caption1">{errors.id.message}</p>
            )}
            <Button type="button" onClick={() => handleNext(["id"])}>
              다음
            </Button>
          </>
        )}

        {/* Step 2: 비밀번호 */}
        {step === 2 && (
          <>
            <Input
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요."
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
              })}
            />
            {errors.password && (
              <p className="text-secondary-500 caption1">
                {errors.password.message}
              </p>
            )}
            <Input
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 다시 입력해 주세요"
              {...register("passwordConfirm", {
                required: "비밀번호 확인을 입력해주세요.",
                validate: (value) =>
                  value === watch("password") ||
                  "비밀번호가 일치하지 않습니다.",
              })}
            />
            {errors.passwordConfirm && (
              <p className="text-secondary-500 caption1">
                {errors.passwordConfirm.message}
              </p>
            )}
            <Button
              type="button"
              onClick={() => handleNext(["password", "passwordConfirm"])}
            >
              다음
            </Button>
          </>
        )}

        {/* Step 3: 나머지 정보 */}
        {step === 3 && (
          <>
            <Input
              label="이름"
              placeholder="이름을 입력해주세요."
              {...register("name", { required: "이름을 입력해주세요." })}
            />
            {errors.name && (
              <p className="text-secondary-500 caption1">
                {errors.name.message}
              </p>
            )}
            <Input
              label="이메일"
              type="email"
              placeholder="이메일을 입력해주세요."
              {...register("email", { required: "이메일을 입력해주세요." })}
            />
            {errors.email && (
              <p className="text-secondary-500 caption1">
                {errors.email.message}
              </p>
            )}
            <Input
              label="나이"
              type="number"
              placeholder="나이를 입력해주세요."
              {...register("age", { required: "나이를 입력해주세요." })}
            />
            {errors.age && (
              <p className="text-secondary-500 caption1">
                {errors.age.message}
              </p>
            )}
            <Input
              label="파트"
              placeholder="파트명을 입력해주세요."
              {...register("part", { required: "파트를 입력해주세요." })}
            />
            {errors.part && (
              <p className="text-secondary-500 caption1">
                {errors.part.message}
              </p>
            )}
            <Button type="submit">회원가입</Button>
          </>
        )}

        {/* 로그인 이동 */}
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
