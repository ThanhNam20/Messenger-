import messages from "../../Models/message.js";
import { authedUser } from "../../Models/user.js";
import newChatController from "../../Controllers/chatController.js"
import {subscribe} from "../../Models/message.js"


const chatScreen = `
     <div class="container">
        <h3 class=" text-center">Chat Center</h3>
        <div class="messaging">
            <div class="inbox_msg">
                <div class="mesgs">
                    <div class="msg_history">
                        <div id="js-chatScreen"></div>
                    </div>
                    <form id="js-formChat" class="type_msg">
                        <div class="input_msg_write">
                            <input id="chatMsg" type="text" class="write_msg" placeholder="Type a message" />
                            <button type = "submit" class="msg_send_btn" type="button"><i class="far fa-paper-plane" area-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
 `;

function onload() {
  subscribe(chat);
  for (let i = 0; i < messages.length; i++) {
    addMessage(messages[i]);
  }

  const formChat = document.getElementById("js-formChat");
  formChat.addEventListener("submit",event => {
    event.preventDefault();
    const message = formChat.chatMsg.value;
    const time = dateFns.distanceInWordsToNow(new Date(),{addSuffix: true})
    const controller = newChatController();
    controller.sendMessage(message,time);
    formChat.reset()
  })
}

function addMessage(message,time) {
  const msgDiv = document.getElementById("js-chatScreen");
    if (message.uid === authedUser.id) {
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const p1 = document.createElement("p");
      const span1 = document.createElement("span");

      div1.setAttribute("class", "outgoing_msg");
      div2.setAttribute("class", "sent_msg");
      p1.innerHTML = message.message;
      span1.setAttribute("class", "time_date");
      span1.innerHTML = message.time;

      div2.appendChild(p1);
      div2.appendChild( span1);
      div1.appendChild(div2);
      msgDiv.appendChild(div1)
    }else{
      const div3 = document.createElement("div");
      const div4 = document.createElement("div");
      const div5 = document.createElement("div");
      const p2 = document.createElement("p");
      const span2 = document.createElement("span");

      div3.setAttribute("class", "incoming_msg");
      div4.setAttribute("class", "received_msg");
      div5.setAttribute("class", "received_withd_msg");
      p2.innerHTML = message.message;
      span2.setAttribute("class", "time_date");
      span2.innerHTML = message.time;

      div5.appendChild(p2);
      div5.appendChild(span2);
      div4.appendChild(div5);
      div3.appendChild(div4);
      msgDiv.appendChild(div3);
  }
   //lastMessage= message;
  return msgDiv;
}

function onNotifyMessage(message,time){
  addMessage(message,time);
}

const chat = {
  content: chatScreen,
  onload: onload,
  onNotifyMessage: onNotifyMessage
};

export default chat;
