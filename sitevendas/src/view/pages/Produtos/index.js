import '../../../css/Produtos.css';
import '../../../css/Global.css'

import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";
import CorpoProduto from '../../component/CorpoProduto'

import numeroAleatorio from '../../../methods/numerosAleatorios';
import manipulacaoLocalStorage from '../../../methods/manipulacaoLocalStorage';

export default function Produtos() {

    const [id, setId] = useState("");
    const [idClient, setIdClient] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [raca, setRaca] = useState("");
    const [extra, setExtra] = useState("");
    const [quantidade, setQuantidade] = useState("");    

    useEffect(() => {

        if (storageLocalVazia() === false) {
            const client = converteValorClient();
            setIdClient(client.id);
        }        

        if (id === "") { setId(numeroAleatorio(1000, 0)) }
    }, [id])

    function storageLocalVazia() {        
        return getStorageLocal() === null ? true : false
    }

    function getStorageLocal() {
        return localStorage.getItem("Cliente")
    }

    function converteValorClient(){        
        if(storageLocalVazia() === false){
            return JSON.parse(getStorageLocal())[0];
        }
        return null;
    }

    function enviaValores(e) {        
        if (storageLocalVazia() === false) {
            if (converteValorClient().id === idClient) { //Verifica se o valor do Local Storage é o mesmo do gravado no sistema
                const arrayStorage = [{
                    id: id,
                    idClient: idClient,
                    nome: nome,
                    idade: idade,
                    tamanho: tamanho,
                    raca: raca,
                    extra: extra,
                    quantidade: quantidade,
                }];
                const valorLocalStorage = new manipulacaoLocalStorage(arrayStorage);
                valorLocalStorage.salvarStorageInterno("Pet",e);
            }
            else alert("Valores de usuário alterados.")
        }
        else alert("Favor realizar cadastro de cliente antes de efetuar a compra.");
    }

    function limparCampos() {
        setId("");
        setNome("");
        setIdade("");
        setTamanho("");
        setRaca("");
        setExtra("");
        setQuantidade("");
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
                            <input type="text" className="inputNomeProduto corPadrao1 widthInputMax inputPadrao" onChange={e => setNome(e.target.value)}></input>
                        </div>
                        {/* Cadastro Do Nome */}
                        <div className="containerProduto containerProdutoFim">
                            <label className="labelIdadeProduto labelInformacaoProduto corPadrao1" >Idade:</label>
                            <input type="text" className="inputIdadeProduto corPadrao1 inputPadrao" onChange={e => setIdade(e.target.value)}></input>
                        </div>
                        {/* Cadastro Da Idade */}
                    </div>
                    <div className="containerSecundarioProduto">
                        <div className="containerProduto">
                            <label className="labelInformacaoProduto corPadrao1" >Tamanho:</label>
                            <select type="text" className="selectTamanhoProduto corPadrao1 widthInputMax selectPadrao" onChange={e => setTamanho(e.target.value)}>
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
                            <input type="text" className="inputRacaProduto corPadrao1 widthInputMax inputPadrao" onChange={e => setRaca(e.target.value)}></input>
                        </div>
                        {/* Cadastro Do Raça */}
                    </div>
                    <div className="containerSecundarioProduto">
                        <div className="containerProduto">
                            <label className="labelInformacaoProduto corPadrao1" >Extras:</label>
                            <select type="text" className="selectExtrasProduto corPadrao1 widthInputMax selectPadrao" onChange={e => setExtra(e.target.value)}>
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
                            <input type="text" className="inputQuantidadeProduto corPadrao1 widthInputMax inputPadrao" onChange={e => setQuantidade(e.target.value)}></input>
                        </div>
                        {/* Cadastro Do Quantidade */}
                    </div>
                </div>
                {/* Container Para Armazenar Conteudo */}
                <div className="containerBotaoProduto">
                    <Link className="linkLimpo" to="/produtos">
                        <button className="botaoEnviarProduto containerPadrao backgroundCor4 corPadrao1" onClick={e => { enviaValores(e) }}>Enviar Para O Carrinho</button>
                    </Link>
                </div>
                {/* Container para Botao Salvar Venda */}
                <div className="containerCorpoProdutos">
                    <CorpoProduto idProduto="1"></CorpoProduto>
                    <CorpoProduto idProduto="1"></CorpoProduto>
                    <CorpoProduto idProduto="1"></CorpoProduto>
                </div>
                {/* Container Para Produtos */}
                <div className="containerBotaoProduto">
                    <button className="botaoEnviarProduto containerPadrao backgroundCor4 corPadrao1" onClick={e => { limparCampos()}}>Limpar Campos</button>
                </div>
                {/* Container para Botao Limpar Venda */}
            </section>
            {/* Seção Principal do Login */}
            <Footer></Footer>
            {/* Footer Principal */}
        </>
    );
}