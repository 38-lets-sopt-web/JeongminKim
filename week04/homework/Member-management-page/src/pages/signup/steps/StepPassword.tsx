import { Button, Input, PasswordToggle } from "@/shared/components";
import type { StepProps } from "@pages/signup/typs/type";
import { useState } from "react";

function StepPassword({ register, errors, watch, onNext }: StepProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const isDisabled = !!errors.password || !!errors.passwordConfirm;
  const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])\S{8,20}$/;

  return (
    <>
      <Input
        label="비밀번호"
        type={showPassword ? "text" : "password"}
        placeholder="비밀번호를 입력해주세요."
        {...register("password", {
          required: "비밀번호를 입력해주세요.",
          pattern: {
            value: PASSWORD_REGEX,
            message:
              "8~20자, 영문/숫자/특수문자(!@#$%^&*)를 각각 1자 이상 포함해주세요.",
          },
        })}
      />
      <PasswordToggle
        checked={showPassword}
        onChange={() => setShowPassword((prev) => !prev)}
      />

      <Input
        label="비밀번호 확인"
        type={showPasswordConfirm ? "text" : "password"}
        placeholder="비밀번호를 다시 입력해 주세요"
        {...register("passwordConfirm", {
          required: "비밀번호 확인을 입력해주세요.",
          validate: (value) =>
            value === watch?.("password") || "비밀번호가 일치하지 않습니다.",
        })}
      />
      <PasswordToggle
        checked={showPasswordConfirm}
        onChange={() => setShowPasswordConfirm((prev) => !prev)}
      />

      {(errors.password || errors.passwordConfirm) && (
        <p className="text-secondary-500 caption1">
          {errors.password?.message || errors.passwordConfirm?.message}
        </p>
      )}

      <Button type="button" onClick={onNext} isDisabled={isDisabled}>
        다음
      </Button>
    </>
  );
}

export default StepPassword;
