import Message from "../components/Message";
import ListGroup from "../components/ListGroup/ListGroup";
import {Fragment} from "react";
import "../App.css";
import Alert from "../components/Alert";
import App from "../App";


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

function AppOld() {
    // const htmlCode = (
    //     <div>
    //         <Message />
    //         <ListGroup cities={cities} heading={"Cities Heading"}/>
    //     </div>
    // );
    // return htmlCode;

    const handleSelectItem = (item : string) => ( console.log(item) )

    return (
      <Fragment>
      <>
          <Message />
          <ListGroup cities={cities} heading={"Cities_Heading"} onSelectItem={handleSelectItem}/>
      </>
      </Fragment>
      //   <div>
      //       <Alert>
      //           Hello World :(
      //       </Alert>
      //   </div>
    );
}


export default AppOld;

