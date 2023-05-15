document.querySelectorAll(".img__item-img").forEach((img) => {
  img.onclick = () => {
    document.querySelector(".pop-up").style.display = "block";
    document.querySelector(".pop-up__img").src = img.getAttribute("src");
  };
});

document.querySelector(".close").onclick = () => {
  document.querySelector(".pop-up").style.display = "none";
};
