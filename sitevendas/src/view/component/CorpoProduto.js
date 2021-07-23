import '../../css/Global.css';
import '../../css/CorpoProduto.css'

import {React, useState} from 'react';

export default function CorpoProduto(props){    

    return(
        <>
            <div className="containerPrincipalProduto">
                <div className="ContainerImagem"></div>
                {/* Container Imagem */}
                <div className="ContainerBotao">
                    <button></button>
                </div>
                {/* Container Botão */}
            </div>
            {/* Container Principal do Produto */}
        </>
    );
}