import { getUserById, getUsers } from "@/shared/api/user";
import type { Member, MemberSummary } from "@/shared/types/user";
import { useEffect, useState } from "react";

export function useMembers() {
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState<Member | null>(null);
  const [members, setMembers] = useState<MemberSummary[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const data = await getUsers();
        setMembers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMembers();
  }, []);

  const handleSearch = async () => {
    try {
      const data = await getUserById(Number(searchId));
      setSearchResult(data);
    } catch (error) {
      setSearchResult(null);
      console.error(error);
    }
  };

  return {
    search: {
      searchId,
      setSearchId,
      searchResult,
      handleSearch,
    },
    members,
  };
}
