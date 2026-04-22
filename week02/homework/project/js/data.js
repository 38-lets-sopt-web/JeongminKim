import { expenses } from "./expenses.js";

// localStorage 초기화
//todo: 파일구조개편
if (!localStorage.getItem("expenseData")) {
  localStorage.setItem("expenseData", JSON.stringify(expenses));
}

let transactions = JSON.parse(localStorage.getItem("expenseData"));

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

  // total
  const total = data.reduce((sum, t) => sum + t.amount, 0);
  const totalEl = document.getElementById("total-amount");
  totalEl.textContent = (total > 0 ? "+" : "") + total.toLocaleString();
  totalEl.className = total > 0 ? "positive" : "negative";
}

// 선택 삭제
document.querySelector(".btn-delete").addEventListener("click", () => {
  const checked = [...document.querySelectorAll("tbody input:checked")].map(
    (el) => Number(el.value)
  );
  transactions = transactions.filter((t) => !checked.includes(t.id));
  save();
  render(transactions);
});

// 전체 체크박스
document.getElementById("check-all").addEventListener("change", (e) => {
  document
    .querySelectorAll('tbody input[type="checkbox"]')
    .forEach((cb) => (cb.checked = e.target.checked));
});

// 초기 렌더링
render(transactions);
