import '../../../css/Produtos.css';
import '../../../css/Global.css'

import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";
import CorpoProduto from '../../component/CorpoProduto'

import numeroAleatorio from '../../../services/numerosAleatorios';
import manipulacaoLocalStorage from '../../../services/manipulacaoLocalStorage';

export default function Produtos() {

    const [id, setId] = useState("");
    const [idClient, setIdClient] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [tamanho, setTamanho] = useState("");
    const [racaEspecie, setRacaEspecie] = useState("");
    const [extra, setExtra] = useState("");
    const [quantidade, setQuantidade] = useState("");

    function enviaValores(e) {
        const verificaIdClient = new manipulacaoLocalStorage(null);        
        if (verificaIdClient.verificaStorageLocalVazia("Cliente") === false) {
           
            if (verificaIdClient.converteValorClient().id === idClient) { //Verifica se o valor do Local Storage é o mesmo do gravado no sistema
                if(verificaIdClient.verificaStorageLocalVazia(`Produto-${id}`) === false){//Verifica se o cliente escolhe a ração no sistema
                    const arrayStorage = [{
                        id: id,
                        idClient: idClient,
                        nome: nome,
                        idade: idade,
                        tamanho: tamanho,
                        racaEspecie: racaEspecie,
                        extra: extra,                    
                    }];
                    const valorLocalStorage = new manipulacaoLocalStorage(arrayStorage);
                    valorLocalStorage.salvarStorageInterno("Pet", e);

                    setId("");
                }
                else{
                    alert("Favor, escolher um tipo de ração para prosseguir!")
                }
                /*  */
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
        setRacaEspecie("");
        setExtra("");
        setQuantidade("");
    }

    useEffect(() => {

        const verificaIdClient = new manipulacaoLocalStorage(null);

        if (verificaIdClient.verificaStorageLocalVazia("Cliente") === false) {
            const client = verificaIdClient.converteValorClient();            
            setIdClient(client.id);
        }

        if (id === "") { setId(numeroAleatorio(1000, 0)) }  

    }, [id,idClient])  
    
   /*  console.log(idClient); */

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
                            <input type="number" className="inputIdadeProduto corPadrao1 inputPadrao" onChange={e => setIdade(e.target.value)} min="1" max="100"></input>
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
                            <label className="labelRaçaProduto labelInformacaoProduto corPadrao1 widthLabelPrimario" >Raça e Espécie:</label>
                            <input type="text" className="inputRacaProduto corPadrao1 widthInputMax inputPadrao" onChange={e => setRacaEspecie(e.target.value)} placeholder="Raça / Espécie"></input>
                        </div>
                        {/* Cadastro Do Raça Espécie */}
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
                            <label className="labelQuantidadeProduto labelInformacaoProduto corPadrao1 widthLabelPrimario" >Quantidade(Kg):</label>
                            <input type="number" className="inputQuantidadeProduto corPadrao1 widthInputMax inputPadrao" onChange={e => setQuantidade(e.target.value)} min="1" max="20"></input>
                        </div>
                        {/* Cadastro Do Quantidade */}
                    </div>
                </div>
                {/* Container Para Armazenar Conteudo */}
                <div className="containerCorpoProdutos">
                    <CorpoProduto idProduto="0" idPet={id} quantidade={quantidade}></CorpoProduto>
                    <CorpoProduto idProduto="1" idPet={id} quantidade={quantidade}></CorpoProduto>
                    <CorpoProduto idProduto="2" idPet={id} quantidade={quantidade}></CorpoProduto>
                </div>
                {/* Container Para Produtos */}
                <div className="containerBotoesProduto">
                    <div className="containerBotaoProduto">
                        <Link className="linkLimpo" to="/produtos">
                            <button className="padraoBotaoProduto containerPadrao backgroundCor4 corPadrao1 corBordaBotaoEnviar" onClick={e => { enviaValores(e) }}>Enviar Para O Carrinho</button>
                        </Link>
                    </div>
                    {/* Container para Botao Salvar Venda */}
                    <div className="containerBotaoProduto">
                        <button className="padraoBotaoProduto containerPadrao backgroundCor4 corPadrao1" onClick={e => { limparCampos() }}>Limpar Campos</button>
                    </div>
                    {/* Container para Botao Limpar Venda */}
                </div>
                {/* Container Principal Botoes */}
            </section>
            {/* Seção Principal do Login */}
            <Footer></Footer>
            {/* Footer Principal */}
        </>
    );
}