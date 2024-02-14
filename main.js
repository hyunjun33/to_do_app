// 사용자가 값을 입력한다
// + 버튼을 클릭하면, 할 일이 추가 된다
// delete 버튼을 누르면, 할 일이 삭제 된다
// check 버튼을 누르면, 할일이 밑줄이 그어진다
// 1. check 버튼을 클릭하는 순간 false -> true
// 2. true이면 Task에 밀줄을 그어서 보여준다
// 3. false이면 그대로 보여준다
// 진행중, 끝남 탭을 누르면, 언더바가 이동한다
// 끝남탭은, 완료 탭은 각각의 아이템 목록만 보여준다
// 전체탭을 무르면 다시 전체 아이템 목록을 보여준다

let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];


addButton.addEventListener("click", addTask);
addButton.addEventListener("click", render);
taskInput.addEventListener("focus", () => {taskInput.value = ""}, );


function addTask() {
    let task = {
        id : randomIdGenerate(),
        taskContent : taskInput.value,
        isComplete : false,
    };

    if (task.taskContent === "") {
        return
    };
    
    taskList.push(task)
    console.log(taskList)
};


function render() {
    let resultHtml = "";
    for (let i = 0; i < taskList.length; i++) {

        if (taskList[i].isComplete === true) {
            resultHtml += `<div class="task">
                <div class="task-done">
                    <span>${taskList[i].taskContent}</span>
                </div>
                <div class="button-area">
                    <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-rotate-right"></i></button>
                    <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`
        }
        else {
            resultHtml += `<div class="task">
                <div>
                <span>${taskList[i].taskContent}</span>
                </div>
                <div class="button-area">
                    <button onclick="toggleComplete('${taskList[i].id}')"><i class="fa-solid fa-check"></i></button>
                    <button onclick="deleteTask('${taskList[i].id}')"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>`
        };
    };

    document.getElementById("task-board").innerHTML = resultHtml;
};


function toggleComplete(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
            taskList[i].isComplete = !taskList[i].isComplete
            break
        };
    }
    render();
    console.log(taskList);
};


function deleteTask(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
            taskList.splice(i, 1)
            break
        };
    }
    render();
    console.log(taskList);
};


function randomIdGenerate() {
    return '_' + Math.random().toString(36).substring(2, 9);
}
