import {addMessage} from "../Models/message.js"
import { authedUser } from "../Models/user.js";

function newChatController() {
  const chatController = {};

  chatController.sendMessage = (msg,time) =>{
    addMessage({uid: authedUser.id, message: msg, time:time});
  }
  return chatController;
}

export default newChatController;