import { Button, Input } from "@/shared/components";

function MyPage() {
  const userId = "김자반";
  const userPart = "웹";

  const userInfo = [
    { label: "아이디", value: userId },
    { label: "파트", value: userPart },
  ];

  const handleEditInfo = () => {
    alert("정보가 수정되었습니다.");
    // TODO: 정보 수정 성공 유무 에 따른 alert 분기 처리 및 API 연동
  };

  return (
    <div className="py-8 flex flex-col gap-8 justify-center items-center">
      <h1 className="head2 text-secondary-600 ">내 정보</h1>
      <div className=" sub2 flex flex-col gap-2 max-w-[320px] w-full bg-white p-8 rounded-lg shadow-md">
        {userInfo.map((info) => (
          <div className="flex justify-between" key={info.label}>
            <p className=" text-primary-800">{info.label} </p>
            <p>{info.value}</p>
          </div>
        ))}
      </div>
      {/* TODO: 본인 정보 받아와서 띄워두기 */}
      <div className="flex flex-col gap-4 w-full max-w-[420px]">
        <Input label="이름" placeholder="이름을 입력해주세요." />
        <Input label="이메일" placeholder="이메일을 입력해주세요." />
        <Input label="나이" placeholder="나이를 입력해주세요." />
        <Button type="button" onClick={handleEditInfo}>
          정보 수정
        </Button>
      </div>
    </div>
  );
}

export default MyPage;
