export default function salvarStorageInterno(tipoArray,array, evento) {
    let verificaItemVazio = false;
    let id;

    array.map(item => {
        if (verificaItemVazio === false) {            
            if (item === "") {
                alert("Contem Valores Sem Preencher!")
                localStorage.clear();
                verificaItemVazio = true;
                if (evento !== null) { evento.preventDefault(); }
            }            
        }
    })

    if(verificaItemVazio === false) {
        localStorage.setItem(`${tipoArray}-${id}`,JSON.stringify(array)); 
        alert("Valores Salvos")
    }

    verificaItemVazio = false;
}