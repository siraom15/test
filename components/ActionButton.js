import { Button } from "react-bootstrap";
const ActionButton = (props) => {

    const sendProps = () => {
        props.callbackFunction(props);
    }

    return (
        <Button onClick={(e) => sendProps()} className={props?.cn + " p-1 rounded-90 border-0"} style={{ backgroundColor: "#C4C4C4" }}>
            <div className="text-white align-middle font-weight-bold">{props?.text}</div>
        </Button>
    )
}
export default ActionButton;