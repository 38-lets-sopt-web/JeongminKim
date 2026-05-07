import { getUserById } from "@/shared/api/user";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

interface Member {
  id: number;
  name: string;
  part: string;
  email: string;
  age: number;
}

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
