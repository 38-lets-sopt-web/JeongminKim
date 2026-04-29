import { saveTransactions } from "./data.js";
import { render } from "./render.js";
import { getFilteredData } from "./filter.js";

export function initEvents(transactions) {
  const [btnApply, btnReset] = document.querySelectorAll(
    ".filter-buttons button"
  );

  // 필터 적용
  btnApply.addEventListener("click", () => {
    render(getFilteredData(transactions));
  });

  // 필터 초기화
  btnReset.addEventListener("click", () => {
    document.querySelector(".filter-row input").value = "";
    document
      .querySelectorAll(".filter-row select")
      .forEach((s) => (s.value = "전체"));
    render(transactions);
  });

  // 선택 삭제
  document.querySelector(".btn-delete").addEventListener("click", () => {
    if (!confirm("선택한 항목을 삭제할까요?")) return;
    const checked = [...document.querySelectorAll("tbody input:checked")].map(
      (el) => Number(el.value)
    );
    transactions = transactions.filter(
      (transaction) => !checked.includes(transaction.id)
    );
    saveTransactions(transactions);
    render(getFilteredData(transactions));
  });

  // 전체 체크박스
  document.getElementById("check-all").addEventListener("change", (e) => {
    document
      .querySelectorAll('tbody input[type="checkbox"]')
      .forEach((cb) => (cb.checked = e.target.checked));
  });

  // 정렬
  document.querySelector(".sort-select").addEventListener("change", (e) => {
    const asc = e.target.value === "날짜 오름차순";
    transactions.sort((a, b) =>
      asc
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );
    render(getFilteredData(transactions));
  });
}
