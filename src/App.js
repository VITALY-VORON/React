import { appConfig } from "./App.config.js";
import { Box1 } from "./components/Box1/Box1.js";
import { box1Config } from "./components/Box1/box1.config.js";
import { Header } from "./components/Header/Header.js";
import { headerConfig } from "./components/Header/header.config.js";
import { applyStyles } from "./utils/applyStyles.js";

export class App {
    constructor({ selector, styles, headerConfig, box1Config }) {
        this.rootElement = document.querySelector(selector);

        if (!this.rootElement) {
            throw new Error(`Element with selector ${selector} not found`);
        }

        applyStyles(this.rootElement, styles);
        this.render(headerConfig, box1Config);
    }

    render(headerConfig, box1Config) {
        new Header({
            selector: '#root',
            ...headerConfig
        });

        new Box1({
            selector: '#root',
            ...box1Config
        });
    }
}

export const app = new App({
    selector: appConfig.selector,
    styles: appConfig.styles,
    headerConfig: {
        ...headerConfig
    },
    box1Config: {
        ...box1Config
    }
});
