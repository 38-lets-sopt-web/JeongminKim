function Button({ label, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full h-10 rounded-2xl font-medium text-sm ${className}`}
    >
      {label}
    </button>
  );
}

export default Button;
