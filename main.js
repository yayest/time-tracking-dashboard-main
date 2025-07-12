const actions = document.querySelectorAll("button");
const timeframes = document.querySelectorAll(".timeframe");

actions.forEach((element) => {
  element.addEventListener(
    "click",
    (event) => {
      actions.forEach((button) => {
        button.classList.remove("active");
      });
      element.classList.add("active");

      timeframes.forEach((timeframe) => {
        if (timeframe.classList.value.includes(element.dataset.timeframes)) {
          timeframe.classList.add("active");
        } else {
          timeframe.classList.remove("active");
        }
      });
    },
    false
  );
});
