import { Button, HStack } from "@chakra-ui/react";
import { ColorModeButton, ColorModeIcon } from "./components/ui/color-mode";

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <HStack>
      <Button variant="plain" >Click me</Button>
      <Button variant="surface" >Click me</Button>
    </HStack>
    </>
  );
}

export default App;
