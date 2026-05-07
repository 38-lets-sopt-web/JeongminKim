import { Button, Input } from "@/shared/components";
import MemberCard from "@pages/members/MemberCard";
import MemberSearchResult from "./components/MemberSearchResult";
import { useMembers } from "./hooks/useMembers";

function Members() {
  const { search, members } = useMembers();
  const { searchId, setSearchId, searchResult, handleSearch } = search;

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
        <MemberSearchResult searchResult={searchResult} />
      </div>

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
