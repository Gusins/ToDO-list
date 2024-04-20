const list = document.querySelector(".task-list");
export function htmlRender(taskArr) {
	list.innerHTML = taskArr.map(({ id, taskName, checked }) => `<li class="task-list_element" id="${id}">
	<p class="task-list_text ${checked ? "completed-task" : ""}">${taskName}</p><button	class="task-list_rm-btn btn">x</button></li>`).join('');
}