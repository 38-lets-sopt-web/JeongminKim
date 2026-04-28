import "./App.css";
import Button from "./components/Button";

function handleStart() {
  console.log("게임 시작");
}

function handleStop() {
  console.log("게임 중단");
}

function App() {
  return (
    <div className="min-h-screen bg-ivory-100 flex items-center justify-center">
      <div className="bg-ivory-200 p-8 rounded-2xl border border-main-300">
        <h1 className="text-3xl font-bold text-main-900">두더지 게임</h1>
        <p className="text-secondary mt-2">두더지를 잡아라!</p>
        <Button
          label="시작"
          onClick={handleStart}
          className="bg-main-600 text-ivory-100"
        />
        <Button
          label="중단"
          onClick={handleStop}
          className="bg-main-800 text-ivory-100"
        />
      </div>
    </div>
  );
}

export default App;
