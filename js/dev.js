function complete(event) {
  const totalValue = document.getElementById("task-number");
  const taskConvert = parseInt(totalValue.innerText);

  const totalDevBoard = document.getElementById("dev");
  const devConverted = parseInt(totalDevBoard.innerText);
  const totalDev = devConverted + 1;
  totalDevBoard.innerText = totalDev;

  const totalTask = taskConvert - 1;
  totalValue.innerText = totalTask;

  if (totalTask < 1) {
    alert("congratulation you have all complete");
  }

  const button = event.target;
  button.disabled = true;

  const title = event.target.parentNode.parentNode.children[1].innerText;

  const newComponent1 = document.getElementById("componentRemove");
  const paragraph = document.createElement("p");
  paragraph.classList.add("p-2", "bg-slate-100", "m-2", "rounded-lg");

  paragraph.textContent = `You Have Completed The Task ${title} at ${formattedDate1}`;
  alert("Board Update Successfully");
  newComponent1.appendChild(paragraph);
}

function clearAll() {
  const newComponent2 = document.getElementById("componentRemove");

  if (newComponent2) {
    newComponent2.innerHTML = "";
  }
}

function newBackground() {
  const colors = ["red", "green", "blue", "yellow", "white"];
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

const newDate = document.getElementById("date");
const now = new Date();
const formattedDate = now.toLocaleString();
const formattedDate1 = now.toLocaleString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});
newDate.innerText = formattedDate;

function changePage() {
  window.location.href = "./index.html";
}

function newPage() {
  window.location.href = "./new.html";
}
