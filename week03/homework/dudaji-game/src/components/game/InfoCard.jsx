import { cn } from "@/utils";

function InfoCard({ label, value, labelClassName = "", className = "" }) {
  return (
    <div
      className={cn(
        "w-full h-24 bg-main-300 rounded-2xl flex flex-col items-center justify-center gap-1",
        className
      )}
    >
      <span className={cn("text-lg text-main-900", labelClassName)}>
        {label}
      </span>
      <span className="text-2xl font-bold text-main-900">{value}</span>
    </div>
  );
}

export default InfoCard;
