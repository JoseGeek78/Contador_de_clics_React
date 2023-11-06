import './App.css';
import Boton from './componentes/Boton';
import binarycode from './imagenes/binarycode-logo.jpg'

function App() {

  const manejarClic = () => {
    console.log('Clic');
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
          alt='Logo binary'/>
      </div>
       <div className='contenedor-principal'>
      <Boton
      texto='Clic'
      esBotonDeClic={true}
      manejarClic={manejarClic}/>
      <Boton 
      texto='Reiniciar'
      esBotonDeClic={false}
      manejarClic={reiniciarContador}/>
       </div>
    </div>
  );
}

export default App;
