import { getTransactions, saveTransactions } from "./data.js";
import { render } from "./render.js";
import { getFilteredData } from "./filter.js";

// 배경 클릭 모달 닫기
function closeModal(backdropId) {
  document.getElementById(backdropId).classList.remove("active");
}

// 상세 모달 : 열기
export function openDetail(id) {
  const transactions = getTransactions();
  const t = transactions.find((t) => t.id === id);
  if (!t) return;

  document.querySelector(".detail-title").textContent = t.title;
  document.querySelector(".detail-date").textContent = t.date;
  document.querySelector(".detail-category").textContent = t.category;
  document.querySelector(".detail-payment").textContent = t.payment;

  const amountEl = document.querySelector(".detail-amount");
  const numAmount = Number(t.amount);

  amountEl.textContent = `${
    numAmount > 0 ? "+" : ""
  }${numAmount.toLocaleString()}원`;
  amountEl.className = `detail-amount ${
    numAmount > 0 ? "positive" : "negative"
  }`;

  document.getElementById("detail-backdrop").classList.add("active");
}

// 추가 모달 : 열기
export function openAdd() {
  document.getElementById("add-backdrop").classList.add("active");
}

// 추가 모달 : 데이터 수집 및 저장
export function submitAdd() {
  const title = document.getElementById("add-title").value.trim();
  const type = document.getElementById("add-type").value;
  const amount = document.getElementById("add-amount").value;
  const date = document.getElementById("add-date").value;
  const category = document.getElementById("add-category").value;
  const payment = document.getElementById("add-payment").value;

  if (!title || !type || !amount || !date || !category || !payment) {
    alert("모든 항목을 입력해주세요!");
    return;
  }

  const transactions = getTransactions();
  transactions.push({
    id: Date.now(),
    title,
    date,
    category,
    payment,
    amount: type === "지출" ? -Number(amount) : Number(amount),
  });

  saveTransactions(transactions);
  render(getFilteredData(transactions));
  closeModal("add-backdrop");

  document.getElementById("add-title").value = "";
  document.getElementById("add-type").value = "";
  document.getElementById("add-amount").value = "";
  document.getElementById("add-date").value = "";
  document.getElementById("add-category").value = "";
  document.getElementById("add-payment").value = "";
}

// 모달 이벤트 초기화
export function initModalEvents() {
  // 상세 모달 닫기
  document
    .getElementById("detail-close")
    .addEventListener("click", () => closeModal("detail-backdrop"));
  document.getElementById("detail-backdrop").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal("detail-backdrop");
  });

  // 추가 모달 닫기
  document
    .getElementById("add-close")
    .addEventListener("click", () => closeModal("add-backdrop"));
  document.getElementById("add-backdrop").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal("add-backdrop");
  });
  // 추가 모달 열기 및 제출
  document.querySelector(".btn-add").addEventListener("click", openAdd);
  document.getElementById("btn-submit").addEventListener("click", submitAdd);
}
