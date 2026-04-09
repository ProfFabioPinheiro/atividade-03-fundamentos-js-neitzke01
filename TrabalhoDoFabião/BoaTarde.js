nome = " Gustavo";

function HorasdoDia(hora) {
    if (hora > 5 && hora < 12) {
        console.log("Boa Dia!" + nome);
    } else if (hora >= 12 && hora <= 18) {
        console.log("Boa Tarde!" + nome);
    } else {
        console.log("Boa noite!" + nome);
    }
}

HorasdoDia(1);
