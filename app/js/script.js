const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

const setTheme = () => {
  if (localStorage.getItem("theme") == "dark") {
    setDarkTheme();
    darkButton.click();
  } else if (localStorage.getItem("theme") == "light") {
    setLightTheme();
    lightButton.click();
  }
};

const checkMode = () => {
  if (localStorage.getItem("theme") == null) {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      lightButton.click();
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      darkButton.click();
    }
  }
};

const checkModeChange = () => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      checkMode();
    });
};

const setDarkTheme = () => {
  document.querySelector("body").classList = "dark";
};

const setLightTheme = () => {
  document.querySelector("body").classList = "light";
};

setTheme();
checkMode();
checkModeChange();

const radioButton = document.querySelectorAll(".toggle__wrapper input");
for (let i = 0; i < radioButton.length; i++) {
  radioButton[i].addEventListener("click", (event) => {
    if (darkButton.checked) {
      localStorage.setItem("theme", "dark");
      setDarkTheme();
    } else {
      localStorage.setItem("theme", "light");
      setLightTheme();
    }
  });
}
