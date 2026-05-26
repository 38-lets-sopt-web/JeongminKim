export function getFilteredData(transactions) {
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
