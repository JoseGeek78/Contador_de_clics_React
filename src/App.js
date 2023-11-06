import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import binarycode from './imagenes/binarycode-logo.jpg'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }

  return (
    <div className="App">
      <div className='binarycode-logo-contenedor'>
        <img
          className='binarycode-logo' 
          src={binarycode}
          alt='Logo binary' />
      </div>
       <div className='contenedor-principal'>
    <Contador numClics='5' />
      <Boton
      texto='Clic'
      esBotonDeClic={true}
      manejarClic={manejarClic} />
      <Boton 
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador} />
       </div>
    </div>
  );
}

export default App;
