import { InfoCard, GameBoard, Modal } from "./";
import { useGame } from "@/hooks";

function GamePage() {
  const { gameState, gameActions } = useGame();

  return (
    <div className="flex gap-4 p-4">
      <div className="flex flex-col gap-4 w-64 shrink-0">
        <InfoCard label="남은 시간" value={gameState.timeLeft} />
        <InfoCard label="총 점수" value={gameState.score} />
        <div className="flex gap-2">
          <InfoCard
            label="성공"
            value={gameState.success}
            labelClassName="text-green"
          />
          <InfoCard
            label="실패"
            value={gameState.fail}
            labelClassName="text-red"
          />
        </div>
        <InfoCard label="안내 메시지" value={gameState.message} />
      </div>
      <div className="w-[100rem]">
        <GameBoard gameState={gameState} gameActions={gameActions} />
      </div>
      {gameState.isModalOpen && (
        <Modal score={gameState.score} onClose={gameActions.stop} />
      )}
    </div>
  );
}

export default GamePage;
