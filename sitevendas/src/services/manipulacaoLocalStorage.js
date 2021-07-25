export default class manipulacaoLocalStorage {
    constructor(array) {
        this.array = array;
    }

    salvarStorageInterno(tipoArray, evento) {
        const arrayLocal = this.array[0];
        if (verificarArray(arrayLocal, evento) === true) {
            let nomeKey = "SemNome";
            let mensagem = "Sem Mensagem"
            switch (tipoArray) {
                case "Pet":
                    nomeKey = `${tipoArray}-${arrayLocal.id}`;
                    mensagem = "Pedido Realizado Com Sucesso!"
                    break;

                case "Produto":
                    nomeKey = `${tipoArray}-${arrayLocal.idPet}`;
                    mensagem = "Ração Escolhida com Sucesso"
                    break;

                case "Cliente":
                default:
                    nomeKey = `${tipoArray}`;
                    mensagem = "Cliente Cadastrasdo com Sucesso"
                    break;
            }

            localStorage.setItem(nomeKey, JSON.stringify(this.array));
            alert(mensagem)
        }
    }

    verificaStorageLocalVazia(nome) {
        return getStorageLocal(nome) === null ? true : false
    }

    converteValorClient() {
        if (this.verificaStorageLocalVazia("Cliente") === false) {
            return JSON.parse(getStorageLocal("Cliente"))[0];
        }
        return null;
    }

    atualizarStorageInterno(nome, id) {
        const arrayLocal = { ...this.array[0] };
        const nomeVariavel = `${nome}-${id}`;
        let arrayAntiga = JSON.parse(getStorageLocal(nomeVariavel));
        if (verificarArray(arrayLocal, null) === true) {

            let arrayNova = [];
            arrayAntiga.map(itemArray => arrayNova.push(itemArray))
            arrayNova.push(arrayLocal);
            localStorage.removeItem(nomeVariavel);
            localStorage.setItem(nomeVariavel, JSON.stringify(arrayNova));

            if (nome === "Produto") alert("Acrescentada Mais Uma Ração!")
        }
    }

    apagarLocalStorage(){
        if (localStorage.length > 0) {
            localStorage.clear();
            alert("Até Logo!")
        }
    }
}

function getStorageLocal(nome) {
    return localStorage.getItem(nome)
}

function verificarArray(array, evento) {
    /* let valorSalvo = false; */
    let verificaItem = false;
    Object.entries(array).forEach(([key, item]) => {
        if (key !== "id") { //Ignora a id porque ela sempre vai ser randomica, então sempre vai ter
            if (verificaItem === false) {
                if (item === "") {
                    alert("Contem Valores Sem Preencher!")                    
                    verificaItem = true;
                    if (evento !== null) { evento.preventDefault(); }
                }
                /* else valorSalvo = true; */
            }
        }
    });

    if (verificaItem === false /* && valorSalvo=== true */) {
        return true;
    }
    return false;
}