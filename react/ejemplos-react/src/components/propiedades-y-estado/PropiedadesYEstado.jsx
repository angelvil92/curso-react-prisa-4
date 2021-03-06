import React, { Component } from 'react'
import Saludar from './Saludar'
import Card from './Card'
import Contador from './Contador'
import ContadorSinEstado from './ContadorSinEstado'

export default class PropiedadesYEstado extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cuenta: 2
    }
    this.decrementar = this.decrementar.bind(this);
    this.incrementar = this.incrementar.bind(this);
  }


  decrementar() {
    const nuevaCuenta = this.state.cuenta - 1
    this.setState({
      cuenta: nuevaCuenta,
    })
  }

  incrementar() {
    this.setState({
      cuenta: this.state.cuenta + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Propiedades y Estado</h1>
        <Saludar nombre="Angel" />
        <Saludar nombre="Sara" />


        <Saludar nombre={`Angel${this.state.cuenta}`} />
        <ContadorSinEstado
          cuenta={this.state.cuenta}
          onIncrement={this.incrementar}
          onDecrement={this.decrementar}
        />


        <Card
          titulo="React"
          imgUrl="https://cdn.worldvectorlogo.com/logos/react-2.svg"
          descripcion="React es una librería ..."
        />
        <Card
          titulo="Vue"
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png"
          descripcion="Vue es un framework progresivo ..."
        />
        <Card
          titulo="Angular"
          imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
          descripcion="Angular es un framework ..."
        />
        <Contador />
      </div>
    )
  }
}