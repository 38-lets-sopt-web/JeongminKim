import { cn } from "@/utils";

function Header({ activeTab, onTabChange }) {
  return (
    <header className="w-full bg-main-400 px-16 py-8 flex items-center gap-6">
      <h1 className="text-3xl font-bold text-ivory-100">두더지 게임</h1>
      <div className="flex gap-4">
        <button
          onClick={() => onTabChange("game")}
          className={cn(
            "px-8 py-2 rounded-full text-3xl font-medium transition-colors",
            activeTab === "game"
              ? "bg-main-600 text-ivory-100"
              : "bg-ivory-200 text-main-600"
          )}
        >
          게임
        </button>
        <button
          onClick={() => onTabChange("ranking")}
          className={cn(
            "px-8 py-2 rounded-full text-3xl font-medium transition-colors",
            activeTab === "ranking"
              ? "bg-main-600 text-ivory-100"
              : "bg-ivory-200 text-main-600"
          )}
        >
          랭킹
        </button>
      </div>
    </header>
  );
}

export default Header;
