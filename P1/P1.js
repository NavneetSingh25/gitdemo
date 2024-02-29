let boxes=document.querySelectorAll(".box");
let Resetbtn=document.querySelector("#reset-btn");
let turnO=true;
const winorders=[
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8]

];

const resetgame=()=>{
   turnO=true;
   enableboxes();
   msgcontainer.classList.add("hide");
};
let count=0;
boxes.forEach((box) => {
   box.addEventListener("click", () => {
      console.log("Box was clicked");
      if(turnO){
         box.innerText="O";
         turnO=false;
      }
      else{
         box.innerText="X";
         turnO=true;

      }
      box.disabled=true;
      count++;
     let isWinner= checkwinner();

      if(count===9 && !isWinner){
        gamedraw();
      };
   });   
});


let msg=document.querySelector("#msg");
let msgcontainer=document.querySelector(".msg-container");
let newbtn=document.querySelector("#new-btn");

const gamedraw=()=>{
   msg.innerText = `Game was a Draw.`;
   msgcontainer.classList.remove("hide");
   disableboxes();
 };
 

const disableboxes=()=>{
   for(let box of boxes){
      box.disabled=true;
   };
};

const enableboxes=()=>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   };
};


const showWinner=(winner)=>{
   msg.innerText=`Congratulations!, Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disableboxes();
}

const checkwinner=()=>{
   for(let orders of winorders){
    let pos1val=boxes[orders[0]].innerText;
    let pos2val=boxes[orders[1]].innerText;
    let pos3val=boxes[orders[2]].innerText;
    if(pos1val!="" && pos2val!="" && pos3val!=""){
      if(pos1val===pos2val && pos2val===pos3val){
         console.log("winner",pos1val);
         showWinner(pos1val);
         return true;
      };

    };

   };
};

newbtn.addEventListener("click",resetgame);
Resetbtn.addEventListener("click",resetgame);

