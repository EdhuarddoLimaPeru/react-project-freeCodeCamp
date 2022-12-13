import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Web Developer with REACT Lima Perú 2022</h1>
      <Testimonio  
        nombre='Eduardo Avalos'
        pais='Perú'
        imagen='one'
        cargo='Web Developer'
        empresa='Spotify'
        testimonio='I am a rookie web developer this 2022 ,  
        on the other hand I was mechanic of maintanance for more of 12 years. I live in Perú all my life but 
        I was born in Cusco. I love to learn new things in my life for that reason I learned how to give order
         a computer jejejej....Perú is great country and their people  is amazing , kind , generous and warm.'      
      />
      <Testimonio 
        nombre='Ñusta'
        pais='Pet Country'
        imagen='two'
        cargo='Pet'
        empresa='Disney'
        testimonio='hola I am the most beauty puppy in Peru because my parents are quiet kindly with and I love them.
         their name are Eduardo and Mamá Flavia'
      />

<Testimonio 
        nombre='Delver'
        pais='Perú'
        imagen='three'
        cargo='Developer frontend'
        empresa='Canvia'
        testimonio='I am from Cajabamba and the best developer on it , so I am working since 2020 for Canvia.
        It is an enterprise located in Lima San Isidro,nowadays I am working in projects with SUNAT.'
      />

      </div>
    </div>
  );
}

export default App;
