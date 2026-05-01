import { Button } from "./";

function GameBoard({
  level,
  isPlaying,
  cells,
  config,
  onStart,
  onStop,
  onCellClick,
  onLevelChange,
}) {
  return (
    <div className="flex-1 bg-ivory-200 rounded-2xl p-12 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <select
          value={level}
          onChange={(e) => onLevelChange(e.target.value)}
          disabled={isPlaying}
          className="bg-ivory-100 text-main-900 rounded-lg px-[1.6rem] py-[0.8rem] text-2xl font-medium disabled:opacity-50"
        >
          <option value={1}>Level 1</option>
          <option value={2}>Level 2</option>
          <option value={3}>Level 3</option>
        </select>
        <div className="flex gap-[0.8rem] w-[16rem]">
          <Button label="시작" variant="start" onClick={onStart} />
          <Button label="중단" variant="stop" onClick={onStop} />
        </div>
      </div>

      <div className="bg-ivory-100 rounded-2xl p-[2.4rem] flex-1 mx-[24rem]">
        <div
          className="grid gap-[1.6rem] h-full"
          style={{ gridTemplateColumns: `repeat(${config.size}, 1fr)` }}
        >
          {cells.map((cell, i) => (
            <div
              key={i}
              onClick={() => onCellClick(i)}
              className="rounded-full aspect-square cursor-pointer transition-colors bg-main-300 hover:bg-main-400"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GameBoard;
