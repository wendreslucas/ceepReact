import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas.jsx'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro.jsx'
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias.jsx'
import './assets/App.css'
import './assets/index.css'
import Categorias from './Dados/Categorias.js'
import ArrayDeNotas from './Notas.js'
class App extends Component {
  constructor() {
    super()
    this.categorias = new Categorias()
    this.notas = new ArrayDeNotas()
  }

  // criarNota(titulo, texto, categoria) {
  //   const novaNota = { titulo, texto, categoria }
  //   const novoArrayNotas = [...this.state.notas, novaNota]
  //   const novoEstado = {
  //     notas: novoArrayNotas
  //   }
  //   this.setState(novoEstado)
  // }

  // adicionarCategoria(nomeCategoria) {
  //   const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
  //   const novoEstado = { ...this.state, categorias: novoArrayCategorias }
  //   this.setState(novoEstado)
  // }

  // deletarNota(index) {
  //   let arrayNotas = this.state.notas
  //   arrayNotas.splice(index, 1)
  //   this.setState({ nota: arrayNotas })
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    )
  }
}

export default App
