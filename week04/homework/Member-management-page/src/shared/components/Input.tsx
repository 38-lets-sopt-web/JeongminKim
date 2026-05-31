import { cva, type VariantProps } from "class-variance-authority";
import type { InputHTMLAttributes, Ref } from "react";
import { cn } from "@shared/utils/cn";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  ref?: Ref<HTMLInputElement>;
  label?: string;
}

const inputVariants = cva(
  "w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none placeholder:text-primary-300 body2",
  {
    variants: {
      variant: {
        default: "border-primary-200 focus:border-primary-400 bg-white",
        error: "border-secondary-400 focus:border-secondary-500 bg-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Input = ({ ref, label, variant, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2">
      {label && <label className="sub3 text-primary-700">{label}</label>}
      <input
        ref={ref}
        className={cn(inputVariants({ variant }), className)}
        {...props}
      />
    </div>
  );
};

export default Input;
