import Button from "./Component/Button/index";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Button variant="primary" size="lg">
          Primary
        </Button>
        <Button variant="secondary" size="md">
          Secondary
        </Button>
        <Button variant="success" size="sm">
          Success
        </Button>
        <Button variant="info" size="xs">
          Info
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
