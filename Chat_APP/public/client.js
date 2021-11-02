
const socket = io('http://192.168.43.224:3001')

const messageInput = document.getElementById('messageInp')
const messageContainer = document.getElementById('msgArea')
const btnSubmit = document.getElementById('btnSubmit')
const header = document.getElementById('header')
const attachBtn = document.getElementById('attachBtn')
const username = document.getElementById('username').innerHTML
const userEmail = document.getElementById('userEmail').innerHTML
const picBtn = document.getElementById('picBtn')
const room1Btn = document.getElementById('Room1')
const room2Btn = document.getElementById('Room2')
const roomName = document.getElementById('roomName')


const append = (message, position)=>{

    const box = document.createElement('div')
    box.classList.add("d-flex","flex-wrap", position)
    if(position == 'middle'){
        box.classList.add("col-10", "justify-content-center")
        box.style.marginBottom = "0.55%";
    }
    else{
        if(position == 'left'){
            box.classList.add("col-9", "justify-content-start")
            messageContainer.style.paddingLeft = "0px"
            box.style.paddingLeft = "0.55%"
        }
        else{
            box.classList.add("col-9", "justify-content-end")
            messageContainer.style.paddingRight = "0px"
            box.style.paddingRight = "0.55%"
        }
    }


    const messageElement = document.createElement('div')
    messageElement.innerHTML = message
    messageElement.classList.add("msg-content")


    const footer = document.createElement('div')
    footer.classList.add("d-flex", "justify-content-end")
    var d = new Date();
    d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
    footer.innerHTML = `<b><em>${d}</em></b>`
    if(position != 'middle')
        messageElement.appendChild(footer)

    box.appendChild(messageElement)
    messageContainer.appendChild(box)

    var xH = messageContainer.scrollHeight; 
    messageContainer.scrollTo(0, xH);

}


btnSubmit.onclick = function(){
    console.log("clicked")
    let message = messageInput.value;
    if(message != ''){
        append(`<b><i>You</i></b><br> ${message}`, 'right')
        const room_and_message = {
            message,
            room: roomName.innerText,
            userEmail: userEmail,
            username:username
        }
        socket.emit('sendToRoom', room_and_message)
        messageInput.value = ''
    }
}


socket.on("render-old-msgs", messages=>{
    messages.forEach(function(msg){
        if(msg.userEmail === userEmail)
            append(`<b><i>You</i></b><br> ${msg.message}`, 'right')
        else
            append(`<b><i>${msg.username}</i></b><br> ${msg.message}`, 'left')
    })
})

const userObj = {username:username,userEmail:userEmail}

socket.emit('new-user-joined', userObj);

// messageInput.onkeypress = function(){
//     console.log("typing")
//     var xH = messageContainer.scrollHeight; 
//     messageContainer.scrollTo(0, xH);

// }


socket.on('user-joined', name=>{
    append(`<b>${name}</b> joined the chat`,'middle')
})

socket.on('receive', data=>{
    append(`<b><i>${data.naam}</i></b><br> ${data.msg} `,'left')
})
socket.on('receiveInRoom', ({msg,name,room})=>{
    if(room === roomName.innerText)
    append(`<b><i>${name}</i></b><br> ${msg} `,'left')
})


socket.on('receiveImage', data=>{
    receiveImage(data.msg)
})


socket.on('left', name=>{
    append(`<b>${name}</b> left the chat`, 'middle')
})



function chooseImage(){
    document.getElementById('imageFile').click()
}

function sendImage(event){

    var file = event.files[0]
    if(!file.type.match("image/*")){
        alert("File format not supported")
    }
    else{
        var reader = new FileReader();
        reader.addEventListener("load",function(){
        /////////////////////////////appending msg to dom/////////////////////////////////
            const box = document.createElement('div')
            box.style.height="80vh"
            box.classList.add("d-flex","flex-wrap","col", "justify-content-end")
       
            const messageElement = document.createElement('img')
            messageElement.src = reader.result
            messageElement.classList.add("msg-content")
            messageElement.style.maxHeight="100%"
            messageElement.style.maxWidth="100%"
        
            box.appendChild(messageElement)
            const footer = document.createElement('div')
            footer.classList.add("justify-content-end")
            var d = new Date();
            d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
            footer.innerHTML = `<b><em>${d}</em></b>`
            // messageElement.appendChild(footer)
        
            // box.append(footer)
            messageContainer.append(box)
        
            var xH = messageContainer.scrollHeight; 
            messageContainer.scrollTo(0, xH);
            socket.emit('sendImage', reader.result)
        /////////////////////////////////////////////////////////////////////////////////////////
        },false)
        

        if(file){
            reader.readAsDataURL(file)
        }
    }
}


function receiveImage(base64str){

            const box = document.createElement('div')
            box.style.height="80vh"
            box.classList.add("d-flex","flex-wrap","col", "justify-content-start")

            const messageElement = document.createElement('img')
            messageElement.src = base64str
            messageElement.classList.add("msg-content")
            messageElement.style.maxHeight="100%"
            messageElement.style.maxWidth="100%"
        
            box.appendChild(messageElement)
            const footer = document.createElement('div')
            footer.classList.add("justify-content-start")
            var d = new Date();
            d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
            footer.innerHTML = `<b><em>${d}</em></b>`
            // messageElement.appendChild(footer)
        
            // box.append(footer)
            messageContainer.append(box)
        
            var xH = messageContainer.scrollHeight; 
            messageContainer.scrollTo(0, xH);
}

///////////////////////////////////////////rooms functionality/////////////////////////////

room1Btn.onclick = function(){
    console.log("Room1 pressed")
    roomName.innerText = "Room1"
    messageContainer.innerHTML = ""
    socket.emit('joinEvent', "Room1")
}

room2Btn.onclick = function(){
    console.log("Room2 pressed")
    roomName.innerText = "Room2"
    messageContainer.innerHTML = ""
    socket.emit('joinEvent', "Room2")
}

console.log("user name = ",username);
console.log("user email = ",userEmail);