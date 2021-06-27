
const container = document.querySelector("#container");


let gridSize = 850;  // taille du conteneur
let border = 1;  // taille de la bordure d'une case 

container.style.height = container.style.width = gridSize;

createGrid(16);  // grille defaut

function createGrid(gridLen){

    let sizeCase = gridSize/gridLen - 2*border;  //ajuste la taille de la case selon la taille du conteneur 

    for(let i=0; i<gridLen; i++){
        for(let j=0; j<gridLen; j++){

            const div = document.createElement("div");
            div.classList.add("divGrid");
            div.style.height =  div.style.width = sizeCase;
            div.style.border = `${border}px solid black`;
            // colorie en noir les cases par defaut 
            div.addEventListener("mouseover", (e) => {
                e.target.style.background = "black";
            });
            container.appendChild(div);
        }
    }
}

function randomRgb(){
    return Math.floor(Math.random() * 256);
}

const divList = container.childNodes;

// colorie les cases en rgb
const rgb = document.querySelector("#rgb");
rgb.addEventListener("click", () => {
    divList.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            e.target.style.background = `rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`;
        });
    });
});


// colorie les cases en noir 
const black = document.querySelector("#black");
black.addEventListener("click", () => {
    divList.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            e.target.style.background = "black";
        });
    });
});

// a chaque passage, on ajoute 10% de noir a la case 
const progressiveBlack = document.querySelector("#progressive");
progressiveBlack.addEventListener("click", () => {
    divList.forEach( div => {
        let opacity = 0;
        div.addEventListener("mouseover", (e) => {
            e.target.style.background = `rgba(0, 0, 0, ${opacity+=0.1})`;
        });
    });
});


// garde la meme grille mais enleve les couleurs 
const clearGrid = document.querySelector("#clearGrid");
clearGrid.addEventListener("click", () => {
    divList.forEach((div) => {
        div.style.background = "";
    });

});


// supprime la grille et en cree une nouvelle 
const newGrid = document.querySelector("#newGrid");
newGrid.addEventListener("click", () => {
    // OPTION 1
    while (container.firstChild){           
        container.removeChild(container.firstChild);
    }

    // OPTION 2 COMMENCER PAR DERNIER ELEM
     /*const divList = container.childNodes;
      for(let i = divList.length - 1; i >= 0; i--){
        container.removeChild(divList[i])  
    }  */
    let gridLen = prompt("Taille de la nouvelle grille");
    if(gridLen > 100) gridLen = 100;
    createGrid(gridLen);
});


