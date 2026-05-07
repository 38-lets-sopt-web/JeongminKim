import { ROUTES_CONFIG } from "@/routers/routesConfig";
import { getUserById } from "@/shared/api/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Header() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userId = Number(localStorage.getItem("userId"));
        const data = await getUserById(userId);
        setUserName(data.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserName();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate(ROUTES_CONFIG.login.path);
  };

  const handleMyInfo = () => {
    navigate(ROUTES_CONFIG.myPage.path);
  };

  const handleMemberList = () => {
    navigate(ROUTES_CONFIG.members.path);
  };

  return (
    <header className="bg-primary-600 shadow-md px-8 py-2 flex items-center justify-between">
      <div>
        <h1 className="head3 text-ivory-900">SOPT MEMBERS</h1>
        <p className="body2 text-ivory-100">안녕하세요, {userName}님</p>
      </div>

      <nav>
        <ul className="flex space-x-4 sub2 text-ivory-100 cursor-pointer">
          <li onClick={handleMyInfo}>내 정보</li>
          <li onClick={handleMemberList}>회원 조회</li>
          <li onClick={handleLogout}>로그아웃</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
