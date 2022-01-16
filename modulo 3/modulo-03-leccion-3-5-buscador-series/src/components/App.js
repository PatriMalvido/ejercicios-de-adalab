import { useEffect, useState } from 'react';
import callToApi from '../services/api';
import '../styles/App.css';

function App() {
  const [searchName, setSearchName] = useState(''); //para el input de búsqueda
  const [series, setSeries] = useState([]); // para guardar los titulos devueltos por la API

  //USE EFFECT----------------------------------

  useEffect(() => {
    callToApi(searchName).then((response) => {
      setSeries(response);
    });
  }, [searchName]);

  //RENDERIZADO---------------------------------

  const renderSeries = () => {
    return series.map((serie, index) => {
      return <li key={index}>Título: {serie.name}</li>;
    });
  };

  //EVENTOS------------------------------------

  const handleSearchName = (ev) => {
    setSearchName(ev.target.value);
  };

  return (
    <div>
      <h1>Buscador de series</h1>
      <form>
        <label htmlFor="name">
          Busca tu serie favorita introduciendo un título:{' '}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={searchName}
          onChange={handleSearchName}
        />
      </form>
      <h2>Series con el título: {searchName}</h2>
      <ul>{renderSeries()}</ul>
    </div>
  );
}

export default App;
