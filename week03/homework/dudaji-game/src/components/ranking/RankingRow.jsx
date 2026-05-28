function RankingRow({ rank, level, score, time }) {
  return (
    <tr className="border-t border-main-300">
      <td className="py-4 text-main-900">{rank}</td>
      <td className="py-4 text-main-900">Level {level}</td>
      <td className="py-4 text-main-900">{score}점</td>
      <td className="py-4 text-main-900">{time}</td>
    </tr>
  );
}

export default RankingRow;
