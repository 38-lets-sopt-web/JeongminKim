import { useRanking } from "@/hooks";
import { Button } from "@/components/common";

function RankingPage() {
  const { ranking, clearRanking } = useRanking();

  return (
    <div className="p-8 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-main-900">랭킹 보드</h2>
        <div className="w-[12rem]">
          <Button label="기록 초기화" variant="stop" onClick={clearRanking} />
        </div>
      </div>

      <div className="bg-ivory-200 rounded-2xl overflow-hidden">
        <table className="w-full text-center text-2xl">
          <thead>
            <tr className="bg-main-300 text-main-900">
              <th className="py-4">순위</th>
              <th className="py-4">레벨</th>
              <th className="py-4">점수</th>
              <th className="py-4">기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {ranking.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-main-600">
                  기록이 없습니다.
                </td>
              </tr>
            ) : (
              ranking.map((record, i) => (
                <tr key={i} className="border-t border-main-300">
                  <td className="py-4 text-main-900">{i + 1}</td>
                  <td className="py-4 text-main-900">Level {record.level}</td>
                  <td className="py-4 text-main-900">{record.score}점</td>
                  <td className="py-4 text-main-900">{record.time}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RankingPage;
