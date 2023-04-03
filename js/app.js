const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // toggle border
    tabs.forEach((element) => {
      //remove border from all tabs
      element.firstElementChild.classList.remove(
        "border-b-4",
        "border-softRed"
      );

      //add border to the clicked tab
      if (element === tab) {
        element.firstElementChild.classList.add("border-b-4", "border-softRed");
      }
    });

    // identify target panel
    const targetPanelId = tab.dataset.target;
    const targetPanel = document.querySelector(`.${targetPanelId}`);

    // handle panels
    panels.forEach((panel) => {
      //hide all panel
      panel.classList.add("hidden");

      // show target panel
      if (panel === targetPanel) {
        panel.classList.remove("hidden");
      }
    });
  });
});

// Hamburger button listener
btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");

  if (menu.classList.contains("flex")) {
    logo.src = "./images/logo-bookmark-footer.svg";
  } else {
    logo.src = "./images/logo-bookmark.svg";
  }
});
