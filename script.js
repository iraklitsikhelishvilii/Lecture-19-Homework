let add_btn = document.getElementById("add_btn");
let ul = document.getElementById("ul");

add_btn.addEventListener("click", () => {
  let information = prompt("შეიყვანეთ ინფორმაცია");
  if (information.length <= 0) {
    alert("შეიყვანეთ ინფორმაცია!!!");
  } else {
    let li = document.createElement("li");
    li.textContent = information;
    let btn = document.createElement("button");
    btn.textContent = "remove";
    btn.addEventListener("click", () => {
      ul.removeChild(li);
    });
    li.appendChild(btn);
    ul.appendChild(li);
  }
});
