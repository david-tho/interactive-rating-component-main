const rateState = document.querySelector(".rating-state");
const thanksState = document.querySelector(".thanks-state");
const submitBtn = document.querySelector(".submit-btn");
const rateBtn = document.querySelectorAll(".rate-btn");
const rateNumber = document.querySelector(".rate-number");

rateNumber.innerHTML = 0;

const handleClick = function (e) {
  rateBtn.forEach((val) => {
    val.classList.remove("active");
    if (e.target.innerHTML === val.innerHTML) {
      val.classList.toggle("active");
    }
  });
  rateNumber.innerHTML = e.target.innerHTML;
};

const OpenState = function () {
  rateState.classList.add("hidden");
  thanksState.classList.remove("hidden");
};

rateBtn.forEach((val) => val.addEventListener("click", handleClick));
submitBtn.addEventListener("click", OpenState);
