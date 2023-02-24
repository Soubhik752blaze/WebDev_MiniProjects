const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//time_display
const timer = document.querySelector("#display_time");
setInterval(myTimer, 1000);
function myTimer() {
  let date = new Date();
  let time = date.toLocaleTimeString()
  timer.innerHTML = time;
}



//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
