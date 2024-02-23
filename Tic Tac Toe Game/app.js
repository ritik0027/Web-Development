let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-game");
let msgContainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let gameContainer=document.querySelector(".game-container");
let turno=true;
let buttonCount=0;

const winPatterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.classList.remove("text-red-600")
            box.innerText="O";
            turno=false;
        }
        else{
            box.innerText="X";
            box.classList.add("text-red-600");
            turno=true;
        }
        box.disabled=true;
        ++buttonCount;
        checkWinner();
    })
})


const resetGame=()=>{
    turno=true;
    buttonCount=0;
    enableBoxes();
    msgContainer.classList.add("hidden");
    resetBtn.classList.remove("hidden");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        gameContainer.classList.remove("hidden");

    }
}


const showWinner=(winner)=>{
    msg.innerHTML=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hidden");
    disableBoxes();
    resetBtn.classList.add("hidden");
    gameContainer.classList.add("hidden");
}


const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
                }
            }
        }
        if(buttonCount===9){
            msg.innerHTML="The Game is Tie!"
        }
    }


resetBtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);
