const text = document.querySelector(".dynamic-txt");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Youtuber";
  }, 0);
  setTimeout(() => {
    text.textContent = "Dupek";
  }, 4000);
  setTimeout(() => {
    text.textContent = "kochanek";
  }, 8000);
};
textLoad();
setInterval(textLoad, 12000);

