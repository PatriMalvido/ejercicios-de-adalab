import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import '../styles/App.css';

function App() {
const [data,setData]= useState ([]);
const [newData, setNewData] = useState ({});

useEffect ( ()=> {
  callToApi()
  .then(responseData => {
    setData (responseData.results);
  });
}, []);

const renderData=()=> {
  return data.map((eachData, index) => {
    return (
      <tr key={index}>
        <td>{eachData.name}</td>
        <td>{eachData.counselor}</td>
        <td>{eachData.speciality}</td>
      </tr>
    );
  });
};

const handleInput =(ev)=>{
  const inputValue = ev.currentTarget.value;

}

  return (
    <div >
      <h1>Lista de Adalabers</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tutora</th>
            <th>Especilidad</th>
          </tr>
        </thead>

        <tbody>{renderData()}</tbody>
      </table>
      <section>
        <h2>Añadir una adalaber</h2>
        <form action=""  >
          <label htmlFor="name">Nombre:
            <input type="text" name="name" id="name"
            onChange={handleInput}
            value={data.name} />
          </label>
          <label htmlFor="counselor">Tutora:
            <input type="text" name="counselor" id="counselor"
           onChange={handleInput}
            value={data.counselor} />
          </label>
          <label htmlFor="speciality">Especialidad:
            <input type="text" name="speciality" id="speciality"
            onChange={handleInput}
            value={data.speciality} />
          </label>
          <button type="submit">Añadir una nueva adalaber</button>
        </form>
      </section>
    </div>
  );
}

export default App;
