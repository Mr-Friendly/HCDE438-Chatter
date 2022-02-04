import './messages.css';


function DispMessage(props) {

    function Sent(props) {
        // Other properties can be displayed here.
        return (

        <div className="sent">
            {props.text}
        </div>

        );
    }

    function Recieved(props) {
        // Other properties can be displayed here.
        return (

        <div className="recieved">
            {props.text}
        </div>

        );
    }

    return (
        ////Loops through the messagesList and displays from top to bottom
        <div className = "messages">
            {props.Messages.map((msg) => {
                return <Sent {...msg} />;
            })}

            {props.Messages.map((msg) => {
                return <Recieved {...msg} />;
            })}
        </div>
    )
}

export default DispMessage;