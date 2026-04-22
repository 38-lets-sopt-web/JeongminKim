import { initData, getTransactions } from "./data.js";
import { render } from "./render.js";
import { initEvents } from "./events.js";

initData();
const transactions = getTransactions();
initEvents(transactions);
render(transactions);
