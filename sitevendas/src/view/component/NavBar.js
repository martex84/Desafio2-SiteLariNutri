import '../../css/NavBarPrincipal.css';
import '../../css/Utilitarios.css';
import '../../css/fontAwesome/css/all.css'

import { React,useState } from 'react';

import setaDireita from '../../assets/seta.png'
import setaEsquerda from '../../assets/seta2.png'
import logo from '../../assets/logo.png'

function NavBar() {

    return (
        <>
            <nav id="menuPrincipal">
                <div className="containerNav setaEsquerda">
                    <div className="containerLogo containerNavInterno backgroundNav containerPadrao">
                        <div>
                            <img src={logo} alt="Logo LaraNutri" className="imagemPadrao"></img>
                        </div>
                        {/* Container Imagem Logo */}
                        <h2 className="corPadrao5">
                            LaraNutri
                        </h2>
                    </div>
                    {/* Container Do Logo */}
                    <div className="containerSeta">
                        <img src={setaDireita} alt="Seta Navegação Direita" className="imagemPadrao"></img>
                    </div>
                    {/* Container Imagem Seta */}
                </div>
                {/* Container Para Logo */}
                <div className="containerNav setaDireita">
                    <div className="containerSeta">
                        <img src={setaEsquerda} alt="Seta Navegação Direita" className="imagemPadrao"></img>
                    </div>
                    {/* Container Imagem Seta */}
                    <div className="containerMenu containerNavInterno backgroundNav containerPadrao">
                        <button className="botaoProduto padraoBotao corPadraoBotao"> Produto </button>                        
                        <button className="botaoCarrinho padraoBotao botaoCentro">
                            <i className="fas fa-shopping-basket" alt="Carrinho De Compra"></i>
                        </button>
                        <button className="botaoCadastro padraoBotao corPadraoBotao"> Login </button>
                    </div>
                    {/* Container Menu  */}
                </div>
                {/* Container Para Menu */}
            </nav>
            {/* Menu Principal */}
        </>
    );
}

export default NavBar;