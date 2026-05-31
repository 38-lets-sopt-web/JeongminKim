interface StatItem {
  label: string;
  value: string;
}

interface Props {
  items: StatItem[];
}

function StatGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      {items.map(({ label, value }) => (
        <div key={label} className="bg-gray-50 rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">{label}</p>
          <p className="text-sm font-bold text-gray-800">{value}</p>
        </div>
      ))}
    </div>
  );
}

export default StatGrid;
