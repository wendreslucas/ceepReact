import React, { Component } from 'react'
import CardNota from '../CardNota/CardNota.jsx'
import './ListaDeNotas.css'
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                texto={nota.texto}
                categoria={nota.categoria}
              />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default ListaDeNotas
