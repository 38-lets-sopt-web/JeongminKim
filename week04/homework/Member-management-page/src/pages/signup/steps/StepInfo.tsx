import { Button, Input } from "@/shared/components";
import type { StepProps } from "@pages/signup/typs/type";

function StepInfo({ register, errors }: StepProps) {
  return (
    <>
      <Input
        label="이름"
        placeholder="이름을 입력해주세요."
        {...register("name", { required: "이름을 입력해주세요." })}
      />
      <Input
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요."
        {...register("email", { required: "이메일을 입력해주세요." })}
      />
      <Input
        label="나이"
        type="number"
        placeholder="나이를 입력해주세요."
        {...register("age", { required: "나이를 입력해주세요." })}
      />
      <Input
        label="파트"
        placeholder="파트명을 입력해주세요."
        {...register("part", { required: "파트를 입력해주세요." })}
      />
      {(errors.name || errors.email || errors.age || errors.part) && (
        <p className="text-secondary-500 caption1">
          {errors.name?.message ||
            errors.email?.message ||
            errors.age?.message ||
            errors.part?.message}
        </p>
      )}
      <Button type="submit">회원가입</Button>
    </>
  );
}

export default StepInfo;
