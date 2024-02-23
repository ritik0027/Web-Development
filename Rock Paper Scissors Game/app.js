let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
let upoint=document.querySelector("#user-score");
let cpoint=document.querySelector("#computer-score");


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})


const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor((Math.random()*3));
    return options[randIdx];
}


const gameDraw=()=>{
    msg.innerText=" Game was Draw, Play Again.";
    msg.classList.remove("bg-gray-600");
    msg.classList.remove("bg-green-500");
    msg.classList.add("bg-yellow-500");
}


const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`You Win! your ${userChoice} beats ${compChoice}`;
        msg.classList.remove("bg-gray-600");
        msg.classList.remove("bg-yellow-500");
        msg.classList.add("bg-green-500");
        userScore++;
        upoint.innerText=userScore;
    }
    else{
        msg.innerText=`You Lose ${compChoice} beats your ${userChoice}`;
        msg.classList.remove("bg-green-500");
        msg.classList.remove("bg-yellow-500");
        msg.classList.add("bg-gray-600");
        compScore++;
        cpoint.innerText=compScore;
    }
}


const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        gameDraw();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false : true ;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissor"? false : true ;
        }
        else{
            userWin=compChoice==="rock"? false : true ;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
