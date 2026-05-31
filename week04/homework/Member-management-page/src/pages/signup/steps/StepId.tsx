import { Button, Input } from "@/shared/components";
import type { StepProps } from "@pages/signup/typs/type";

function StepId({ register, errors, onNext }: StepProps) {
  return (
    <>
      <Input
        label="아이디"
        placeholder="사용할 아이디를 입력해주세요."
        {...register("id", {
          required: "아이디를 입력해주세요.",
          maxLength: {
            value: 20,
            message: "아이디는 20자 이하로 입력해주세요.",
          },
        })}
      />
      {errors.id && (
        <p className="text-secondary-500 caption1">{errors.id.message}</p>
      )}
      <Button type="button" onClick={onNext} disabled={!!errors.id}>
        다음
      </Button>
    </>
  );
}

export default StepId;
