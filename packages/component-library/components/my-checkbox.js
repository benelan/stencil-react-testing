import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { f as findItemLabel, r as renderHiddenInput } from './helpers2.js';

const Checkbox = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.myChange = createEvent(this, "myChange", 7);
    this.myFocus = createEvent(this, "myFocus", 7);
    this.myBlur = createEvent(this, "myBlur", 7);
    this.myStyle = createEvent(this, "myStyle", 7);
    this.inputId = `my-cb-${checkboxIds++}`;
    this.onClick = () => {
      this.setFocus();
      this.checked = !this.checked;
      this.indeterminate = false;
    };
    this.onFocus = () => {
      this.myFocus.emit();
    };
    this.onBlur = () => {
      this.myBlur.emit();
    };
    this.color = undefined;
    this.name = this.inputId;
    this.checked = false;
    this.indeterminate = false;
    this.disabled = false;
    this.value = 'on';
  }
  componentWillLoad() {
    this.emitStyle();
  }
  checkedChanged(isChecked) {
    this.myChange.emit({
      checked: isChecked,
      value: this.value,
    });
    this.emitStyle();
  }
  disabledChanged() {
    this.emitStyle();
  }
  emitStyle() {
    this.myStyle.emit({
      'checkbox-checked': this.checked,
      'interactive-disabled': this.disabled,
    });
  }
  setFocus() {
    if (this.buttonEl) {
      this.buttonEl.focus();
    }
  }
  render() {
    const { inputId, indeterminate, disabled, checked, value, el } = this;
    const labelId = inputId + '-lbl';
    const label = findItemLabel(el);
    if (label) {
      label.id = labelId;
    }
    renderHiddenInput(true, el, this.name, checked ? value : '', disabled);
    let path = indeterminate ? (h("path", { d: "M6 12L18 12", part: "mark" })) : (h("path", { d: "M5.9,12.5l3.8,3.8l8.8-8.8", part: "mark" }));
    return (h(Host, { onClick: this.onClick, role: "checkbox", "aria-disabled": disabled ? 'true' : null, "aria-checked": `${checked}`, "aria-labelledby": labelId, class: {
        'checkbox-checked': checked,
        'checkbox-disabled': disabled,
        'checkbox-indeterminate': indeterminate,
        interactive: true,
      } }, h("svg", { class: "checkbox-icon", viewBox: "0 0 24 24", part: "container" }, path), h("button", { type: "button", onFocus: this.onFocus, onBlur: this.onBlur, disabled: this.disabled, ref: (btnEl) => (this.buttonEl = btnEl) })));
  }
  get el() { return this; }
  static get watchers() { return {
    "checked": ["checkedChanged"],
    "disabled": ["disabledChanged"]
  }; }
}, [1, "my-checkbox", {
    "color": [1],
    "name": [1],
    "checked": [1028],
    "indeterminate": [1028],
    "disabled": [4],
    "value": [1]
  }]);
let checkboxIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-checkbox"];
  components.forEach(tagName => { switch (tagName) {
    case "my-checkbox":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Checkbox);
      }
      break;
  } });
}

const MyCheckbox = Checkbox;
const defineCustomElement = defineCustomElement$1;

export { MyCheckbox, defineCustomElement };
