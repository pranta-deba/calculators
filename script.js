const heroBtn = document.getElementsByClassName("heroBtn");

for (const btn of heroBtn) {
  btn.addEventListener("click", (e) => {
    if (e.target.innerText === "C") {
      document.getElementById("display").innerText = "";
      return;
    } else if (e.target.innerText === "DEL") {
      const display = document.getElementById("display");
      const value = display.innerText;
      if (value.length > 0) {
        var newValue = value.substring(0, value.length - 1);
        display.innerText = newValue;
        return;
      }
    } else if (e.target.innerText === "=") {
      const display = document.getElementById("display");
      const value = display.innerText;
      const result = eval(value);
      if (result === undefined) {
        return;
      }
      display.innerText = result;
      return;
    }
    const display = document.getElementById("display");
    display.innerText += e.target.innerText;
  });
}
