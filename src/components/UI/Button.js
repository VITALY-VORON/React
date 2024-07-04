export class Button {
    constructor(text) {
        this.button = document.createElement('button');
        this.button.textContent = text || 'Click me';
        this.button.style.margin = '10px';
    }

    getElement() {
        return this.button;
    }
}
