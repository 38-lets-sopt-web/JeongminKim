import { Button, Input } from "@/shared/components";
import { useForm } from "react-hook-form";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm<SignupFormValues>({
    mode: "onChange",
  });

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

        <Input
          label="아이디"
          placeholder="사용할 아이디를 입력해주세요."
          {...register("id", { required: true })}
        />

        <Input
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", { required: true })}
        />

        <Input
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 한 번 더 입력해주세요."
          {...register("passwordConfirm", {
            required: true,
            validate: (value) => value === watch("password"),
          })}
        />

        <Input
          label="이름"
          placeholder="이름을 입력해주세요."
          {...register("name", { required: true })}
        />

        <Input
          label="이메일"
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email", { required: true })}
        />

        <Input
          label="나이"
          type="number"
          placeholder="나이를 입력해주세요."
          {...register("age", { required: true })}
        />

        <Input
          label="파트"
          placeholder="파트명을 입력해주세요."
          {...register("part", { required: true })}
        />

        <Button disabled={!isValid}>회원가입</Button>
      </form>
    </div>
  );
}

export default Signup;
