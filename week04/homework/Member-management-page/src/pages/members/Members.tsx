import { Button, Input } from "@/shared/components";
import MemberCard from "@pages/members/MemberCard";
import { useState } from "react";

type Member = {
  id: number;
  name: string;
  part: string;
  email: string;
  age: number;
};

const MOCK_MEMBERS: Member[] = [
  { id: 1, name: "나연", part: "iOS", email: "na@example.com", age: 20 },
  { id: 2, name: "나연", part: "iOS", email: "na2@example.com", age: 21 },
  { id: 3, name: "test", part: "웹", email: "test@example.com", age: 22 },
  { id: 4, name: "이채영", part: "웹", email: "lee@example.com", age: 23 },
  { id: 5, name: "김철수", part: "iOS", email: "kim@example.com", age: 25 },
];

const MEMBER_DETAIL_FIELDS: { label: string; key: keyof Member }[] = [
  { label: "아이디", key: "name" },
  { label: "이름", key: "name" },
  { label: "이메일", key: "email" },
  { label: "나이", key: "age" },
  { label: "파트", key: "part" },
];

function Members() {
  const [searchId, setSearchId] = useState("");
  const [searchResult, setSearchResult] = useState<Member | null>(null);

  const handleSearch = () => {
    const found = MOCK_MEMBERS.find((member) => member.id === Number(searchId));
    setSearchResult(found ?? null);
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
        <p className="sub1 text-secondary-600">검색 결과</p>
        <div className="flex flex-col gap-2 p-8 bg-white rounded-lg shadow-md">
          {searchResult ? (
            <>
              {MEMBER_DETAIL_FIELDS.map(({ label, key }) => (
                <div key={label} className="flex justify-between">
                  <p className="body1 text-primary-800">{label}</p>
                  <p className="body1 text-primary-500">{searchResult[key]}</p>
                </div>
              ))}
            </>
          ) : (
            <p className="body2 text-primary-300 text-center">
              원하는 ID를 검색해 보세요!
            </p>
          )}
        </div>
      </div>

      {/* 전체 멤버 리스트 */}
      <div className="w-full max-w-[900px]">
        <h2 className="sub1 text-primary-800 mb-4">전체 멤버 리스트</h2>
        <div className="grid grid-cols-5 gap-4">
          {MOCK_MEMBERS.map((member) => (
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
