// Creamos un arreglo llamado 'tasks' para almacenar las tareas.
const tasks = [];

// Esta función agrega una tarea al arreglo 'tasks'.
function addTask(task) {
  tasks.push(task);
  // Llamamos a la función 'renderTasks' para actualizar la vista de las tareas.
  renderTasks();
}

// Esta función elimina una tarea del arreglo 'tasks' por su índice.
function removeTask(index) {
  tasks.splice(index, 1);
  // Llamamos a la función 'renderTasks' para actualizar la vista de las tareas.
  renderTasks();
}

// Esta función se encarga de mostrar las tareas en el elemento HTML con el id 'tasks'.
function renderTasks() {
  // Obtenemos el elemento HTML con el id 'tasks'.
  const tasksElement = document.querySelector('#tasks');
  // Limpiamos su contenido para evitar duplicaciones.
  tasksElement.innerHTML = '';

  // Iteramos sobre cada tarea en el arreglo tasks de alla arriba.
  //WEOOO, Aquí comenzamos a colocar las tareas que crea el usuarioooooo


  
  for (const task of tasks) {
    // Creamos un elemento <div> para representar una tarea.
    const taskElement = document.createElement('div');
    taskElement.classList.add('task-item'); // Agregamos una clase CSS para estilos.
//el título de la tarea.
    const taskTitleElement = document.createElement('h2');
    taskTitleElement.textContent = task.title; // Asignamos el título de la tarea.
    taskElement.appendChild(taskTitleElement);

    // descripción de la tarea.
    const taskDescriptionElement = document.createElement('p');
    taskDescriptionElement.textContent = task.description; // Asignamos la descri

   
    taskElement.appendChild(taskDescriptionElement);

    const removeTaskButton = document.createElement('button');
    removeTaskButton.textContent = 'Remove';
    removeTaskButton.addEventListener('click', () => {
      removeTask(tasks.indexOf(task));
    });
    taskElement.appendChild(removeTaskButton);

    tasksElement.appendChild(taskElement);
  }
}
const form = document.querySelector('#Form-Tareas');
// Agregamos un evento 'submit' al formulario con id 'Form-Tareas'.
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe y la página se recargue.
  
    // Obtenemos el valor del campo de título y descripción del formulario.
    const taskTitle = form.querySelector('#title').value;
    const taskDescription = form.querySelector('#descripcion').value;
  
    // Llamamos a la función 'addTask' para agregar una nueva tarea al arreglo 'tasks'.
    addTask({ title: taskTitle, description: taskDescription });
  
    // Limpiamos el formulario después de agregar la tarea.
    form.reset();
  });
  
  // Llamamos a la función 'renderTasks' inicialmente para mostrar cualquier tarea existente.
  renderTasks();