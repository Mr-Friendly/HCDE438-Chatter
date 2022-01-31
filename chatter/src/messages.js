import './messages.css';


function DispMessage(props) {

    function Message(props) {
        // Other properties can be displayed here.
        return (

        <div className="message">
            {props.text}
        </div>

        );
    }

    return (
        ////Loops through the messagesList and displays from top to bottom
        <div className = "messages">
            {props.Messages.map((msg) => {
                return <Message {...msg} />;
            })}
        </div>
    )
}

export default DispMessage;