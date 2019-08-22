let messages = [
  {
    uid: "khuatthanhnam@gmail.com",
    message: "Tình là trò chơi ân ái sao nghe trái ngang",
    time: "5pm Sat"
  },
  {
    uid: "khuatson71@gmail.com",
    message:
      "We've all experienced that moment of accidentally sending a text message we wish we could take back. Many of us have probably even received text messages that weren't ever meant for us.",
    time: "10pm Sat"
  }
];

const listSubscriber = [];

function subscribe(screen) {
  listSubscriber.push(screen);
}

function unSubscribe() {}

function notifyMessage(message, time) {
  for (let i = 0; i < listSubscriber.length; i++) {
    listSubscriber[i].onNotifyMessage(message, time);
  }
}

function addMessage(message, time) {
  messages.push(message, time);
  notifyMessage(message, time);
  saveMessage(message,time)
}

function saveMessage() {
  // Add a new document in collection "messages"
  db.collection("messages")
    .doc()
    .update({
     uid : massages.uid,
     message: messages.message,
     time: messages.time
    })
    .then(function() {
      console.log("Document successfully written!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
}

export { addMessage, subscribe };
export default messages;
