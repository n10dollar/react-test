import {useState} from "react";

interface Props {
    cities: string[];
    heading: string;
}

function ListGroup({cities, heading} : Props) {


    // cities = [];
    // let selectedIndex = 0;
    const [selectedIndex, setSelectedIndex] = useState(-1);

    // return (
    //     <ul className="list-group">
    //         <li className="list-group-item">An item</li>
    //         <li className="list-group-item">A second item</li>
    //         <li className="list-group-item">A third item</li>
    //         <li className="list-group-item">A fourth item</li>
    //         <li className="list-group-item">And a fifth one</li>
    //     </ul>
    // );

    const handleClick = event => (
        console.log(event)
        // selectedIndex = cli
    );

    return (
        <>
            <h1 className="h1">{heading}</h1>
            {cities.length === 0 ? <p>No Cities Found</p> : null}
            <ul className="list-group">
                {cities.map((city, index) =>
                    <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                    onClick={() => setSelectedIndex(index)}>
                        {city}
                    </li>)}
            </ul>
        </>
    );
}

export default ListGroup;