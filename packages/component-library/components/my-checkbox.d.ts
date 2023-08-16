import type { Components, JSX } from "../dist/types/components";

interface MyCheckbox extends Components.MyCheckbox, HTMLElement {}
export const MyCheckbox: {
  prototype: MyCheckbox;
  new (): MyCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
