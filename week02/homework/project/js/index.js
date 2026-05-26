import { initData, getTransactions } from "./data.js";
import { render } from "./render.js";
import { initEvents } from "./events.js";
import { initModalEvents, openDetail } from "./modal.js";

initData();
const transactions = getTransactions();
initEvents(transactions);
render(transactions);
window.openDetail = openDetail;
initModalEvents();
