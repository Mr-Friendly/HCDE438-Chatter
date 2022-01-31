// You will need to install firefly-react to get this firefly effect to work!

import './App.css';
import HeaderBar from './headerBar';
import SendMessages from './sendMessages';


import Firefly from "firefly-react";
import { useState } from "react";


function App() {
  //Constructs the header and message screen (+ text input) respectively
  const header = HeaderBar();
  const messageInput = SendMessages();

  // useState variables for tracking canvas height, used for the firefly effect.
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

  // Adds an eventListener to track when the window is resized, which will then update the
  // canvas height based on the new window size.
  window.addEventListener(
    "resize",
    (e) => {
    setCanvasHeight(window.innerHeight);
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
          { header }
          { fireflyComponent }
          { messageInput }
      </div>
    );

  return (
    appSpace
    );
  }

export default App;
