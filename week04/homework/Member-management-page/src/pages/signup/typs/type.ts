import type {
  UseFormRegister,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form";

export type SignupFormValues = {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  age: string;
  part: string;
};

export type StepProps = {
  register: UseFormRegister<SignupFormValues>;
  errors: FieldErrors<SignupFormValues>;
  watch?: UseFormWatch<SignupFormValues>;
  onNext?: () => void;
};
