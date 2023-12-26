const divMessage = document.querySelector(".alert");
const submit = document.querySelector("#new-task-submit");
const input = document.querySelector("#new-task-input");

const recebe = input.value;
const msg = "Sucesso !";
const msgD = "Task deletada !";
const msgSave = "Task atualizada !";
const msgNull = "Task vazia !";

function ativar(msg) {
  const message = document.createElement("div");
  message.classList.add("message");
  message.innerText = msg;
  divMessage.appendChild(message);

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}

submit.addEventListener("click", () => {
  ativar(msg);
});

/*DELETE*/
function ativarD(msgD) {
  const message = document.createElement("div");
  message.classList.add("messageDelete");
  message.setAttribute("style", "color: #fff");
  message.innerText = msgD;
  divMessage.appendChild(message);

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}

btn_delete_el.addEventListener("click", () => {
  ativarD(msgD);
});

/*SAVE*/
function ativarSave(msgSave) {
  const message = document.createElement("div");
  message.classList.add("messageSave");
  message.setAttribute("style", "color: #fff");
  message.innerText = msgSave;
  divMessage.appendChild(message);

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}

btn_edit_el.addEventListener("click", () => {
  ativarSave(msgSave);
});
/*DELETE*/
function ativarD(msgD) {
  const message = document.createElement("div");
  message.classList.add("messageDelete");
  message.setAttribute("style", "color: #fff");
  message.innerText = msgD;
  divMessage.appendChild(message);

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}

btn_delete_el.addEventListener("click", () => {
  ativarD(msgD);
});

/*NULL*/
function ativarNull(msgSave) {
  const message = document.createElement("div");
  message.classList.add("messageNull");
  message.innerText = msgNull;
  divMessage.appendChild(message);

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}

submit.addEventListener("click", () => {
  ativarNull(msgNull);
});
