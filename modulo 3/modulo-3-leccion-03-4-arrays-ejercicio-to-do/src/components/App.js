//RECORDATORIO: los inputs siempre tienen que estar contralados por onChange y value

import '../styles/App.scss';
import { useState } from 'react';
import originalData from '../data/tasks.json';

function App() {
  const [filterTask, setFilterTask] = useState(''); //esta variable de estado se crea para el input de filtrado
  const [newTask, setNewTask] = useState(''); // esta variable de estado se crea para ir añadiendo las nuevas tareas del input
  const [data, setData] = useState(originalData); //esta variable es para nuestra lista de tareas

  // RENDERIZAR TITULO Y LISTA DE TAREAS----------------------------------------

  //NOTA: el ternario lo dejo con === true para verlo bien como ejemplo pero es redundante, no hay que ponerlo
  const renderTitle = (text) => <h1>{text}</h1>;

  const renderTasks = () => {
    console.log(filterTask);
    return data
      .filter((eachTask) => {
        return eachTask.task
          .toLocaleLowerCase()
          .includes(filterTask.toLocaleLowerCase());
      })
      .map((eachTask, id) => {
        return (
          <li key={id} className={eachTask.completed === true ? 'paint' : ''}>
            {eachTask.task}
          </li>
        );
      });
  };
  //-------------------------------------------------------------------
  //AÑADIR TAREAS NUEVAS A LA LISTA: crear variable de estado, y crear nuevo objeto con el spread operator. Llamar a la funcion de la variable de estado y pasarle como parametros el spread y el nuevo objeto.

  const handleChangeNew = (ev) => {
    setNewTask(ev.currentTarget.value);
  };
  const handleClickSave = () => {
    const newObjet = {
      id: data.length + 1,
      task: newTask,
      completed: false,
    };

    setData([...data, newObjet]);
    setNewTask('');
  };

  //-------------------------------------------------------------------
  //FILTRAR

  const handleChangeFilter = (ev) => {
    setFilterTask(ev.currentTarget.value);
  };
  //para hacer el filtrado sería= data.filter ( (eachdData)=> eachData.task.includes(filteredTask) ) y esto se incluye en la funcion de renderTasks.Le añado que convierta las mayusculas.

  //-------------------------------------------------------------------

  return (
    <div>
      <div className="title">
        <form action="" onSubmit={(ev) => ev.preventDefault()}>
          <label htmlFor="">Filtrar por nombre</label>
          <input
            type="text"
            name="filterTask"
            id="filterTask"
            onChange={handleChangeFilter}
            value={filterTask}
          />
        </form>
        {renderTitle('Mi lista de tareas')}
      </div>
      <ol>{renderTasks()}</ol>
      <form action="" onSubmit={(ev) => ev.preventDefault()}>
        <input
          type="text"
          name="newTask"
          id="newTask"
          onChange={handleChangeNew}
          value={newTask}
        />
        <button onClick={handleClickSave}>Guardar</button>
      </form>
    </div>
  );
}

export default App;
