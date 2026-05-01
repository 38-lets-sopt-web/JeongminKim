import { Button } from "@/components";

function GameBoard() {
  return (
    <div className="flex-1 bg-ivory-200 rounded-2xl p-12 flex flex-col gap-4">
      {/* 상단 컨트롤 */}
      <div className="flex items-center justify-between">
        <select className="bg-ivory-100 text-main-900 rounded-lg px-[1.6rem] py-[0.8rem] text-2xl font-medium">
          <option>Level 1</option>
          <option>Level 2</option>
          <option>Level 3</option>
        </select>
        <div className="flex gap-[0.8rem] w-[16rem]">
          <Button label="시작" variant="start" onClick={console.log} />
          <Button label="중단" variant="stop" onClick={console.log} />
        </div>
      </div>

      {/* 그리드 섹션 */}
      <div className="bg-ivory-100 rounded-2xl p-[2.4rem] flex-1 mx-[24rem]">
        <div className="grid grid-cols-3 gap-[1.6rem] h-full">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="bg-main-300 rounded-full aspect-square cursor-pointer hover:bg-main-400 transition-colors"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
