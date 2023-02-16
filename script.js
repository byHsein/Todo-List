const inputField = document.querySelector(".input-field textarea"),
    todoLists = document.querySelector(".todoLists"),
    pendingNum = document.querySelector(".pending-num"),
    clearButton = document.querySelector(".clear-button");


function allTasks() {
    let tasks = document.querySelectorAll(".pending");

//Jika panjang tugas adalah 0 maka konten teks Pending Num akan menjadi no, jika no maka nilai Pending Num akan menjadi panjang tugas (length)
    pendingNum.textContent = tasks.length === 0 ? "no" : tasks.length;

    let allLists = document.querySelectorAll(".list");
    if (allLists.length > 0) {
        todoLists.style.marginTop = "20px";
        clearButton.style.pointerEvents = "auto";
        return;
    }
    todoLists.style.marginTop = "0px";
    clearButton.style.pointerEvents = "none";
}

//tambahkan tugas ketika menambahkan value di text area dan tekan enter
inputField.addEventListener("keyup", (e) => {
    let inputVal = inputField.value.trim(); //function trim menghilangkan spasi di depan dan belakang nilai yang dimasukkan

    //jika tombol enter diklik dan panjang nilai yang dimasukkan lebih besar dari 0.
    if (e.key === "Enter" && inputVal.length > 0) {
        let liTag = ` <li class="list pending" onclick="handleStatus(this)">
            <input type="checkbox" />
            <span class="task">${inputVal}</span>
            <i class="uil uil-trash" onclick="deleteTask(this)"></i>
            </li>`;

        todoLists.insertAdjacentHTML("beforeend", liTag); //memasukkan tag li di dalam div todolist
        inputField.value = ""; //menghapus value dari input field.
        allTasks();
    }
});

//checking and unchecking centang pada Chekbox saat mengklik tugas.
function handleStatus(e) {
    const checkbox = e.querySelector("input"); //getting checkbox
    checkbox.checked = checkbox.checked ? false : true;
    e.classList.toggle("pending");
    allTasks();
}

//menghapus task ketika menekan icon delete.
function deleteTask(e) {
    e.parentElement.remove(); //getting parent element and remove it
    allTasks();
}

//menghapus semua task ketika menekan tombol clear button;
clearButton.addEventListener("click", () => {
    todoLists.innerHTML = "";
    allTasks();
});
