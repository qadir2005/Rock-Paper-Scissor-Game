let imgaes = document.querySelectorAll(".images");
let winmessage = document.querySelector(".message");
let userScore = document.querySelector(".userScore");
let compScore = document.querySelector(".comScore");


let comTurn;
let winner;
let userScores = 0;
let compScores = 0;


let comInput = () => {
    let array = ["Rock", "Paper", "Scissor"];
    comTurn = array[Math.floor(Math.random()*3)]
    return array
}

let userInput = () => {
    imgaes.forEach((gameImgae) => {
        gameImgae.addEventListener("click", () => {
            comInput()
            let user = gameImgae.getAttribute("id");
                        console.log(`user value  ${user} and computer val is ${comTurn}`);
                        if(user === comTurn){
                            winmessage.innerHTML= ""
                            winmessage.innerHTML= "Match Draw"
                        }
            if (user != comTurn) {
                
            if(user === "Rock" && comTurn === "Scissor"){
                    winmessage.innerHTML= ""
                    winmessage.innerHTML = `You win Because Computer select Scissor`
                    userScores++;
                    userScore.innerHTML = userScores;
            }
            if(user === "Scissor" && comTurn === "Rock"){
                winmessage.innerHTML= ""
                winmessage.innerHTML = `Comp win Because Computer select Rock`
                compScores++;
                compScores.innerHTML = compScore;
        }
            if(user === "Scissor" && comTurn === "Paper" ){
                winmessage.innerHTML= ""
                winmessage.innerHTML = `You win Because Computer select Paper`
                userScores++
                userScore.innerHTML= userScores

            }
            if(user === "Paper" && comTurn === "Scissor"){
                winmessage.innerHTML= ""
                winmessage.innerHTML = `Comp win Because Computer select Scissor`
                compScores++
                compScore.innerHTML= compScores

            }
            if(user === "Paper" && comTurn === "Rock" ){
                winmessage.innerHTML= ""
                winmessage.innerHTML = `You win Because Computer select Rock`
                userScores++
                userScore.innerHTML= userScores

            }
            if(user === "Rock" && comTurn === "Paper"){
                winmessage.innerHTML= ""
                winmessage.innerHTML = `Comp win Because Computer select Paper`
                compScores++
                compScore.innerHTML= compScores

            }
            }
        })
    })
}

userInput()