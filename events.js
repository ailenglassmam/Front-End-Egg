document.addEventListener("click", (event) => {
  console.log(event);
  const bodyColor = document.body.style.background;
  document.body.style.background =
    bodyColor === "white" ? "red" : "white";
});
