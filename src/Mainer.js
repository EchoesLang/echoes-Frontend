import App2 from "./App2";
import App from "./App";

function Mainer() {
    if (window.location.host.split(".")[0] === "test") {
        return (<App2></App2>)
    } else {
        return (<App></App>)
    }
}

export default Mainer;