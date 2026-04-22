import { expenses } from "./expenses.js";

export function initData() {
  if (!localStorage.getItem("expenseData")) {
    localStorage.setItem("expenseData", JSON.stringify(expenses));
  }
}

export function getTransactions() {
  return JSON.parse(localStorage.getItem("expenseData"));
}

export function saveTransactions(transactions) {
  localStorage.setItem("expenseData", JSON.stringify(transactions));
}
