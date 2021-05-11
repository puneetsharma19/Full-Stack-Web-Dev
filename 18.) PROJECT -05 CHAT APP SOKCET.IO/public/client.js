
const socket = io('http://192.168.43.224:3344')

const messageInput = document.getElementById('messageInp')
const messageContainer = document.getElementById('msgArea')
const btnSubmit = document.getElementById('btnSubmit')



// const append = (message, position)=>{
//     const messageElement = document.createElement('div')
//     const footer = document.createElement('div')
//     footer.classList.add("d-flex", "justify-content-end")
//     var d = new Date();
//     d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
//     footer.innerHTML = `<b><em>${d}</em></b>`

//     messageElement.innerHTML = message
//     messageElement.classList.add("message", position)
//     if(position === 'middle')
//         messageElement.classList.add("col-10")
//     else messageElement.classList.add("col-8")
//     if(position != 'middle')
//         messageElement.appendChild(footer)
//     messageContainer.append(messageElement)
    
//     var xH = messageContainer.scrollHeight; 
//     messageContainer.scrollTo(0, xH);

// }

const append = (message, position)=>{

    const box = document.createElement('div')
    box.classList.add("d-flex","flex-wrap", position)
    if(position == 'middle'){
        box.classList.add("col-10", "justify-content-center")
    }
    else{
        if(position == 'left')
            box.classList.add("col-8", "justify-content-start")
        else
            box.classList.add("col-8", "justify-content-end")
    }

    const messageElement = document.createElement('div')
    messageElement.innerHTML = message
    messageElement.classList.add("msg-content")
    box.appendChild(messageElement)
    messageContainer.append(box)

    var xH = messageContainer.scrollHeight; 
    messageContainer.scrollTo(0, xH);

}


btnSubmit.onclick = function(){
    console.log("clicked")
    let message = messageInput.value;
    if(message != null){
        append(`<b><i>You:</i></b> ${message}`, 'right')
        socket.emit('send', message)
        messageInput.value = ''
    }
}


let naam = prompt("Enter your name to join: ")
socket.emit('new-user-joined', naam);

socket.on('user-joined', name=>{
    append(`<b>${name}</b> joined the chat`,'middle')
})

socket.on('receive', data=>{
    append(`<b><i>${data.naam}:</i></b> ${data.msg} `,'left')
})

socket.on('left', name=>{
    append(`<b>${name}</b> left the chat`, 'middle')
})
