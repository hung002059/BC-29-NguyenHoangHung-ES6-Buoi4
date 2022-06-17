import { ToDoList } from "./list.js";
import { Validation } from "./validation.js";

const list = new ToDoList();
const validation = new Validation();

const getId = (id) => document.getElementById(id);

const getInfo = () => {
  const toDo = getId("newTask").value;
  return toDo;
};

getId("addItem").onclick = () => {
  let isStatus = true;
  const data = getInfo();
  isStatus = validation.KiemTraTonTai(
    data,
    list.list_UnComplete,
    "errorID",
    "error"
  );
  list.add(data);
  renderToDo(list.list_UnComplete, "todo");
};

const renderToDo = (data, id) => {
  const content = data.reduce((total, ele, index) => {
    total += `
   <li class="p-0">
      <input class="btn w-100" type="text" value="${ele}" />
      <div class="icon">
         <i id="icon_remove" class="fa-solid fa-trash-can" onclick="remove(${index})"></i>
         <i id="icon_complete" class="fa-solid fa-circle-check" onclick="complete(${index})"></i>
      </div>
   </li>
      `;
    return total;
  }, "");

  getId(id).innerHTML = content;
};

window.complete = (index) => {
  list.complete(list.list_UnComplete[index]);
  list.remove(list.list_UnComplete[index]);
  renderToDo(list.list_UnComplete, "todo");
  renderToDo(list.list_Complete, "completed");
};

window.remove = (index) => {
  list.remove(list.list_UnComplete[index]);
  renderToDo(list.list_UnComplete, "todo");
};

getId("two").onclick = () => {
  list.sortAtoZ();
  renderToDo(list.list_UnComplete, "todo");
  renderToDo(list.list_Complete, "completed");
};

getId("three").onclick = () => {
  list.sortZtoA();
  renderToDo(list.list_UnComplete, "todo");
  renderToDo(list.list_Complete, "completed");
};
