window.onload = function (){

    let inp = document.getElementById('inpbox')
    let btn = document.getElementById('btn')
    let todolist = document.getElementById('todolist')

    btn.onclick = function (){

        let li = document.createElement('li')

        let task = document.createElement('span')
        task.innerText = inp.value

        let Xbtn = document.createElement('button')
        Xbtn.innerText = '✖'

        let UPbtn = document.createElement('button')
        UPbtn.innerText = '⬆'

        let DNbtn = document.createElement('button')
        DNbtn.innerText = '⬇'

        Xbtn.onclick = function(event){

            event.target.parentElement.remove()
        }

        UPbtn.onclick = function(event){

            // event.target.parentElement.parentElement -> todolist
            // Syntax : let insertedNode = parentNode.insertBefore(newNode, referenceNode)
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement, event.target.parentElement.previousElementSibling
            )
        }

        DNbtn.onclick = function(event){

            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling, event.target.parentElement
            )
        }

        //Alternate method for above scenario :
        // Xbtn.onclick = function (){

        //     Xbtn.parentElement.remove()

        // }

        li.appendChild(Xbtn)
        li.appendChild(UPbtn)
        li.appendChild(DNbtn)
        li.appendChild(task)
        todolist.appendChild(li)

    }
    
}

//NOTE : To open emoji keyboard, press windows symbol and then '.'