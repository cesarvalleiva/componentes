import './App.css';
import Welcome from './components/Welcome';
import Homero from './assets/img/homero.jpeg';

function App() {
  return (
    <>
      <h1>Hola mundo!</h1>
      <h2>Cómo están?</h2>
      <img src={Homero} alt="Homero" />
      <Welcome nombre="Federico" apellido="Bach" />
    </>
  );
}

export default App;
