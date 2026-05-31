interface Props {
  overview: string;
}

function Overview({ overview }: Props) {
  return (
    <div className="bg-cream-200 rounded-xl p-5 mb-4">
      <h2 className="sub2 text-earth-900 mb-3">줄거리</h2>
      <p className="body3 text-earth-600">{overview}</p>
    </div>
  );
}

export default Overview;
