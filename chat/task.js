const chat = document.getElementsByClassName('chat-widget')
const messages = document.querySelector( '.chat-widget__messages')
const container = document.getElementsByClassName('chat-widget__messages-container')
    
const widget= document.getElementsByClassName('chat-widget__area')
   const arrayMsg = Array.from(widget)

function open(event){
    chat[0].classList.add('chat-widget_active')    
}

chat[0].addEventListener('click', open)


function sendMsg(event){
   const input = document.getElementById('chat-widget__input')
   const text = input.value
   const newDate = new Date();
   const answer = ['не понял', 'решите сами', 'до свидания!', 'как дела?', 'странный Вы'];
    const random = Math.round(Math.random() * (answer.length - 1) )
    const answerChat = answer[random]

    console.log(random)
    console.log (answerChat)
   if (event.keyCode === 13) {
       messages.innerHTML += 
           `<div class="message message_client">
                <div class="message__time">${newDate.getHours()}:${newDate.getMinutes()}</div>
                <div class="message__text">${text}</div>
            </div>
       <div class="message">
                <div class="message__time">${newDate.getHours()}:${newDate.getMinutes()}</div>
                <div class="message__text">${answerChat}</div>
            </div>`
       console.log(messages.innerHTML)
       input.value = ''
    }    
}
 
    widget[0].addEventListener('keydown', sendMsg)
    


           
