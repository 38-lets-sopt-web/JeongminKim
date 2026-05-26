import { expenses } from "./expenses.js";

// 초기 데이터 설정
export function initData() {
  if (!localStorage.getItem("expenseData")) {
    localStorage.setItem("expenseData", JSON.stringify(expenses));
  }
}

// 데이터 가져오기
export function getTransactions() {
  return JSON.parse(localStorage.getItem("expenseData"));
}

// 데이터 저장하기
export function saveTransactions(transactions) {
  localStorage.setItem("expenseData", JSON.stringify(transactions));
}
