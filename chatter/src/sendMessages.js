import './sendMessages.css';
import React, { useState, useRef, useEffect }  from "react";
import DispMessage from './messages';
import { FiSend, FiCamera } from 'react-icons/fi';
import Camera from 'react-snap-pic';
import {useDB, db} from './db';

//Takes text input AND displays them using DispMessage
const SendMessages = (props) => {


    //Tells Camera whether to be on or off.
    const [showCamera, setShowCamera] = useState(false)

    // Creates a useState array to store messages.
    //const [messagesList, setMessagesList] = useState([]);
    const messagesList = useDB();

    // Creates a useState string to store our user input.
    const [messageText, setText] = useState("           ");

    // Creates a newMessage object containing text, time, and the user and
    // appends it to the messagesList.
    // now with username support!
    // Now uses Firestore to store and work with data, instead of storing messages
    // locally.
    function addMessage(text) {
        if (!text.trim()) return;
        const newMessage = {
            text,
            time: Date(Date.now()),
            user: props.username,
        };
        db.send(newMessage);
    }

    // Calls addMessage with messageTExt and clears the input.
    function send() {
        addMessage(messageText);
        setText("           ");
    }

    // Calls send when Enter is pressed.
    function onKeyPress(keyPress) {
        if (keyPress.key === "Enter") {
        send();
        }
    }

    function takeMyPicture(img) {
        console.log(img)
        setShowCamera(false)
    }
    return (
        <>
            <DispMessage messages = { messagesList } localuser = {props.username}></DispMessage>
            {showCamera && <Camera takePicture={takeMyPicture} />}

            <footer className="app-footer">
                <input
                    className="text-input"
                    type = "text"
                    value = {messageText}
                    onChange={(keyPress) => setText(keyPress.target.value)}
                    onKeyPress={onKeyPress}
                />
                <button className="send-button" onClick = {send}>&#x21E7;</button>
                <button onClick={()=>setShowCamera(true)} className="camera-button">
                    <FiCamera style={{height:15, width:15}} />
                </button>
            </footer>
        </>
    )
}

export default (SendMessages);

