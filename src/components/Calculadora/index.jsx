import React, { Component } from 'react';
import './index.scss'; 

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
    this.state.juros = (this.state.valor / this.state.parcelas); 
    console.log(this.state.juros); 
    
      this.setState({ resultado: this.state.juros * 1.0259 })
      event.preventDefault();
    }
  
    render() {
      return (
            <div className="calculadora">
        <form onSubmit={this.handleSubmit}>
                <label>
                    Digite o Valor que deseja parcelar
                </label>
                <input value={this.state.valor} onChange={this.handleChange}/>
                
                <label>
                    Selecione a Quantidade de Parcelas
                </label>
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
                
                <input type="submit" value="Calcular" />
                Valor de Cada Parcela: {this.state.resultado}
                </form>
            </div>
      );
    }
  }

export default Calculadora;
