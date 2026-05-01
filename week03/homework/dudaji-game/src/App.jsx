import { useState } from "react";
import "./App.css";
import { Header, InfoCard } from "./components";

function App() {
  const [activeTab, setActiveTab] = useState("game");

  return (
    <div className="min-h-screen bg-ivory-100 flex flex-col">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-16 flex flex-col gap-8">
        {activeTab === "game" ? <div>게임 화면</div> : <div>랭킹 화면</div>}
        <InfoCard label="남은 시간" value="20.0" />
        <InfoCard label="총 점수" value={0} />

        {/* 성공/실패 나란히 */}
        <div className="flex gap-4">
          <InfoCard label="성공" value={0} labelClassName="text-green" />
          <InfoCard label="실패" value={0} labelClassName="text-red" />
        </div>

        <InfoCard label="안내 메시지" value="" />
      </main>
    </div>
  );
}

export default App;
