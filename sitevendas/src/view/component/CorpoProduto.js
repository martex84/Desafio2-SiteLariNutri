import '../../css/Global.css';
import '../../css/CorpoProduto.css'
import '../../css/fontAwesome/css/all.css'

import { React, useState } from 'react';

import racaoCachorro from '../../assets/racaoCachorro.png'

export default function CorpoProduto(props) {

    console.log(props.idProduto)

    return (
        <>
            <div className="containerPrincipalProduto bordaPadraoCorpoProduto">
                <div>
                    <div className="containerDescricaoVenda corPadrao5">
                        <h2>Frango ao molho</h2>
                        <h4>- Ração para Cachorro -</h4>
                    </div>
                    {/* Container Descrição Venda */}
                    <div className="ContainerImagemProduto containerPadrao bordaPadraoCorpoProduto">
                        <img src="https://www.2net.com.br//Repositorio/1705/Produtos/51b00395-0.png"className="imagemProduto" alt="Pacote de Racao Para Cachorro"></img>
                    </div>
                    {/* Container Imagem */}
                    <div className="containerPreçoProduto corPadrao5">
                        <h6>R$ 25.00</h6>
                    </div>
                    {/* Container Preço */}
                </div>
                {/* Container Corpo Descrição */}
                <div className="ContainerBotao">
                    <button className="botaoProdutoVenda containerPadrao corVermelha backgroundCor1">
                    <i className="fas fa-shopping-basket"></i>
                    </button>
                </div>
                {/* Container Botão */}
            </div>
            {/* Container Principal do Produto */}
        </>
    );
}