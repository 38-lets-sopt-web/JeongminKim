import { Button, Input } from "@/shared/components";
import type { StepProps } from "@pages/signup/typs/type";

function StepPassword({ register, errors, watch, onNext }: StepProps) {
  return (
    <>
      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        {...register("password", { required: "비밀번호를 입력해주세요." })}
      />
      <Input
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 다시 입력해 주세요"
        {...register("passwordConfirm", {
          required: "비밀번호 확인을 입력해주세요.",
          validate: (value) =>
            value === watch("password") || "비밀번호가 일치하지 않습니다.",
        })}
      />
      {(errors.password || errors.passwordConfirm) && (
        <p className="text-secondary-500 caption1">
          {errors.password?.message || errors.passwordConfirm?.message}
        </p>
      )}
      <Button type="button" onClick={onNext}>
        다음
      </Button>
    </>
  );
}

export default StepPassword;
