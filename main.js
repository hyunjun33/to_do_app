// 사용자가 값을 입력한다
// + 버튼을 클릭하면, 할 일이 추가 된다
// delete 버튼을 누르면, 할 일이 삭제 된다
// check 버튼을 누르면, 할일이 밑줄이 그어진다
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
    let taskContent = taskInput.value
    taskList.push(taskContent)
};

function render() {
    let resultHtml = "";
    for (let i = 0; i < taskList.length; i++) {
        resultHtml += `<div class="task">
        <div>
            ${taskList[i]}
        </div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`
    };

    document.getElementById("task-board").innerHTML = resultHtml;
}
