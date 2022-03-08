// add events
window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-from');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    // add event for Add's Button
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // input whitout space
        const task = input.value.trim();

        const massage = 'Please fill out what do you want to do!';

        // check input, if we have noting and click on Add's Button then show alert massage
        if (!task || task.replace(/ /g, '') == '') {
            alert(massage);
            return;
        }

        //create space for us to do list
        const task_el = document.createElement('div');
        task_el.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        task_el.appendChild(task_content_el)

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        const task_edit_el = document.createElement('i');
        task_edit_el.className = 'fas fa-pencil';
        task_edit_el.classList.add('edit');

        const task_delete_el = document.createElement('i');
        task_delete_el.className = 'fas fa-trash-alt';
        task_delete_el.classList.add('delete');

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);

        // clear input after click Add's Button
        input.value = '';

        // Edit & Save Button
        task_edit_el.addEventListener('click', () => {

            if (task_edit_el.className == 'fas fa-pencil edit') {

                task_input_el.removeAttribute('readonly');
                task_input_el.focus();
                task_edit_el.className = 'far fa-save';
                task_edit_el.classList.add('edit');
                task_edit_el.style.color = '#0f0';
                task_el.style.boxShadow = 'inset 0 0 0 1px #0f0';

            } else {

                task_el.style.boxShadow = 'inset 0 0 0 0px #0f0';

                if (task_input_el.value.length < 1 || task_input_el.value.trim() == '') {
                    alert('It will be deleted !!');
                    list_el.removeChild(task_el);
                } else {
                    task_input_el.value = task_input_el.value.trim();
                    task_input_el.setAttribute('readonly', 'readonly');
                    task_edit_el.className = 'fas fa-pencil';
                    task_edit_el.classList.add('edit');
                    task_edit_el.style.color = '#fff';

                }

            }
        });

        //Delete Button
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });
    });
});