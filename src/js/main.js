import { htmlRender } from './render';

const formTask = document.querySelector('.form');
const KEY = 'key-task';
let taskArr = JSON.parse(localStorage.getItem(KEY)) ?? [];
const list = document.querySelector(".task-list");
htmlRender(taskArr);

formTask.addEventListener('submit', (e) => {
	e.preventDefault();
	if (!e.target.taskInput.value) { return; }
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

list.addEventListener('click', itemInter);

function itemInter(e) {
	const idx = taskArr.findIndex(({ id }) => Number(id) === Number(e.target.parentElement.id));
	if (e.target.className.includes('task-list_text')) {
		if (e.target.className.includes('completed-task')) {
			e.target.classList.remove('completed-task');
			taskArr[idx].checked = false;
		} else {
			e.target.classList.add('completed-task');
			taskArr[idx].checked = true;
			const elementToMove = taskArr.splice(idx, 1)[0];
			taskArr.unshift(elementToMove);
		}
		localStorage.setItem(KEY, JSON.stringify(taskArr));
		htmlRender(taskArr);
	} else if (e.target.className.includes('task-list_rm-btn')) {
		taskArr.splice(idx, 1);
		localStorage.setItem(KEY, JSON.stringify(taskArr));
		htmlRender(taskArr);
	} else {
		return;
	}
}

