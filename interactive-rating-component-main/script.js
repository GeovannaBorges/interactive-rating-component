var backgroundColor
var color
var opt

function GetOption(option) {
    switch (option) {

        case 1:
            opt = 1
            backgroundColor = document.getElementById("I")
            backgroundColor.style.backgroundColor = "hsl(25, 97%, 53%)"
            color = document.getElementById("I")
            color.style.color = "white"
            
            break 

            case 2:
            opt = 2
            backgroundColor = document.getElementById("II")
            backgroundColor.style.backgroundColor = "hsl(25, 97%, 53%)"
            color = document.getElementById("II")
            color.style.color = "white"
            
            break

            case 3:
            opt = 3
            backgroundColor = document.getElementById("III")
            backgroundColor.style.backgroundColor = "hsl(25, 97%, 53%)"
            color = document.getElementById("III")
            color.style.color = "white"
            
            break

            case 4:
            opt = 4 
            backgroundColor = document.getElementById("IV")
            backgroundColor.style.backgroundColor = "hsl(25, 97%, 53%)"
            color = document.getElementById("IV")
            color.style.color = "white"
            
            break

            case 5:
            opt = 5 
            backgroundColor = document.getElementById("V")
            backgroundColor.style.backgroundColor = "hsl(25, 97%, 53%)"
            color = document.getElementById("V")
            color.style.color = "white"
           
            break
    }

    return opt
    
}

var selectedOpt = GetOption()

function SubmitResult() {

    var containerArea =  document.getElementById("container") 
    containerArea.innerText = ""
    const img = document.createElement("img")
    img.src = "images/illustration-thank-you.svg"
    containerArea.appendChild(img)
    var optionArea = document.createElement("p")
    optionArea.innerText = `You selected ${selectedOpt} out of 5` 
    containerArea.appendChild(optionArea)
 
 }

