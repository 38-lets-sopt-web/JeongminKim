import type { UserInfo } from "@/shared/types/user";

interface UserInfoCardProps {
  userInfo: UserInfo | null;
}

function UserInfoCard({ userInfo }: UserInfoCardProps) {
  if (!userInfo) {
    return (
      <div className="sub2 flex flex-col gap-2 max-w-[320px] w-full bg-white p-8 rounded-lg shadow-md">
        <p className="body2 text-primary-300">불러오는 중...</p>
      </div>
    );
  }

  return (
    <div className="sub2 flex flex-col gap-2 max-w-[320px] w-full bg-white p-8 rounded-lg shadow-md">
      <div className="flex justify-between">
        <p className="text-primary-800">아이디</p>
        <p>{userInfo.loginId}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-primary-800">파트</p>
        <p>{userInfo.part}</p>
      </div>
    </div>
  );
}

export default UserInfoCard;
