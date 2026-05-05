import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@shared/utils/cn";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isDisabled?: boolean;
}

const buttonVariants = cva(
  "cursor-pointer rounded-lg w-full font-medium transition-colors disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-400 text-ivory-100 hover:bg-primary-500 active:bg-primary-600 disabled:bg-primary-200 disabled:text-primary-400",
        secondary:
          "bg-secondary-500 text-ivory-100 hover:bg-secondary-600 active:bg-secondary-700 disabled:bg-secondary-200 disabled:text-secondary-400",
        outline:
          "bg-transparent text-primary-500 outline outline-primary-300 hover:bg-primary-100 active:bg-primary-200 disabled:outline-primary-200 disabled:text-primary-300",
      },
      size: {
        small: "px-3 py-2 text-sm",
        medium: "px-4 py-3 text-base",
        large: "px-6 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

const Button = ({
  variant,
  size,
  children,
  className,
  isDisabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
