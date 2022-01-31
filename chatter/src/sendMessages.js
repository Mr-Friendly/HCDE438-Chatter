import './sendMessages.css';
import React, { useState } from "react";
import DispMessage from './messages';

//Takes text input AND displays them using DispMessage
const SendMessages = () => {
    // Creates a useState array to store messages.
    const [messagesList, setMessagesList] = useState([]);

    // Creates a useState string to store our user input.
    const [messageText, setText] = useState("");

    // Creates a newMessage object containing text, time, and the user and
    // appends it to the messagesList.
    function addMessage(text) {
        const newMessage = {
            text,
            time: Date.now(),
            user: "You",
        };
        setMessagesList([newMessage, ...messagesList]);
    }

    // Calls addMessage with messageTExt and clears the input.
    function send() {
        addMessage(messageText);
        setText("");
    }

    // Calls send when Enter is pressed.
    function onKeyPress(keyPress) {
        if (keyPress.key === "Enter") {
        send();
        }
    }

    return (
        <>
            <DispMessage Messages = { messagesList }></DispMessage>
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
    )
}

export default SendMessages;

