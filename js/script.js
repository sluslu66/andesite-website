console.log("Portfolio loaded!");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Project clicked!");
  });
});
