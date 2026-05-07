import { Button, Input } from "@/shared/components";
import MemberCard from "@pages/members/MemberCard";
import { getUserById, getUsers } from "@/shared/api/user";
import { useEffect, useState } from "react";

type Member = {
  id: number;
  name: string;
  part: string;
  email: string;
  age: number;
};

type MemberSummary = {
  id: number;
  name: string;
  part: string;
};

const MEMBER_DETAIL_FIELDS: { label: string; key: keyof Member }[] = [
  { label: "아이디", key: "id" },
  { label: "이름", key: "name" },
  { label: "이메일", key: "email" },
  { label: "나이", key: "age" },
  { label: "파트", key: "part" },
];

function Members() {
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

  return (
    <div className="py-8 flex flex-col gap-8 justify-center items-center">
      <h1 className="head2 text-primary-900">회원 조회</h1>

      <div className="flex gap-2 flex-col w-full max-w-[600px]">
        <Input
          label="회원 ID"
          placeholder="원하는 ID를 검색해 보세요!"
          type="number"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <Button type="button" isDisabled={!searchId} onClick={handleSearch}>
          검색
        </Button>

        {searchResult ? (
          <>
            <p className="sub1 text-secondary-600">검색 결과</p>
            <div className="flex flex-col gap-2 p-8 bg-white rounded-lg shadow-md">
              {MEMBER_DETAIL_FIELDS.map(({ label, key }) => (
                <div key={label} className="flex justify-between">
                  <p className="body1 text-primary-800">{label}</p>
                  <p className="body1 text-primary-500">{searchResult[key]}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="body2 text-primary-300 text-center">
            원하는 ID를 검색해 보세요!
          </p>
        )}
      </div>

      {/* 전체 멤버 리스트 */}
      <div className="w-full max-w-[900px]">
        <h2 className="sub1 text-primary-800 mb-4">전체 멤버 리스트</h2>
        <div className="grid grid-cols-5 gap-4">
          {members.map((member) => (
            <MemberCard
              key={member.id}
              id={member.id}
              name={member.name}
              part={member.part}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
