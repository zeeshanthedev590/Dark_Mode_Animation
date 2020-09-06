const moonPath =
  "M13.5 23.5C13.5 38.6878 28 55.1121 28 55.1121C12.8122 55.1121 0.5 42.8 0.5 27.6121C0.5 12.4243 12.8122 0.112122 28 0.112122C28 0.112122 13.5 8.31217 13.5 23.5Z";

const SunPath =
  "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z";

const DarkMode = document.querySelector("#darkMode");

let toggle = false;

// We Need To Click The Sun

DarkMode.addEventListener("click", () => {
  // We Need Use Anime.js

  const timeline = anime.timeline({
    loop: false,
    autoplay: true,
    duration: 650,
    easing: "easeOutExpo",
  });
  timeline
    .add({
      targets: ".sun",
      d: [
        {
          value: toggle ? SunPath : moonPath,
        },
      ],
    })
    .add(
      {
        targets: "#darkMode",
        rotate: 320,
      },
      "-=340"
    )
    .add({
      targets: "section",
      backgroundColor: toggle ? "rgb(250,250,250)" : "rgb(22,22,22)",
    })
    .add({
      targets: "h1",
      color: toggle ? "rgb(22,22,22)" : "rgb(256,256,256)",
    });

  if (!toggle) {
    toggle = true;
  } else {
    toggle = false;
  }
});
