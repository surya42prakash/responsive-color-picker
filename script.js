


//   only using eventListner



// let activeLabel = document.querySelector(".active-label");

// let purple = document.querySelector(".btn-purple");
// purple.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#6A4C93";
//   activeLabel.textContent = "💜 Great choice! You picked Purple.";
//   activeLabel.style.fontSize = "2vw";
//   activeLabel.style.fontFamily = "'League Spartan', sans-serif";
//   activeLabel.style.fontWeight = "700";

//   removeActiveClass();
//   purple.classList.add("active");
// });

// let pink = document.querySelector(".btn-pink");
// pink.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#cb2062";
//   activeLabel.textContent = "🌸 Awesome! You chose Pink.";
//   activeLabel.style.fontSize = "2vw";
//   activeLabel.style.fontFamily = "'League Spartan', sans-serif";
//   activeLabel.style.fontWeight = "700";

//   removeActiveClass();
//   pink.classList.add("active");
// });

// let brown = document.querySelector(".btn-brown");
// brown.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#6F4E37";
//   activeLabel.textContent = "🤎 Warm and earthy! You picked Brown.";
//   activeLabel.style.fontSize = "2vw";
//   activeLabel.style.fontFamily = "'League Spartan', sans-serif";
//   activeLabel.style.fontWeight = "700";

//   removeActiveClass();
//   brown.classList.add("active");
// });

// let olive = document.querySelector(".btn-olive");
// olive.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#6B705C";
//   activeLabel.textContent = "🫒 Elegant choice! You selected Olive.";
//   activeLabel.style.fontSize = "2vw";
//   activeLabel.style.fontFamily = "'League Spartan', sans-serif";
//   activeLabel.style.fontWeight = "700";

//   removeActiveClass();
//   olive.classList.add("active");
// });

// let green = document.querySelector(".btn-green");
// green.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#095B2E";
//   activeLabel.textContent = "🌿 Great choice! You picked Green.";
//   activeLabel.style.fontSize = "2vw";
//   activeLabel.style.fontFamily = "'League Spartan', sans-serif";
//   activeLabel.style.fontWeight = "700";

//   removeActiveClass();
//   green.classList.add("active");
// });

// let lime = document.querySelector(".btn-lime");
// lime.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#7CB518";
//   activeLabel.textContent = "🍋 Bright and fresh! You chose Lime.";
//   activeLabel.style.fontSize = "2vw";
//   activeLabel.style.fontFamily = "'League Spartan', sans-serif";
//   activeLabel.style.fontWeight = "700";

//   removeActiveClass();
//   lime.classList.add("active");
// });

// function removeActiveClass() {
//   purple.classList.remove("active");
//   pink.classList.remove("active");
//   brown.classList.remove("active");
//   olive.classList.remove("active");
//   green.classList.remove("active");
//   lime.classList.remove("active");
// }

// // RESET BUTTON
// let resetBtn = document.getElementById("resetBtn");
// resetBtn.addEventListener("click", function () {
//   document.body.style.backgroundColor = "#1e1e2f";

//   activeLabel.textContent = "Click a color button to get started!";
//   activeLabel.style = "";

//   removeActiveClass();

// });


// using function and loop 


document.addEventListener("DOMContentLoaded", function () {
  let body = document.body;
  let activeLabel = document.querySelector(".active-label");
  let allButtons = document.querySelectorAll(".btn");
  let resetBtn = document.getElementById("resetBtn");

  function isLightColor(hex) {
    let cleanHex = hex.replace("#", "");

    let r = parseInt(cleanHex.substring(0, 2), 16);
    let g = parseInt(cleanHex.substring(2, 4), 16);
    let b = parseInt(cleanHex.substring(4, 6), 16);

    let brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness > 140;
  }

  function applyTheme(color, name) {
    body.style.backgroundColor = color;

    let textColor = isLightColor(color) ? "#1A1A1A" : "#FFFFFF";

    body.style.color = textColor;

    activeLabel.innerHTML =
      "Screen color changed to <b>" + name + " (" + color + ")</b>";
  }

  function removeActiveFromAll() {
    allButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });
  }

  function resetAll() {
    removeActiveFromAll();
    body.style.backgroundColor = "#1e1e2f";
    body.style.color = "#ffffff";
    activeLabel.innerHTML = "Click a color button to get started!";
    activeLabel.style.fontSize = "";
    activeLabel.style.fontFamily = "";
  }

  allButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      let selectedColor = window.getComputedStyle(button).backgroundColor;
      activeLabel.style.fontSize = "2vw";
      activeLabel.style.fontFamily = "'Poppins', sans-serif";

      let colorMap = {
        "rgb(106, 76, 147)": ["#6A4C93", "Purple"],
        "rgb(203, 32, 98)": ["#cb2062", "Pink"],
        "rgb(111, 78, 55)": ["#6F4E37", "Brown"],
        "rgb(107, 112, 92)": ["#6B705C", "Olive"],
        "rgb(9, 91, 46)": ["#095b2e", "Green"],
        "rgb(124, 181, 24)": ["#7CB518", "Lime"],
      };

      let color = colorMap[selectedColor][0];
      let name = colorMap[selectedColor][1];

      // Remove active class from all buttons, then add to clicked one
      removeActiveFromAll();
      button.classList.add("active");

      applyTheme(color, name);
    });
  });

  // Reset button
  resetBtn.addEventListener("click", resetAll);
});
