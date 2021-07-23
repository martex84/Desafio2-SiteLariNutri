import '../../../css/Home.css'
import '../../../css/Global.css'

import { React, useState, useEffect } from 'react';

import NavBar from '../../component/NavBar';
import Footer from '../../component/Footer';

import dogBiscoito from '../../../assets/dogBiscoito.svg'

function Html() {

    return (
        <>
            <NavBar></NavBar>
            {/* Barra de Navegação Principal */}
            <section id="secaoPrincipal">
                <h1 className="corPadrao1 corVermelha">
                    Na LaraNutri a alimentação do seu pet é prioridade.
                </h1>
                <div className="containerConteudoHome">
                    <div className="containerNutricao">
                        <div className="containerImagemNutricao">
                            <img src="https://cdn.pixabay.com/photo/2017/04/07/10/53/dog-2210717_960_720.jpg" className="imagemPadrao"></img>
                        </div>
                        {/* Container Com Imagem De Nutrição */}
                        <p>"Hmmm adoro minha ração sabor bacon!"</p>
                    </div>
                    {/* Conatiner Para Imagem De Nutrição */}
                    <div className="ContainerTextoNutricao corPadrao1">
                        <p>
                            Venha fazer formulação especial para seu pet, ele irá adorar experimentar os diversos tipo de ração.
                        </p>
                        <p>
                            Não se esqueça de nos informar seus dados e do seu pet, assim logo a ração Nutri chega na sua porta.
                        </p>

                        <div className="cotainerImagemTextoNutricao">
                            <div className="containerImagemPropaganda">
                                <img src={dogBiscoito} alt="Vetor De Cachorro" className="imagemPadrao"></img>
                            </div>
                            {/* Container Imagem Detalhe */}
                            <p>Venha melhorar o dia do seu pet.</p>
                        </div>
                        {/* Container Detalhe Nutrição */}
                    </div>
                    {/* Container Texto Promocional */}
                </div>
                {/* Container Conteudo */}
            </section>
            {/* Seção Principal */}
            <Footer></Footer>
        </>
    );
}

export default Html;