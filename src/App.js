import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';

function App() {
  return (
    /*
      El componente que se encargará de los eventos puede contener a todos
      los demas componente, para que así, estos puedan utilizar sus métodos

      También se colocar rodeando solo a los elementos que generarán un evento
      pero no sabemos si más adelante los demás también lo necesitarán
    */
    <EventosProvider>
      <CategoriasProvider>
        <Header />
        <div className="uk-container">
          <Formulario />
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
