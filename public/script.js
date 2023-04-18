// const socket = io();

const login = document.querySelector(".login");
const chartroom = document.querySelector(".chatroom");
const username = document.getElementById("username");
const joinBtn = document.getElementById("join-btn");
const submitBtn = document.getElementById("submit-btn");
const message = document.getElementById("user-msg");
const messageContainer = document.querySelector(".message-conatiner");

joinBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(username.value.trim()!==''){
        login.style.display = "none";
        chartroom.style.display = "block";
        document.body.style.display = "block";
    }
});

submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const data = {
        username: username.value,
        message: message.value,
    };
    // socket.emit("chat message",data);
    addMessage(data, true);
});

// socket.on("chat message",(data)=>{
//     if(data.username!==username)
//         addMessage(data,false);
// });

function addMessage(data,flag){
    if(message.value.trim()!==''){
        let messageSent = document.createElement("div");
        let sender = document.createElement("p");
        let msgofSender = document.createElement("p");
        sender.textContent = data.username.trim() +"~";
        msgofSender.textContent = data.message.trim();
        message.value = '';
        if(flag){
            messageSent.classList.add("messages", "sent");
        }
        else{
            messageSent.classList.add("messages", "recieved");
        }
        sender.classList.add("msg-sender");
        msgofSender.classList.add("msg");
        messageSent.append(sender,msgofSender);
        messageContainer.appendChild(messageSent);
    }

}