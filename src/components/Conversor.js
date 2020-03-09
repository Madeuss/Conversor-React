import React, { Component } from 'react';

export default class Conversor extends Component {
    
    constructor(props){
        super(props);

        // Estado que irá armazenar o valor da moeda
        this.state = {
            moedaA_valor: "",
            moedaB_valor: 0,
        }

        // Método bind
        this.converter = this.converter.bind(this);
    }

    // Método de conversão
    converter(){
        
        let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
        let url = `https://free.currconv.com/api/v7/convert?apiKey=ae01aad34bbbb991d576&q=${de_para}&compact=y`


        //promise para pegar o resultado na url
        fetch(url)
            .then(res => {

                return res.json()

            })
            .then(json => {
                let cotacao = json[de_para].val;
                let moedaB_valor = ( parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2)
                this.setState({ moedaB_valor })
        })
    }
    
    render() {
        return (
            <div className="conversor>">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_valor:event.target.value})}}></input>
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>{this.state.moedaB_valor}</h2>
            </div>
        )
    }
}