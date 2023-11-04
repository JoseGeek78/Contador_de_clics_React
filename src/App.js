import './App.css';
import binarycode from './imagenes/binarycode-logo.jpg'

function App() {
  return (
    <div className="App">
      <div className='binarycode-logo-contenedor'>
        <img
          className='binarycode-logo' 
          src={binarycode}
          alt='Logo binary'/>
      </div>
    </div>
  );
}

export default App;
