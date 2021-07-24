/* export default function salvarStorageInterno(tipoArray, array, evento) {
    let verificaItemVazio = false;
    let valorSalvo = false;

    const arrayLocal = array[0];
    Object.entries(arrayLocal).forEach(([key, item]) => {
        if (key !== "id" || key !== "idClient") {
            if (verificaItemVazio === false) {
                console.log(item)
                if (item === "") {
                    alert("Contem Valores Sem Preencher!")
                    localStorage.clear();
                    verificaItemVazio = true;
                    if (evento !== null) { evento.preventDefault(); }
                }
                else valorSalvo = true;
            }
        }
    });

    if (verificaItemVazio === false && valorSalvo === true) {
        const id = tipoArray === "Cliente" ? "" : array[0].id
        localStorage.setItem(`${tipoArray}${id}`, JSON.stringify(array));
        alert("Valores Salvos")
    }

    verificaItemVazio = false;
} */

export default class manipulacaoLocalStorage{
    constructor(array){
        this.array = array;
    }

    salvarStorageInterno(tipoArray, evento) {
        let verificaItemVazio = false;
        let valorSalvo = false;
    
        const arrayLocal = this.array[0];
        Object.entries(arrayLocal).forEach(([key, item]) => {
            if (key !== "id" || key !== "idClient") {
                if (verificaItemVazio === false) {
                    console.log(item)
                    if (item === "") {
                        alert("Contem Valores Sem Preencher!")
                        localStorage.clear();
                        verificaItemVazio = true;
                        if (evento !== null) { evento.preventDefault(); }
                    }
                    else valorSalvo = true;
                }
            }
        });
    
        if (verificaItemVazio === false && valorSalvo === true) {
            const id = tipoArray === "Cliente" ? "" : this.array[0].id
            localStorage.setItem(`${tipoArray}${id}`, JSON.stringify(this.array));
            alert("Valores Salvos")
        }
    
        verificaItemVazio = false;
    }    
}