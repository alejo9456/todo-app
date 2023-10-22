// On page load or when changing themes, set dark theme by default
if (localStorage.theme === "light") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
} else {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
}
