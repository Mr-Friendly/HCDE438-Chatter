import './messages.css';


function DispMessage(props) {

    function Message(props) {
        let outMess = <div />
        // Other properties can be displayed here.
        if (props.user === "You") {
            outMess = (
                <div className="sent">
                    <p className = 'senText'> {props.text} </p>
                    <p className = 'mainuser'> {props.user} </p>
                </div>
            );
        } else {
            outMess = (
                <div className="recieved">
                    <p className = 'recText'> {props.text} </p>
                    <p className = 'otheruser'> {props.user} </p>
                </div>
            );
        }

        return (
            <div className = "messageBar">
                { outMess }
            </div>
        );
    }

    return (
        ////Loops through the messagesList and displays from top to bottom
        <div className = "messageScreen">
            {props.Messages.map((msg) => {
                return <Message {...msg} />;
            })}
        </div>
    )
}

export default DispMessage;