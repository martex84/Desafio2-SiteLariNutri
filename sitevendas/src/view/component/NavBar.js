import '../../css/NavBarPrincipal.css';
import '../../css/Global.css';
import '../../css/fontAwesome/css/all.css'

import { React} from 'react';
import { Link } from 'react-router-dom';

import setaDireita from '../../assets/seta.png'
import setaEsquerda from '../../assets/seta2.png'
import logo from '../../assets/logo.png'

function NavBar() {

    function apagarLocalStorage(){
        if(localStorage.length > 0){
            localStorage.clear();
            alert("Até Logo!")
        }
    }

    return (
        <>
            <nav id="menuPrincipal">
                <div className="containerNav setaEsquerda">
                    <div className="containerGeralLogo containerNavInterno backgroundCor2 containerPadrao">
                        <Link to="/" className="linkRouter linkLimpo">
                            <div className="containerLogo">
                                <img src={logo} alt="Logo LaraNutri" className="imagemPadrao"></img>
                            </div>
                            {/* Container Imagem Logo */}
                            <h2 className="nomeLogo corPadrao5">
                                LaraNutri
                            </h2>
                        </Link>
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
                    <div className="containerMenu containerNavInterno backgroundCor2 containerPadrao">
                        <div className="botaoProduto marginPadraoBotao">
                            <Link className="containerPadrao" to="/produtos">
                                <button className="containerPadrao  padraoBotao  corPadraoBotao backgroundCor1"> Produto </button>
                            </Link>
                        </div>
                        {/* Container Botão Produto */}
                        <div className="botaoCadastro marginPadraoBotao">
                            <Link className="containerPadrao" to="/cadastro">
                                <button className="containerPadrao padraoBotao corPadraoBotao backgroundCor1"> Cadastro </button>
                            </Link>
                        </div>
                        {/* Container Botão Cadastro */}
                        <div className="botaoLogOff marginPadraoBotao">
                            <Link className="containerPadrao" to="/">
                                <button className="containerPadrao padraoBotao corPadraoBotao backgroundCor1" onClick={e => apagarLocalStorage()}> Log off </button>
                            </Link>
                        </div>
                        {/* Container Botão Cadastro */}
                        <div className="botaoCarrinho">
                            <Link className="containerPadrao" to="/">
                                <button className="containerPadrao padraoBotao corVermelha backgroundCor1 botaoLateral">
                                    <i className="fas fa-shopping-basket" alt="Carrinho De Compra"></i>
                                </button>
                            </Link>
                        </div>
                        {/* Container Botão Carrinho de Compra */}
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