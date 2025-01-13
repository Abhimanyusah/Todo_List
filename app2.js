let inputs = document.getElementById("inp");
let text = document.querySelector(".text");
let button = document.querySelector("#btn");

button.addEventListener("click", Add);

function Add() {
  if (inputs.value === "") {
    alert("Please Enter Task");
  } else {
    let newEle = document.createElement("div");
    newEle.classList.add("task-item");

    let taskContent = document.createElement("div");
    taskContent.classList.add("task-content");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    let span = document.createElement("span");
    span.textContent = inputs.value;
    span.classList.add("task-text");

    taskContent.appendChild(checkbox);
    taskContent.appendChild(span);

    let iconContainer = document.createElement("div");
    iconContainer.classList.add("icon-container");

    let trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-sharp", "fa-solid", "fa-trash");

    iconContainer.appendChild(trashIcon);
    newEle.appendChild(taskContent);
    newEle.appendChild(iconContainer);
    text.appendChild(newEle);

    inputs.value = "";

    trashIcon.addEventListener("click", function () {
      newEle.remove();
    });

    checkbox.addEventListener("click", function () {
      span.style.textDecoration = checkbox.checked ? "line-through" : "none";
    });

    taskContent.addEventListener("click", function (e) {
      if (e.target !== checkbox) {
        checkbox.checked = !checkbox.checked;
        span.style.textDecoration = checkbox.checked ? "line-through" : "none";
      }
    });
  }
}
