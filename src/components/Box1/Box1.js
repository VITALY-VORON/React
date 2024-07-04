export class Box1 {
    constructor(props) {
        this.$el = document.createElement('div');
        this.$el.style.background = props.background;
        this.$el.style.width = props.width;
        this.$el.style.height = props.height;

        const rootElement = document.querySelector(props.selector);
        if (rootElement) {
            rootElement.appendChild(this.$el);
        } else {
            throw new Error(`Element with selector ${props.selector} not found`);
        }
    }
}
