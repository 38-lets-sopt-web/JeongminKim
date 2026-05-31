interface Props {
  overview: string;
}

function Overview({ overview }: Props) {
  return (
    <div className="bg-white border border-primary-200 rounded-xl p-5 mb-4">
      <h2 className="sub2 text-earth-800 mb-3">줄거리</h2>
      <p className="body3 text-earth-600 leading-relaxed">{overview}</p>
    </div>
  );
}

export default Overview;
