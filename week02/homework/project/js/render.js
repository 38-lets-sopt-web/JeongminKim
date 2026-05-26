export function render(data) {
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
