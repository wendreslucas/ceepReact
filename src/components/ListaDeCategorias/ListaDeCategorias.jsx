import React, { Component } from 'react'
import './ListaDeCategorias.css'

class ListaDeCategorias extends Component {
  handleEventoInput(e) {
    if (e.key === 'Enter') {
      let valorCategoria = e.target.value
      this.props.adicionarCategoria(valorCategoria)
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            )
          })}
        </ul>
        <input
          onKeyUp={this.handleEventoInput.bind(this)}
          type="text"
          className="lista-categorias_input"
          placeholder="Categorias"
        ></input>
      </section>
    )
  }
}

export default ListaDeCategorias
