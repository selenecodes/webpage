export const themeOptions = ["light", "dark"];
export const hasWindow = () => typeof window !== 'undefined';

export function clearClassList(element) {
    const classList = element.classList;
    while (classList.length > 0) {
        classList.remove(classList.item(0));
    }
}

export function getThemeColor() {
    const themeData = hasWindow() ? 
        JSON.parse(localStorage.getItem("theme")):
        null

    if (
        themeData &&
        themeData.color &&
        themeOptions.includes(themeData.color)
    ) {
        return themeData.color;
    } else {
        return "light";
    }
}

export function setThemeColor(className) {
    if (themeOptions.includes(className)) {
        if (hasWindow() && !document.body.classList.contains(className)) {
            clearClassList(document.body);
            document.body.classList.add(className);
        }
    }
}

export function switchThemeColor() {
    const currentThemeColor = getThemeColor();
    const newThemeColor = currentThemeColor === "light" ? "dark" : "light";

    // Create/get a theme object and set it's color to light or dark
    if (hasWindow()) {
        const themeData = JSON.parse(localStorage.getItem("theme")) || {};
        themeData.color = newThemeColor;
    
        localStorage.setItem("theme", JSON.stringify(themeData));
        setThemeColor(newThemeColor);
    }
}
