import React from "react";
import "./App.css";
import { Button, Center, FlexCol } from "@fstr/components";

function App() {
  const [show, setShow] = React.useState(false);
  return (
    <div className='App'>
      <Center>
        <FlexCol>
          <Button text='from root' onClick={() => setShow(!show)} />
          {show && <span>Clicked</span>}
        </FlexCol>
      </Center>
    </div>
  );
}

export default App;
