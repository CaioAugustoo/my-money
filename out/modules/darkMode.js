export class DarkMode {
    constructor() {
        this.init();
    }
    changeTheme(theme) {
        document.documentElement.dataset.theme = theme;
    }
    init() {
        this.changeTheme("light");
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", e => {
            const colorScheme = e.matches ? "dark" : "light";
            this.changeTheme(colorScheme);
        });
    }
}
//# sourceMappingURL=darkMode.js.map