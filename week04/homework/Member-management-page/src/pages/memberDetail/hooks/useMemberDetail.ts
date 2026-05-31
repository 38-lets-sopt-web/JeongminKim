import { getUserById } from "@/shared/api/user";
import type { Member } from "@/shared/types/user";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

export function useMemberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState<Member | null>(null);

  useEffect(() => {
    const fetchMember = async () => {
      try {
        const data = await getUserById(Number(id));
        setMember(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMember();
  }, [id]);

  const handleGoBack = () => navigate(-1);

  return {
    member,
    handlers: { handleGoBack },
  };
}
