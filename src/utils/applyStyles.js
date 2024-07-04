export const applyStyles = (element, styles) => {
    for (const [key, value] of Object.entries(styles)) {
        element.style[key] = value;
    }
}