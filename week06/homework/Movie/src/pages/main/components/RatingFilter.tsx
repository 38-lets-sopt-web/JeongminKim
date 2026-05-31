const RATING_OPTIONS: { label: string; range: [number, number] }[] = [
  { label: "전체 별점", range: [0, 10] },
  { label: "9점 이상", range: [9, 10] },
  { label: "8점 이상", range: [8, 10] },
  { label: "7점 이상", range: [7, 10] },
  { label: "6점 이상", range: [6, 10] },
];

interface Props {
  value: [number, number];
  onChange: (range: [number, number]) => void;
}

function RatingFilter({ value, onChange }: Props) {
  const selected = RATING_OPTIONS.find(
    (o) => o.range[0] === value[0] && o.range[1] === value[1]
  );

  return (
    <div className="mb-6">
      <div className="relative inline-block">
        <select
          value={selected?.label ?? "전체 별점"}
          onChange={(e) => {
            const option = RATING_OPTIONS.find(
              (o) => o.label === e.target.value
            );
            if (option) onChange(option.range);
          }}
          className="appearance-none bg-white border border-primary-300 rounded-lg px-4 py-2.5 pr-10
            text-sm text-earth-700 cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-primary-400"
        >
          {RATING_OPTIONS.map((o) => (
            <option key={o.label} value={o.label}>
              {o.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-earth-400 text-xs">
          ▼
        </span>
      </div>
    </div>
  );
}

export default RatingFilter;
