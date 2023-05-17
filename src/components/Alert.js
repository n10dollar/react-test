import {ReactNode} from "react";


interface PropsChild {
    children: ReactNode;
}

const Alert = (children : PropsChild) => {
    return (
        <div className="alert alert-primary">{children.children}</div>
    )
}

const html = <h1>header</h1>;

export default Alert;