import { useNavigate, useParams } from "react-router";

interface Member {
  id: number;
  name: string;
  part: string;
  email: string;
  age: number;
}

// TODO: API 연동 후 실제 데이터로 교체
const MOCK_MEMBERS: Member[] = [
  { id: 1, name: "나연", part: "iOS", email: "na@example.com", age: 20 },
  { id: 2, name: "나연", part: "iOS", email: "na2@example.com", age: 21 },
  { id: 3, name: "test", part: "웹", email: "test@example.com", age: 22 },
  { id: 4, name: "이채영", part: "웹", email: "lee@example.com", age: 23 },
  { id: 5, name: "김철수", part: "iOS", email: "kim@example.com", age: 25 },
];

const MEMBER_DETAIL_FIELDS: { label: string; key: keyof Member }[] = [
  { label: "이름", key: "name" },
  { label: "아이디", key: "id" },
  { label: "이메일", key: "email" },
  { label: "나이", key: "age" },
  { label: "파트", key: "part" },
];

function MemberDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const member = MOCK_MEMBERS.find((m) => m.id === Number(id));

  if (!member) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="body1 text-primary-400">존재하지 않는 회원입니다.</p>
      </div>
    );
  }

  return (
    <div className="py-16 flex flex-col items-center gap-6">
      <h1 className="head2 text-primary-900">상세 정보</h1>

      <div className="w-full max-w-[520px] flex flex-col gap-4">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex items-center gap-1 body2 text-primary-500 hover:text-primary-700 w-fit"
        >
          ← 뒤로가기
        </button>

        <div className="flex flex-col gap-4 bg-white rounded-lg shadow-md p-8">
          {MEMBER_DETAIL_FIELDS.map(({ label, key }) => (
            <div key={label} className="flex justify-between">
              <p className="sub2 text-primary-800">{label}</p>
              <p className="body2 text-primary-400">
                {key === "age" ? `${member[key]}세` : member[key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MemberDetail;
