import { MyButton, MyComponent } from "react-library";

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
