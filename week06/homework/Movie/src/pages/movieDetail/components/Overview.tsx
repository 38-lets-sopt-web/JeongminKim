interface Props {
  overview: string;
}

function Overview({ overview }: Props) {
  return (
    <div className="bg-white rounded-xl p-5 mb-4">
      <h2 className="text-base font-bold text-gray-900 mb-3">줄거리</h2>
      <p className="text-sm text-gray-600 leading-relaxed">{overview}</p>
    </div>
  );
}

export default Overview;
