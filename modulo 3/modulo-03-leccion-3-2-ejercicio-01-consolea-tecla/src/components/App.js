
import '../styles/App.css';

function App() {
const handleIn = (ev) => {
  console.log('La tecla pulsada es:', ev.key);
  //console.log('valor del input:', ev.target.value);
}

  return (
    <div >
      <h1>Hola mundo</h1>
      <form>
        <input type="text" name="usertext" id='usertext' onKeyUp={handleIn} />
      </form>
    </div>
  );
}

export default App;
