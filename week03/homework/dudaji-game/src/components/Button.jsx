import { cn } from "@/utils";

function Button({ label, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={cn("w-full h-16 rounded-lg font-medium text-lg", className)}
    >
      {label}
    </button>
  );
}

export default Button;
