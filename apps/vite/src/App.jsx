import { MyButton, MyComponent } from "react-library";
import "component-library/dist/components/my-button.js";
import "component-library/dist/components/my-component.js";
import { CalciteIcon } from "@esri/calcite-components-react";
import "@esri/calcite-components/dist/components/calcite-icon.js";
import "@esri/calcite-components/dist/calcite/calcite.css";

const App = () => {
  return (
    <>
      <MyButton color="success">
        <CalciteIcon icon="banana" slot="start" />
        <MyComponent first="Philip" middle="J" last="Fry" />
      </MyButton>
    </>
  );
};

export default App;
