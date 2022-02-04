import React from 'react';
import './headerBar.css';

function HeaderBar() {
    return (
        //Displays the entire header of the app.
        <header className="app-header">
            <div className="app-logo" />
            <span className="app-title">Chatter</span>
        </header>
    );
}
  export default HeaderBar;