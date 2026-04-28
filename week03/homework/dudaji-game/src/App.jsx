import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-ivory-100 flex items-center justify-center">
      <div className="bg-ivory-200 p-8 rounded-2xl border border-main-300">
        <h1 className="text-3xl font-bold text-main-900">두더지 게임</h1>
        <p className="text-secondary mt-2">두더지를 잡아라!</p>
        <button className="mt-4 bg-main-600 text-ivory-100 px-6 py-2 rounded-lg hover:bg-main-700">
          시작하기
        </button>
      </div>
    </div>
  );
}

export default App;
