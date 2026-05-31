import type { Member } from "@/shared/types/user";
import { MEMBER_DETAIL_FIELDS } from "@/shared/constants/memberFields";

interface MemberSearchResultProps {
  searchResult: Member | null;
}

function MemberSearchResult({ searchResult }: MemberSearchResultProps) {
  if (!searchResult) {
    return (
      <p className="body2 text-primary-300 text-center">
        원하는 ID를 검색해 보세요!
      </p>
    );
  }

  return (
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
  );
}

export default MemberSearchResult;
