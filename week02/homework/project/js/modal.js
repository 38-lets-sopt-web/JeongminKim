import { getTransactions, saveTransactions } from "./data.js";
import { render } from "./render.js";
import { getFilteredData } from "./filter.js";

// 배경 클릭 모달 닫기
function closeModal(backdropId) {
  document.getElementById(backdropId).classList.remove("active");
}

// 추가 모달 폼 데이터 수집
function getAddFormData() {
  return {
    title: document.getElementById("add-title").value.trim(),
    type: document.getElementById("add-type").value,
    amount: document.getElementById("add-amount").value,
    date: document.getElementById("add-date").value,
    category: document.getElementById("add-category").value,
    payment: document.getElementById("add-payment").value,
  };
}

// 추가 모달 폼 초기화
function resetAddForm() {
  const fields = [
    "add-title",
    "add-type",
    "add-amount",
    "add-date",
    "add-category",
    "add-payment",
  ];
  fields.forEach((id) => {
    document.getElementById(id).value = "";
  });
}

// 상세 모달 : 열기
export function openDetail(id) {
  const transactions = getTransactions();
  const transaction = transactions.find((transaction) => transaction.id === id);
  if (!transaction) return;

  document.querySelector(".detail-title").textContent = transaction.title;
  document.querySelector(".detail-date").textContent = transaction.date;
  document.querySelector(".detail-category").textContent = transaction.category;
  document.querySelector(".detail-payment").textContent = transaction.payment;

  const amountEl = document.querySelector(".detail-amount");
  const numAmount = Number(transaction.amount);

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
  const { title, type, amount, date, category, payment } = getAddFormData();

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
  resetAddForm();
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
  document.querySelector(".btn-add").addEventListener("click", openAdd);
  document.getElementById("btn-submit").addEventListener("click", submitAdd);
}
