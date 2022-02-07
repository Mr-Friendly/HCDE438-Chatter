// You will need to install firefly-react to get this firefly effect to work!

import './App.css';
import HeaderBar from './headerBar';
import SendMessages from './sendMessages';


import Firefly from "firefly-react";
import React, { useState } from "react";


function App () {
  //Constructs the header and message screen (+ text input) respectively


  // get the font size to help reshape the firefly canvas as necessary
  var style = window.getComputedStyle(document.body);
  var fontSize = parseInt(style.getPropertyValue('font-size'));

  // useState variables for tracking canvas height, used for the firefly effect.
  const [canvasHeight, setCanvasHeight] = useState((window.innerHeight) - (8*fontSize));
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [name, setName] = useState("");

  // Used to update the username in local storage
  var user = (text) => {
    localStorage.setItem('Name', text)
  }

  //Updates the local name so it can be passed around.
  function updateName(text) {
    setName(text);
    user(text);
  }

  // Adds an eventListener to track when the window is resized, which will then update the
  // canvas height based on the new window size.
  window.addEventListener(
    "resize",
    (e) => {
    setCanvasHeight((window.innerHeight) - (8*fontSize));
    setCanvasWidth(window.innerWidth);
    },
    false
  );

  // Adds the firefly canvas based on the window size (css has it styled 4rem higher off the bottom,
  // to allow the user to still click on the text input. If the input is resized, move the firefly
  // canvas higher.
  const fireflyComponent = (
    <Firefly
    canvasWidth={canvasWidth}
    canvasHeight={canvasHeight}
    className = 'firefly' />
  );

  // Returns everything in a single styled div so React can render it.
  const appSpace = (
      <div className = "App">
          <HeaderBar sendName = {updateName}/>
          { fireflyComponent }
          <SendMessages username = {name}/>
      </div>
    );

  return (
    appSpace
    );
}

export default App;
