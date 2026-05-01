import { useState } from "react";
import { InfoCard, GameBoard } from "./";

function GamePage() {
  const [timeLeft, setTimeLeft] = useState(20.0);
  const [score, setScore] = useState(0);
  const [success, setSuccess] = useState(0);
  const [fail, setFail] = useState(0);
  const [message, setMessage] = useState("안내 메시지");

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
        <GameBoard />
      </div>
    </div>
  );
}

export default GamePage;
