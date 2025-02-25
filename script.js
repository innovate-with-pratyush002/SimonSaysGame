let gameSeq=[];
let userSeq=[];
let start=false;
let level=0;
let box=["box1","box2","box3","box4"];
let h3=document.querySelector("h3");
document.addEventListener("keypress",()=>{
    if(start==false){
        start= true;
        levelup();
    }
});

function levelup(){
    userSeq=[];
    level++;
    h3.innerHTML=`Level-${level}`;
    let randind= Math.floor(Math.random()*4);
    let rand= box[randind];
    let randbox= document.querySelector(`.${rand}`);
    gameSeq.push(rand);
    flashbtn(randbox);
}

function flashbtn(btn){
btn.classList.add("flash");
setTimeout(()=>{
    btn.classList.remove("flash");
},150);
}

let btns=document.querySelectorAll(".bt");
for(btn of btns){
    btn.addEventListener("click",btnpress);
}

function btnpress(){
    let btnis=this;
    flashbtn(btnis);
    let btnatr=btnis.getAttribute("id");
    userSeq.push(btnatr);
    checkpoint(userSeq.length-1);
}

function checkpoint(i){
        if(gameSeq[i]===userSeq[i]){
           if(gameSeq.length==userSeq.length){
         setTimeout(levelup,1000);
           }
        }
        else{
            h3.innerHTML=`Game is over! your score is-${level}<br> Press any key to Restart`;
            document.querySelector("body").style.backgroundColor="red";
            setTimeout(()=>{
                document.querySelector("body").style.backgroundColor="rgb(76, 69, 69)";
            },150);
            reset();
        }      
}

function reset(){
    gameSeq=[];
    userSeq=[];
    start=false;
    level=0;
}