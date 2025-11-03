let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-Btn"); 
let newGame = document.querySelector("#new-Btn");
let msgContainer = document.querySelector(".msg-container");
let Msg = document.querySelector("#msg");

let turnO = true; // playerX, playerO
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],    // 8 patterns
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const resetGame = () => {
    turnO = true;
    enbleBtn()
    msgContainer.classList.add("hide");
}

// Access The Every each button.
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        // console.log("Function is Work & Btn Clicked")
        if(turnO){ 
            // PlayerO
            box.innerText = "O";
            box.style.color = "white";
            turnO = false;
           
        }else{ 
            // PlayerX
            box.innerText = "X";
            box.style.color = "red";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enbleBtn = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}

const showWinner = (winner) =>{ 
    Msg.innerText = `Congratulations, Winner is ${winner} Player`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const checkWinner = () => {
    for(let patterns of winPatterns){
        // console.log(patterns[0],patterns[1],patterns[2]);
        // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGame.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);