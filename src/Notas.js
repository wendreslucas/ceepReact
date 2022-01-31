export default class ArrayDeNotas {
  constructor() {
    this.notas = []
    this.inscritos = []
  }

  adicionarNota(titulo, texto, categoria) {
    const novaNota = new Nota(titulo, texto, categoria)
    this.notas.push(novaNota)
    this.notificar()
  }

  apagarNota(indice) {
    this.notas.splice(indice, 1)
    this.notificar()
  }

  inscrever(func) {
    this.inscritos.push(func)
  }

  notificar() {
    this.inscritos.forEach(func => {
      func(this.notas)
    })
  }
}

class Nota {
  constructor(titulo, texto, categoria) {
    this.titulo = titulo
    this.text = texto
    this.categoria = categoria
  }
}
