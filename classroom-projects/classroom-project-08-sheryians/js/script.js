const progressPercent = document.querySelector(".progress-percent");
const progressBar = document.querySelector(".progress-bar");
const downloadBtn = document.querySelector("button");

let downloadBtnClicked = false;

downloadBtn.addEventListener("click", function () {
  if (!downloadBtnClicked) {
    downloadBtnClicked = true;
    let downloadingTime = Math.floor(Math.random() * 4001 + 1000);
    downloadBtn.classList.remove("download");

    let intervalTime = Math.floor(downloadingTime / 100);
    downloadingTime = intervalTime * 100;
    let progressPer = 0;
    console.log(downloadingTime);

    this.textContent = "downloading...";
    downloadBtn.style.cursor = "progress";

    const clear = setInterval(function () {
      progressPer++;
      if (progressPer >= 100) {
        clearInterval(clear);
        downloadBtn.textContent = "downloaded";
        downloadBtn.style.cursor = "not-allowed";
      }
      progressPercent.innerText = progressPer + "%";
      progressBar.style.width = progressPer + "%";
    }, intervalTime);
  }
});
