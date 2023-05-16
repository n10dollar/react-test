import Message from "./components/Message"
import ListGroup from "./components/ListGroup"
import {Fragment} from "react";


let cities = [
    "New York",
    "San Franscisco",
    "Los Angeles",
    "Miami"
];

let cities2 = [
    "Mumbai",
    "Chennai",
    "New Delhi",
    "Bangalore"
];

function App() {
    // const htmlCode = (
    //     <div>
    //         <Message />
    //         <ListGroup cities={cities} heading={"Cities Heading"}/>
    //     </div>
    // );
    // return htmlCode;
    return (
      // <Fragment>
      <>
          <Message />
          <ListGroup cities={cities} heading={"Cities_Heading"} />
      </>
      // </Fragment>
    );
}


export default App;

