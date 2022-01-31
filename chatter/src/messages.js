import './messages.css';

function Message(msg) {
    // add the date
    // add the username
    // add a pic
    return <div className="message">{msg}</div>;
}

function DispMessage(messageArr) {
    return (
        <div className = "messages">
            {
                messageArr.map((msg) => {
                    return(<Message {...msg}/>)
                })
            }
        </div>
    )
}

export default DispMessage;