import '../../../css/Cadastro.css'
import '../../../css/Global.css'


import { React, useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

import NavBar from '../../component/NavBar';
import Footer from '../../component/Footer';




function Cadastro() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [estado, setEstado] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");


    const estados = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RR", "RO", "RJ", "RN", "RS", "SC", "SP", "SE", "TO"];

    useEffect(() => { }, [])

    function salvarStorageInterno() {
        /*  const arrayStorage = {
             nome: nome,
             email: email,
             cidade: cidade,
             endereco: endereco,
             estado: estado,
             cpf: cpf,
             telefone: telefone
         } */

        const arrayStorage = [
            { tipo: "nome-Cliente", valor: nome }, { tipo: "email-Cliente", valor: email }, { tipo: "cidade-Cliente", valor: cidade }, { tipo: "endereco-Cliente", valor: endereco }, { tipo: "estado-Cliente", valor: estado },{ tipo: "cpf-Cliente", valor: cpf },{ tipo: "telefone-Cliente", valor: telefone }            
        ];

        arrayStorage.map(item => {
            localStorage.setItem(item.tipo,item.valor); 
        })

        
    }

    return (
        <>
            <NavBar></NavBar>
            {/* NavBar Principal */}
            <section id="secaoPrincipal">
                <h1 className="corVermelha">Preenchas Seus Dados Para Realizar a Compra</h1>
                <div className="containerConteudoCadastro">
                    <div className="containerCadastro">
                        <label className="labelInformacaoCadastro corPadrao1 widthLabelPrimario" >Nome:</label>
                        <input type="text" className="inputNomeCadastro corPadrao1 widthInputMax" onChange={e => setNome(e.target.value)} value={nome}></input>
                    </div>
                    {/* Cadastro Do Nome */}
                    <div className="containerCadastro">
                        <label className="labelInformacaoCadastro corPadrao1 widthLabelPrimario" >Email:</label>
                        <input type="text" className="inputEmailCadastro corPadrao1 widthInputMax" onChange={e => setEmail(e.target.value)} value={email}></input>
                    </div>
                    {/* Cadastro Do Email */}
                    <div className="containerSecundarioCadastro">
                        <div className="containerCadastro">
                            <label className="labelInformacaoCadastro corPadrao1 widthLabelPrimario">Cidade:</label>
                            <input type="text" className="inputCidadeCadastro corPadrao1" onChange={e => setCidade(e.target.value)} value={cidade}></input>
                        </div>
                        {/* Cadastro Da Cidade */}
                        <div className="containerCadastro">
                            <label className="labelInformacaoCadastro corPadrao1 widthLabelPrimario">Estado:</label>
                            <select className="inputEstadoCadastro" onChange={e => setEstado(e.target.value)} value={estado}>
                                <option>  </option>
                                <option>SP</option>
                                <option>MG</option>
                                <option>RG</option>
                            </select>


                        </div>
                        {/* Cadastro Da Cidade */}
                    </div>
                    <div className="containerCadastro">
                        <label className="labelInformacaoCadastro corPadrao1 widthLabelPrimario">Endereço:</label>
                        <input type="text" className="inputEnderecoCadastro corPadrao1 widthInputMax" onChange={e => setEndereco(e.target.value)} value={endereco} placeholder="Bairro - Rua - Numero"></input>
                    </div>
                    {/* Cadastro Da Endereco */}
                    <div className="containerSecundarioCadastro">
                        <div className="containerCadastro">
                            <label className="labelInformacaoCadastro corPadrao1 widthLabelPrimario">Numéro:</label>
                            <input type="text" className="inputTelefoneCadastro corPadrao1" onChange={e => setTelefone(e.target.value)} value={telefone}></input>
                        </div>
                        {/* Cadastro Do Telefone */}
                        <div className="containerCadastro">
                            <label className="labelCpfCadastro labelInformacaoCadastro corPadrao1">Cpf:</label>
                            <input type="text" className="inputCpfCadastro corPadrao1" onChange={e => setCpf(e.target.value)} value={cpf}></input>
                        </div>
                        {/* Cadastro Do Cpf */}
                    </div>
                </div>
                {/* Container Para Armazenar Conteudo */}
                <div className="containerBotaoCadastro">
                    <Link className="linkLimpo" to="/">
                    <button className="botaoEnviarCadastro containerPadrao backgroundCor4 corPadrao1" onClick={salvarStorageInterno}>Enviar Cadastro</button>
                    </Link>
                </div>
                {/* Container para Botao Cadastro */}
            </section>
            {/* Seção Principal do Login */}
            <Footer></Footer>
            {/* Footer Principal */}
        </>
    );
}

export default Cadastro;