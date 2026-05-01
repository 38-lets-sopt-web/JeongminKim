import { useState } from "react";
import "./App.css";
import { Header } from "@/components/common";
import GamePage from "@/components/game/GamePage";
import RankingPage from "@/components/ranking/RankingPage";

function App() {
  const [activeTab, setActiveTab] = useState("game");

  return (
    <div className="min-h-screen bg-ivory-100 flex flex-col">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 p-[2.4rem]">
        {activeTab === "game" ? <GamePage /> : <RankingPage />}
      </main>
    </div>
  );
}

export default App;
