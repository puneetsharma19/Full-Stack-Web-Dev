window.onload = function(){
    
    let num = document.getElementById('inpbox')
    let todolist = document.getElementById('todolist')
    let btn = document.getElementById('btn')

    btn.onclick = function(){
        
        let N = parseInt(num.value)
        for(let i = 1; i<=N; i++){
            todolist.innerHTML += '<li>' + i + '</li>'
        }
        
    }
}