let value1 = document.getElementById('value1')
    let value2 = document.getElementById('value2')
    let value3 = document.getElementById('value3')

values = ['😂', '😃', '😎', '😍', '🤑', '🤑', '😭', '😢']

function getRandomValue (){
    return values[Math.floor(Math.random()*7)]
}


let startBtn = document.getElementById('startBtn')

startBtn.onclick = function(){
    
    value1.style.animationPlayState = "running";
    value2.style.animationPlayState = "running";
    value3.style.animationPlayState = "running";

    setInterval(() => {
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    },300)
        
}




