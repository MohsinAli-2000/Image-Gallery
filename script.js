let scrollContainer = document.querySelector(".gallery");
let nextbtn = document.getElementById("nxt-btn");
let backbtn = document.getElementById("back-btn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "smooth";
});
nextbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 700;
  scrollContainer.style.scrollBehavior = "smooth";
});
backbtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 700;
  scrollContainer.style.scrollBehavior = "smooth";
});
