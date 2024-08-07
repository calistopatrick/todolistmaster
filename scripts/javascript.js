window.addEventListener("load", function () {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  // Função para salvar as tarefas no localStorage
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll(".tableRow").forEach(row => {
      const task = {
        text: row.querySelector("input.text").value,
        star: row.querySelector("button.starFill") !== null,
        read: row.querySelector("button.unread") !== null
      };
      tasks.push(task);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Função para carregar as tarefas do localStorage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    tasks.forEach(task => {
      addTask(task.text, task.star, task.read);
    });
  }

  // Função para adicionar uma tarefa na lista
  function addTask(recebe, star = false, read = false) {
    if (recebe !== "") {
      const tr_el = document.createElement("div");
      tr_el.classList.add("tableRow");

      const td_content_el = document.createElement("div");
      td_content_el.classList.add("tableColumm1");

      tr_el.appendChild(td_content_el);

      const table_input_el = document.createElement("input");
      table_input_el.classList.add("text");
      table_input_el.type = "text";
      table_input_el.value = recebe;
      table_input_el.setAttribute("readonly", "readonly");

      td_content_el.appendChild(table_input_el);

      const btn_actions_el = document.createElement("div");
      btn_actions_el.classList.add("actions");

      const btn_star_el = document.createElement("button");
      btn_star_el.classList.add("star");
      btn_star_el.innerHTML = star ? `<img src="./img/star-fill.svg">` : `<img src="./img/star.svg">`;
      if (star) btn_star_el.classList.add("starFill");

      const btn_edit_el = document.createElement("button");
      btn_edit_el.classList.add("edit");
      btn_edit_el.innerHTML = `<img src="./img/pencil-square.svg">`;

      const btn_delete_el = document.createElement("button");
      btn_delete_el.classList.add("delete");
      btn_delete_el.innerHTML = `<img src="./img/trash.svg">`;

      const btn_read_el = document.createElement("button");
      btn_read_el.classList.add("read");
      btn_read_el.innerHTML = read ? `<img src="./img/clipboard2-check.svg">` : `<img src="./img/clipboard2.svg">`;
      if (read) {
        btn_read_el.classList.add("unread");
        table_input_el.classList.add("corMarca");
        table_input_el.setAttribute("style", "text-decoration:line-through");
      }

      btn_actions_el.appendChild(btn_star_el);
      btn_actions_el.appendChild(btn_read_el);
      btn_actions_el.appendChild(btn_edit_el);
      btn_actions_el.appendChild(btn_delete_el);

      tr_el.appendChild(btn_actions_el);
      list_el.appendChild(tr_el);
      input.value = "";

      btn_edit_el.addEventListener("click", (e) => {
        if (btn_edit_el.classList.contains("edit")) {
          btn_edit_el.classList = "save";
          btn_edit_el.innerHTML = `<img src="./img/arrow-repeat.svg">`;
          table_input_el.setAttribute("style", "color: #f00");
          table_input_el.removeAttribute("readonly");
          table_input_el.focus();
        } else {
          btn_edit_el.classList.remove("save");
          btn_edit_el.classList.add("edit");
          btn_edit_el.innerHTML = `<img src="./img/pencil-square.svg">`;
          table_input_el.setAttribute("readonly", "readonly");
          table_input_el.removeAttribute("style", "color: #f00");
          saveTasks();
        }
      });

      btn_delete_el.addEventListener("click", (e) => {
        list_el.removeChild(tr_el);
        saveTasks();
      });

      btn_read_el.addEventListener("click", (e) => {
        if (btn_read_el.classList.contains("read")) {
          table_input_el.classList.add("corMarca");
          btn_read_el.classList = "unread";
          btn_read_el.innerHTML = `<img src="./img/clipboard2-check.svg">`;
          table_input_el.setAttribute("style", "text-decoration:line-through");
        } else {
          table_input_el.classList.remove("corMarca");
          btn_read_el.classList.remove("unread");
          btn_read_el.classList.add("read");
          btn_read_el.innerHTML = `<img src="./img/clipboard2.svg">`;
          table_input_el.removeAttribute("style", "text-decoration:line-through");
        }
        saveTasks();
      });

      btn_star_el.addEventListener("click", (e) => {
        if (btn_star_el.classList.contains("star")) {
          btn_star_el.classList = "starFill";
          btn_star_el.innerHTML = `<img src="./img/star-fill.svg">`;
        } else {
          btn_star_el.classList.remove("starFill");
          btn_star_el.classList.add("star");
          btn_star_el.innerHTML = `<img src="./img/star.svg">`;
        }
        saveTasks();
      });

      saveTasks();
    }
  }

  // Carregar as tarefas ao carregar a página
  loadTasks();

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const recebe = input.value;
    addTask(recebe);
  });
});
