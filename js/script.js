const celulas = document.querySelectorAll(".celula");
let checkarTurno = true;

const JOGADOR_X = "X";
const JOGADOR_O = "O";

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")){
        Jogar(event.target.id);
    }
});

function Jogar(id){
    const celula = document.getElementById(id);
    Turno = checkarTurno ? JOGADOR_X : JOGADOR_O;
    celula.textContent = Turno;
    checkarTurno = !checkarTurno;
    checkVencedor(Turno);
}

function checkVencedor(Turno){

}