window.addEventListener("load", () => {
  todos = JSON.parse(localStorage.getItem("todos")) || [];

  const nameInput = document.getElementById("name");
  const username = localStorage.getItem("username") || "";

  nameInput.value = username;

  nameInput.addEventListener("change", (e) => {
    localStorage.setItem("username", e.target.value);
  });

  const newTodoForm = document.getElementById("new-todo-form");
  newTodoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const todo = {
      content: e.target.elements.content.value,
      category: e.target.elements.category.value,
      done: false,
      createdAt: new Date().getTime(),
    };

    if (content.value === "") {
      alert("Error");
    } else {
      todos.push(todo);
    }

    localStorage.setItem("todos", JSON.stringify(todos));

    e.target.reset();

    DisplayTodos();
  });

  DisplayTodos();
});

function DisplayTodos() {
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = todo.done;
    const span = document.createElement("span");
    span.classList.add("bubble");

    const content = document.createElement("div");
    content.classList.add("todo-content");

    const action = document.createElement("div");
    action.classList.add("todo-action");

    const edit = document.createElement("button");
    edit.classList.add("edit");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");

    if (todo.category == "personal") {
      span.classList.add("personal");
    } else {
      span.classList.add("businnes");
    }

    content.innerHTML = `<input type="text" value="${todo.content}" readonly />`;
    edit.innerHTML = "Edit";
    deleteBtn.innerHTML = "Delete";

    label.appendChild(input);
    label.appendChild(span);
    action.appendChild(edit);
    action.appendChild(deleteBtn);
    todoItem.appendChild(label);
    todoItem.appendChild(content);
    todoItem.appendChild(action);

    todoList.appendChild(todoItem);

    if (todo.done) {
      todoItem.classList.add("done");
    }

    input.addEventListener("change", (e) => {
      todo.done = e.target.checked;
      localStorage.setItem("todos", JSON.stringify(todos));

      if (todo.done) {
        todoItem.classList.add("done");
      } else {
        todoItem.classList.remove("done");
      }

      DisplayTodos();
    });

    edit.addEventListener("click", (e) => {
      const input = content.querySelector("input");
      input.removeAttribute("readonly");
      input.focus();
      input.addEventListener("blur", (e) => {
        input.setAttribute("readonly", true);
        todo.content = e.target.value;
        localStorage.setItem("todos", JSON.stringify(todos));
        DisplayTodos();
      });
    });

    deleteBtn.addEventListener("click", (e) => {
      todos = todos.filter((t) => t != todo);
      localStorage.setItem("todos", JSON.stringify(todos));
      DisplayTodos();
    });
  });
}

const span1 = document.getElementById("span1");
const label1 = document.getElementById("label1");
label1.addEventListener("mouseover", () => {
  span1.classList.add("hover");
});
label1.addEventListener("mouseout", () => {
  span1.classList.remove("hover");
});

const span2 = document.getElementById("span2");
const label2 = document.getElementById("label2");
label2.addEventListener("mouseover", () => {
  span2.classList.add("hover");
});
label2.addEventListener("mouseout", () => {
  span2.classList.remove("hover");
});
