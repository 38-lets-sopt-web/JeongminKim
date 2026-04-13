//요소 선택
const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-btn");
const todoList = document.querySelector(".todo-list");

// 로컬스토리지에서 투두리스트 불러오기
function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });
}

// 투두리스트 추가 함수
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const li = document.createElement("li");
    li.textContent = todoText;
    todoList.appendChild(li);

    // 로컬스토리지에 투두리스트 저장
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.push(todoText);
    localStorage.setItem("todos", JSON.stringify(todos));

    todoInput.value = "";
  }
}

// 이벤트 리스너 등록
addBtn.addEventListener("click", addTodo);
window.addEventListener("load", loadTodos);
