import { ROUTES_CONFIG } from "@/routers/routesConfig";
import { useNavigate } from "react-router";

function Header() {
  // TODO: 로그인 API 연동 후 userName 가져오기
  const userName = "김자반";
  const navigate = useNavigate();

  const handleLogout = () => {
    // TODO: 로그아웃 처리 로컬스토리지에서 삭제
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
