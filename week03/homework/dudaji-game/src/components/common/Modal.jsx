import { createPortal } from "react-dom";
import { Button } from "@/components/common/Button";

function Modal({ score, onClose }) {
  return createPortal(
    <div className="fixed inset-0 bg-main-900/50 flex items-center justify-center">
      <div className="bg-ivory-100 rounded-2xl p-[4rem] flex flex-col items-center gap-6">
        <h2 className="text-4xl font-bold text-main-900">게임 종료!</h2>
        <p className="text-2xl text-main-700">최종 점수: {score}점</p>
        <Button label="확인" variant="primary" onClick={onClose} />
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;
