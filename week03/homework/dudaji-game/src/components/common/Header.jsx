import { Button } from "@/components/common";

function Header({ activeTab, onTabChange }) {
  return (
    <header className="w-full bg-main-400 px-[4.8rem] py-[1.6rem] flex items-center gap-[0.8rem] ">
      <h1 className="text-3xl font-bold text-ivory-100">두더지 게임</h1>
      <div className="flex gap-[0.8rem] w-[16rem]">
        <Button
          label="게임"
          variant={activeTab === "game" ? "primary" : "secondary"}
          onClick={() => onTabChange("game")}
        />
        <Button
          label="랭킹"
          variant={activeTab === "ranking" ? "primary" : "secondary"}
          onClick={() => onTabChange("ranking")}
        />
      </div>
    </header>
  );
}

export default Header;
