import React, { Component } from 'react';

class Calculadora extends React.Component {
    constructor(props) {
      super(props);
      this.state = {valor: '', parcelas: '', resultado: '', juros: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSelect = this.handleSelect.bind(this); 
    }
  
    handleChange(event) {
      this.setState({valor: event.target.value});
    }
    
    handleSelect(event){
      this.setState({parcelas: event.target.value});
    }
  
    handleSubmit(event) {
    this.state.juros = (this.state.valor * (2,59/100))
    console.log(this.state.juros);
      this.setState({ resultado:  (parseFloat(this.state.juros) / parseInt(this.state.parcelas) )})
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
              Digite o Valor que deseja parcelar
            <input value={this.state.valor} onChange={this.handleChange}/>
        </label>
        <label>
            Selecione a Quantidade de Parcelas
            <select value={this.state.parcelas} onChange={this.handleSelect}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>
          <input type="submit" value="Calcular" />
          Valor de Cada Parcela: {this.state.resultado}
        </form>
      );
    }
  }

export default Calculadora;
