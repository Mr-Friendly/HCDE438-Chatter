// You will need to install firefly-react to get this firefly effect to work!

import './App.css';
import headerBar from './headerBar';
import sendMessages from './sendMessages';
import dispMessage from './messages';

import Firefly from "firefly-react";
import { useState } from "react";


function App() {
  const header = headerBar();
  const footer = sendMessages();
  const messages = dispMessage();

  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);

  window.addEventListener(
    "resize",
    (e) => {
    setCanvasHeight(window.innerHeight);
    setCanvasWidth(window.innerWidth);
    },
    false
  );

  const fireflyComponent = (
    <Firefly
    canvasWidth={canvasWidth}
    canvasHeight={canvasHeight}
    className = 'firefly' />
  );


  const appSpace = (
      <div className = "App">
          { header }
          { fireflyComponent }
          { messages }
          { footer }
      </div>
    );

  return (
    appSpace
    );
  }

export default App;
