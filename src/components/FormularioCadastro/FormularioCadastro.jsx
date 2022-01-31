import React, { Component } from 'react'
import './FormularioCadastro.css'

export default class FormularioCadastro extends Component {
  constructor(props) {
    super(props)
    this.titulo = ''
    this.texto = ''
    this.categoria = ''
  }

  handleMudancaTitulo(evento) {
    evento.stopPropagation()
    this.titulo = evento.target.value
  }

  handleMudancaTexto(evento) {
    evento.stopPropagation()
    this.texto = evento.target.value
  }

  handleMudancaCategoria(evento) {
    evento.stopPropagation()
    this.categoria = evento.target.value
  }

  criarNota(evento) {
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarNota(this.titulo, this.texto, this.categoria)
    evento.limparCampos()
  }

  limparCampos(evento) {
    evento.stopPropagation()
    this.titulo.value = ''
    this.texto.value = ''
    this.categoria.value = ''
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <select
          onChange={this.handleMudancaCategoria.bind(this)}
          className="form-cadastro_input"
        >
          <option>Sem Categoria</option>
          {this.props.categorias.map(categoria => {
            return <option>{categoria}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    )
  }
}
