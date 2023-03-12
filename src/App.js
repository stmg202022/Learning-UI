import Button from "./Component/Button/index";

function App() {
  return (
    <div className="App">
      <Button
        variant="success"
        onClick={() => console.log("Success Button Click")}
      >
        Success Button
      </Button>
      <Button
        variant="danger"
        onClick={() => console.log(" Danger Button Click")}
      >
        Danger button
      </Button>
      <Button
        variant="primary"
        onClick={() => console.log(" Primary Button Click")}
      >
        Primary Button
      </Button>
      <Button
        variant="warning"
        onClick={() => console.log(" Warning Button Click")}
      >
        Warning Button
      </Button>
      <Button variant="Info" onClick={() => console.log(" Info Button Click")}>
        Info Button
      </Button>
      <Button variant="light" onClick={() => console.log("Light Button Click")}>
        Light Button
      </Button>
      <Button variant="dark" onClick={() => console.log(" Dark Button Click")}>
        Dark Button
      </Button>
    </div>
  );
}

export default App;
