import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const Input = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.myInput = createEvent(this, "myInput", 7);
    this.myChange = createEvent(this, "myChange", 7);
    this.myBlur = createEvent(this, "myBlur", 7);
    this.myFocus = createEvent(this, "myFocus", 7);
    this.inputId = `my-input-${inputIds++}`;
    this.didBlurAfterEdit = false;
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.myInput.emit(ev);
    };
    this.onBlur = () => {
      this.hasFocus = false;
      this.focusChanged();
      this.myBlur.emit();
    };
    this.onFocus = () => {
      this.hasFocus = true;
      this.focusChanged();
      this.myFocus.emit();
    };
    this.onKeydown = (ev) => {
      if (this.shouldClearOnEdit()) {
        // Did the input value change after it was blurred and edited?
        // Do not clear if user is hitting Enter to submit form
        if (this.didBlurAfterEdit && this.hasValue() && ev.key !== 'Enter') {
          // Clear the input
          this.clearTextInput();
        }
        // Reset the flag
        this.didBlurAfterEdit = false;
      }
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
      this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */
      if (this.nativeInput) {
        this.nativeInput.value = '';
      }
    };
    this.hasFocus = false;
    this.color = undefined;
    this.accept = undefined;
    this.autocapitalize = 'off';
    this.autocomplete = 'off';
    this.autocorrect = 'off';
    this.autofocus = false;
    this.clearInput = false;
    this.clearOnEdit = undefined;
    this.disabled = false;
    this.enterkeyhint = undefined;
    this.inputmode = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.multiple = undefined;
    this.name = this.inputId;
    this.pattern = undefined;
    this.placeholder = undefined;
    this.readonly = false;
    this.required = false;
    this.spellcheck = false;
    this.step = undefined;
    this.size = undefined;
    this.type = 'text';
    this.value = '';
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    this.myChange.emit({ value: this.value == null ? this.value : this.value.toString() });
  }
  componentWillLoad() {
    // If the my-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // my-input to avoid causing tabbing twice on the same element
    if (this.el.hasAttribute('tabindex')) {
      const tabindex = this.el.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.el.removeAttribute('tabindex');
    }
  }
  /**
   * Sets focus on the specified `my-input`. Use this method instead of the global
   * `input.focus()`.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  shouldClearOnEdit() {
    const { type, clearOnEdit } = this;
    return clearOnEdit === undefined ? type === 'password' : clearOnEdit;
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }
  focusChanged() {
    // If clearOnEdit is enabled and the input blurred but has a value, set a flag
    if (!this.hasFocus && this.shouldClearOnEdit() && this.hasValue()) {
      this.didBlurAfterEdit = true;
    }
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  render() {
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: {
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
      } }, h("input", { class: "native-input", ref: (input) => (this.nativeInput = input), "aria-labelledby": labelId, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck ? 'true' : undefined, step: this.step, size: this.size, tabindex: this.tabindex, type: this.type, value: value, onInput: this.onInput, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }), this.clearInput && !this.readonly && !this.disabled && (h("button", { type: "button", class: "input-clear-icon", tabindex: "-1", onTouchStart: this.clearTextInput, onMouseDown: this.clearTextInput }))));
  }
  get el() { return this; }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
}, [2, "my-input", {
    "color": [1],
    "accept": [1],
    "autocapitalize": [1],
    "autocomplete": [1],
    "autocorrect": [1],
    "autofocus": [4],
    "clearInput": [4, "clear-input"],
    "clearOnEdit": [4, "clear-on-edit"],
    "disabled": [4],
    "enterkeyhint": [1],
    "inputmode": [1],
    "max": [1],
    "maxlength": [2],
    "min": [1],
    "minlength": [2],
    "multiple": [4],
    "name": [1],
    "pattern": [1],
    "placeholder": [1],
    "readonly": [4],
    "required": [4],
    "spellcheck": [4],
    "step": [1],
    "size": [2],
    "type": [1],
    "value": [1032],
    "hasFocus": [32],
    "setFocus": [64],
    "getInputElement": [64]
  }]);
let inputIds = 0;
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["my-input"];
  components.forEach(tagName => { switch (tagName) {
    case "my-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Input);
      }
      break;
  } });
}

const MyInput = Input;
const defineCustomElement = defineCustomElement$1;

export { MyInput, defineCustomElement };
