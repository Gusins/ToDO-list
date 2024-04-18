import { list } from './render';

const formTask = document.querySelector('.form');
const KEY = 'key-task';
const taskArr = JSON.parse(localStorage.getItem(KEY)) ?? [];
htmlRender(taskArr);
formTask.addEventListener('submit', (e) => {
	e.preventDefault();
	const taskObj = {
		id: Date.now(),
		taskName: e.target.taskInput.value,
		checked: false,
	};
	taskArr.push(taskObj);
	localStorage.setItem(KEY, JSON.stringify(taskArr));
	htmlRender(taskArr);




	e.target.taskInput.value = "";
});



function htmlRender(taskArr) {
	list.innerHTML = taskArr.map(({ id, taskName, checked }) => `<li class="task-list_element" id="${id}">
	<p class="task-list_text ${checked ? "completed-task" : ""}">${taskName}</p><button	class="task-list_rm-btn btn">x</button></li>`).join('');
}

