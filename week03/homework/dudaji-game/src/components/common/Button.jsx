import { cn } from "@/utils";

const variants = {
  primary: "bg-main-600 text-ivory-100",
  secondary: "bg-ivory-200 text-main-600",
  start: "bg-green text-ivory-100",
  stop: "bg-red text-ivory-100",
};

function Button({ label, onClick, variant = "primary", className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full py-[0.8rem] rounded-full font-medium text-2xl transition-colors cursor-pointer",
        variants[variant],
        className
      )}
    >
      {label}
    </button>
  );
}

export default Button;
