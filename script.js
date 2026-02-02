const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const kissesDiv = document.getElementById("kisses");

let lieCount = 0;
const lies = ["No 💔", "Wait…", "Ok fine", "Almost 😏", "Try again"];

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (lieCount < lies.length) {
    noBtn.textContent = lies[lieCount];
    lieCount++;
  }
});

yesBtn.addEventListener("click", () => {
  kissesDiv.classList.remove("hidden");

  for (let i = 0; i < 25; i++) {
    const kiss = document.createElement("div");
    kiss.textContent = "💋";
    kiss.className = "kiss";
    kiss.style.left = Math.random() * window.innerWidth + "px";
    kiss.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(kiss);

    setTimeout(() => kiss.remove(), 2000);
  }
});
