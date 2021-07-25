import '../../css/NavBarResponsiva.css';

import { React } from 'react';
import { Link } from 'react-router-dom';

import manipulacaoLocalStorage from '../../services/manipulacaoLocalStorage';

function apagarLocalStorage() {
    const manipularLocalStorage = new manipulacaoLocalStorage(null);
    manipularLocalStorage.apagarLocalStorage();    
}


export default function NavBarResponsiva(props) {
    return (
        <>
            <div className="conteudoPrincipalNR" style={{ display: props.estilo }}>
                <ul className="listaNR">
                    <li>
                        <Link className="linkLimpo corPadrao5" to="/">
                            <span className="spanNR">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="linkLimpo corPadrao5" to="/cadastro">
                            <span className="spanNR">Cadastro</span>
                        </Link>
                    </li>
                    <li>
                        <button className="botaoLogOffNR" onClick={apagarLocalStorage}>
                            <span className="spanNR corPadrao5">LogOff</span>
                        </button>
                    </li>
                    <li className="linkFinal">
                        <Link className="linkLimpo corPadrao5" to="/produtos">
                            <span className="spanNR">Produto</span>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Container Principal */}
        </>
    );
}