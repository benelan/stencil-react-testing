import { MyButton, MyComponent } from "component-library-react";

const HelloWorld = () => {
  return (
    <>
      <MyButton color="success">
        <MyComponent first="Philip" middle="J" last="Fry" />
      </MyButton>
    </>
  );
};

export default HelloWorld;
