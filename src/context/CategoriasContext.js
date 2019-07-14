import React, { Component } from 'react';
import axios from 'axios';

// Crear el context
const CategoriasContext = React.createContext();
export const CategoriasConsumer = CategoriasContext.Consumer;

class CategoriasProvider extends Component {

  token = '6QO27PQIUDPQNCUAJVNN';

  state = {
    categorias: []
  }

  componentDidMount(){
    this.obtenerCategorias();
  }

/*
  Aquí es donde se hace la consulta con fetch o con axios.
  fetch ya viene en JS axios no es nativo de JS.

  Axios hace mucho mas facil los llamados a una API de este tipo.
  Axios funciona con Promises
*/
  obtenerCategorias = async () => {
    let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

    let categorias = await axios.get(url);

    this.setState({
      categorias: categorias.data.categories
    })
  }

  render(){
    return(
      <CategoriasContext.Provider
        value={{
          categorias: this.state.categorias
        }}
      >
        {this.props.children}
      </CategoriasContext.Provider>
    );
  }
}

export default CategoriasProvider;