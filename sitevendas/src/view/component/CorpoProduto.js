import '../../css/Global.css';
import '../../css/CorpoProduto.css'
import '../../css/fontAwesome/css/all.css'

import { React, useState, useEffect } from 'react';

import dataBaseProdutos from '../../dataBase/dataBaseProdutos';
import numerosAleatorios from '../../services/numerosAleatorios';
import manipulacaoLocalStorage from '../../services/manipulacaoLocalStorage';

export default function CorpoProduto(props) {

    const [nome,setNome] = useState("");
    const [tipo,setTipo] = useState("");
    const [preco,setPreco] = useState("");
    const [link,setLink] = useState("");
    const [verificacao,setVerificacao] = useState(false);
    
    function realizarCompra(){
        const arrayCompra = [{
            id: numerosAleatorios(1,1000),
            idProduto: props.idProduto,
            idPet: props.idPet,
            quantidade: props.quantidade
        }]
        const manipularStorage = new manipulacaoLocalStorage(arrayCompra);
        if(manipularStorage.verificaStorageLocalVazia(`Produto-${props.idPet}`) === true){
            return manipularStorage.salvarStorageInterno("Produto",null)
        }
        else{
            manipularStorage.atualizarStorageInterno(`Produto`,props.idPet);
        }       
    }

    useEffect(()=>{
        const dataBase = dataBaseProdutos()[props.idProduto]
        if(verificacao === false){
            setNome(dataBase.nome);
            setTipo(dataBase.tipo);
            setPreco(dataBase.preco);
            setLink(dataBase.url);
            setVerificacao(true);        
        }        

    },[props,verificacao]);

    return (
        <>
            <div className="containerPrincipalProduto bordaPadraoCorpoProduto">
                <div>
                    <div className="containerDescricaoVenda corPreta">
                        <h2>{nome}</h2>
                        <h4>- {tipo} -</h4>
                    </div>
                    {/* Container Descrição Venda */}
                    <div className="ContainerImagemProduto containerPadrao bordaPadraoCorpoProduto">
                        <img src={link}className="imagemProduto" alt="Pacote de Racao Para Cachorro"></img>
                    </div>
                    {/* Container Imagem */}
                    <div className="containerPreçoProduto corPadrao5">
                        <h6>{`R$ ${preco}`}</h6>
                    </div>
                    {/* Container Preço */}
                </div>
                {/* Container Corpo Descrição */}
                <div className="ContainerBotao">
                    <button className="botaoProdutoVenda containerPadrao corVermelha backgroundCor1" onClick={e => realizarCompra()}>
                    <i className="fas fa-shopping-basket"></i>
                    </button>
                </div>
                {/* Container Botão */}
            </div>
            {/* Container Principal do Produto */}
        </>
    );
}