// index.js
import { expenses } from "./expenses.js";

// localStorage 초기화
if (!localStorage.getItem("expenseData")) {
  localStorage.setItem("expenseData", JSON.stringify(expenses));
}

let transactions = JSON.parse(localStorage.getItem("expenseData"));

// localStorage 저장
function save() {
  localStorage.setItem("expenseData", JSON.stringify(transactions));
}

// 렌더링
function render(data) {
  const tbody = document.getElementById("transaction-body");
  tbody.innerHTML = data
    .map(
      (t) => `
      <tr>
        <td><input type="checkbox" value="${t.id}" /></td>
        <td><a href="#" onclick="openDetail(${t.id})">${t.title}</a></td>
        <td class="${t.amount > 0 ? "positive" : "negative"}">
          ${t.amount > 0 ? "+" : ""}${t.amount.toLocaleString()}
        </td>
        <td>${t.date}</td>
        <td>${t.category}</td>
        <td>${t.payment}</td>
      </tr>
    `
    )
    .join("");

  const total = data.reduce((sum, t) => sum + t.amount, 0);
  const totalEl = document.getElementById("total-amount");
  totalEl.textContent = (total > 0 ? "+" : "") + total.toLocaleString();
  totalEl.className = total > 0 ? "positive" : "negative";
}

// 검색 필터
function getFilteredData() {
  const title = document.querySelector(".filter-row input").value.trim();
  const selects = document.querySelectorAll(".filter-row select");
  const type = selects[0].value;
  const category = selects[1].value;
  const payment = selects[2].value;

  return transactions.filter((t) => {
    const matchTitle = t.title.includes(title);
    const matchType =
      type === "전체" ||
      (type === "수입" && t.amount > 0) ||
      (type === "지출" && t.amount < 0);
    const matchCategory = category === "전체" || t.category === category;
    const matchPayment = payment === "전체" || t.payment === payment;

    return matchTitle && matchType && matchCategory && matchPayment;
  });
}

// 필터 적용 버튼
const [btnApply, btnReset] = document.querySelectorAll(
  ".filter-buttons button"
);

btnApply.addEventListener("click", () => {
  render(getFilteredData());
});

// 초기화 버튼
btnReset.addEventListener("click", () => {
  document.querySelector(".filter-row input").value = "";
  document
    .querySelectorAll(".filter-row select")
    .forEach((s) => (s.value = "전체"));
  render(transactions);
});

// 선택 삭제
document.querySelector(".btn-delete").addEventListener("click", () => {
  const checked = [...document.querySelectorAll("tbody input:checked")].map(
    (el) => Number(el.value)
  );
  transactions = transactions.filter((t) => !checked.includes(t.id));
  save();
  render(getFilteredData());
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
  render(getFilteredData());
});

// 초기 렌더링
render(transactions);
