import { Button } from '../UI/Button.js';

export class Header {
    constructor(props) {
        this.$el = document.createElement('div');
        this.$el.style.background = props.background;
        this.$el.style.width = props.width;
        this.$el.style.height = props.height;

        const button = new Button(props.buttonText);
        this.buttonElement = button.getElement();

        this.$el.appendChild(this.buttonElement);

        const rootElement = document.querySelector(props.selector);
        if (rootElement) {
            rootElement.appendChild(this.$el);
        } else {
            throw new Error(`Element with selector ${props.selector} not found`);
        }
    }
}
