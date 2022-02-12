import React, { useState } from 'react';
import './headerBar.css';
import SendMessages from './sendMessages';


//This function controls the header image, text, and the username which is passed
//back up to the app();

function HeaderBar(props) {
    // check to see if user has any local data stored. If so, starts them as remembered
    var localName = "   ";
    var rememberMe = false;
    try {
        (localStorage.getItem('Name'))
        localName = localStorage.getItem('Name');
        props.sendName(localName);
        rememberMe = true;
    } catch (error) {
        console.error(error);
    }

    // useStats for setting and updating name
    const [nameText, setText] = useState(localName);
    const [editName, setEditName] = useState(rememberMe);

    // all of this is used to send the data up to App();
    function onKeyPress(keyPress) {
        if (keyPress.key === "Enter") {
            send();
        }
    }

    function send() {
        var user = nameText;
        props.sendName(user);
        setText("   ");
        setEditName(true);
    }

    function clickButton() {
        setEditName(false);
    }

    // Render a button if there is a name stored, or a text input if user wants to change it
    function nameButton(nameBool, name) {
        if (nameBool === false) {
            return (<input
                className="setName"
                type = "text"
                value = {name}
                onChange={(keyPress) => setText(keyPress.target.value)}
                onKeyPress={onKeyPress}
            />)
        } else {
            var username = localStorage.getItem('Name');
            return (
                <button className = "yourName" onClick={clickButton}>
                    { username }
                </button>
                );
        }
    }


    return (
        //Displays the entire header of the app.
        <header className="app-header">
            <div className="app-logo" />
            <span className="app-title">Chatter</span>
            { nameButton(editName, nameText) }
        </header>
    );
}
  export default (HeaderBar);