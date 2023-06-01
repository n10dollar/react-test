import Button from "./components/Button";
import {useState} from "react";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form";

interface props {
    id: number,
    reference: {
        idRef: number,
        relationship: string
    }
}


function App() {
    return (
        <>
            <Form />
        </>
    )

    // return (
    //     <div>
    //         <ExpandableText maxChars={10}>
    //             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero justo, pharetra at neque nec, tristique interdum quam. Praesent orci nisi, rhoncus ac eros quis, elementum consequat nisl. Duis posuere dui sit amet nisi efficitur molestie. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam nunc augue, venenatis vel interdum ut, ultricies ac purus. Aenean varius rutrum turpis at mattis. Nullam at neque nec velit vehicula sollicitudin. Pellentesque laoreet fringilla sapien vulputate luctus. Ut at lectus urna. Aliquam aliquet, arcu congue sagittis elementum, massa massa suscipit odio, sed eleifend mi ipsum at risus. Nullam nulla justo, pulvinar id venenatis sed, sodales eget sem.
    //         </ExpandableText>
    //     </div>
    // )

    // const [game, setGame] = useState({
    //     id: 1,
    //     player: {
    //         name: "John"
    //     }
    // });
    //
    // const handleClick = () => {
    //     setGame({...game, player: { ...game.player, name: "Bob"}})
    // }

    // const [pizza, setPizza] = useState({
    //     name: "Onion Pepperoni",
    //     toppings: ["Onion"]
    // })
    //
    // const handleClick = () => {
    //     setPizza( {...pizza, toppings: [...pizza.toppings, "Pepperoni"]})
    // }

    // const [cart, setCart] = useState({
    //     discount: .1,
    //     items: [
    //         { id: 1, product: "Product 1", quantity: 1},
    //         { id: 2, product: "Product 2", quantity: 1}
    //     ]
    // })
    //
    // const handleClick = () => {
    //     setCart({...cart, items:
    //         cart.items.map(item => item.id === 1 ? {...item, quantity: 2} : item)})
    // }

}

export default App;