import logo from './logo.jpg';
import './App.css';

function App() {
  const sayName = () => alert('Acá podes encontrar todo sobre la Cerveza')
  return (
    <div className="App">
      <header >
        <img src={logo} className="" alt="" />
        <h1> Cerveza Amber</h1>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Próximamente...</a>
      </header>
      <div>
        <button onClick={sayName}>Comprar</button>
        <br></br>
        <input type='text' placeholder='Buscar...'></input>
      </div>

    </div>
  );
}

export default App;
