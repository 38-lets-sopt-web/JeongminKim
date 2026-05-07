import StepId from "@pages/signup/steps/StepId";
import StepPassword from "@pages/signup/steps/StepPassword";
import StepInfo from "@pages/signup/steps/StepInfo";
import { useSignupForm } from "./hooks/useSignupForm";

function Signup() {
  const { step, form, handlers } = useSignupForm();
  const { register, handleSubmit, watch, errors } = form;

  return (
    <div className="min-h-screen bg-ivory-300 flex items-center justify-center">
      <form
        onSubmit={handleSubmit(handlers.onSubmit)}
        className="bg-white rounded-2xl px-32 py-16 shadow-md flex flex-col gap-4 w-[600px]"
      >
        <h1 className="head2 text-primary-900 text-center">회원가입</h1>

        {step.current === 1 && (
          <StepId
            register={register}
            errors={errors}
            onNext={() => handlers.handleNext(["id"])}
          />
        )}
        {step.current === 2 && (
          <StepPassword
            register={register}
            errors={errors}
            watch={watch}
            onNext={() => handlers.handleNext(["password", "passwordConfirm"])}
          />
        )}
        {step.current === 3 && <StepInfo register={register} errors={errors} />}

        <p
          className="text-center caption1 text-primary-400 cursor-pointer hover:text-primary-600"
          onClick={handlers.handleGoLogin}
        >
          이미 계정이 있나요? <span className="underline">로그인</span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
