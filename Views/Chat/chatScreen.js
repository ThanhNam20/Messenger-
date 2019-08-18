import messages from "../../Models/message.js";
import { authedUser } from "../../Models/user.js";

const chatScreen = `

    <div class="messaging">
        <div class="inbox_msg">
            <div class="mesgs">
                <div class="msg_history">
                    <div id = "js-chatScreen"></div>
                </div>
                <div class="type_msg">
                    <div class="input_msg_write">
                        <input type="text" class="write_msg" placeholder="Type a message" />
                        <button class="msg_send_btn" type="button"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
 `;


function onload() {
  for( let i = 0 ; i < messages.length ; i ++) {
    addMessage(messages[i]);
  }
} 

function addMessage(message) {
  const msgDiv = document.createElement('div');
  msgDiv.setAttribute('class','mt-4 mb-4');
  if(message.uid === authedUser.id){
    msgDiv.classList.add('text-right');
  }
  for ( let i=0; i< message.message.length; i++){
    msgDiv.appendChild(
      addSingleMessage(message.message[i],message.uid === authedUser.id));
  }
  document.getElementById('js-chatScreen').appendChild(msgDiv);
}

function addSingleMessage(message,isOwn) {
  const msgDiv = document.createElement('div');
  msgDiv.setAttribute("class", "mb-2 mt-2");
  const msgSpan = document.createElement('span');

  if(isOwn){
    msgSpan.setAttribute(
      "class",
      " btn btn-primary received_withd_msg ahihi"
    );
  }else {
    msgSpan.setAttribute("class", " btn btn-secondary received_withd_msg ahihi");
  }
  msgSpan.innerHTML = message;
  msgDiv.appendChild(msgSpan);

  return msgDiv;
}

const chat = {
  content: chatScreen,
  onload: onload
};
export default chat;
