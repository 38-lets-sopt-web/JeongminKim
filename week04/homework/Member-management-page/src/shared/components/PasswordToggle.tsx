interface PasswordToggleProps {
  checked: boolean;
  onChange: () => void;
}

function PasswordToggle({ checked, onChange }: PasswordToggleProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer w-fit">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 accent-primary-400"
      />
      <span className="body3 text-primary-700">비밀번호 표시</span>
    </label>
  );
}

export default PasswordToggle;
