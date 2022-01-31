import './sendMessages.css';
import React, { useState } from "react";
import DispMessage from './messages';

function SendMessages() {
    const [messagesList, setMessagesList] = useState([]);

    function addMessage(text) {
        const newMessage = {
            text,
            time: Date.now(),
            user: "You",
        };
        setMessagesList(newMessage, ...messagesList);
    }

    const [messageText, setText] = useState("");

    function send(props) {
        addMessage("test");
      }

    function onKeyPress(keyPress) {
        if (keyPress.key === "Enter") {
          send();
        }
      }
      const messageDisplay = DispMessage(messagesList);

      return (
        <>
            { messageDisplay }
            <footer className="app-footer">
                <input
                    className="text-input"
                    type = "text"
                    value = {messageText}
                    onChange={(keyPress) => setText(keyPress.target.value)}
                    onKeyPress={onKeyPress}
                />

                <button className="send-button" onClick = {send}>&#x21E7;</button>
            </footer>
        </>
    );
}

export default SendMessages;

