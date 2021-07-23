import '../../../css/Produtos.css';
import '../../../css/Global.css'

import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";

import numeroAleatorio from '../../../methods/numerosAleatorios';

export default function Produtos() {

    const [idPet, setIdPet] =  useState("");

    useEffect(()=> {
        if(idPet === ""){setIdPet(numeroAleatorio(1000,0))}
        console.log(`IdPet: ${idPet}`)        
    },[])

    function enviaValores(e){
        setIdPet("");
        alert("Valores Salvos")
    }

    return (
        <>
            <NavBar></NavBar>
            {/* NavBar Principal */}
            <section id="secaoPrincipal">
                <h1 className="corVermelha">Formulação</h1>
                <div className="containerTextoProdutos containerTextoInformacao">
                    <p>
                        Para realizar a formulação é necessário informar os dados do seu pet, assim iremos escolher os melhores ingredientes com base no que foi informado, caso tenha mais de um pet, envie o pedido para o carrinho e repita o processo.
                    </p>
                </div>
                {/* Container Texto Formulação */}
                <div className="containerConteudoProduto">
                    <div className="containerSecundarioProduto containerPadraoTopo">
                        <div className="containerProduto">
                            <label className="labelInformacaoProduto corPadrao1" >Nome:</label>
                            <input type="text" className="inputNomeProduto corPadrao1 widthInputMax inputPadrao"></input>
                        </div>
                        {/* Cadastro Do Nome */}
                        <div className="containerProduto containerProdutoFim">
                            <label className="labelIdadeProduto labelInformacaoProduto corPadrao1" >Idade:</label>
                            <input type="text" className="inputIdadeProduto corPadrao1 inputPadrao"></input>
                        </div>
                        {/* Cadastro Da Idade */}
                    </div>
                    <div className="containerSecundarioProduto">
                        <div className="containerProduto">
                            <label className="labelInformacaoProduto corPadrao1" >Tamanho:</label>
                            <select type="text" className="selectTamanhoProduto corPadrao1 widthInputMax selectPadrao">
                                <option></option>
                                <option>Mini</option>
                                <option>Pequeno</option>
                                <option>Médio</option>
                                <option>Grande</option>
                                <option>Large</option>
                            </select>
                        </div>
                        {/* Cadastro Do Tamanho */}
                        <div className="containerProduto containerProdutoFim">
                            <label className="labelRaçaProduto labelInformacaoProduto corPadrao1 widthLabelPrimario" >Raça:</label>
                            <input type="text" className="inputRacaProduto corPadrao1 widthInputMax inputPadrao"></input>
                        </div>
                        {/* Cadastro Do Raça */}
                    </div>
                    <div className="containerSecundarioProduto">
                        <div className="containerProduto">
                            <label className="labelInformacaoProduto corPadrao1" >Extras:</label>
                            <select type="text" className="selectExtrasProduto corPadrao1 widthInputMax selectPadrao">
                                <option></option>
                                <option>Brinquedos De Morder</option>
                                <option>Lacinhos</option>
                                <option>Ossinhos Comestíveis</option>
                                <option>Saches</option>
                            </select>
                        </div>
                        {/* Cadastro Do Extras */}
                        <div className="containerProduto containerProdutoFim">
                            <label className="labelQuantidadeProduto labelInformacaoProduto corPadrao1 widthLabelPrimario" >Quantidade:</label>
                            <input type="text" className="inputQuantidadeProduto corPadrao1 widthInputMax inputPadrao"></input>
                        </div>
                        {/* Cadastro Do Quantidade */}
                    </div>
                </div>
                {/* Container Para Armazenar Conteudo */}
                <div className="containerBotaoProduto">
                    <Link className="linkLimpo" to="/produtos">
                        <button className="botaoEnviarProduto containerPadrao backgroundCor4 corPadrao1" onClick={e => {enviaValores(e)}}>Enviar Para O Carrinho</button>
                    </Link>
                </div>
                {/* Container para Botao Cadastro */}
            </section>
            {/* Seção Principal do Login */}
            <Footer></Footer>
            {/* Footer Principal */}
        </>
    );
}