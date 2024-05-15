import { MyButton, MyComponent } from "react-library";
import "component-library/dist/components/my-button.js";
import "component-library/dist/components/my-component.js";

const App = () => {
  return (
    <>
      <MyButton color="success">
        <MyComponent first="Philip" middle="J" last="Fry" />
      </MyButton>
    </>
  );
};

export default App;
