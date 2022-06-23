//import Toastify from 'toastify-js'
let flag = 1
let counter = 0
let quizBtn = document.querySelector(".wider")
let textInfo = document.querySelector(".heading")
let timerStart = 0
let timerEnd = 0
let result = 0
let answerOne = document.querySelector("#label1")
let answerTwo = document.querySelector("#label2")
let answerThree = document.querySelector("#label3")
let answerFour = document.querySelector("#label4")

let newBtn = document.createElement("button")

// to start the quiz
quizBtn.addEventListener("click", () => {
    timerStart = new Date()

    questionOne()
    quizBtn.remove()
    document.querySelector("form").style.display = "block";
    document.querySelector("form").style.visibility = "visible"
    nextButton()
})

// generate new button
function nextButton() {
    newBtn.classList.add("btn-danger", "btn")
    newBtn.innerHTML = "Next"
    document.body.querySelector(".main-div").appendChild(newBtn)
}

//event listener for the new button "next" and go to next question evrey click

newBtn.addEventListener("click", () => {
    flag++

    if (flag === 2) {
        questionTwo()
        if (document.querySelector("#q3").checked === true) {
            result++
        }
    }
    if (flag === 3) {
        questionThree()
        if (document.querySelector("#q3").checked === true) {
            result++
        }
    }
    if (flag === 4) {
        questionFour()
        if (document.querySelector("#q1").checked === true) {
            result++
        }
    }
    if (flag === 5) {
        questionFive()
        if (document.querySelector("#q1").checked === true) {
            result++
        }
    }
})

// to display each question and it's choices the quiz

function questionOne() {
    textInfo.textContent = "1- Inside which HTML element do we put the JavaScript?"
}
function questionTwo() {
    document.querySelector(".heading").style.margin = "0 auto 0 auto"
    textInfo.innerText = `2- What is the correct JavaScript syntax to change the content of the HTML element below?

    <p id=demo>This is a demonstration.</p>
    
    `

    answerOne.textContent = "document.getElementByName(" + `"p"` + ").innerHTML = " + `"Hello World!";`
    answerTwo.textContent = "#demo.innerHTML = " + `"Hello World!"`
    answerThree.textContent = "document.getElementById(" + `"demo"` + ").innerHTML = " + `"Hello World!";`
    answerFour.textContent = " document.getElement(" + `"p"` + ").innerHTML = " + `"Hello World!";`

}
function questionThree() {
    document.querySelector(".heading").style.margin = "0 auto 50px auto"
    textInfo.textContent = "3- Where is the correct place to insert a JavaScript?"
    answerOne.textContent = "Both the <head> section and the <body> section are correct"
    answerTwo.textContent = "The <head> section"
    answerThree.textContent = "The <body> section"
    answerFour.style.visibility = "hidden"
    document.querySelector("#q4").remove()

}
function questionFour() {
    document.querySelector(".heading").style.margin = "0 auto 50px auto"
    textInfo.textContent = "4- What is the correct syntax for referring to an external script called " + `"xxx.js"?`
    answerOne.textContent = "<script src=" + `xxx.js` + ">"
    answerTwo.textContent = "<script name=" + `xxx.js` + ">"
    answerThree.textContent = "<script name=" + `xxx.js` + ">"

}

function questionFive() {
    document.querySelector(".heading").style.margin = "0 auto 50px auto"
    textInfo.textContent = "5- The external JavaScript file must contain the <script> tag."
    answerOne.textContent = "false"
    answerTwo.textContent = "true"
    answerThree.style.visibility = "hidden"
    document.querySelector("#q3").remove()
    document.querySelector(".btn-danger").remove()
    if (document.querySelector("#q1").checked === true) {
        result++
    }
    submitBtn()
}

// create new button for submit answers and add it to body
let subBtn = document.createElement("button")
function submitBtn() {
    subBtn.classList.add("btn-info", "btn", "newSub")
    subBtn.setAttribute("id", "cc");
    subBtn.innerHTML = "Submit"
    document.body.querySelector(".main-div").appendChild(subBtn)
}


// get second time and delete h1 and choises then display the result report
subBtn.addEventListener("click", function () {
    timerEnd = new Date()
    document.querySelector("h1").remove()
    document.querySelector(".aligning-radios").remove()
    document.querySelector(".newSub").style.marginTop = "100px"
    let consumedTime = Math.floor((timerEnd - timerStart) / 1000)
    resultedTime(consumedTime)
})

// create h3 to display time and result
function resultedTime(consumedTime) {
    let finalTime = document.createElement("h3")
    document.querySelector(".main-div").firstElementChild.appendChild(finalTime)
    document.querySelector("h3").innerText = ` Time consumed ${calculateTime(consumedTime)} 
    your result is: ${result} out of 5
    
    Correct answers: ${result}
    Wrong answers: ${5-result}`
    subBtn.remove()
    if (result >= 3) {
        Toastify({

            text: "Congratulations, You Passed the quiz",

            duration: 4000,
            position: "center",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
        }).showToast();

    }
    else if(result <= 2){
        Toastify({

            text: "Oops!, you faild",

            duration: 4000,
            position: "center",
            style: {
                background: "linear-gradient(to right, #e20505, #df7f7f)",
              },
        }).showToast();
    }
}
    // calculate time
    function calculateTime(duration) {
        let hrs = Math.floor(duration / 3600)
        let mins = Math.floor((duration % 3600) / 60)
        let secs = Math.floor(duration % 60)

        let outputTime = " "
        if (hrs > 0) {
            outputTime += "" + hrs + ":" + (mins < 10 ? "0" : "")
        }
        outputTime += "" + mins + ":" + (secs < 10 ? "0" : "")
        outputTime += "" + secs
        return outputTime;
    }