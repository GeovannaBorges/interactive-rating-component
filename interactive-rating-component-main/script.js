var backgroundColor = "" // É necessário inicializar as variáveis
var color = "" // É necessário inicializar as variáveis
var opt = 0  // É necessário inicializar as variáveis
var button = ""

/*
    Se lembre sempre inicializar as variaveis em javascript,
    elas devem ser inicializadas respeitando a tipagem, ou seja,
    se a variavel é pra receber uma string, você inicializa com '' ou "".
    se for um numero inicializa com 0 ou o valor inicial que deseja que ela tenha.
*/


function GetOption(option) {

   switch (option) {

    case 1:
        opt = 1
        element = document.getElementById("I")
        element.style.color = "white"
        element.style.backgroundColor = "hsl(25, 97%, 53%)"
        
        element2 = document.getElementById("II")
        element2.style.color = "hsl(217, 12%, 63%)"
        element2.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element3 = document.getElementById("III")
        element3.style.color = "hsl(217, 12%, 63%)"
        element3.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element4 = document.getElementById("IV")
        element4.style.color = "hsl(217, 12%, 63%)"
        element4.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element5 = document.getElementById("V")
        element5.style.color = "hsl(217, 12%, 63%)"
        element5.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"

        break 

        case 2:
        opt = 2
        element2 = document.getElementById("II")
        element2.style.color = "white"
        element2.style.backgroundColor = "hsl(25, 97%, 53%)"
        
        element = document.getElementById("I")
        element.style.color = "hsl(217, 12%, 63%)"
        element.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element3 = document.getElementById("III")
        element3.style.color = "hsl(217, 12%, 63%)"
        element3.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element4 = document.getElementById("IV")
        element4.style.color = "hsl(217, 12%, 63%)"
        element4.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element5 = document.getElementById("V")
        element5.style.color = "hsl(217, 12%, 63%)"
        element5.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        break

        case 3:
        opt = 3
        element3 = document.getElementById("III")
        element3.style.color = "white"
        element3.style.backgroundColor = "hsl(25, 97%, 53%)"
        
        element2 = document.getElementById("II")
        element2.style.color = "hsl(217, 12%, 63%)"
        element2.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element = document.getElementById("I")
        element.style.color = "hsl(217, 12%, 63%)"
        element.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element4 = document.getElementById("IV")
        element4.style.color = "hsl(217, 12%, 63%)"
        element4.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element5 = document.getElementById("V")
        element5.style.color = "hsl(217, 12%, 63%)"
        element5.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        break

        case 4:
        opt = 4 
        element4 = document.getElementById("IV")
        element4.style.color = "white"
        element4.style.backgroundColor = "hsl(25, 97%, 53%)"
        
        element2 = document.getElementById("II")
        element2.style.color = "hsl(217, 12%, 63%)"
        element2.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element3 = document.getElementById("III")
        element3.style.color = "hsl(217, 12%, 63%)"
        element3.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element = document.getElementById("I")
        element.style.color = "hsl(217, 12%, 63%)"
        element.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element5 = document.getElementById("V")
        element5.style.color = "hsl(217, 12%, 63%)"
        element5.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        break

        case 5:
        opt = 5
        element5 = document.getElementById("V")
        element5.style.color = "white"
        element5.style.backgroundColor = "hsl(25, 97%, 53%)"
        
        element2 = document.getElementById("II")
        element2.style.color = "hsl(217, 12%, 63%)"
        element2.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element3 = document.getElementById("III")
        element3.style.color = "hsl(217, 12%, 63%)"
        element3.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element4 = document.getElementById("IV")
        element4.style.color = "hsl(217, 12%, 63%)"
        element4.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
        
        element = document.getElementById("I")
        element.style.color = "hsl(217, 12%, 63%)"
        element.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
       
        break
    } 

    return opt
    

}

   
    


// var selectedOpt = GetOption() <-- essa função não é necessária!

function SubmitResult() {

    var containerArea =  document.getElementById("container") 
    containerArea.innerText = ""
    containerArea.style.padding = "4rem"
    containerArea.style.display = "flex"
    containerArea.style.alignItems = "center"
    containerArea.style.justifyContent = "center"
    containerArea.style.flexDirection = "column"
    
    
    var img = document.createElement("img")

    // img style
    img.style.marginBottom = "1.8rem"
    img.style.alignSelf
    img.src = "images/illustration-thank-you.svg"
    containerArea.appendChild(img)

    var optionArea = document.createElement("p")

    // optionArea style 
    optionArea.style.color = "hsl(25, 97%, 53%)"
    optionArea.style.marginBottom = "1.8rem"
    optionArea.style.backgroundColor = "hsl(217, 12%, 63%, 0.110)"
    optionArea.style.padding = "6px"
    optionArea.style.borderRadius = "20px"
    optionArea.style.width = "250px"
    optionArea.style.textAlign = "center"
    optionArea.style.fontSize = "15px"

    optionArea.innerText = `You selected ${opt} out of 5` 
    containerArea.appendChild(optionArea)
    var thanks = document.createElement("p")

    //thanks style
    thanks.style.color = "white"
    thanks.style.fontSize = "25px"
    thanks.style.marginBottom = "15px"

    thanks.innerText = "Thank you!"
    containerArea.appendChild(thanks)

    var txt = document.createElement("p")

    //txt style
    txt.style.fontSize = "16.5px"
    txt.style.textAlign = "center"
    txt.style.color = "hsl(217, 12%, 63%)"
    txt.innerText = "We apreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"
    containerArea.appendChild(txt)
 
 }

