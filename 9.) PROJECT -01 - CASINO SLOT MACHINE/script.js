    let value1 = document.getElementById('value1')
    let value2 = document.getElementById('value2')
    let value3 = document.getElementById('value3')

values = ['🤑','😂', '😃', '😎', '😍', '🤑', '😭', '😢', '🤑']

function getRandomValue (){
    return values[Math.floor(Math.random()*3)]
}


let startBtn = document.getElementById('startBtn')

startBtn.onclick = function(){
    
    value1.style.animationPlayState = "running";
    value2.style.animationPlayState = "running";
    value3.style.animationPlayState = "running";

    let count = 0;
    let myVar = setInterval(() => {

        count += 1;
        if(count === 30){
            clearInterval(myVar)
            window.setTimeout(function(){
                if(value1.innerText == value2.innerText && value1.innerText == value3.innerText)
                {
                    // window.setTimeout(alert, 1100, "YOU WIN !")
                    window.setTimeout(function(){
                    alert("YOU WIN !")
                    document.location.reload()
                    },300)
                }
                
                else{
                
                    // window.setTimeout(alert, 1100, "YOU LOOSE😥")
                    window.setTimeout(function(){
                    alert("YOU LOOSE😥")
                    document.location.reload()
                    },300)
                }
            },200)
        }

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
        
    },100)
    
}






        





