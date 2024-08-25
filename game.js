let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg =document.querySelector("#msg");
let turn=true;
const winPatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const resetGame = ()=>{
     turn=true;
     enableBoxes();
     msgContainer.classList.add("hide");
};
boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turn){
            box.innerText = "O";
            box.classList.remove("hide-box");
            turn = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("hide-box");
            turn = true;
        }
        box.disabled = true;

        checkwinner();
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner= (winner) =>{
   msg.innerText =`Congratulation winner is ${winner}`;
   msgContainer.classList.remove("hide");
   disableBoxes();
};
const checkwinner = () =>{
     for(let patterns of winPatterns){
         let pos1val= boxes[patterns[0]].innerText;
         let pos2val= boxes[patterns[1]].innerText;
         let pos3val= boxes[patterns[2]].innerText;
         if(pos1val !== "" && pos2val !== "" && pos3val !== "" ){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("Congratulation winner is ",pos1val);
                showWinner(pos1val);
            }
         }

     }
};
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);