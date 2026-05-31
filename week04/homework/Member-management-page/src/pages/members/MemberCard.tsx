import { useNavigate } from "react-router";
import { ROUTES_CONFIG } from "@/routers/routesConfig";

interface MemberCardProps {
  id: number;
  name: string;
  part: string;
}

function MemberCard({ id, name, part }: MemberCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center gap-1 bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => navigate(ROUTES_CONFIG.memberDetail.path(id))}
    >
      <p className="sub2 text-primary-600">{name}</p>
      <p className="caption1 text-ivory-100 bg-secondary-400 rounded-2xl px-3 py-1">
        {part}
      </p>
    </div>
  );
}

export default MemberCard;
