let precos = [
    /*ARROZ - 0*/ 6.27,
    /*feijao - 1*/ 6.64,
    /*acem - 2*/ 26.02,
    /*frango - 3*/ 19.12,
    /*tomate - 4*/ 7.98,
    /*batata - 5*/ 5.12,
    /*cenoura - 6*/ 4.66,
    /*banana - 7*/ 7.35,
    /*maçã - 8*/ 9.75,
    /*alface - 9*/ 6.42
]

let alimento = document.getElementById("comida_list")
let results = document.getElementById('result')
let mensals = document.getElementById('mensal')
let anuals = document.getElementById('anual')
let peso = document.getElementById('_quant')

let resultado


function _calcula() {

    if (peso.value > 0)
    {
        switch (alimento.value) {
            case "arroz":
                resultado = ((precos[0] * peso.value) / 1000)
                results.innerHTML = `R$ ${(resultado.toFixed(2))}`
                mensals.innerHTML = `Por Mês: R$ ${(resultado * 30).toFixed(2)}`
                anuals.innerHTML = `Por Ano: R$ ${(resultado * 365).toFixed(2)}`
                localStorage.setItem("alimento", "arroz")
            break

            case "feijao":
                resultado = ((precos[1] * peso.value) / 1000)
                results.innerHTML = `R$ ${(resultado.toFixed(2))}`
                mensals.innerHTML = `Por Mês: R$ ${(resultado * 30).toFixed(2)}`
                anuals.innerHTML = `Por Ano: R$ ${(resultado * 365).toFixed(2)}`
                localStorage.setItem("alimento", "feijao")
            break

            case "acem":
                resultado = ((precos[2] * peso.value) / 1000)
                results.innerHTML = `R$ ${(resultado.toFixed(2))}`
                mensals.innerHTML = `Por Mês: R$ ${(resultado * 30).toFixed(2)}`
                anuals.innerHTML = `Por Ano: R$ ${(resultado * 365).toFixed(2)}`
                localStorage.setItem("alimento", "acem")
            break
        
            case "frango":
                resultado = ((precos[3] * peso.value) / 1000)
                results.innerHTML = `R$ ${(resultado.toFixed(2))}`
                mensals.innerHTML = `Por Mês: R$ ${(resultado * 30).toFixed(2)}`
                anuals.innerHTML = `Por Ano: R$ ${(resultado * 365).toFixed(2)}`
                localStorage.setItem("alimento", "frango")
            break
        
            case "tomate":
                resultado = ((precos[4] * peso.value) / 1000)
                results.innerHTML = `R$ ${(resultado.toFixed(2))}`
                mensals.innerHTML = `Por Mês: R$ ${(resultado * 30).toFixed(2)}`
                anuals.innerHTML = `Por Ano: R$ ${(resultado * 365).toFixed(2)}`
                localStorage.setItem("alimento", "tomate")
            break
        
            case "batata":
                resultado = ((precos[5] * peso.value) / 1000)
                results.innerHTML = `R$ ${(resultado.toFixed(2))}`
                mensals.innerHTML = `Por Mês: R$ ${(resultado * 30).toFixed(2)}`
                anuals.innerHTML = `Por Ano: R$ ${(resultado * 365).toFixed(2)}`
                localStorage.setItem("alimento", "batata")
            break
            
            case "cenoura":
                resultado = ((precos[6] * peso.value) / 1000)
                results.innerHTML = `R$ ${(resultado.toFixed(2))}`
                mensals.innerHTML = `Por Mês: R$ ${(resultado * 30).toFixed(2)}`
                anuals.innerHTML = `Por Ano: R$ ${(resultado * 365).toFixed(2)}`
                localStorage.setItem("alimento", "cenoura")
            break

            case "banana":
                resultado = ((precos[7] * peso.value) / 1000)
                results.innerHTML = `R$ ${(resultado.toFixed(2))}`
                mensals.innerHTML = `Por Mês: R$ ${(resultado * 30).toFixed(2)}`
                anuals.innerHTML = `Por Ano: R$ ${(resultado * 365).toFixed(2)}`
                localStorage.setItem("alimento", "banana")
            break

            case "maca":
                resultado = ((precos[8] * peso.value) / 1000)
                results.innerHTML = `R$ ${(resultado.toFixed(2))}`
                mensals.innerHTML = `Por Mês: R$ ${(resultado * 30).toFixed(2)}`
                anuals.innerHTML = `Por Ano: R$ ${(resultado * 365).toFixed(2)}`
                localStorage.setItem("alimento", "maca")
            break

            case "alface":
                resultado = ((precos[9] * peso.value) / 1000)
                results.innerHTML = `R$ ${(resultado.toFixed(2))}`
                mensals.innerHTML = `Por Mês: R$ ${(resultado * 30).toFixed(2)}`
                anuals.innerHTML = `Por Ano: R$ ${(resultado * 365).toFixed(2)}`
                localStorage.setItem("alimento", "alface")
            break

        }
    }
    else
    {
        alert("Coloque um valor válido na caixa de número")
    }

}