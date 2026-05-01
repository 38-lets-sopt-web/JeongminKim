import { InfoCard, GameBoard } from "./";
import { useGame } from "@/hooks";

function GamePage() {
  const {
    level,
    isPlaying,
    timeLeft,
    score,
    success,
    fail,
    message,
    cells,
    config,
    start,
    stop,
    handleCellClick,
    handleLevelChange,
  } = useGame();

  return (
    <div className="flex gap-4 p-4">
      <div className="flex flex-col gap-4 w-64 shrink-0">
        <InfoCard label="남은 시간" value={timeLeft} />
        <InfoCard label="총 점수" value={score} />
        <div className="flex gap-2">
          <InfoCard label="성공" value={success} labelClassName="text-green" />
          <InfoCard label="실패" value={fail} labelClassName="text-red" />
        </div>
        <InfoCard label={message} value="" />
      </div>
      <div className="w-[100rem]">
        <GameBoard
          level={level}
          isPlaying={isPlaying}
          cells={cells}
          config={config}
          onStart={start}
          onStop={stop}
          onCellClick={handleCellClick}
          onLevelChange={handleLevelChange}
        />
      </div>
    </div>
  );
}

export default GamePage;
