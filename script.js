// get all btn
const heroBtn = document.getElementsByClassName("heroBtn");

// apply for of loop in all btn
// loop start
for (const btn of heroBtn) {

  // single click and add event function start
  btn.addEventListener("click", (e) => {

    // C btn click
    if (e.target.innerText === "C") {
      document.getElementById("display").innerText = "";
      return;
    } 
    // DEL btn click
    else if (e.target.innerText === "DEL") {
      const display = document.getElementById("display");
      const value = display.innerText;
      if (value.length > 0) {
        var newValue = value.substring(0, value.length - 1);
        display.innerText = newValue;
        return;
      }
    } 
    // = btn click
    else if (e.target.innerText === "=") {
      const display = document.getElementById("display");
      const value = display.innerText;
      const result = eval(value);
      if (result === undefined) {
        return;
      }
      display.innerText = result;
      return;
    }
    // any number and operator btn click
    const display = document.getElementById("display");
    display.innerText += e.target.innerText;

  });
  // single click and add event function end

};
// loop end
