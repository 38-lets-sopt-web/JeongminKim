import { cn } from "@/utils";

function Header({ activeTab, onTabChange }) {
  return (
    <header className="w-full bg-ivory-100 px-8 py-4 flex items-center gap-6">
      <h1 className="text-2xl font-bold text-main-900">두더지 게임</h1>
      <div className="flex gap-2">
        <button
          onClick={() => onTabChange("game")}
          className={cn(
            "px-4 py-1 rounded-full text-sm font-medium transition-colors",
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
            "px-4 py-1 rounded-full text-sm font-medium transition-colors",
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
