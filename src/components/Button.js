import {ReactNode} from "react";

interface Props {
    buttonType?: string;
    children: ReactNode;
    onClick?: () => void;
}
function Button({buttonType = "btn-primary", children, onClick = (() => console.log("Clicked"))}: Props) {
    // console.log("btn" + " " + buttonType);

    return (
        <div className={"alert alert-warning alert-dismissible"} role={"alert"}>
            <strong>Alert that will be dismissed!</strong>
            <button
                className={"btn" + " " + buttonType}
                data-bs-dismiss={"alert"}
                onClick={onClick}>
                {children}
            </button>
        </div>
    );
}

export default Button;