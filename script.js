const x = "X";
const o = "O";
let gameState = "P1";
const modal = document.querySelector("dialog");
const modalText= modal.querySelector("H2");

const grilla = Array.from(document.querySelectorAll(".grid-item"));

grilla.forEach((grilla,i) => {
    grilla.addEventListener("click", ()=>{
        if(gameState==="Pause")return;
        if(grilla.textContent !== "") return
        grilla.innerText= gameState === "P1" ? x : o;
        const posWin = checkWinner()
        if (typeof posWin==="object") {
            win(posWin);
            return
        } 
        if (posWin=== "empate") {
            mostrarmodal("Empate Tecnico")
        }
        
        gameState = gameState === "P1" ? "P2" : "P1";
    })
});

function checkWinner() {
    const table =grilla.map (grilla => grilla.textContent)
    console.log(table)
    
    //horizontal
    for (let i = 0; i <= 9; i += 3) {
        if( table[i] &&
            table [i] === table [i+1] &&
        table [i] === table [i+2] ){
       return  [i, i+1, i+2]
        }
    }
    //vertical
    for (let i = 0; i <= 3; i ++) {
        if( table[i] &&
            table[i] === table [i+3] &&
            table[i] === table [i+6] ){
              return  [i, i+3, i+6]
        }
    }
    //diagonal
    if( table[0] &&
        table[0] === table [4] &&
        table[0] === table [8] ){
            return [0, 4, 8] 
        }
    if( table[2] &&
            table[2] === table [4] &&
            table[2] === table [6] ){
               return [2, 4, 6]
            }
    if(table.includes("")) return false;    
    return "empate"
}
function win(posWin) {
    console.log("ganador",posWin)
    posWin.forEach(pos =>{
        grilla[pos].classList.toggle("ganador", true)
    })   
    mostrarmodal("Ganaste "+ gameState) 
    gameState = "Pause"
}

function mostrarmodal(texto) {
    modalText.innerText= texto
    modal.showModal();
}

modal.querySelector("button").addEventListener("click",()=>{
    grilla.forEach(cuadrado=>{
        cuadrado.textContent = "";
        cuadrado.classList.toggle("ganador",false);
        modal.close();
        estadoJuego="P1"
    });
})