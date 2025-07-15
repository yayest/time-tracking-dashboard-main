const actions = document.querySelectorAll("button[data-timeframes]");
const timeframes = document.querySelectorAll(".timeframe");

actions.forEach((element) => {
  element.addEventListener(
    "click",
    () => {
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
