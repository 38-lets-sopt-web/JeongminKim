import { Button, Input } from "@shared/components";
import type { StepProps } from "@pages/signup/typs/type";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PART_OPTIONS = ["iOS", "안드로이드", "웹"] as const;

function StepInfo({ register, errors }: StepProps) {
  const isDisabled =
    !!errors.name || !!errors.email || !!errors.age || !!errors.part;

  return (
    <>
      <Input
        label="이름"
        placeholder="이름을 입력해주세요."
        {...register("name", {
          required: "이름을 입력해주세요.",
          maxLength: {
            value: 10,
            message: "이름은 10자 이하로 입력해주세요.",
          },
        })}
      />
      <Input
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요."
        {...register("email", {
          required: "이메일을 입력해주세요.",
          pattern: {
            value: EMAIL_REGEX,
            message: "올바른 이메일 형식이 아닙니다.",
          },
        })}
      />
      <Input
        label="나이"
        type="text"
        placeholder="나이를 입력해주세요."
        {...register("age", {
          required: "나이를 입력해주세요.",
          validate: (value) => !isNaN(Number(value)) || "숫자만 입력해주세요.",
        })}
      />
      <div className="flex flex-col gap-2">
        <label className="sub3 text-primary-700">파트</label>
        <select
          className="w-full rounded-lg border px-4 py-3 border-primary-200 focus:border-primary-400 focus:outline-none body2 bg-white"
          {...register("part", { required: "파트를 선택해주세요." })}
        >
          <option value="">파트를 선택해주세요.</option>
          {PART_OPTIONS.map((part) => (
            <option key={part} value={part}>
              {part}
            </option>
          ))}
        </select>
      </div>
      {(errors.name || errors.email || errors.age || errors.part) && (
        <p className="text-secondary-500 caption1">
          {errors.name?.message ||
            errors.email?.message ||
            errors.age?.message ||
            errors.part?.message}
        </p>
      )}
      <Button type="submit" isDisabled={isDisabled}>
        회원가입
      </Button>
    </>
  );
}

export default StepInfo;
