import { useRanking } from "@/hooks";
import { Button } from "@/components/common";
import RankingRow from "./RankingRow";

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

      <div className="bg-main-300 rounded-2xl overflow-hidden">
        <table className="w-full text-center text-2xl">
          <thead>
            <tr className="bg-main-400 text-main-900">
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
                <RankingRow
                  key={i}
                  rank={i + 1}
                  level={record.level}
                  score={record.score}
                  time={record.time}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RankingPage;
