import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared/utils/cn";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
  isDisabled?: boolean;
}

const buttonVariants = cva(
  "cursor-pointer rounded-lg transition-colors disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-earth-700 text-primary-100 hover:bg-earth-600 active:bg-earth-800 disabled:bg-earth-300 disabled:text-earth-100",
        ghost:
          "bg-transparent text-earth-400 hover:text-earth-700 active:text-earth-800 disabled:text-earth-200",
        outline:
          "bg-transparent text-earth-700 outline outline-earth-400 hover:bg-earth-100 active:bg-earth-200 disabled:outline-earth-200 disabled:text-earth-300",
      },
      size: {
        sm: "px-3 py-1 caption2",
        md: "px-4 py-2 sub3",
        lg: "px-6 py-3 sub2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

function Button({
  label,
  variant,
  size,
  className,
  isDisabled = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={isDisabled}
      {...rest}
    >
      {label}
    </button>
  );
}

export default Button;
