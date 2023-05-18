import Button from "./components/Button";

function App() {
    let buttonTypeParameter = "btn-primary";

    return (
        <Button buttonType={buttonTypeParameter}>
            Yooo, press meeee!
        </Button>
    )
}

export default App;