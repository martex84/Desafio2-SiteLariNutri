import '../../../css/Home.css'

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
                <h1 className="corPadrao1">
                    Na LaraNutri a alimentação do seu pet é prioridade.
                </h1>
                <div class="containerConteudo">
                    <div className="containerNutricao">
                        <div className="containerImagemNutricao">
                            <img src="https://cdn.pixabay.com/photo/2017/04/07/10/53/dog-2210717_960_720.jpg" className="imagemPadrao"></img>
                        </div>
                        {/* Container Com Imagem De Nutrição */}
                        <p>"Uma alimentação adequada vai melhorar a saúde do seu pet"</p>
                    </div>
                    {/* Conatiner Para Imagem De Nutrição */}
                    <div className="ContainerTextoNutricao corPadrao1">
                        <p>
                            Venha fazer formulação especial para seu pet, ele vai adorar experimentar cada tipo de ração.
                        </p>
                        <p>
                            Não se esqueça de nos informar seus dados e do seu pet, assim logo a ração Nutri chega na sua porta.
                        </p>

                        <div className="cotainerImagemTextoNutricao">
                            <img src={dogBiscoito} alt="Vetor De Cachorro" className="imagemPadrao"></img>
                        </div>
                        {/* Container Imagem Detalhe */}
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