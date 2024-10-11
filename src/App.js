
import './App.css';
import { useState } from 'react';
import { adatLista } from './adatok.js';
import Kiskep from './galeriakomponensek/Kiskep';

function App() {

  const [kepIndex,setNagyKep] = useState(0);
  const hossz = adatLista.length
  function szuloMetodus(index){
    console.log("Erre az elemre kattintottam",index);
    setNagyKep(index);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria HF</h1>
      </header>
      <main className="App-main">
        <div className="fokep">
          <div className="bal" onClick={()=>{
            setNagyKep((kepIndex-1)%(hossz));
          }}></div>
          <div className="kep">
            <h3>{adatLista[kepIndex].alt}</h3>
            <Kiskep adat = {adatLista[kepIndex]} key={0} />
            <p>{adatLista[kepIndex].leiras}</p>
          </div>

          <div className="jobb" onClick={() => {
            console.log((kepIndex+1) %(hossz));
            setNagyKep((kepIndex+1) %(hossz));
          }}></div>
        </div>
        <div className="galeria">
          {adatLista.map((elem,index) => {
            return (
              <Kiskep adat={elem} key={index} szuloMetodus={szuloMetodus}/>
            )
          })}
        </div>
      </main>
      <footer>
        <p>Bitó Zalán</p>
      </footer>
    </div>
  );
}

export default App;
