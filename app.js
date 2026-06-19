let gameseq=[];
let userseq=[];
let btns=['orange', 'pink', 'purple', 'green'];

let started=false;
let level=0;
let h2=document.querySelector('h2');

document.addEventListener('keypress',function(){
    if(started==false){
        // console.log('Game started');
        started=true;
        levelup();
    }
});

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=btns[randIdx];
    let randbtn=document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);
}
function btnflash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    }, 150);
}
function btnPress(){
    let btn=this;
    btnflash(btn);
    usercolor=btn.getAttribute('id');
    userseq.push(usercolor);
    checkAns(userseq.length-1);
}
let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click',btnPress);
}
function checkAns(idx){
    // let idx= level-1;
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,500);
        }
    }else{
        h2.innerHTML=`Game over! Your score is <b>${level}</b> <br>Press any key to restart`;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },150);
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}