let inputElement = document.getElementById("inputTag");
let inputList = document.getElementById("todoElement");


inputElement.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    let items = inputElement.value;
    if(items!=""){
    let itemDiv = document.createElement("div");
    itemDiv.className = "listElement";
    let itemSpan = document.createElement("span");
    itemSpan.className = "listItem";
    itemSpan.innerText = items;
    let button = document.createElement("button");
    button.innerText = "delete task";
    button.className = "deleteBtn";
    button.addEventListener("click", () => {
      itemDiv.remove();
    });
    itemSpan.appendChild(button);
    itemDiv.appendChild(itemSpan);
    inputList.appendChild(itemDiv);
  }
    inputElement.value = "";
  }
});
