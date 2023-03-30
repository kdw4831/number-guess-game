//랜덤번호 지정
//유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 <유저번호 Down!!
//랜덤번호가 >유저번호 UP!!
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1~100범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지않는다.
//유저가 이미 입력한 숫자를 또 입력하면 , 알려준다, 기회를 깍지 않는다.



let computerNum=0;
let playButton=document.getElementById("play-button")
let userInput=document.getElementById("user-input")
let resultArea=document.getElementById("result-area")
let resetButton=document.getElementById("reset-button")
let chanceArea=document.getElementById("chance-area")
let chance=5;
let gameover= false;
let history=[]



playButton.addEventListener("click", play);
resetButton.addEventListener("click",reset);
userInput.addEventListener('focus',function(){userInput.value=""})


 
function pickRandomNum(){
    computerNum=Math.floor(Math.random()*100)+1
    console.log("정답",computerNum)
}

function play(){
    let userValue = userInput.value;
    
    if(userValue<1||userValue>100){
        resultArea.textContent="1~100사이의 숫자를 입력해주세요"
        return
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다."
        return
    }
    chance--;
    history.push(userValue)
    console.log(history)

    chanceArea.innerHTML=`남은 기회: ${chance}번`
    
    if(userValue<computerNum){
        resultArea.textContent="Up!!!"
    }else if(userValue>computerNum){
        resultArea.textContent="Down!!!"
    }else{
        resultArea.textContent="맞추셨습니당~~"
    }
    
    if(chance<1){
        gameover=true;
    }
    if(gameover==true){
        playButton.disabled=true; 

    }
    console.log(chance)
}
function reset(){
    pickRandomNum();
    /*숫자 입력창 비우기*/
    userInput.value="";
    
    /*chance 원상복구*/ 
    chance=5;
    chanceArea.innerHTML=`남은 기회: ${chance}번`

    /*go 버튼 다시 살리기 및 gameover 초기화*/ 
    gameover=false;
    playButton.disabled=false; 

    /*새로운 랜덤번호 생성*/
    
    resultArea.textContent="결과값이 여기 나옵니다."

    /*배열 초기화 하기*/
    history=[];
    
}

pickRandomNum()